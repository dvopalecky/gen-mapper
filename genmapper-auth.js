

class GenMapper {
  // Existing code for the GenMapper class...

  // GenMapper
  // App for mapping generations of simple churches
  // https://github.com/dvopalecky/gen-mapper
  // Copyright (c) 2016-2018 Daniel Vopalecky, MIT license

  /* global genmapper, d3, XLSX, saveAs, FileReader, template, translations, _,
     Blob, boxHeight, i18next */
/*
This JavaScript class, GenMapper, is used to create an object for an application that maps generations of simple churches. 

The constructor does the following:

1. Sets the application version to '0.2.18'.
2. Initializes the internationalization library i18next with a language detector and sets the fallback language to English. It also merges the translations from the template with the existing translations.
3. Sets the language of the application based on the detected language, or defaults to English if the detected language is not available in the translations.
4. Sets the margin for the application's graphical representation.
5. Sets the project name using a translation key.
6. Calls a method to update the DOM after a language switch.
7. Initializes a zoom behavior using the d3 library, which allows the user to zoom in and out of the graphical representation.
8. Sets the height of the SVG element that will contain the graphical representation.
9. Selects the SVG element, applies the zoom behavior, and disables double-click zooming.
10. Appends several groups to the SVG to hold the links and nodes of the graphical representation.
11. Constructs a CSV header from the fields in the template and an initial CSV row with default values.
12. Parses the initial CSV data into a format that can be used to draw the graphical representation.
13. Calls methods to set the original position of the nodes and redraw the graphical representation.
14. Selects DOM elements that will be used to display alerts and edit groups.
15. Sets a flag to indicate whether there are unsaved changes.
16. Sets up keyboard shortcuts.
17. Adds an event listener to resize the SVG when the window is resized.
18. Adds an event listener to warn the user if they try to close the window with unsaved changes.
19. Calls a method to alert the user if they are using a non-supported browser.
*/
  constructor () {
    this.appVersion = '0.2.18'
    i18next.use(window.i18nextBrowserLanguageDetector)
      .init({
        fallbackLng: 'en',
        resources: _.defaultsDeep(translations, template.translations)
      })

    if (translations[i18next.language]) {
      this.language = i18next.language
    } else {
      this.language = 'en'
    }

    this.margin = {top: 50, right: 30, bottom: 50, left: 30}
    this.projectName = i18next.t('menu.defaultProjectName')

    this.updateDOMafterLangSwitch()

    this.zoom = d3.zoom()
      .scaleExtent([0.15, 2])
      .on('zoom', function zoomed () {
        d3.select('g').attr('transform', d3.event.transform)
      })

    this.setSvgHeight()
    this.svg = d3.select('#genmapper-graph-svg')
      .call(this.zoom)
      .on('dblclick.zoom', null)
    this.g = this.svg.append('g')
      .attr('id', 'maingroup')
    this.gLinks = this.g.append('g')
      .attr('class', 'group-links')
    this.gLinksText = this.g.append('g')
      .attr('class', 'group-links-text')
    this.gNodes = this.g.append('g')
      .attr('class', 'group-nodes')

    this.csvHeader = template.fields.map(field => field.header).join(',') + '\n'
    this.initialCsv = this.csvHeader + template.fields.map(
      field => this.getInitialValue(field)).join(',')
    this.data = this.parseCsvData(this.initialCsv)
    this.nodes = null

    this.origPosition()
    this.redraw(template)

    this.alertElement = document.getElementById('alert-message')
    this.editGroupElement = document.getElementById('edit-group')
    // if there are unsaved changes give hint to user before he tries to close the browser window
    this.hasUnsavedChanges = false

    this.setKeyboardShorcuts()

    document.getElementsByTagName('body')[0].onresize = this.setSvgHeight

    window.addEventListener('beforeunload', function (e) {
      if (genmapper.hasUnsavedChanges) {
        e.returnValue = true // Gecko, Trident, Chrome 34+
        return true // Gecko, WebKit, Chrome <34
      }
      return false
    })
    this.alertForNonSupportedBrowsers()
  }




  



















//   setKeyboardShorcuts: This function sets up keyboard shortcuts for the application. It listens for 'keyup' events on the document. If the key code is 27 (Esc key), it checks if the alert element is active, if so, it removes the active class. If not, it removes the active class from the intro and edit group elements. If the key code is 13 (Enter key), it simulates a click on the 'edit-submit' button if the edit group element is active.

// setSvgHeight: This function sets the height of the SVG element used for the genmapper graph. It calculates the height as the maximum of the window height and the height of the left menu plus 10.

// loadHTMLContent: This function loads the HTML content for various elements in the application. It sets the innerHTML for the 'left-menu', 'edit-group', 'intro-content', and 'alert-message' elements. It also sets the version information for the application and the template. The HTML content includes various buttons and controls for the application, and uses the i18next library for internationalization.
// Internationalization, often abbreviated as i18n (because there are 18 letters between the 'i' and the 'n'), is the process of designing and preparing your software to be usable in different languages and regions. This involves abstracting all of the strings and other locale-specific pieces (like date, time, number formats) out of your code, so that they can be easily translated and converted to local formats without changing the code itself. This makes it easier to localize your software for different languages and regions.
  // Beginning of function definitions
  setKeyboardShorcuts () {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        if (this.alertElement.classList.contains('alert-message--active')) {
          this.alertElement.classList.remove('alert-message--active')
        } else {
          document.getElementById('intro').classList.remove('intro--active')
          this.editGroupElement.classList.remove('edit-group--active')
        }
      } else if (e.keyCode === 13) {
        // hitting enter is like submitting changes in the edit window
        if (this.editGroupElement.classList.contains('edit-group--active')) {
          document.getElementById('edit-submit').click()
        }
      }
    })
  }

  setSvgHeight () {
    const windowHeight = document.documentElement.clientHeight
    const leftMenuHeight = document.getElementById('left-menu').clientHeight
    const height = Math.max(windowHeight, leftMenuHeight + 10)
    d3.select('#genmapper-graph-svg')
      .attr('height', height)
  }

  loadHTMLContent () {
    document.getElementById('left-menu').innerHTML = '<div id="template-logo">' +
    i18next.t('template.logo', '') +
    '<button onclick="genmapper.introSwitchVisibility()"' +
    'class="hint--rounded hint--right"' + 'aria-label="' + i18next.t('menu.helpAbout') +
    '"><img src="../icons/266-question.svg"></button>' +
    '<div class="dropdown" id="lang-selector">' +
    '<button aria-label="Language"><img src="../icons/203-earth.svg"></button>' +
    '<ul class="dropdown-content">' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-en">English</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-cs">Čeština</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-de">Deutsch</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-es">Español</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-fr">Français</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-pl">Polski</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-ro">Română</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-ru">Русский</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-sq">Shqip</button></li>' +
    '  <li><button onclick="genmapper.switchLanguage(this)" id="lang-zh">中文</button></li>' +
    '</ul>' +
    '</div>' +
    '<button id="project-name" class="hint--rounded hint--right" aria-label=""><img src="../icons/039-file-text2.svg"></button>' +
    '<button onclick="genmapper.origPosition();" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.originalZoom') + '"><img src="../icons/135-search.svg"></i></button>' +
    '<button onclick="genmapper.zoomIn();" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.zoomIn') + '"><img src="../icons/136-zoom-in.svg"></i></button>' +
    '<button onclick="genmapper.zoomOut();" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.zoomOut') + '"><img src="../icons/137-zoom-out.svg"></i></button>' +
    '<button onclick="genmapper.onLoad(\'file-input\')" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.importXlsxCsv') + '"><img src="../icons/098-upload.svg"></button>' +
    '<input type="file" id="file-input" onchange="genmapper.importFile()" style="display:none;">' +
    '<button onclick="genmapper.outputCsv()" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.exportCsv') + '"><img src="../icons/097-download.svg"></button>' +
    '<button onclick="genmapper.printMap(\'vertical\');" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.btnPrintVertical') + '"><img src="../icons/print-vertical.svg"></button>' +
    '<button onclick="genmapper.printMap(\'horizontal\');" class="hint--rounded hint--right" aria-label="' + i18next.t('menu.btnPrintHorizontal') + '"><img src="../icons/print-horizontal.svg"></button>'

    document.getElementById('edit-group').innerHTML =
    '<div id="edit-group-content">' +
    '  <button id="edit-cancel" class="hint--rounded hint--bottom" aria-label="' + i18next.t('editGroup.btnCancel') + ' ( Esc )">X</button>' +
    '  <h1>' + i18next.t('editGroup.editGroup') + '</h1>' +
    '  <form>' +
    '    <table>' +
    '      <tr>' +
    '        <td class="left-field">' + i18next.t('editGroup.elementParent') + '</td>' +
    '        <td class="right-field"><select id="edit-parent"></select></td>' +
    '      </tr>' +
    '    </table>' +
    '  </form>' +
    '  <div id="edit-buttons">' +

    '    <button id="edit-submit" class="hint--rounded hint--bottom" aria-label="( Enter &crarr; )">' + i18next.t('editGroup.btnSubmit') + '</button>' +
    '    <button id="edit-delete">' + i18next.t('editGroup.btnDelete') + '</button>' +
    '    <button onclick="genmapper.onLoad(\'file-input-subtree\')">' + i18next.t('editGroup.btnImportSubtree') + '</button>' +
    '    <input type="file" id="file-input-subtree" style="display:none;">' +
    '    <button id="edit-export-subtree">' + i18next.t('editGroup.btnExportSubtree') + '</button>' +
    '  </div>' +
    '</div>'

    document.getElementById('intro-content').innerHTML =
    '<button class="cancel" onclick="genmapper.introSwitchVisibility()">X</button>' +
    '<h2>' +
    i18next.t('help.genmapperHelp') + '</h2>' +
    '<p>' + i18next.t('help.introContent') + '</p>' +
    i18next.t('template.helpLegend') +
    '<h3>' + i18next.t('help.importExportHeader') + '</h3>' +
    '<p><strong style="color:red">' + i18next.t('help.importExportWarningChangesLost') + '</strong><br>' +
    i18next.t('help.importExportContent') + '<br><br>' +
    i18next.t('help.exportSafariIssuePart1') +
    '<img src="../safari-export-issue-0.png" style="margin:10px; margin-left:0px;" alt="safari export issue"><br>' + i18next.t('help.exportSafariIssuePart2') +
    '<br><img src="../safari-export-issue-1.png" style="margin:10px; margin-left:0px;" alt="safari export issue">' +
    '<br>' + i18next.t('help.exportToPdf') + '</p>' +
    '<h3>' + i18next.t('help.panZoomHeader') + '</h3>' +
    '<p>' + i18next.t('help.panZoomContent') + '</p>' +
    '<h3>' + i18next.t('help.keyboardShortcutsHeader') + '</h3>' +
    '<p>' + i18next.t('help.keyboardShortcutsContent') + '</p>' +
    '<h3>' + i18next.t('help.changelogHeader') + '</h3>' +
    '<p><a href="https://github.com/dvopalecky/gen-mapper/blob/master/changelog.md">' +
    i18next.t('help.changelogLink') + '</a><br>' +
    i18next.t('help.genmapperVersion') + ': <span id="gen-mapper-version"></span><br>' +
    i18next.t('help.templateVersion') + ': <span id="template-version"></span></p>' +
    '<h3>' + i18next.t('help.creditsHeader') + '</h3>' +
    '<p>' + i18next.t('help.creditsThanks1') + '<br>' +
    i18next.t('help.creditsJavaScriptLibraries') +
    ': <a href="https://github.com/chinchang/hint.css/">hint.css</a>, <a href="https://d3js.org">d3.js</a>, <a href="https://github.com/eligrey/FileSaver.js/">FileSaver.js</a>, <a href="https://github.com/SheetJS/js-xlsx">js-xlsx</a>, ' +
    '<a href="https://lodash.com">lodash</a> ' +
    i18next.t('help.creditsAnd') +
    ' <a href="https://www.i18next.com">i18next</a><br>' +
    i18next.t('help.creditsIcons') +
    ': <a href="https://github.com/Keyamoon/IcoMoon-Free">IcoMoon-Free</a><br><br>' +
    i18next.t('help.creditsCopyright') + '<br>' +
    i18next.t('help.creditsLicense') + '<br>' +
    '<a href="https://github.com/dvopalecky/gen-mapper">' + i18next.t('help.creditsGithub') + '</a><br>' +
    i18next.t('help.creditsSuggestions') + '<br></p>' +
    '<button class="ok" onclick="genmapper.introSwitchVisibility()">' + i18next.t('help.btnOKStart') + '</button>'

    document.getElementById('alert-message').innerHTML =
    '<div id="alert-message-content">' +
    '  <p id="alert-message-text"></p>' +
    '  <button class="close-alert" onclick="genmapper.closeAlert()">' + i18next.t('messages.btnOK') + '</button>' +
    '</div>'

    document.getElementById('gen-mapper-version').innerHTML = this.appVersion
    document.getElementById('template-version').innerHTML = template.name
  }





















  // Here's a brief explanation of each function:

  // getInitialValue(field): This function returns the initial value of a field. If the field has an initialTranslationCode, it uses the i18next library to translate the value. Otherwise, it returns the initial property of the field.
  
  // zoomIn(): This function increases the scale of the SVG element by a factor of 1.2, effectively zooming in.
  
  // zoomOut(): This function decreases the scale of the SVG element by a factor of 1.2, effectively zooming out.
  
  // origPosition(): This function resets the zoom level of the SVG element to its original scale and position.
  
  // onLoad(fileInputElementId): This function triggers the click event of a file input element, opening the file selection dialog.
  
  // displayAlert(message): This function displays an alert message by adding an 'active' class to the alert element and setting its text to the provided message.
  
  // closeAlert(): This function hides the alert message by removing the 'active' class from the alert element and clearing its text.
  
  // introSwitchVisibility(): This function toggles the visibility of the intro element by adding or removing the 'active' class.
  getInitialValue (field) {
    if (field.initialTranslationCode) {
      return i18next.t('template.' + field.initialTranslationCode)
    } else {
      return field.initial
    }
  }

  zoomIn () {
    this.zoom.scaleBy(this.svg, 1.2)
  }

  zoomOut () {
    this.zoom.scaleBy(this.svg, 1 / 1.2)
  }

  origPosition () {
    this.zoom.scaleTo(this.svg, 1)
    const origX = this.margin.left +
      (document.getElementById('genmapper-graph').clientWidth / 2)
    const origY = this.margin.top
    const parsedTransform = this.parseTransform(this.g.attr('transform'))
    this.zoom.translateBy(this.svg, origX - parsedTransform.translate[0],
      origY - parsedTransform.translate[1])
  }

  onLoad (fileInputElementId) {
    const fileInput = document.getElementById(fileInputElementId)
    fileInput.value = ''
    fileInput.click()
  }

  displayAlert (message) {
    this.alertElement.classList.add('alert-message--active')
    document.getElementById('alert-message-text').innerHTML = message
  }

  closeAlert () {
    this.alertElement.classList.remove('alert-message--active')
    document.getElementById('alert-message-text').innerHTML = null
  }

  introSwitchVisibility () {
    document.getElementById('intro').classList.toggle('intro--active')
  }
























  // Here's a brief explanation of each function:

  // popupEditGroupModal(d): This function is used to display a modal for editing a node. It populates the fields in the modal based on the type of each field (text, textarea, radio, checkbox) in the node data. It also sets up event listeners for various actions like changing the parent, submitting the changes, cancelling the edit, deleting the node, importing a subtree, and exporting a subtree.
  
  // makeSelectForParent(node): This function populates a select dropdown with the names of all possible parent nodes. It excludes the current node and its descendants from the list of possible parents to prevent creating a cycle in the tree.
  
  // changedSelectParent(): This function displays an alert message when the parent of a node is changed.
  
  // getNames(node): This function returns an array of [id, name] pairs for all nodes except the input node and its descendants. The array is sorted by the name of the nodes.
  
  // getDirectChildrenCount(): This function returns an object where the keys are node ids and the values are the count of direct children of each node.
  /**========================================================================
 *                           Adding Data to NODES
 *  You've got text, radio, and checkbox fields. Each field has a header
 *  I'm trying to add a new field.type to the nodes called textarea 
 *========================================================================**/
  popupEditGroupModal (d) {
    this.editGroupElement.classList.add('edit-group--active')
    template.fields.forEach((field) => {
      if (field.type === 'text') {
        this.editFieldElements[field.header].value = d.data[field.header]
      
      } else if (field.type === 'textarea') {
        this.editFieldElements[field.header].value = d.data[field.header]
      } else if (field.type === 'radio') {
        field.values.forEach((value) => {
          const status = (value.header === d.data[field.header])
          this.editFieldElements[field.header + '-' + value.header].checked = status
        })
      } else if (field.type === 'checkbox') {
        this.editFieldElements[field.header].checked = d.data[field.header]
      }
    })
    // select first element
    this.editFieldElements[Object.keys(this.editFieldElements)[0]].select()

    const nodeData = d.data
    const node = d
    // this.editParentElement.innerHTML = d.parent ? d.parent.data.name : 'N/A'
    this.makeSelectForParent(node)

    d3.select('#edit-parent').on('change', () => { this.changedSelectParent() })
    d3.select('#edit-submit').on('click', () => { this.editGroup(nodeData) })
    d3.select('#edit-cancel').on('click',
      () => { this.editGroupElement.classList.remove('edit-group--active') })
    d3.select('#edit-delete').on('click', () => { this.removeNode(node) })
    d3.select('#file-input-subtree').on('change', () => { this.importFileSubtree(node) })
    d3.select('#edit-export-subtree').on('click', () => { this.outputCsvSubtree(node) })
  }

  makeSelectForParent (node) {
    this.editParentElement.innerHTML = ''
    const names = this.getNames(node)
    names.forEach((node) => {
      const option = document.createElement('option')
      option.text = node[1]
      option.value = node[0]
      this.editParentElement.add(option)
    })
    if (node.parent) {
      this.editParentElement.value = node.parent.id
    }
  }

  changedSelectParent () {
    this.displayAlert(i18next.t('messages.changedParent'))
  }

  getNames (node) {
    // get Array of [id, name] for all nodes except input node
    // and its descendants
    const allNodes = this.nodes.descendants()
    const nodeAndDescendants = node.descendants()
    const nodes = _.differenceWith(allNodes, nodeAndDescendants)
    const output = []
    nodes.forEach((node) => {
      output.push([node.data.id, node.data.name])
    })
    output.sort((a, b) => a[1].localeCompare(b[1]))
    return output
  }

  getDirectChildrenCount () {
    const output = {}
    this.nodes.descendants().forEach((node) => {
      let count = 0
      if (node.children) { count = node.children.length }
      output[node.data.id] = count
    })
    return output
 
  }



























/**========================================================================
 *                           SAVING DATA TO FIELD TYPES 
 *                          The code below is for each field
 *                            when you click submit. It will 
 *                           update the field with the new data
 *                          and save the date to the node data.
 *                         If you want to add a new field type
 *                        you can add it here. Just make sure to
 *                       add the field type to the template.fields
 *                     and add the field type to the 
 *========================================================================**/
// The editGroup function is responsible for updating the group data based on the user's input in the edit form.

// Here's a step-by-step breakdown:

// It sets hasUnsavedChanges to true, indicating that there are changes that haven't been saved yet.

// It iterates over each field in the template. Depending on the type of the field (text, textarea, radio, checkbox), it updates the corresponding property in groupData with the value from the edit form.

// It attempts to parse the value of this.editParentElement.value as an integer and assigns it to parentIdFromEditWindow. If the parsing results in NaN (Not a Number), it assigns an empty string to parentIdFromEditWindow.

// It assigns parentIdFromEditWindow to groupData.parentId, effectively updating the parent ID of the group.

// It removes the edit-group--active class from this.editGroupElement, presumably to hide the edit form.

// Finally, it calls this.redraw(template) to redraw the map with the updated group data.

  editGroup (groupData) { 
    this.hasUnsavedChanges = true
    template.fields.forEach((field) => {
      if (field.type === 'text') {
        groupData[field.header] = this.editFieldElements[field.header].value
      } else if (field.type === 'textarea') {
        groupData[field.header] = this.editFieldElements[field.header].value
      } else if (field.type === 'radio') {
        field.values.forEach((value) => {
          if (this.editFieldElements[field.header + '-' + value.header].checked) {
            groupData[field.header] = value.header
          }
        })
      } else if (field.type === 'checkbox') {
        groupData[field.header] = this.editFieldElements[field.header].checked
      }
    })

    let parentIdFromEditWindow = parseInt(this.editParentElement.value)
    if (isNaN(parentIdFromEditWindow)) parentIdFromEditWindow = ''
    groupData.parentId = parentIdFromEditWindow

    this.editGroupElement.classList.remove('edit-group--active')
    this.redraw(template)
  }
























//   The printMap function is responsible for preparing the map for printing. It calculates the dimensions of the map, adjusts the SVG attributes for printing, changes the CSS for printing, triggers the print dialog, and then restores the original SVG attributes and CSS after printing.

// The redraw function is responsible for redrawing the map when the template changes. It sets up a new tree layout, stratifies the data, updates the links and link text between nodes, updates the nodes, and appends new SVG elements for the nodes. It also handles click events for each node, which trigger the edit group modal, remove node function, or add node function. Finally, it updates the SVG elements for each field in the template.
  printMap (printType) {
    // calculate width and height of the map (printed rotated by 90 degrees)
    const arrNodes = this.nodes.descendants()
    let minX = 0
    let maxX = 0
    let minY = 0
    let maxY = 0
    for (let i = 0; i < arrNodes.length; i++) {
      const x = arrNodes[i].x
      const y = arrNodes[i].y
      minX = Math.min(minX, x)
      maxX = Math.max(maxX, x)
      minY = Math.min(minY, y)
      maxY = Math.max(maxY, y)
    }

    // store original values
    const origWidth = this.svg.attr('width')
    const origHeight = this.svg.attr('height')
    const origTransform = this.g.attr('transform')

    const totalHeight = Math.max(
      600, this.margin.top + (maxY - minY) + boxHeight + this.margin.top)
    const totalWidthLeft = Math.max(500, -minX + boxHeight * 1.5 / 2 + 20)
    const totalWidthRight = Math.max(500, maxX + boxHeight * 1.5 / 2 + 20)

    let translateX, translateY
    if (printType === 'horizontal') {
      const printHeight = 700
      const printWidth = 1200

      // resize for printing
      this.svg.attr('width', printWidth)
        .attr('height', printHeight)
      const printScale = Math.min(1, printWidth / (totalWidthLeft + totalWidthRight), printHeight / totalHeight)
      translateX = totalWidthLeft * printScale
      translateY = this.margin.top * printScale
      this.g.attr('transform', 'translate(' + translateX + ', ' + translateY + ') scale(' + printScale + ')')
    } else {
      // resize for printing
      this.svg.attr('width', totalHeight)
        .attr('height', totalWidthLeft + totalWidthRight)
      translateX = totalHeight - this.margin.top
      translateY = totalWidthLeft
      this.g.attr('transform', 'translate(' + translateX + ', ' + translateY + ') rotate(90)')
    }

    // change CSS for printing
    d3.select('#left-menu').style('display', 'none')
    d3.select('#genmapper-graph').style('float', 'left')
    d3.selectAll('#genmapper-graph-svg').style('background', 'white')

    window.print()

    // change CSS back after printing
    this.svg.attr('width', origWidth)
      .attr('height', origHeight)
    this.g.attr('transform', origTransform)
    d3.select('#left-menu').style('display', null)
    d3.select('#genmapper-graph').style('float', null)
    d3.selectAll('#genmapper-graph-svg').style('background', null)
  }

  redraw (template) {
    // declares a tree layout and assigns the size
    const tree = d3.tree()
      .nodeSize([template.settings.nodeSize.width,
        template.settings.nodeSize.height])
      .separation(function separation (a, b) {
        return a.parent === b.parent ? 1 : 1.2
      })
      // .nodeSize([
      //   template.settings.nodeSize.height, // This maintains the desired vertical spacing.
      //   144 // Change this value to adjust the vertical between nodes across generations.
      // ])
        .separation(function(a, b) {
          return 1.2; // This keeps a consistent spacing multiplier; adjust if necessary.
      });
      

    const stratifiedData = d3.stratify()(this.data)
    this.nodes = tree(stratifiedData)
    // update the links between the nodes
    const link = this.gLinks.selectAll('.link')
      .data(this.nodes.descendants().slice(1))

    link.exit()
      .remove()

    link.enter()
      .append('path')
      .merge(link)
      .attr('class', 'link')
      .attr('d', function (d) {
        return 'M' + d.x + ',' + d.y +
            'C' + d.x + ',' + (d.y + (d.parent.y + boxHeight)) / 2 +
            ' ' + d.parent.x + ',' + (d.y + (d.parent.y + boxHeight)) / 2 +
            ' ' + d.parent.x + ',' + (d.parent.y + boxHeight)
      })

    // update the link text between the nodes
    const LINK_TEXT_POSITION = 0.3 // 1 -> parent, 0 -> child
    const linkText = this.gLinksText.selectAll('.link-text')
      .data(this.nodes.descendants().slice(1))
    linkText.exit()
      .remove()
    linkText.enter()
      .append('text')
      .merge(linkText)
      .attr('class', function (d) {
        return 'link-text ' + (
          d.data.active ? ' link-text--active' : ' link-text--inactive')
      })
      .attr('x', function (d) {
        return d.x * (1 - LINK_TEXT_POSITION) + d.parent.x * LINK_TEXT_POSITION
      })
      .attr('y', function (d) {
        return d.y * (1 - LINK_TEXT_POSITION) + (d.parent.y + boxHeight) * LINK_TEXT_POSITION
      })
      .text(function (d) { return d.data.coach })

    // update nodes
    const node = this.gNodes.selectAll('.node')
      .data(this.nodes.descendants())

    node.exit()
      .remove()

    // NEW ELEMENTS
    const newGroup = node.enter()
      .append('g')

    newGroup.append('title').text(i18next.t('editGroup.editGroup'))
    this.appendRemoveButton(newGroup)
    this.appendAddButton(newGroup)

    // append SVG elements without fields
    Object.keys(template.svg).forEach((svgElement) => {
      const svgElementValue = template.svg[svgElement]
      const element = newGroup.append(svgElementValue['type'])
      element.attr('class', 'node-' + svgElement)
    })

    // append SVG elements related to fields
    template.fields.forEach((field) => {
      if (field.svg) {
        const element = newGroup.append(field.svg['type'])
        element.attr('class', 'node-' + field.header)
        Object.keys(field.svg.attributes).forEach((attribute) => {
          element.attr(attribute, field.svg.attributes[attribute])
        })
        if (field.svg.style) {
          Object.keys(field.svg.style).forEach((styleKey) => {
            element.style(styleKey, field.svg.style[styleKey])
          })
        }
      }
    })

    // UPDATE including NEW
    const nodeWithNew = node.merge(newGroup)
    nodeWithNew.attr('class', function (d) {
      return 'node' + (d.data.active ? ' node--active' : ' node--inactive')
    })
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
      .on('click', (d) => { this.popupEditGroupModal(d) })

    nodeWithNew.select('.removeNode')
      .on('click', (d) => { this.removeNode(d); d3.event.stopPropagation() })

    nodeWithNew.select('.addNode')
      .on('click', (d) => { this.addNode(d); d3.event.stopPropagation() })

    // refresh class and attributes in SVG elements without fields
    // in order to remove any additional classes or settings from inherited fields
    Object.keys(template.svg).forEach((svgElement) => {
      const svgElementValue = template.svg[svgElement]
      const element = nodeWithNew.select('.node-' + svgElement)
        .attr('class', 'node-' + svgElement)
      Object.keys(svgElementValue.attributes).forEach((attribute) => {
        element.attr(attribute, svgElementValue.attributes[attribute])
      })
    })

    // update node elements which have SVG in template
    template.fields.forEach((field) => {
      if (field.svg) {
        const element = nodeWithNew.select('.node-' + field.header)
        this.updateSvgForFields(field, element)
      }
      if (field.inheritsFrom) {
        const element = nodeWithNew.select('.node-' + field.inheritsFrom)
        this.updateFieldWithInherit(field, element)
      }
    })
  }






















//   These functions are part of a larger class, likely used for managing a graphical user interface (GUI) with interactive elements. Here's a breakdown:

// updateFieldWithInherit: This function checks if the provided element is not empty. If it's not, it checks the type of the field and calls the appropriate function (updateCheckboxField or updateRadioField) to update the field.

// updateCheckboxField: This function updates the class and rx attribute of a checkbox field based on whether it's checked or not.

// updateRadioField: This function updates the class and rx attribute of a radio field based on the selected option.

// getFieldValueForRadioType: This static method returns the value of the selected radio button. If no option is selected, it returns the initial value of the field.

// updateSvgForFields: This function updates the text of an SVG element based on the field's header. If the field's SVG type is an image, it sets the display style of the element based on whether the field's header is truthy or not.

// appendRemoveButton: This function appends a remove button (represented as an SVG element) to a group. The button has a rectangle and two lines forming an "X", indicating deletion.

// appendAddButton: This function appends an add button (also represented as an SVG element) to a group. The button has a rectangle and two lines forming a "+", indicating addition.

  updateFieldWithInherit (field, element) {
    if (!element.empty()) {
      if (field.type === 'checkbox') this.updateCheckboxField(field, element)
      if (field.type === 'radio') this.updateRadioField(field, element)
    }
  }

  updateCheckboxField (field, element) {
    // add class to the element which the field inherits from
    if (field.class) {
      element.attr('class', function (d) {
        const checked = d.data[field.header]
        const class_ = checked ? field.class.checkedTrue : field.class.checkedFalse
        return this.classList.value + ' ' + class_
      })
    }
    if (typeof field.attributes !== 'undefined' &&
        typeof field.attributes.rx !== 'undefined') {
      element.attr('rx', function (d) {
        const checked = d.data[field.header]
        const rxObj = field.attributes.rx
        const rx = checked ? rxObj.checkedTrue : rxObj.checkedFalse
        return String(rx)
      })
    }
  }

  updateRadioField (field, element) {
    // add class to the element which the field inherits from
    element.attr('class', function (d) {
      const fieldValue = GenMapper.getFieldValueForRadioType(field, d)
      if (fieldValue.class) {
        return this.classList.value + ' ' + fieldValue.class
      } else {
        return this.classList.value
      }
    })
    element.attr('rx', function (d) {
      const fieldValue = GenMapper.getFieldValueForRadioType(field, d)
      if (typeof fieldValue.attributes !== 'undefined' &&
          typeof fieldValue.attributes.rx !== 'undefined') {
        return String(fieldValue.attributes.rx)
      } else {
        return this.rx.baseVal.valueAsString
      }
    })
  }

  static getFieldValueForRadioType (field, d) {
    let fieldValue = _.filter(field.values, {header: d.data[field.header]})[0]
    if (typeof fieldValue === 'undefined') {
      fieldValue = _.filter(field.values, {header: field.initial})[0]
    }
    return fieldValue
  }

  updateSvgForFields (field, element) {
    element.text(function (d) {
      // add spaces between each character for Firefox
      if (field.header === 'threeThirds' && typeof InstallTrigger !== 'undefined') {
        return d.data[field.header].replace(/(.)/g, '$1 ')
      } else {
        return d.data[field.header]
      }
    })
    if (field.svg.type === 'image') {
      element.style('display', function (d) { return d.data[field.header] ? 'block' : 'none' })
    }
  }

  appendRemoveButton (group) {
    group.append('g')
      .attr('class', 'removeNode')
      .append('svg')
      .html(
        '<rect x="38" y="0" rx="7" width="20" height="40">' +
          '<title>' + i18next.t('editGroup.hoverDeleteGroupAndSubtree') + '</title>' +
        '</rect>' +
        '<line x1="41.5" y1="13.5" x2="54.5" y2="26.5" stroke="white" stroke-width="3"></line>' + // Subtract 1 more from the x values
        '<line x1="54.5" y1="13.5" x2="41.5" y2="26.5" stroke="white" stroke-width="3"></line>' // Subtract 1 more from the x values
      )
  }

  appendAddButton (group) {
    group.append('g')
      .attr('class', 'addNode')
      .append('svg')
      .html(
        '<rect x="38" y="40" rx="7" width="20" height="40">' +
          '<title>' + i18next.t('editGroup.hoverAddChildGroup') + '</title>' +
        '</rect>' +
        '<line x1="40.5" y1="60" x2="55.5" y2="60" stroke="white" stroke-width="3"></line>' + // Subtract 1 more from the x values
        '<line x1="48" y1="52.5" x2="48" y2="67.5" stroke="white" stroke-width="3"></line>' // Subtract 1 more from the x value
      )
  }
  



























  // These functions are part of a class that manages a tree-like data structure. Here's a breakdown:

  // addNode(d): This function adds a new node to the tree. It first sets hasUnsavedChanges to true, indicating that there are changes that haven't been saved yet. It then creates a new node with initial values for each field, a new unique ID, and the parent ID set to the ID of the node d. The new node is added to the data array and the tree is redrawn.
  
  // findNewId(): This function finds a new unique ID for a node. It first creates an array of all existing IDs, then finds the smallest non-negative integer that is not in this array.
  
  // findNewIdFromArray(arr): This function finds the smallest non-negative integer that is not in the array arr. It sorts the array in ascending order and then iterates over it, incrementing a temporary variable tmp each time it encounters a number equal to tmp. The value of tmp at the end of the iteration is the smallest non-negative integer not in the array.
  
  // removeNode(d): This function removes a node from the tree. It first sets hasUnsavedChanges to true. If the node d is the root node, it displays an alert. Otherwise, it asks for confirmation to delete the node. If the node has children, the confirmation message warns that all descendants will be deleted. If the user confirms, all descendants of the node are deleted, then the node itself is removed from the data array. The tree is then redrawn.
/**========================================================================
 *                            Adding nodes
 *========================================================================**/
  addNode (d) {
    this.hasUnsavedChanges = true
    const newNodeData = {}
    template.fields.forEach((field) => {
      newNodeData[field.header] = this.getInitialValue(field)
    })
    newNodeData['id'] = this.findNewId()
    newNodeData['parentId'] = d.data.id
    this.data.push(newNodeData)
    this.redraw(template)
  }

  findNewId () {
    const ids = _.map(this.data, function (row) { return row.id })
    return this.findNewIdFromArray(ids)
  }

  /*
   * Find smallest int >= 0 not in array
   */
  findNewIdFromArray (arr) {
    // copy and sort
    arr = arr.slice().sort(function (a, b) { return a - b })
    let tmp = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) { // ids must be >= 0
        if (arr[i] === tmp) {
          tmp += 1
        } else {
          break
        }
      }
    }
    return tmp
  }

  removeNode (d) {
    this.hasUnsavedChanges = true
    if (!d.parent) {
      this.displayAlert(i18next.t('messages.errDeleteRoot'))
    } else {
      let confirmMessage
      if (!d.children) {
        confirmMessage = i18next.t(
          'messages.confirmDeleteGroup', {groupName: d.data.name})
      } else {
        confirmMessage = i18next.t(
          'messages.confirmDeleteGroupWithChildren', {groupName: d.data.name})
      }
      if (window.confirm(confirmMessage)) {
        this.deleteAllDescendants(d)
        const nodeToDelete = _.filter(this.data, {id: d.data.id})
        if (nodeToDelete) {
          this.data = _.without(this.data, nodeToDelete[0])
        }
      }
    }
    this.editGroupElement.classList.remove('edit-group--active')
    this.redraw(template)
  }





































  // Sure, here's a detailed explanation of each function:

// parseCsvData(csvData): This function takes a CSV data string as input and parses it into a JavaScript object using the d3.csvParse function. It also validates the data, ensuring that each row has an 'id' field that is a non-negative integer. It also handles different field types, such as 'checkbox' fields.

// outputCsv(): This function generates a CSV string from the current data stored in this.nodes and sets this.hasUnsavedChanges to false.

// outputCsvSubtree(node): This function generates a CSV string from a subtree of the data, starting from the given node. It also handles the process of saving the CSV file to the user's computer.

// parseTransform(a): This function parses a transformation string (such as a CSS transform string) into a JavaScript object.

// importJSON(jsonString): This function imports data from a JSON string. It validates the data to ensure it forms a valid tree structure, and if it does, it sets this.data to the imported data and redraws the template.

// importFile(): This function handles the process of importing data from a file. It reads the file data, parses and validates it, and if it's valid, it sets this.data to the parsed data and redraws the template.

// importFileSubtree(d): This function imports data from a file into a subtree of the current data, starting from the given node. It also handles the process of saving the CSV file to the user's computer.

// parseAndValidateCsv(filedata, filename): This function parses and validates CSV data from a file. If the data is valid, it returns the parsed data; otherwise, it displays an error message and returns null.

// validTree(parsedCsv): This function checks if the parsed CSV data forms a valid tree structure. If it doesn't, it raises an error.

// displayImportError(err): This function displays an error message related to importing data.

// deleteAllDescendants(d): This function deletes all descendants of a given node from the data.

// csvIntoNode(d, parsedCsv): This function imports CSV data into a specific node, replacing all of its descendants.

// importFileFromInput(fileInputElementId, callback): This function reads file data from a file input element and passes the data to a callback function.

// fileToCsvString(filedata, filename): This function converts file data into a CSV string. It supports both CSV and Excel files.

// To implement Supabase, you would need to replace the file reading and writing functions with calls to the Supabase API to store and retrieve data. You would also need to modify the data parsing and validation functions to work with the data format used by Supabase.
// 
  parseCsvData (csvData) {
    return d3.csvParse(csvData, function (d) {
      const parsedId = parseInt(d.id)
      if (parsedId < 0 || isNaN(parsedId)) { throw new Error('Group id must be integer >= 0.') }
      const parsedLine = {}
      parsedLine['id'] = parsedId
      parsedLine['parentId'] = d.parentId !== '' ? parseInt(d.parentId) : ''
      template.fields.forEach((field) => {
        if (field.type === 'checkbox') {
          const fieldValue = d[field.header].toUpperCase()
          parsedLine[field.header] = !!['TRUE', '1'].includes(fieldValue)
        } else if (field.type) {
          parsedLine[field.header] = d[field.header]
        }
      })
      return parsedLine
    })
  }

  outputCsv () {
    this.outputCsvSubtree(this.nodes)
    this.hasUnsavedChanges = false
  }

  outputCsvSubtree (node) {
    const tmpData = _.cloneDeep(node.descendants().map(x => x.data))
    tmpData[0].parentId = ''
    const out = d3.csvFormatRows(tmpData.map(function (d, i) {
      const output = []
      template.fields.forEach((field) => {
        if (field.type === 'checkbox') {
          output.push(d[field.header] ? '1' : '0')
        } else {
          output.push(d[field.header])
        }
      })
      return output
    }))
    const blob = new Blob([this.csvHeader + out], {type: 'text/csv;charset=utf-8'})
    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                 navigator.userAgent && !navigator.userAgent.match('CriOS')
    const promptMessage = isSafari
      ? i18next.t('messages.saveAsInSafari')
      : i18next.t('messages.saveAs')
    const saveName = window.prompt(promptMessage, this.projectName + '.csv')
    if (saveName === null) return
    saveAs(blob, saveName)
  }

  parseTransform (a) {
    const b = {}
    for (let i in a = a.match(/(\w+\((-?\d+.?\d*e?-?\d*,?)+\))+/g)) {
      const c = a[i].match(/[\w.-]+/g)
      b[c.shift()] = c
    }
    return b
  }

  importJSON (jsonString) {
    const tree = JSON.parse(jsonString)
    try {
      this.validTree(tree)
    } catch (err) {
      this.displayImportError(err)
      return
    }
    this.hasUnsavedChanges = false
    this.data = tree
    this.redraw(template)
  }

  importFile () {
    this.importFileFromInput('file-input', (filedata, filename) => {
      const parsedCsv = this.parseAndValidateCsv(filedata, filename)
      if (parsedCsv === null) { return }
      this.hasUnsavedChanges = false
      this.data = parsedCsv
      const regex = /(.+?)(\.[^.]*$|$)/
      const filenameNoExtension = regex.exec(filename)[1]
      this.projectName = filenameNoExtension
      d3.select('#project-name')
        .attr('aria-label', i18next.t('messages.editProjectName') + ': ' + this.projectName)
      this.redraw(template)
    })
  }

  importFileSubtree (d) {
    if (!window.confirm(i18next.t(
      'messages.confirmImportSubtreeOverwrite', {groupName: d.data.name}))) {
      return
    }
    this.hasUnsavedChanges = true
    this.importFileFromInput('file-input-subtree', (filedata, filename) => {
      const parsedCsv = this.parseAndValidateCsv(filedata, filename)
      if (parsedCsv === null) { return }
      this.csvIntoNode(d, parsedCsv)
      this.redraw(template)
      this.editGroupElement.classList.remove('edit-group--active')
    })
  }

  /**
   * If error occurs, displays error and returns null
   * If not, raises error
   */
  parseAndValidateCsv (filedata, filename) {
    try {
      const csvString = this.fileToCsvString(filedata, filename)
      const parsedCsv = this.parseCsvData(csvString)
      this.validTree(parsedCsv)
      return parsedCsv
    } catch (err) {
      this.displayImportError(err)
      return null
    }
  }

  /**
   * Checks if parsedCsv creates a valid tree.
   * If not, raises error
   */
  validTree (parsedCsv) {
    const treeTest = d3.tree()
    const stratifiedDataTest = d3.stratify()(parsedCsv)
    treeTest(stratifiedDataTest)
  }

  displayImportError (err) {
    if (err.toString().includes('>= 0.') || err.toString().includes('Wrong type')) {
      this.displayAlert(i18next.t('messages.errImport') + ' <br>' + err.toString())
    } else {
      this.displayAlert(i18next.t('messages.errImport') + '<br><br>' +
      i18next.t('messages.errImportWhatToCheck'))
    }
  }

  deleteAllDescendants (d) {
    this.hasUnsavedChanges = true
    let idsToDelete = _.map(d.children, function (row) { return parseInt(row.id) })
    while (idsToDelete.length > 0) {
      const currentId = idsToDelete.pop()
      const childrenIdsToDelete = _.map(_.filter(this.data, {parentId: currentId}),
        function (row) { return row.id })
      idsToDelete = idsToDelete.concat(childrenIdsToDelete)
      const nodeToDelete = _.filter(this.data, {id: currentId})
      if (nodeToDelete) { this.data = _.without(this.data, nodeToDelete[0]) }
    }
  }

  csvIntoNode (d, parsedCsv) {
    this.deleteAllDescendants(d)

    // replace node by root of imported
    const nodeToDelete = _.filter(this.data, {id: d.data.id})[0]
    const rowRootOfImported = _.filter(parsedCsv, {parentId: ''})[0]
    const mapOldIdToNewId = {}
    mapOldIdToNewId[rowRootOfImported.id] = nodeToDelete.id
    parsedCsv = _.without(parsedCsv, rowRootOfImported)
    rowRootOfImported.id = nodeToDelete.id
    rowRootOfImported.parentId = nodeToDelete.parentId
    this.data[_.indexOf(this.data, nodeToDelete)] = rowRootOfImported

    const idsUnsorted = _.map(this.data, function (row) { return row.id })
    const ids = idsUnsorted.sort(function (a, b) { return a - b })
    // update ids of other nodes and push into data
    while (parsedCsv.length > 0) {
      const row = parsedCsv.shift()
      if (!(row.id in mapOldIdToNewId)) {
        const newId = this.findNewIdFromArray(ids)
        mapOldIdToNewId[row.id] = newId
        ids.push(newId)
      }
      if (!(row.parentId in mapOldIdToNewId)) {
        const newId = this.findNewIdFromArray(ids)
        mapOldIdToNewId[row.parentId] = newId
        ids.push(newId)
      }
      // change id and parentId
      row.id = mapOldIdToNewId[row.id]
      row.parentId = mapOldIdToNewId[row.parentId]
      this.data.push(row)
    }
  }

  importFileFromInput (fileInputElementId, callback) {
    if (typeof window.FileReader !== 'function') {
      this.displayAlert("The file API isn't supported on this browser yet.")
      return
    }

    const input = document.getElementById(fileInputElementId)
    if (!input) {
      this.displayAlert("Um, couldn't find the fileinput element.")
    } else if (!input.files) {
      this.displayAlert(
        "This browser doesn't seem to support the 'files' property of file inputs.")
    } else if (!input.files[0]) {
      this.displayAlert(i18next.t('messages.selectFile'))
    } else {
      const file = input.files[0]
      const filename = file.name
      const fr = new FileReader()
      fr.onload = () => {
        const filedata = fr.result
        callback(filedata, filename)
      }
      const extension = /(?:\.([^.]+))?$/.exec(filename)[1]
      if (extension === 'csv') {
        fr.readAsText(file)
      } else {
        fr.readAsBinaryString(file)
      }
    }
  }

  fileToCsvString (filedata, filename) {
    const regex = /(?:\.([^.]+))?$/
    const extension = regex.exec(filename)[1].toLowerCase()
    let csvString

    if (extension === 'xls' || extension === 'xlsx') {
      const workbook = XLSX.read(filedata, {type: 'binary'})
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      csvString = XLSX.utils.sheet_to_csv(worksheet)
    } else if (extension === 'csv') {
      csvString = filedata
    } else {
      throw new Error(i18next.t('messages.errWrongFileType'))
    }
    csvString = csvString.replace(/\r{1,2}\n?/g, '\n')
    // replace first line with a default one
    return this.csvHeader + csvString.substring(csvString.indexOf('\n') + 1)
  }
































//   The addFieldsToEditWindow(template) function is used to dynamically add fields to an edit window in a web application. It takes a template object as an argument, which contains an array of fields that need to be added to the edit window. Each field object in the fields array should have a type property that specifies the type of the field (e.g., 'radio', 'textarea', etc.).

// Here's a breakdown of what each part of the function does:

// template.fields.forEach((field) => {...}): This loop iterates over each field in the fields array of the template object.

// if (field.type) {...}: This conditional statement checks if the field object has a type property. If it does, the code inside the block is executed.

// const tr = d3.select('#edit-group-content').select('form').select('table').append('tr'): This line uses the D3.js library to select the form in the edit window, select the table within the form, and append a new table row (tr) to the table.

// The next few lines add a left column to the table row with the description of the field (translated using i18next) and a right column where the input field will be placed.

// The next part of the function checks the type of the field and adds the appropriate input field to the right column. If the field type is 'radio', it adds a radio button input field. If the field type is 'textarea', it adds a textarea input field. For all other field types, it adds a standard text input field.

// For each input field, it sets the 'name', 'id', and 'class' attributes, and for 'radio' and 'textarea' fields, it also sets the 'value' and 'rows'/'cols' attributes respectively.

// This function is used to dynamically generate the form in the edit window based on the template object passed to it. This allows for flexibility in the types and number of fields that can be added to the form.
//! WARNING: The code below has new field added "textarea" without use of i18next and without use of d3.select. The code works, but is not recommended.
/**========================================================================
 *                Added Fields to Edit Window "textarea"
 *                Textarea is like a textbox, but it allows for
 *               multiple lines of text. This code adds a textarea
 *             that gives alot more space for the user to input data 
 *            (eg. Notes, addresses, links, etc.) 
 * 
 *  Tutorial: How to add new fields to the edit window
 * 1. Add new field type below (eg. textarea).
 * 2. Add new field type to editGroup (groupData) 
 * 2.1 This will fill in the new field type with the new data
 * 3. Add new field type to { popupEditGroupModal (d)
 * 3.1 When clicking save or submit, this will save your data to the node
 *     you can save the genmap that has the new field type. It works in 
 *     disciple mapper to save the map, and the csv will have the new field  
 *     type as a header, and will store the custom data you input. Each node
 *    will have the new field type. 
 * 4. You will have to update the template.js file to add the new field type
 *    in the values array. You can define its header name, initial value, and
 *    class, etc. In the styles css you can customize the field, and how 
 *   it looks in the edit window.
 *========================================================================**/
  addFieldsToEditWindow (template) {
    template.fields.forEach((field) => {
      if (field.type) {
        // add table row
        const tr = d3.select('#edit-group-content')
          .select('form')
          .select('table')
          .append('tr')
        // add left column
        const fieldDesciption = i18next.t('template.' + field.header) + ':'
        tr.append('td')
          .text(fieldDesciption)
          .attr('class', 'left-field')
        // add right column
        const td = tr.append('td')
          .attr('class', 'right-field')
        if (field.type === 'radio') {
          for (let value of field.values) {
              const valueDescription = i18next.t('template.' + value.header)
              td.append('input')
                .attr('type', field.type)
                .attr('name', field.header)
                .attr('value', value.header)
                .attr('id', 'edit-' + field.header + '-' + value.header)
              td.append('span')
                .html(valueDescription)
              td.append('br')
            }
        } else if (field.type === 'textarea') {
          td.append('textarea')
            .attr('name', field.header)
            .attr('id', 'edit-' + field.header)
            .attr('rows', '2')  // Example row size, adjust as necessary
            // this changes the width of the textarea 28 
            .attr('cols', '10')  // Example column size, adjust as necessary
            .attr('class', 'no-horizontal-resize')
            .attr('class', 'no-horizontal-resize min-width');
        } else {
          td.append('input')
              .attr('type', field.type)
              .attr('name', field.header)
              .attr('id', 'edit-' + field.header)
        }
      }
    })
  }


























//   The commented out code at the bottom of the selection shows three different versions of the addFieldsToEditWindow function. Each version is attempting to dynamically generate form fields based on a provided template, but they handle the layout of the fields differently.

// The first commented version introduces the concept of a horizontalContainer. This is used to group checkbox fields horizontally in the same table row. If a field is a checkbox and has a class of 'horizontal-checkbox', it is added to the horizontalContainer. If the field is not a checkbox or does not have the 'horizontal-checkbox' class, a new table row is created.

// The second commented version is similar to the first, but it adds a textarea field with a different number of columns (20 instead of the 28 in the original function). It also resets the horizontalContainer to null for other types of input, ensuring that only checkbox fields are grouped horizontally.

// The third commented version refines the concept of the horizontalContainer further by introducing a currentRow variable. This version creates a new table row not only when the field is not a checkbox or does not have the 'horizontal-checkbox' class, but also when currentRow is not defined. This allows for more flexibility in the layout of the form fields. For example, it would allow for a layout where a checkbox field is followed by a non-checkbox field in the same row.

// In all versions, the function iterates over the fields array in the template object, creating a new form field for each item in the array based on its type property. The type of the form field (e.g., 'radio', 'textarea', 'checkbox') determines how the field is created and what attributes it has.


// To add my own input here, the goal is to have multiple checkboxes per row so the user can track is a person is knowledgeable, practicing, and sharing in a specific feild.
// There may be the reads the word field. I need three checkboxes in one row, the first checkbox is next to reads the word, the second is labeled practices, the third is labeled shares.. underneath this row should be a row with an iitial field of "Pace" monthly with a checkbox next to it, weekly with a checkbox next to it, and daily with a checkbox next to it.. The updated version of addFieldsToEditWindow will allow the coder to specific the class of the field, and if the class is horizontal-checkbox, the checkboxes will be placed in the same row. If the class is not horizontal-checkbox, the checkboxes will be placed in a new row. The goal is to place checkboxes in the same row if they are related, and in a new row if they are not.

  // addFieldsToEditWindow (template) {
  //   let horizontalContainer; // To hold the container for horizontal checkboxes
  
  //   template.fields.forEach((field) => {
  //     const formTable = d3.select('#edit-group-content form table');
  
  //     // Handle horizontally aligned checkboxes
  //     if (field.type === 'checkbox' && field.class === 'horizontal-checkbox') {
  //       if (!horizontalContainer) { // Create container if it doesn't exist
  //         const tr = formTable.append('tr');
  //         const td = tr.append('td')
  //           .attr('colspan', 2) // Assuming you have 2 columns, adjust if necessary
  //           .attr('class', 'horizontal-checkbox-container');
  //         horizontalContainer = td;
  //       }
  //       const label = horizontalContainer.append('label');
  //       label.append('input')
  //         .attr('type', 'checkbox')
  //         .attr('id', 'edit-' + field.header)
  //         .attr('name', field.header);
  //       label.append('span')
  //         .text(i18next.t('template.' + field.header))
  
  //     } else { // Other inputs
  //       horizontalContainer = null; // Reset horizontal container for other types of input
  //       const tr = formTable.append('tr');
  //       tr.append('td')
  //         .text(i18next.t('template.' + field.header) + ':')
  //         .attr('class', 'left-field');
  
  //       const td = tr.append('td')
  //         .attr('class', 'right-field');
  
  //       if (field.type === 'radio') {
  //         field.values.forEach(value => {
  //           const label = td.append('label');
  //           label.append('input')
  //             .attr('type', field.type)
  //             .attr('name', field.header)
  //             .attr('value', value.header)
  //             .attr('id', 'edit-' + field.header + '-' + value.header);
  //           label.append('span')
  //             .text(i18next.t('template.' + value.header));
  //         });
  //       } else if (field.type === 'textarea') {
  //         td.append('textarea')
  //           .attr('name', field.header)
  //           .attr('id', 'edit-' + field.header)
  //           .attr('rows', '2')
  //           .attr('cols', '20')
  //           .attr('class', 'no-horizontal-resize');
  //       } else {
  //         td.append('input')
  //           .attr('type', field.type)
  //           .attr('name', field.header)
  //           .attr('id', 'edit-' + field.header);
  //       }
  //     }
  //   });
  // }

  // addFieldsToEditWindow(template) {
  //   let currentRow;
    
  //   template.fields.forEach((field) => {
  //     const formTable = d3.select('#edit-group-content form table');
  
  //     // Decide if a new row is needed
  //     if (!field.class || field.class !== 'horizontal-checkbox' || !currentRow) {
  //       currentRow = formTable.append('tr');
  //     }
  
  //     // Define the label text
  //     const fieldDescription = i18next.t('template.' + field.header) + ':';
      
  //     if (field.type === 'checkbox' && field.class === 'horizontal-checkbox') {
  //       const td = currentRow.append('td')
  //         .attr('class', 'horizontal-checkbox-container')
  //         .attr('colspan', 2); // Assuming you have 2 columns, adjust if necessary
  
  //       const label = td.append('label');
  //       label.append('input')
  //         .attr('type', 'checkbox')
  //         .attr('id', 'edit-' + field.header)
  //         .attr('name', field.header);
  //       label.append('span').text(fieldDescription);
  //     } else {
  //       currentRow.append('td')
  //         .text(fieldDescription)
  //         .attr('class', 'left-field');
  
  //       const td = currentRow.append('td').attr('class', 'right-field');
  
  //       if (field.type === 'radio') {
  //         field.values.forEach(value => {
  //           const label = td.append('label');
  //           label.append('input')
  //             .attr('type', field.type)
  //             .attr('name', field.header)
  //             .attr('value', value.header)
  //             .attr('id', 'edit-' + field.header + '-' + value.header);
  //           label.append('span').text(i18next.t('template.' + value.header));
  //         });
  //       } else if (field.type === 'textarea') {
  //         td.append('textarea')
  //           .attr('name', field.header)
  //           .attr('id', 'edit-' + field.header)
  //           .attr('rows', '2')
  //           .attr('cols', '20')
  //           .attr('class', 'no-horizontal-resize');
  //       } else { // For normal input and non-horizontal checkboxes
  //         td.append('input')
  //           .attr('type', field.type)
  //           .attr('name', field.header)
  //           .attr('id', 'edit-' + field.header);
  //       }
  //     }
  //   });
  // }























//   The provided JavaScript code includes three methods of a class:

// switchLanguage(button): This method is used to switch the language of the application. It takes a button element as an argument, extracts the language code from the button's id, and sets it as the current language. It then uses the i18next library to change the language, updates the DOM to reflect the language change, and redraws the template.

// updateDOMafterLangSwitch(): This method is called after the language has been switched. It loads the HTML content, adds fields to the edit window, and updates the class of the language button to indicate it's the current language. It also sets an aria-label for accessibility on the project name element and adds a click event listener to it. When the project name is clicked, a prompt appears for the user to edit the project name. If the user input is not null or empty, it updates the project name and the aria-label. It also initializes editFieldElements as an empty object and populates it with the fields from the template. If the field type is 'radio', it adds each value of the field to editFieldElements. If the field type is not 'radio', it adds the field to editFieldElements. Finally, it gets the 'edit-parent' element and assigns it to editParentElement.

// alertForNonSupportedBrowsers(): This method checks if the user's browser is Internet Explorer or Edge. If it is, it displays an alert message indicating that the browser is not supported. It uses conditional compilation to check if the browser is Internet Explorer and the StyleMedia property of the window object to check if the browser is Edge.
  switchLanguage (button) {
    this.language = button.id.substring(5, 7)
    i18next.changeLanguage(this.language)
    this.updateDOMafterLangSwitch()
    this.redraw(template)
  }

  updateDOMafterLangSwitch () {
    this.loadHTMLContent()
    this.addFieldsToEditWindow(template)
    document.getElementById('lang-' + this.language).className = 'current-lang'
    d3.select('#project-name')
      .attr('aria-label', i18next.t('messages.editProjectName') + ': ' + this.projectName)
      .on('click', () => {
        let userInput = window.prompt(i18next.t('messages.editProjectName'), this.projectName)
        if (userInput === null) { return }
        userInput = userInput.trim()
        if (userInput === '') {
          this.displayAlert(i18next.t('messages.errProjectNameEmpty'))
        } else {
          this.projectName = userInput
          d3.select('#project-name')
            .attr('aria-label', i18next.t(
              'messages.editProjectName') + ': ' + this.projectName)
        }
      })
    this.editFieldElements = {}
    template.fields.forEach((field) => {
      if (field.type === 'radio') {
        field.values.forEach((value) => {
          this.editFieldElements[field.header + '-' + value.header] =
            document.getElementById('edit-' + field.header + '-' + value.header)
        })
      } else if (field.type) {
        this.editFieldElements[field.header] = document.getElementById('edit-' + field.header)
      }
    })
    this.editParentElement = document.getElementById('edit-parent')
  }

  alertForNonSupportedBrowsers () {
    const isIE = /*@cc_on!@*/false || !!document.documentMode
    const isEdge = !isIE && !!window.StyleMedia
    if (isIE || isEdge) {
      this.displayAlert(i18next.t('messages.unsupportedBrowser'))
    }
  }
}



window.genmapper = new GenMapper()