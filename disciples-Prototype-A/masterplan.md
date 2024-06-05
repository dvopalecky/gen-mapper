To reframe your requirements into a user story and then provide a structured solution concept, let's start with the problem statement:

### User Story Problem Statement

As a user of the GenMapper application,
I want to have a visual indication of the disciples' commitment levels,
So that I can quickly identify their ministry engagement and progress at a glance.

Specifically:

1. When I mark a disciple as committed to "soul winning", their associated node should turn blue.
2. If a disciple is marked as committed to "discipling souls", their node should turn pink.
3. When a disciple is marked as committed to both "soul winning" and "discipling souls", their node should turn purple.
4. Distinct follow-up states should have specific colors:
    - "Followed up? No, go therefore" should turn the node red.
    - "Yes, no discipleship" turns the node orange.
    - "Yes, in discipleship" turns the node green.
5. "Actively devoted to gospel sharing" is blue, and "actively devoted to discipling" turns the node purple. If "actively devoted to gospel sharing" is true (blue), it can override another state to become purple when "actively devoted to discipling" is also true.

### Solution Concept

#### Data and Event Handling

To achieve this, the application must handle checkbox changes and radio button selections dynamically. This could be managed through JavaScript event listeners attached to each input element associated with these states.

#### JavaScript Execution Flow

1. **Listen for changes**: Add event listeners to the checkboxes and radio inputs that correspond to each commitment level and follow-up state.

2. **Determine the Node Color**: When an event is triggered (state change), determine the appropriate color based on the logic defined in your user story. For checkboxes specifically, you'll need to check both "soul winning" and "discipling souls" states to decide if a node should be blue, pink, or purple. For the follow-up statuses, you will directly map statuses to colors as per the logic provided.

3. **Apply the Color**: Once the target color is identified, apply the class or directly set the style on the node element representing the disciple.

#### Example JavaScript Logic

Here is a pseudo-code concept to illustrate the approach:

```javascript
function updateDiscipleNodeColor(discipleId) {
  const discipleElement = document.querySelector(`.node[data-id="${discipleId}"]`);
  const isSoulWinning = document.getElementById(`soul-winning-${discipleId}`).checked;
  const isDisciplingSouls = document.getElementById(`discipling-souls-${discipleId}`).checked;

  // Reset classes or directly set a default style if required

  if (isSoulWinning && isDisciplingSouls) {
    // Apply purple
    discipleElement.classList.add('node-purple');
  } else if (isSoulWinning) {
    // Apply blue
    discipleElement.classList.add('node-blue');
  } else if (isDisciplingSouls) {
    // Apply pink
    discipleElement.classList.add('node-pink');
  }

  // Example for follow-up status changes
  const followUpStatus = /* Determine the follow-up status for the disciple */
  switch(followUpStatus) {
    case 'no-follow-up':
      discipleElement.classList.add('node-red');
      break;
    case 'follow-up-no-discipleship':
      discipleElement.classList.add('node-orange');
      break;
    case 'in-discipleship':
      discipleElement.classList.add('node-green');
      break;
    // handle other cases
  }
}

// Attach event listeners to relevant input elements to call updateDiscipleNodeColor with the correct discipleId on state change
```

#### CSS Styling

In your `styles.css` under the `disciples` directory, define the color classes:

```css
.node-blue > rect {
  fill: blue !important;
}

.node-pink > rect {
  fill: pink !important;
}

.node-purple > rect {
  fill: purple !important;
}

.node-red > rect {
  fill: red !important;
}

.node-orange > rect {
  fill: orange !important;
}

.node-green > rect {
  fill: green !important;
}
```

This structured approach provides a clear mapping between the checkboxes' states or follow-up options with the visual representation of disciples, facilitating instant recognition of their commitment levels and follow-up statuses.// 
here below is all the code. Is it possible for me to update this code to see the desired feature?

class GenMapper {
  // GenMapper
  // App for mapping generations of simple churches
  // https://github.com/dvopalecky/gen-mapper
  // Copyright (c) 2016-2018 Daniel Vopalecky, MIT license

  /* global genmapper, d3, XLSX, saveAs, FileReader, template, translations, _,
     Blob, boxHeight, i18next */

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

  popupEditGroupModal (d) {
    this.editGroupElement.classList.add('edit-group--active')
    template.fields.forEach((field) => {
      if (field.type === 'text') {
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

  editGroup (groupData) {
    this.hasUnsavedChanges = true
    template.fields.forEach((field) => {
      if (field.type === 'text') {
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
        '<rect x="40" y="0" rx="7" width="25" height="40">' +
          '<title>' + i18next.t('editGroup.hoverDeleteGroupAndSubtree') + '</title>' +
        '</rect>' +
        '<line x1="46" y1="13.5" x2="59" y2="26.5" stroke="white" stroke-width="3"></line>' +
        '<line x1="59" y1="13.5" x2="46" y2="26.5" stroke="white" stroke-width="3"></line>'
      )
  }

  appendAddButton (group) {
    group.append('g')
      .attr('class', 'addNode')
      .append('svg')
      .html(
        '<rect x="40" y="40" rx="7" width="25" height="40">' +
          '<title>' + i18next.t('editGroup.hoverAddChildGroup') + '</title>' +
        '</rect>' +
        '<line x1="45" y1="60" x2="60" y2="60" stroke="white" stroke-width="3"></line>' +
        '<line x1="52.5" y1="52.5" x2="52.5" y2="67.5" stroke="white" stroke-width="3"></line>'
      )
  }

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
        } else {
          td.append('input')
            .attr('type', field.type)
            .attr('name', field.header)
            .attr('id', 'edit-' + field.header)
        }
      }
    })
  }

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


// disciples/template.js

const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Disciples 0.2',
  'translations': {
    en: {
      translation: {
        'template': {
          'helpLegend': '<p>This version of GenMapper is for mapping individual disciples, not groups/churches. Each rectangle represents a disciple.</p><p>Click on the disciple to edit.<br>Click on red (x) button to remove a disciple.<br>Click on green (+) button to add child disciple.</p>',
          'name': 'Name',
          'reaper': 'Who led them to Jesus Christ?',
          'date': 'Date of decision to follow Jesus',
          'believer': 'Is believer?',
          'baptized': 'Is baptized?',
          'word': 'Abides in Word',
          'prayer': 'Abides in Prayer',
          'shares': 'Shares Jesus',
          'accountable': 'Is accountable',
          'discipleship': 'Has discipleship',
          'inChurch': "In a Church?",
          'timothy': 'Is Timothy (key disciple)?',
          'followupStatus': 'Followed Up? (Yes/No)', // Changed property name
          'disciple-no-follow-up': 'No, Go Therefore!', // Changed property name and value
          'disciple-followed-up-no-meetings': 'Yes, no discipleship', // Changed property name and value
          'disciple-followed-up-in-meetings': 'Yes, in discipleship!', // Changed property name and value
          'active': 'Wants Discipleship?',
          'reaperconfidence': 'Is confident in gospel sharing?',
          'reapercompetence': 'Is competent in gospel sharing?',
          'reapercommitment': 'Is committed to soul winning?',
          'disciplerconfidence': 'Is confident in discipling?',
          'disciplercompetence': 'Is competent in discipling?',
          'disciplercommitment': 'Is committed to discipling?',
          'Notes': 'Notes'
          
        }
      }
    },
    // ... rest of the object
    cs: {
      translation: {
        'template': {
          'helpLegend': '<p>Tato šablona GenMapperu je pro mapování jednotlivých učedníků, ne skupin/církví. Každý obdélník znázorňuje jednoho učedníka.<br><br>Klikni na učedníka pro editaci.<br>Klikni na červené tlačítko (x) pro odstranění učedníka.<br>Klikni na zelené tlačítko (+) pro přidání učedníka.</p>',
          'name': 'Jméno',
          'date': 'Datum uvěření',
          'believer': 'Věřící',
          'baptized': 'Pokřtěný',
          'word': 'Zůstává v Božím Slovu',
          'prayer': 'Pravidelně se modlí',
          'shares': 'Sdílí Ježíše',
          'accountable': 'Je vykazatelný',
          'discipleship': 'Má učednictví',
          'inChurch': 'Součástí Boží rodiny',
          'timothy': 'Timoteus (klíčový učedník)',
          'followupStatus': 'Followed Up?',
          'disciple-no-follow-up': 'Bez následného kontaktu', // Changed property name and value
          'disciple-followed-up-no-meetings': 'S následným kontaktem, bez setkání', // Changed property name and value
          'disciple-followed-up-in-meetings': 'S následným kontaktem, se setkáním', // Changed property name and value
          'active': 'Aktivní'
        }
      }
    }
  },
  'settings': {
    'nodeSize': {
      'width': boxHeight * 1,
      'height': boxHeight * 1.8
    }
  },
  'svg': {
    'big-rect': {
      'type': 'rect',
      'attributes': {
        'x': 0,
        'y': 0,
        'width': boxHeight / 2,
        'height': boxHeight,
        'opacity': '0'
      }
    },
    'box': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight * 0.3,
        'y': 0,
        'width': boxHeight * 0.6,
        'height': boxHeight * 1.05
      }
    }
  },
  'fields': [
    {
      'header': 'id',
      'initial': 0,
      'type': null
    },
    {
      'header': 'parentId',
      'initial': null,
      'type': null
    },
    {
      'header': 'name',
      'initialTranslationCode': 'name',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': -textMargin - textHeight
        }
      }
    },
    {
      'header': 'reaper',
      'initial': '',
      'type': 'text'
      // Omitting 'svg' since we don't want it to display on the map
    },
    {
      'header': 'date',
      'initial': null,
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': -4
        }
      }
    },
    {
      'header': 'believer',
      'initial': true,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.28,
          'y': boxHeight * 0,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/believer.png'
        }
      }
    },
    {
      'header': 'baptized',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0,
          'y': boxHeight * 0,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/baptism.png'
        }
      }
    },
    {
      'header': 'word',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.28,
          'y': boxHeight * 0.25,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/word.png'
        }
      }
    },
    {
      'header': 'prayer',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0,
          'y': boxHeight * 0.25,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/prayer.png'
        }
      }
    },
    {
      'header': 'shares',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.25,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/shares.png'
        }
      }
    },
    {
      'header': 'accountable',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/accountable.png'
        }
      }
    },
    {
      'header': 'discipleship',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.25,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/discipleship.png'
        }
      }
    },
    {
      'header': 'inChurch',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/in-church.png'
        }
      }
    },
    
    {
      'header': 'followupStatus',
      'initial': 'disciple-no-follow-up',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'disciple-no-follow-up', // Changed header
          'class': 'disciple-no-follow-up',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-no-meetings', // Changed header
          'class': 'disciple-followed-up-no-meetings',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-in-meetings', // Changed header
          'class': 'disciple-followed-up-in-meetings',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },
    {
      'header': 'timothy',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.3,
          'y': -4 - textHeight,
          'width': boxHeight * 0.6,
          'height': 2,
          'xlink:href': 'icons/redline.png'
        }
      }
    },
    {
      'header': 'active',
      'initial': true,
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    },
    // Actively Devoted to Winning Souls
    {
      'header': 'reaperconfidence',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'reapercompetence',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'reapercommitment',
      'initial': false,
      'type': 'checkbox'
    },
    // Actively Devoted to Discipling
    {
      'header': 'disciplerconfidence',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'disciplercompetence',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'disciplercommitment',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'Notes',
      'initial': '',
      'type': 'text'
      // Omitting 'svg' since we don't want it to display on the map
    }
  ]
}

disciples/style.css
/* CSS for GenMapper: template specific */

.node-box {
  stroke: black;
  stroke-width: 2;
  fill: white;
}

.node-date {
  font-size: 8px;
}

.node-timothy {
  stroke: red;
  stroke-width: 1;
  fill: red;
}

.disciple-no-follow-up {
  stroke-dasharray: 7,7;
}

.disciple-followed-up-no-meetings {
  stroke-dasharray: 0;
}

.disciple-followed-up-in-meetings {
  stroke-dasharray: 0;
  stroke-width: 4;
}

/**------------------------------------------------------------------------
 *             Fill Nodes with Colors based on Disciple Status
 *------------------------------------------------------------------------**/

  /* Example CSS for disciples/style.css to change fill color based on specific classes */
  .node-reapercommitment > rect {
  fill: blue !important; /* Example fill color for reapercommitment */
}

.node-disciplercommitment > rect {
  fill: purple !important; /* Example fill color for disciplercommitment */
}

To update the GenMapper application code to support the desired feature of color-coding nodes based on disciples' commitments, you must include the logic for handling the 'reapercommitment' and 'disciplercommitment' fields, and ensure the visual representation matches the requirements. Given that the provided code already contains extensive functionality for handling nodes, events, and rendering, the specific updates will focus on handling the disciple commitment levels and their visual representation.

### Key Steps for Implementation:

#### 1. Update `template.js`:
Add or ensure that the `reapercommitment` and `disciplercommitment` checkboxes are included in the `fields` section of your `template.js`. It seems they are already included based on your given template definition.

#### 2. Update CSS Styling:
In `disciples/style.css`, you've already defined styles for `.node-reapercommitment` and `.node-disciplercommitment`. You might need to adjust the CSS selectors based on your actual implementation, particularly if nodes can have multiple classes or states that require specific color coding.

#### 3. Implement Color Logic in `genmapper.js`:
Enhance the `redraw` function or wherever the nodes are being drawn to apply the correct class based on

i made an interesting discovery. 

'header': 'followupStatus',
      'initial': 'disciple-no-follow-up',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'disciple-no-follow-up', // Changed header
          'class': 'disciple-no-follow-up',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-no-meetings', // Changed header
          'class': 'disciple-followed-up-no-meetings',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-in-meetings', // Changed header
          'class': 'disciple-followed-up-in-meetings',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },// this code in template.js

and this code in /disciples/style.css 
/* .disciple-no-follow-up {
  stroke-dasharray: 7,7;
  stroke: red;
  stroke-width: 1;
  fill: red;
}

.disciple-followed-up-no-meetings {
  stroke-dasharray: 0;
  stroke: orange;
  stroke-width: 2;
  fill: orange;
}

.disciple-followed-up-in-meetings {
  stroke-dasharray: 0;
  stroke-width: 4;
  stroke: green;
  stroke-width: 1;
  fill: green;/

// the above code actually changes the colors of the nodes. It is a drop down menu selection and not a check box, but I can create two new menus in the same format as the above menu. One menu can be called evangelism that contains confidence, competence, and actively commited, confidence and competence will not change the color, but the third option active committed will override the followup menu and will label them as blue, and the third drop down options will be confident in discipling, competent in discipling, and actively commited. if it is selected ALONE and actively committed to evangelism then it will highlight the person as purple, but if they aren't actively commited to evangelism, but are actively commited to discipleship, then they will be pink. 
Based on your discovery and the idea of utilizing dropdown menus for different commitment levels in evangelism and discipleship, you can effectively manage and display the disciples' engagement state in visual form. This approach leverages the combination of HTML form elements (dropdown menus) and CSS for visual representation.

Here is an outline of how to implement these features:

### 1. Extend the Template

You’ll add two new fields in `template.js`—`evangelismStatus` and `discipleshipStatus`—similar to the `followupStatus` field. This allows for different commitment levels to be selected through dropdown menus.

```javascript
// example addition to the fields array in your template
{
  header: 'evangelismStatus',
  initial: 'evangelism-not-committed',
  type: 'radio',
  values: [
    { header: 'evangelism-not-committed', class: 'evangelism-not-committed' },
    { header: 'evangelism-committed', class: 'evangelism-committed' }
    // No need for additional attributes for this example
  ]
},
{
  header: 'discipleshipStatus',
  initial: 'discipleship-not-committed',
  type: 'radio',
  values: [
    { header: 'discipleship-not-committed', class: 'discipleship-not-committed' },
    { header: 'discipleship-committed', class: 'discipleship-committed' }
  ]
}
```

### 2. Define CSS Styles for New States

Next, you would define additional CSS classes in `/disciples/style.css` to visually represent these new states.

```css
.evangelism-committed > rect,
.discipleship-committed.alone > rect {
  fill: pink !important;
}

.evangelism-committed.discipleship-committed > rect {
  fill: purple !important;
}

.evangelism-committed:not(.discipleship-committed) > rect {
  fill: blue !important;
}
```

Please note: The CSS selectors `.alone` and combinators like `:not()` are used conceptually here. You will need to implement logic that dynamically adds and removes these classes based on the selections made in the dropdowns.

### 3. Implement Logic to Handle Selection Changes

You will need to modify or extend the JavaScript logic that handles dropdown selections (`genmapper.js`). On selection change, assess the combination of `evangelismStatus` and `discipleshipStatus` to apply the correct classes that determine the node's color.

This might involve adding event listeners for changes in those dropdowns, much like how checkboxes or other input elements are currently handled. 

```javascript
// Pseudo-code to illustrate the approach
function handleCommitmentChange(discipleId) {
  var discipleElement = document.querySelector(`.node[data-id="${discipleId}"]`);
  
  // Fetch selections
  var evangelismSelection = document.getElementById(`evangelism-select-${discipleId}`).value;
  var discipleshipSelection = document.getElementById(`discipleship-select-${discipleId}`).value;

  // Check and apply classes based on logic.
  discipleElement.classList.remove('evangelism-committed', 'discipleship-committed', 'alone');
  if (evangelismSelection === 'evangelism-committed') {
    discipleElement.classList.add('evangelism-committed');
  }
  if (discipleshipSelection === 'discipleship-committed') {
    discipleElement.classList.add('discipleship-committed');
  }
  // Further logic to add/remove "alone" class or applying specific logic based on selection combinations
}

// Simply ensure you add code to attach these handlers when rendering each node.
```

### Conclusion

While mixing CSS class combinations and utilizing smart event handling in JavaScript, you can dynamically adapt the visual representation of each disciple node based on the different categories of commitment. This system enables a flexible method to visually encode multiple aspects of disciples' engagement in a compact and easily understandable manner.

This overall approach will require additional logic to manage the class state of each node accurately, especially when differing combinations of commitments can lead to a change in the node's color. Remember to test thoroughly to ensure that the visual state always accurately reflects the current selections.



/<!--=============================== Adding text areas =====================-->



Within the provided `GenMapper` class code, there are several places responsible for handling and organizing field data for each node, as well as for exporting that data into a CSV format, where fields serve as headers and entries per field are saved as column data associated with each node ID. Below, I will outline key parts of the code that contribute to these functionalities:

### Isolating Field Data for Each Node

1. **Adding Nodes and Setting Initial Field Values**: The method `addNode(d)` is responsible for adding a new node with fields initialized to their default values. Here, `template.fields.forEach(...)` is used to iterate over all fields defined in the template and initialize them based on their `initial` value or `initialTranslationCode`.

2. **Editing Nodes Field Data**: The method `popupEditGroupModal(d)` is responsible for displaying a modal window where users can edit field values for a specific node. It dynamically generates input elements for each field and pre-populates them with the current values for the selected node. This functionality ensures that field data is isolated and managed on a per-node basis.

3. **Data Binding in `redraw(template)` Method**: The `redraw(template)` method is crucial for drawing and updating the visual representation of nodes. It binds data to SVG elements based on the `template.fields`. Each node's data is applied to create or update graphical elements (rectangles, texts, etc.), ensuring that each field's data is correctly represented and associated with the correct node.

### Saving Fields as Headers in a CSV, and Saving Entries as Column Data per ID

1. **CSV Header Construction**: At the constructor of the `GenMapper` class, there's a line that sets up the `csvHeader` by mapping over `template.fields` to extract headers, then joins these with commas. This ensures that when data is exported, the CSV file will have headers matching the field names defined in the fields array of the template.

    ```javascript
    this.csvHeader = template.fields.map(field => field.header).join(',') + '\n';
    ```

2. **Parsing and Exporting CSV Data**: The methods `outputCsv()` and `outputCsvSubtree(node)` are responsible for exporting the node data to a CSV file. In `outputCsvSubtree(node)`, there is a conversion of the node (and optionally its subtree) data into a string format that matches the CSV structure initiated with headers from `csvHeader`. It uses `d3.csvFormatRows(...)` to prepare the rows of data where each field from the nodes is mapped into the corresponding column under the headers.

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
          .attr('rows', '4')  // Example row size, adjust as necessary
          .attr('cols', '50');  // Example column size, adjust as necessary
      } else {
        td.append('input')
            .attr('type', field.type)
            .attr('name', field.header)
            .attr('id', 'edit-' + field.header)
      }
    }
  })
}