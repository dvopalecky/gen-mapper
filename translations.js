const translations = {
  en: {
    translation: {
      'menu': {
        'appName': 'GenMapper',
        'defaultProjectName': 'Untitled project',
        'help': 'Help',
        'helpAbout': 'Help / About',
        'zooming': 'Zooming',
        'originalZoom': 'Original Zoom &amp; Position',
        'zoomIn': 'Zoom In',
        'zoomOut': 'Zoom Out',
        'importExport': 'Import / Export',
        'importXlsxCsv': 'Import XLSX / CSV',
        'exportCsv': 'Export CSV',
        'printing': 'Printing',
        'btnPrintVertical': 'Print Vertical Multipage',
        'btnPrintHorizontal': 'Print Horizontal One-page'
      },
      'editGroup': {
        'editGroup': 'Edit group',
        'btnSubmit': 'Submit changes',
        'btnCancel': 'Cancel',
        'btnDelete': 'Delete subtree',
        'btnImportSubtree': 'Import subtree',
        'elementParent': 'Parent',
        'notAvaliable': 'N/A',
        'hoverDeleteGroupAndSubtree': 'Delete group &amp; subtree',
        'hoverAddChildGroup': 'Add child group'
      },
      'messages': {
        'editProjectName': 'Edit Project name',
        'errProjectNameEmpty': "Project name can't be empty!",
        'btnOK': 'OK',
        'errDeleteRoot': 'Sorry. Deleting root group is not possible.',
        'confirmDeleteGroup': 'Do you really want to delete {{groupName}}?',
        'confirmDeleteGroupWithChildren': 'Do you really want to delete {{groupName}} and all descendants?',
        'saveAsInSafari': 'Save as:<br>(Note: Safari browser has issues with export, please see GenMapper -> Help for more info)',
        'saveAs': 'Save as:',
        'confirmImportSubtreeOverwrite': 'Warning: Importing subtreee will overwrite this group ({{groupName}}) and all descendants. Do you want to continue?',
        'errImport': 'Error when importing file.',
        'errImportWhatToCheck': 'Please check that the file is in correct format (comma separated values), that the root group has no parent, and that all other relationships make a valid tree. Also check that you use the correct version of the App.',
        'selectFile': 'Please select a file',
        'errWrongFileType': 'Wrong type of file. Please import xls, xlsx or csv files.'
      },
      'help': {
        'genmapperHelp': 'GenMapper Help',
        'introContent': "Hello, this app should serve for mapping generations of simple churches. I pray it serves you to advance Jesus' kingdom.",
        'legendHeader': 'Legend',
        'legendGroup': 'Each circle represents a group / church. Dashed circle means group, full circle means church.<br>On the top the numbers describe: # total, # believers, # baptized<br>Inside the circle are the elements that are practiced in the group.<br>On the left there numbers 1 to 7 represent which elements of 3/3 process are practised:<br>1 - Personal care 2 - Worship 3 - Accountability 4 - Vision casting 5 - Bible study 6 - Practice 7 - Set goals and prayer',
        'legendClicking': 'Click on the group to edit it.<br>Click on red (X) button to remove group.<br>Click on green (+) button to add child group.',
        'importExportHeader': 'Import / Export',
        'importExportWarningChangesLost': 'Note: If you don\'t export, all changes will be lost when refreshing or closing page.',
        'importExportContent': 'You can import a .xlsx or .xls (MS Excel) or .csv (Comma separated values) files.<br>You can also import a subtree by clicking a given group and then using the \'Import Subtree\' button.<br>Export is currently available only to .csv format.',
        'exportSafariIssuePart1': 'Note: Some versions of Safari have problems with export to csv. If a new tab with blob is opened instead of file downloaded (see example below)',
        'exportSafariIssuePart2': 'press Cmd + S, then enter a filename ending .csv, select Format: Page Source, and finally click Save',
        'exportToPdf': 'For Export to PDF, use the Print buttons and then save as PDF in Chrome or Safari.',
        'panZoomHeader': 'Panning / Zooming',
        'panZoomContent': 'You can pan by draging the map and zoom by mouse wheel or using buttons on the left.',
        'changelogHeader': 'Changelog &amp; version info',
        'genmapperVersion': 'GenMapper version',
        'templateVersion': 'Template version',
        'changelogLink': 'Changelog link',
        'creditsHeader': 'Credits',
        'creditsThanks1': 'Thanks to Curtis Sergeant for the idea of generational mapping and for providing useful feedback.',
        'creditsJavaScriptLibraries': 'JavaScript libraries used',
        'creditsAnd': 'and',
        'creditsCopyright': 'Copyright (c) 2016 - 2017 Daniel Vopalecky',
        'creditsLicense': 'Licensed with MIT Licence',
        'creditsGithub': 'Github repository',
        'creditsSuggestions': 'Please send suggestions and bugs to daniel.vopalecky@seznam.cz',
        'btnOKStart': 'OK, let\'s start!'
      }
    }
  },
  es: {
    translation: {
      'menu': {
        'appName': 'GenMapper',
        'defaultProjectName': 'Proyecto',
        'help': 'Ayuda',
        'helpAbout': 'Ayuda / Acerca de',
        'zooming': 'Aumentar',
        'originalZoom': 'Posición y tamaño original',
        'zoomIn': 'Aumentar',
        'zoomOut': 'Quitar aumento',
        'importExport': 'Importar/Exportar',
        'importXlsxCsv': 'Importar XLXS / CSV',
        'exportCsv': 'Exportar CSV',
        'printing': 'Imprimir',
        'btnPrintVertical': 'Vertical Varias páginas',
        'btnPrintHorizontal': 'Horizontal Una página'
      },
      'editGroup': {
        'btnSubmit': 'Presentar Cambios',
        'btnCancel': 'Cambios',
        'btnImportSubtree': 'Subárbol  De importaci',
        'elementParent': 'Discipulador:',
        'notAvaliable': 'N/A'
      },
      'messages': {
      }
    }
  },
  cs: {
    translation: {
      'menu': {
        'appName': 'GenMapper',
        'defaultProjectName': 'Mapa bez jména',
        'help': 'Nápověda',
        'helpAbout': 'Nápověda / O aplikaci',
        'zooming': 'Lupa',
        'originalZoom': 'Originální velikost a pozice',
        'zoomIn': 'Přiblížit',
        'zoomOut': 'Oddálit',
        'importExport': 'Import / Export',
        'importXlsxCsv': 'Import XLSX / CSV',
        'exportCsv': 'Export CSV',
        'printing': 'Tisk',
        'btnPrintVertical': 'Tisk vertikálně více stran',
        'btnPrintHorizontal': 'Tisk horizontálně 1 strana'
      },
      'editGroup': {
        'editGroup': 'Editace skupiny',
        'btnSubmit': 'Změnit',
        'btnCancel': 'Zpět',
        'btnDelete': 'Smazat podstrom',
        'btnImportSubtree': 'Importovat podstrom',
        'elementParent': 'Mateřská skupina',
        'notAvaliable': 'Není dostupný',
        'hoverDeleteGroupAndSubtree': 'Smazat skupinu a celý podstrom',
        'hoverAddChildGroup': 'Přidat dceřinnou skupinu'
      },
      'messages': {
        'editProjectName': 'Editace jména projektu',
        'errProjectNameEmpty': 'Jméno projektu nemůže být prázdné!',
        'btnOK': 'OK',
        'errDeleteRoot': 'Kořenovou skupinu není možné smazat',
        'confirmDeleteGroup': 'Opravdu chceš smazat {{groupName}}?',
        'confirmDeleteGroupWithChildren': 'Opravdu chceš smazat {{groupName}} a všechny potomky?',
        'saveAsInSafari': 'Uložit jako:(Poznámka: Prohlížeč Safari má problémy s exportem, viz GenMapper > Nápověda pro více info)',
        'saveAs': 'Uložit jako:',
        'confirmImportSubtreeOverwrite': 'Varování: Importování podstromu přepíše tuto skupinu ({{groupName}} a všechny potomky. Chceš pokračovat?',
        'errImport': 'Chyba při importu.',
        'errImportWhatToCheck': 'Prosím zkontroluj, jestli je soubor ve správném formátu (hodnoty oddělené čárkou), že mateřská skupina nemá žádného rodiče a že všechny další vztahy vytvářejí platný strom. Také zkontroluj, že máš správnou verzi aplikace.',
        'selectFile': 'Vyber soubor.',
        'errWrongFileType': 'Špatný typ soubor. Prosím importuj soubory xls, xlsx nebo csv.'
      }
    }
  }
}
