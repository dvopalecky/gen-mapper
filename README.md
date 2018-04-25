# gen-mapper
App for mapping generations of simple churches

## Usage
The app can be found [here](https://dvopalecky.github.io/gen-mapper).
For details about usage click the Help button (?) in the app.

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
* Safari - not displaying some icons
* Firefox - letter spacing in top-bottom texts
* Edge/Internet Explorer - wrong display of map

## Ideas for improvements
* Backend support: Saving work on server, sharing, etc.

## License
MIT

## Projects / pages which use GenMapper:
* [NoPlaceLeft](http://noplaceleft.net/genmapper/)
* [MetaCamp](https://metacamp.org/generational-mapping-software/)
* [TrainingFuerTrainer.de](https://www.trainingfuertrainer.de/baumzeichner/)

## Credits
Curtis Sergeant - introduced me to the concept of generational mapping and
  provided useful feedback for this app
JavaScript/CSS libraries used:
* [d3.js](https://d3js.org) - Mike Bostock
* [FileSaver.js](https://github.com/eligrey/FileSaver.js) - Eli Grey
* [js-xlsx](https://github.com/SheetJS/js-xlsx) - SheetJS
* [lodash](https://lodash.com) - JS Foundation and other contributors
* [hint.css](https://github.com/chinchang/hint.css/) - Kushagra Gour

Icons used:
* [IcoMoon-Free](https://github.com/Keyamoon/IcoMoon-Free) - Keyamoon
