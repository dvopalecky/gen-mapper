const boxHeight = 80
const textHeight = 14
const textMargin = 6
const xOffset = 1 // Change this value to move all icons
const template = {
  'name': 'Disciples 0.2',
  'translations': {
    en: {
      translation: {
        'template': {
          'helpLegend': '<p>This version of GenMapper is for mapping individual disciples, not groups/churches. Each rectangle represents a disciple.</p><p>Click on the disciple to edit.<br>Click on red (x) button to remove a disciple.<br>Click on green (+) button to add child disciple.</p>',
          'name': 'Name',
          'reaper': 'Who led them to Jesus Christ?',
          'phone': 'Phone Number',
          'address': 'Address',
          'date': 'Date of start following Christ',
          /**======================
           *    Menu items
           *========================**/
          /*------- Believe and Share -------*/
          
          
          'believer-knows': 'Knows the Jesus Story', // red 
          'believer': 'Knows the "Gospel" story', // Orange
          'believer-shares': 'Shares the Gospel', // yellow
          'believer-shares-monthly': 'monthly', // green
          'believer-shares-weekly': 'weekly', // blue
          'believer-shares-daily': 'daily', // purple
          /*------- Repent -------*/
        
          
          'repents-knows': 'Knows a repentance story', // red
          'repents': 'Knows the "Believe and Repent" story', // purple
          /*------- Baptism -------*/
          
          
          'baptism-knows': 'Knows a Baptism story', // red
          'baptized': 'Knows the "Baptism" story', // blue
          'baptizing': 'Baptizes others', // purple
          /*------- Holy Spirit -------*/
          
          
          'filled-knows': 'Knows a Holy Spirit story', // red
          'filled': 'Knows the "Be Filled" story', // orange
          'filled-walking': 'Walks in the Holy Spirit', // yellow
          'filled-monthly': 'Walks in the Holy Spirit monthly', // green
          'filled-weekly': 'Walks in the Holy Spirit weekly', // blue
          'filled-daily': 'Walks in the Holy Spirit daily', // purple
          /*------- Devotion Set -------*/
          /*------- Devoted to the WORD -------*/
          
          'word-knows': 'Knows a story about the Word', // red
          'word-access': 'Has Bible', //orange
          'word': 'Knows the "Read the Word" story', // yellow
          'word-monthly': 'Reads the Bible monthly', // green
          'word-weekly': 'Reads the Bible weekly', // blue
          'word-daily': 'Reads the Bible daily', // purple

          /*------- Devoted to Fellowship -------*/

          'loves-knows': 'Knows a story about fellowship', // red
          'loves-access': 'Has fellowship access', // orange
          'loves': 'Knows the "Love/Fellowship" story', // yellow
          'loves-monthly': 'In fellowship monthly', // green
          'loves-weekly': 'In fellowship weekly', // blue
          'loves-daily': 'In fellowship daily', // purple
          
          /*------- Devoted to Communion -------*/
          
          'takesCommunion-knows': 'Knows a story about Communion', // red
          'takesCommunion-access': 'Knows how to take Communion', // orange
          'takesCommunion': 'Knows the "Communion" story', // yellow
          'takesCommunion-monthly': 'Takes Communion monthly', // green
          'takesCommunion-weekly': 'Takes Communion weekly', // blue
          'takesCommunion-daily': 'Takes Communion daily', // purple

          /*------- Devoted to Prayer -------*/

          'prayer-knows': 'Knows a story about Prayer', // red
          'prayer-access': 'Has a secret place', // orange
          'prayer': 'knows the "Pray" story', // yellow
          'prayer-monthly': 'Prays monthly', // green
          'prayer-weekly': 'Prays weekly', // blue
          'prayer-daily': 'Prays daily', // purple
          
          /*------- Walks in Signs and Wonders -------*/

          'walksInSignsWonders-knows': 'Knows a story about Signs and Wonders', // red
          'walksInSignsWonders-access': 'Believes in Signs and Wonders', // orange
          'walksInSignsWonders': 'Knows the "Be Awed" story', // yellow
          'walksInSignsWonders-monthly': 'Experiences Signs and Wonders monthly', // green
          'walksInSignsWonders-weekly': 'Experiences Signs and Wonders weekly', // blue
          'walksInSignsWonders-daily': 'Experiences Signs and Wonders daily', // purple

          /*------- Gives -------*/
          'gives-knows': 'Knows a story about Giving', // red

          'gives': 'Knows the "Give" story', // yellow
          'gives-monthly': 'Gives monthly', // green
          'gives-weekly': 'Gives weekly', // blue
          'gives-daily': 'Gives daily', // purple

          /*------- Worship -------*/
          'worships-faithful': 'Faithful in Worship', // orange
          'worships-knows': 'Knows a story about Worship', // red knowledge 
          'worships': 'Knows the "Worship" story', // yellow practice
          'worships-shares': 'Teaches others to worship', // yellow sharing
          'worships-monthly': 'Praises God monthly', // green
          'worships-weekly': 'Praises God weekly', // blue
          'worships-daily': 'Praises God daily', // purple

          /*------- Makes Disciples -------*/
          
          'shares-knows': 'Knows a story about Making Disciples', // red
          'shares': 'knows the "Go and Tell" story', // orange
          'shares-1stGen': 'They win souls', // green
          'shares-2ndGen': 'Helped new soul win souls ', // blue
          'shares-3rdGen': 'Helped new soul who was won by new soul to win souls', // purple
          
          
          // Sometimes, Weekly, 
          
          
          
          
          
          
          /*---- END OF menu items ----*/
          
          
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
          'accountable': 'Is held accountable',
          'active': 'Active',
          'notes': 'Notes',
          'accountablenotes': 'Accountability Notes',
          'barrierstomultiplying': 'Barriers to multiplying',
          'writtenprayer': 'Written Prayers for them',
          'availability': 'Next Availability Time',
          'writtentestimony': "Write their testimony here",
          'writtengospel': "Their written gospel presentation",
          
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
        'x': -boxHeight * 0.50,
        'y': 0,
        'width': boxHeight *1,
        'height': boxHeight,
        'opacity': '0'
      }
    },
    'box': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight * 0.45,
        'y': 0,
        'width': boxHeight * 0.9,
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
    /**======================
   *    Each node has a date
   * of decision to follow Jesus
   *========================**/
  /*================================ Menu Date ==============================*/
  
  
    {
      'header': 'date',
      'initial': null,
      'type': 'text'
      
    },
    /**----------------------
     *  Each node has a phone
     *  number and address
     *------------------------**/
    /*-------------------------------- Menu Phone ------------------------------*/
    
    
    {
      'header': 'phone',
      'initial': null,
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': -7,
          'style': 'font-family: Arial; font-size: 12px; font-weight: bold;'
        }
      }
    },
    /*================================ Menu Address ===========================*/
    
    
    {
      'header': 'address',
      'initial': null,
      'type': 'text'
    },
    

          /*---1---- Believe and repent -------*/
    {
      'header': 'believer',
      'initial': true,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Added one column width
          'y': boxHeight * 0,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/1.believes.png'
        }
      }
    },
    /*=======2 Repents =======*/
    {
      'header': 'repents',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/2.repents.png'
        }
      }
    },
    /*=======3 Baptized =======*/
    {
      'header': 'baptized',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/7.baptized.png'
        }
      }
    },
    /*=======4 Filled with the Spirit =======*/
    {
      'header': 'filled',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/8.filled.png'
        }
      }
    },
    /*=======5 Reads Word =======*/
    {
      'header': 'word',
      'initial': false,
      'type': 'checkbox',
      'class': 'horizontal-checkbox', // custom class to indicate layout preferences
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/6.readsword.png'
        }
      }
    },
    
    /*=======6 Love =======*/
    {
      'header': 'loves',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/4.loves.png'
        }
      }
    },
    /*=======7 Takes Communion =======*/
    {
      'header': 'takesCommunion',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/9.takescommunion.png'
        }
      }
    },
    /*=======8 Prays =======*/
    {
      'header': 'prayer',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/5.prays.png'
        }
      }
    },
    /*=======9 Be Awed "Walks in signs and wonders" =======*/
    {
      'header': 'walksInSignsWonders',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/12.walkinsignswonders.png'
        }
      }
    },
    /*=======10 Gives "Is generous" =======*/
    {
      'header': 'gives',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/10.gives.png'
        }
      }
    },
    /*=======11 Worship/Praise =======*/
    {
      'header': 'worships',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/11.worships.png'
        }
      }
    },
    /*=======12 Go and Tell =======*/
    {
      'header': 'shares',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/3.goandtell.png'
        }
      }
    },
    
    /*======= EXTRAS - SUPER IMPORTANT =======*/
    
    // THIS WONE IS SOLVED IN THE FOLLOWUP METER
    // {
    //   'header': 'discipleship',
    //   'initial': false,
    //   'type': 'checkbox',
    //   'svg': {
    //     'type': 'image',
    //     'attributes': {
    //       'x': boxHeight * -0.25,
    //       'y': boxHeight * 0.75,
    //       'width': boxHeight / 4,
    //       'height': boxHeight / 4,
    //       'xlink:href': 'icons/discipleship.png'
    //     }
    //   }
    // },
    // // WHAT IS THIS ONE?
    // {
    //   'header': 'accountable',
    //   'initial': false,
    //   'type': 'checkbox',
    //   'svg': {
    //     'type': 'image',
    //     'attributes': {
    //       'x': boxHeight * 0,
    //       'y': boxHeight * 0.5,
    //       'width': boxHeight / 4,
    //       'height': boxHeight / 4,
    //       'xlink:href': 'icons/accountable.png'
    //     }
    //   }
    // },
    
    
    
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
    // was Timothy red line, but now is accountable red line. 
    {
      'header': 'accountable',
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
    {
      'header': 'availability',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    }, 
    {
      'header': 'accountablenotes',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    }, 
    {
      'header': 'barrierstomultiplying',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    }, 
    {
      'header': 'writtenprayer',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    },
     {
      'header': 'writtentestimony',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    }, 
     {
      'header': 'writtengospel',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    }, 
    {
      'header': 'notes',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    },

    //next availability times -  w-sa after 6, sun after 1, m-t all day
    //places for meeting - 
    // testimony -- gospel WRITTEN
    
    // Their testimony writtn
    // // 
  ]
}
