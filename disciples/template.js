const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Disciples 0.1',
  'translations': {
    en: {
      translation: {
        'template': {
          'helpLegend': '<p>This version of GenMapper is for mapping individual disciples, not groups/churches. Each rectangle represents a disciple.</p><p>Click on the disciple to edit.<br>Click on red (x) button to remove a disciple.<br>Click on green (+) button to add child disciple.</p>',
          'name': 'Name',
          'date': 'Date of start following Christ',
          'believer': 'Is believer?',
          'baptized': 'Is baptized?',
          'word': 'Abides in Word',
          'prayer': 'Abides in Prayer',
          'field1': 'Field 1: Go',
          'field2': 'Field 2: Gospel',
          'field3': 'Field 3: Grow',
          'field4': 'Field 4: Gather',
          'field5': 'Trainer',
          'timothy': 'Is Timothy (key disciple)?',
          'discipleType': 'Disciple type',
          'individual': 'Individual',
          'facilitatesGroup': 'Facilitates Group',
          'facilitatesChurch': 'Facilitates Church',
          'active': 'Active'
        }
      }
    },
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
          'field1': '1. Pole: Oikosová mapa, ',
          'field2': '2. Pole: Osobní příběh, Boží příběh',
          'field3': '3. Pole: Krátkodobé učednictví, LTG',
          'field4': '4. Pole: Součástí Boží rodiny',
          'field5': 'Trénuje další, Iron-on-iron',
          'timothy': 'Timoteus (klíčový učedník)',
          'discipleType': 'Typ učedníka',
          'individual': 'Jednotlivec',
          'facilitatesGroup': 'Provází skupinu',
          'facilitatesChurch': 'Provází Boží rodinu',
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
          'x': -boxHeight * 0.28,
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
      'header': 'field1',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.3,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/field1.png'
        }
      }
    },
    {
      'header': 'field2',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0.05,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/field2.png'
        }
      }
    },
    {
      'header': 'field3',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0.05,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/field3.png'
        }
      }
    },
    {
      'header': 'field4',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.3,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/field4.png'
        }
      }
    },
    {
      'header': 'field5',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * -0.1,
          'y': boxHeight * 0.65,
          'width': boxHeight * 0.2,
          'height': boxHeight * 0.2,
          'xlink:href': 'icons/field5.png'
        }
      }
    },
    {
      'header': 'discipleType',
      'initial': 'individual',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'individual',
          'class': 'disciple-individual',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'facilitatesGroup',
          'class': 'disciple-facilitates-group',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'facilitatesChurch',
          'class': 'disciple-facilitates-church',
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
    }
  ]
}
