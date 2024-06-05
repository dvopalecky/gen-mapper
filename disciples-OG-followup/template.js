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
          'date': 'Date of start following Christ',
          'believer': 'Is believer?',
          'baptized': 'Is baptized?',
          'word': 'Abides in Word',
          'prayer': 'Abides in Prayer',
          'shares': 'Shares Jesus',
          'accountable': 'Is accountable',
          'discipleship': 'Has discipleship',
          'inChurch': "Part of God's family",
          
          /**============================================
           *               FOLLOW-UP STATUS
           *=============================================**/
          'followupStatus': 'Follow-up Status',
          'contactAttemptNeeded': 'Contact Attempt Needed',
          'contactAttempted': 'Contact Attempted',
          'contactEstablished': 'Contact Established',
          'firstMeetingScheduled': 'First Meeting Scheduled',
          'firstMeetingComplete': 'First Meeting Complete',
          'ongoingMeetings': 'Ongoing Meetings',
          'beingCoached': 'Being Coached',
          'coachingOthers': 'Coaching Others',
          /**--------------------------------------------
           *               Disciple Type options
           *---------------------------------------------**/
          'discipleType': 'Disciple type',
          'individual': 'Individual',
          'facilitatesGroup': 'Facilitates Group',
          'facilitatesChurch': 'Facilitates Church',
          'timothy': 'Is Timothy (key disciple)?',
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
          'shares': 'Sdílí Ježíše',
          'accountable': 'Je vykazatelný',
          'discipleship': 'Má učednictví',
          'inChurch': 'Součástí Boží rodiny',
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
      'initial': 'contactAttemptNeeded',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'contactAttemptNeeded',
          'class': 'contactAttemptNeeded',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'contactAttempted',
          'class': 'contactAttempted',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'contactEstablished',
          'class': 'contactEstablished',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'firstMeetingScheduled',
          'class': 'firstMeetingScheduled',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'firstMeetingComplete',
          'class': 'firstMeetingComplete',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'ongoingMeetings',
          'class': 'ongoingMeetings',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'beingCoached',
          'class': 'beingCoached',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'coachingOthers',
          'class': 'coachingOthers',
          'attributes': {
            'rx': 10
          }
        }
      ]
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
