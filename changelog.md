# gen-mapper changelog

## 0.2.17 (2018-04-26)
- Add: export subtree
- Add: change parent of group (in edit window)
- Add: warn user for unsaved changes when closing/refreshing browser window.
- Improved styling, add buttons to close modal windows
- Fix bug: Import subtree was importing subtree with mirrored display order.
- Add German translation

## 0.2.16 (2018-04-24)
- Add function to import JSON (not available for end user)
- Minor changes in names and move some styles into classes

## 0.2.15 (2017-10-11)
- Change left menu to icon style
- Add more translations

## 0.2.14 (2017-10-02)
- Internationalization for Help

## 0.2.13 (2017-09-22)
- Internationalization feature - contact me if you want to help with
  translations
- Change project name when importing full genmap from file

## 0.2.12 (2017-09-18)
- Put whole app into JS class and further refactoring

## 0.2.11 (2017-08-19)
- Improved UI of the 'canvas' and edit window

## 0.2.10 (2017-08-19)
- Fixed bugs so that gen-mapper is now Firefox friendly

## 0.2.9 (2017-08-19)
- Fixed bug caused by invalid value in radio type column. Now made robust
  against invalid values.

## 0.2.8 (2017-08-18)
- Improved templating. On user side nothing should change.

## 0.2.7 (2017-08-07)
- Delete group deletes also it's descendants

## 0.2.6 (2017-08-06)
- Fix a bug in Safari that prevented to load the app - JS variable name can't
  be the same as id in a page

## 0.2.5 (2017-07-30)
- Pressing enter allows to submit Edit Group window
- Refactored some code

## 0.2.4 (2017-07-29)
- Add import subtree feature

## 0.2.3 (2017-06-06)
- Updated church-circles template with "Church Type" field

## 0.2.2 (2017-04-30)
- Exports true/false fields as 1/0 into .csv
- Importing true/false (checkbox) fields: TRUE/true/1 values are considered
  as TRUE
- Updated templates church-circles and church-circles-czech
- Minor changes in style

## 0.2.1 (2017-04-14)
- Fix bug with importing .csv files which where opened by Excel
- Add support for utf-8 characters in .csv import

## 0.2.0 (2017-04-12)
- Refactored some of the code into templates and added new template for
  'church circles' gen-map style.

## 0.1.1 (2017-02-08)
- Added help on how to manually overcome bug with Export to .csv in Safari
  (bug probably related to https://github.com/eligrey/FileSaver.js/issues/12)

## 0.1.0 (2016-10-07)
- Initial version
