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
//   setKeyboardShorcuts: This function sets up keyboard shortcuts for the application. It listens for 'keyup' events on the document. If the key code is 27 (Esc key), it checks if the alert element is active, if so, it removes the active class. If not, it removes the active class from the intro and edit group elements. If the key code is 13 (Enter key), it simulates a click on the 'edit-submit' button if the edit group element is active.

// setSvgHeight: This function sets the height of the SVG element used for the genmapper graph. It calculates the height as the maximum of the window height and the height of the left menu plus 10.

// loadHTMLContent: This function loads the HTML content for various elements in the application. It sets the innerHTML for the 'left-menu', 'edit-group', 'intro-content', and 'alert-message' elements. It also sets the version information for the application and the template. The HTML content includes various buttons and controls for the application, and uses the i18next library for internationalization.
// Internationalization, often abbreviated as i18n (because there are 18 letters between the 'i' and the 'n'), is the process of designing and preparing your software to be usable in different languages and regions. This involves abstracting all of the strings and other locale-specific pieces (like date, time, number formats) out of your code, so that they can be easily translated and converted to local formats without changing the code itself. This makes it easier to localize your software for different languages and regions.
  // Beginning of function definitions

  // Here's a brief explanation of each function:

  // getInitialValue(field): This function returns the initial value of a field. If the field has an initialTranslationCode, it uses the i18next library to translate the value. Otherwise, it returns the initial property of the field.
  
  // zoomIn(): This function increases the scale of the SVG element by a factor of 1.2, effectively zooming in.
  
  // zoomOut(): This function decreases the scale of the SVG element by a factor of 1.2, effectively zooming out.
  
  // origPosition(): This function resets the zoom level of the SVG element to its original scale and position.
  
  // onLoad(fileInputElementId): This function triggers the click event of a file input element, opening the file selection dialog.
  
  // displayAlert(message): This function displays an alert message by adding an 'active' class to the alert element and setting its text to the provided message.
  
  // closeAlert(): This function hides the alert message by removing the 'active' class from the alert element and clearing its text.
  
  // introSwitchVisibility(): This function toggles the visibility of the intro element by adding or removing the 'active' class.
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
 **========================================================================
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
//   The printMap function is responsible for preparing the map for printing. It calculates the dimensions of the map, adjusts the SVG attributes for printing, changes the CSS for printing, triggers the print dialog, and then restores the original SVG attributes and CSS after printing.

// The redraw function is responsible for redrawing the map when the template changes. It sets up a new tree layout, stratifies the data, updates the links and link text between nodes, updates the nodes, and appends new SVG elements for the nodes. It also handles click events for each node, which trigger the edit group modal, remove node function, or add node function. Finally, it updates the SVG elements for each field in the template.

//   These functions are part of a larger class, likely used for managing a graphical user interface (GUI) with interactive elements. Here's a breakdown:

// updateFieldWithInherit: This function checks if the provided element is not empty. If it's not, it checks the type of the field and calls the appropriate function (updateCheckboxField or updateRadioField) to update the field.

// updateCheckboxField: This function updates the class and rx attribute of a checkbox field based on whether it's checked or not.

// updateRadioField: This function updates the class and rx attribute of a radio field based on the selected option.

// getFieldValueForRadioType: This static method returns the value of the selected radio button. If no option is selected, it returns the initial value of the field.

// updateSvgForFields: This function updates the text of an SVG element based on the field's header. If the field's SVG type is an image, it sets the display style of the element based on whether the field's header is truthy or not.

// appendRemoveButton: This function appends a remove button (represented as an SVG element) to a group. The button has a rectangle and two lines forming an "X", indicating deletion.

// appendAddButton: This function appends an add button (also represented as an SVG element) to a group. The button has a rectangle and two lines forming a "+", indicating addition.
 // These functions are part of a class that manages a tree-like data structure. Here's a breakdown:

  // addNode(d): This function adds a new node to the tree. It first sets hasUnsavedChanges to true, indicating that there are changes that haven't been saved yet. It then creates a new node with initial values for each field, a new unique ID, and the parent ID set to the ID of the node d. The new node is added to the data array and the tree is redrawn.
  
  // findNewId(): This function finds a new unique ID for a node. It first creates an array of all existing IDs, then finds the smallest non-negative integer that is not in this array.
  
  // findNewIdFromArray(arr): This function finds the smallest non-negative integer that is not in the array arr. It sorts the array in ascending order and then iterates over it, incrementing a temporary variable tmp each time it encounters a number equal to tmp. The value of tmp at the end of the iteration is the smallest non-negative integer not in the array.
  
  // removeNode(d): This function removes a node from the tree. It first sets hasUnsavedChanges to true. If the node d is the root node, it displays an alert. Otherwise, it asks for confirmation to delete the node. If the node has children, the confirmation message warns that all descendants will be deleted. If the user confirms, all descendants of the node are deleted, then the node itself is removed from the data array. The tree is then redrawn.

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

//   The provided JavaScript code includes three methods of a class:

// switchLanguage(button): This method is used to switch the language of the application. It takes a button element as an argument, extracts the language code from the button's id, and sets it as the current language. It then uses the i18next library to change the language, updates the DOM to reflect the language change, and redraws the template.

// updateDOMafterLangSwitch(): This method is called after the language has been switched. It loads the HTML content, adds fields to the edit window, and updates the class of the language button to indicate it's the current language. It also sets an aria-label for accessibility on the project name element and adds a click event listener to it. When the project name is clicked, a prompt appears for the user to edit the project name. If the user input is not null or empty, it updates the project name and the aria-label. It also initializes editFieldElements as an empty object and populates it with the fields from the template. If the field type is 'radio', it adds each value of the field to editFieldElements. If the field type is not 'radio', it adds the field to editFieldElements. Finally, it gets the 'edit-parent' element and assigns it to editParentElement.

// alertForNonSupportedBrowsers(): This method checks if the user's browser is Internet Explorer or Edge. If it is, it displays an alert message indicating that the browser is not supported. It uses conditional compilation to check if the browser is Internet Explorer and the StyleMedia property of the window object to check if the browser is Edge.