# gen-mapper
App for mapping generations of simple churches

## Usage
The app can be found [here](https://dvopalecky.github.io/gen-mapper).
For details about usage click the Help / About in the app.

There are several variants of the App, e.g. [Four Fields](https://dvopalecky.github.io/gen-mapper/four-fields/index.html) or [Church Circles](https://dvopalecky.github.io/gen-mapper/church-circles/index.html).
These variants use templates so it's relatively easy to create a new variant for specific purpose.

Currently the App use only front-end technologies: HTML, CSS, JavaScript.
It can be also run offline. Downside is that the work must be stored in local .csv files.
Backend support, i.e. saving work on the server, sharing etc. might be added later.

## Example
![gen-mapper example](https://dvopalecky.github.io/gen-mapper/gen-mapper-example1.png)

## Changelog
see [here](changelog.md)

## Known issues
* Firefox - clicking on (+) to add node or (-) to remove node opens the Edit window unnecessarily
* Firefox - the position of root node when refreshing the window is not centered

## Ideas for improvements
* Hide / unhide the left menu
* Backend support: Saving work on server, sharing, etc.

## License
MIT

## Credits
Curtis Sergeant - introduced me to the concept of generational mapping and provided useful feedback for this app
JavaScript libraries used:
* [d3.js](https://d3js.org) - Mike Bostock
* [FileSaver.js](https://github.com/eligrey/FileSaver.js) - Eli Grey
* [js-xlsx](https://github.com/SheetJS/js-xlsx) - SheetJS
* [Underscore.js](http://underscorejs.org) - Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
