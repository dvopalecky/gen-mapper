
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
          /// the order of the template items doesn't change the order of the menu items. The order of the menu items is determined by the order of the fields in the template below at the bottom of this file.
          'helpLegend': '<p>This version of GenMapper is for mapping individual disciples, not groups/churches. Each rectangle represents a disciple.</p><p>Click on the disciple to edit.<br>Click on red (x) button to remove a disciple.<br>Click on green (+) button to add child disciple.</p>',
          'name': 'Name',
          'reaper': 'Who led them to Jesus Christ?',
          'phone': 'Phone Number',
          'address': 'Address',
          'date': 'Date of start following Christ',
          'language': 'Language(s)',
          /**======================
           *    Menu items
           *========================**/
          /*------- Believe and Share -------*/
          
          
          // 'believer-knows': 'Knows the Jesus Story', // red 
          'believer': '1.Knows the "Gospel" story', // Orange
          'believer-shares': 'Shares the Gospel', // yellow
          'believer-shares-monthly': '- Shares Monthly', // green
          'believer-shares-weekly': '- Shares Weekly', // blue
          'believer-shares-daily': '- Shares Daily', // purple
          /*------- Repent -------*/
        
          
          'repents-knows': '2. Knows a "Believe & Repent" story', // red
          'repents': '', // purple
          /*------- Baptism -------*/
          
          
          'baptism-knows': '3. Knows a "Baptism" story', // red
          'baptized': 'Knows the "Baptism" story', // blue
          'baptizing': 'Baptizes others', // purple
          /*------- Holy Spirit -------*/
          
          
          'filled-knows': '4. Knows a "Be Filled" story', // red
          'filled': 'Knows the "Be Filled" story', // orange
          'filled-walking': 'Walks in the Holy Spirit', // yellow
          'filled-monthly': 'Walks in the Holy Spirit monthly', // green
          'filled-weekly': 'Walks in the Holy Spirit weekly', // blue
          'filled-daily': 'Walks in the Holy Spirit daily', // purple
          /*------- Devotion Set -------*/
          /*------- Devoted to the WORD -------*/
          
          'word-knows': '5. Knows a "Read the Word" story', // red
          'word-access': 'Has Bible', //orange
          'word': 'Knows the "Read the Word" story', // yellow
          'word-monthly': 'Reads the Bible monthly', // green
          'word-weekly': 'Reads the Bible weekly', // blue
          'word-daily': 'Reads the Bible daily', // purple

          /*------- Devoted to Fellowship -------*/

          'loves-knows': '6. Knows a "fellowship/love" story', // red
          'loves-access': 'Has fellowship access', // orange
          'loves': 'Knows the "Love/Fellowship" story', // yellow
          'loves-monthly': 'In fellowship monthly', // green
          'loves-weekly': 'In fellowship weekly', // blue
          'loves-daily': 'In fellowship daily', // purple
          
          /*------- Devoted to Communion -------*/
          
          'takesCommunion-knows': '7. Knows a "Lord\'s Supper" story', // red
          'takesCommunion-access': 'Knows how to take Communion', // orange
          'takesCommunion': 'Knows the "Communion" story', // yellow
          'takesCommunion-monthly': 'Takes Communion monthly', // green
          'takesCommunion-weekly': 'Takes Communion weekly', // blue
          'takesCommunion-daily': 'Takes Communion daily', // purple

          /*------- Devoted to Prayer -------*/

          'prayer-knows': '8. Knows a "Pray" story', // red
          'prayer-access': 'Has a secret place', // orange
          'prayer': 'knows the "Pray" story', // yellow
          'prayer-monthly': 'Prays monthly', // green
          'prayer-weekly': 'Prays weekly', // blue
          'prayer-daily': 'Prays daily', // purple
          
          /*------- Walks in Signs and Wonders -------*/

          'walksInSignsWonders-knows': '9. Knows a "Signs & Wonders" story', // red
          'walksInSignsWonders-access': 'Believes in Signs and Wonders', // orange
          'walksInSignsWonders': 'Knows the "Be Awed" story', // yellow
          'walksInSignsWonders-monthly': 'Experiences Signs and Wonders monthly', // green
          'walksInSignsWonders-weekly': 'Experiences Signs and Wonders weekly', // blue
          'walksInSignsWonders-daily': 'Experiences Signs and Wonders daily', // purple

          /*------- Gives -------*/
          'gives-knows': '10. Knows a "Give" story', // red

          'gives': 'Knows the "Give" story', // yellow
          'gives-monthly': 'Gives monthly', // green
          'gives-weekly': 'Gives weekly', // blue
          'gives-daily': 'Gives daily', // purple

          /*------- Worship -------*/
          'worships-faithful': 'Faithful in Worship', // orange
          'worships-knows': '11. Knows a "Worship" story', // red knowledge 
          'worships': 'Knows the "Worship" story', // yellow practice
          'worships-shares': 'Teaches others to worship', // yellow sharing
          'worships-monthly': 'Praises God monthly', // green
          'worships-weekly': 'Praises God weekly', // blue
          'worships-daily': 'Praises God daily', // purple

          /*------- Makes Disciples -------*/
          
          'shares-knows': '12. Knows a "Go & Tell" story', // red
          'shares': 'knows the "Go and Tell" story', // orange
          'shares-1stGen': '- Is discpling a new believer(1)?', // green
          'shares-2ndGen': '- NB(1) led someone to Jesus(2)?', // blue
          'shares-3rdGen': '- NB(2) led someone to Jesus(3)?', // purple
       
          
          /*---- END OF menu items ----*/
          
          'expectingmeeting': 'Is expecting a meeting with you',
          'expectingaid': 'Is expecting something from you', // green
          'heldAccountable': 'Is held accountable (sins, obedience)', // red
          'prayedForWeekly': 'Someone is praying for them weekly', // orange
          'goingWithWeekly': 'Together reaching their oikos weekly', // yellow
          
          'Timothy': 'Is a Timothy Key Disicple',
          'discipleship': 'Has discipleship',
          'inChurch': "Part of God's family",
          
          /**============================================
           *               FOLLOW-UP STATUS
           *=============================================**/
          'followupStatus': 'Follow-up Status',
          'nofollowupneeded': 'No Follow-up Needed',
          'immediatecontactAttemptNeeded': 'Urgent Contact Attempt Needed',
          'contactAttemptNeeded': 'Contact Attempt Needed',
          'contactAttempted': 'Contact Attempted',
          'contactEstablished': 'Contact Established',
          'firstMeetingScheduled': 'First Meeting Scheduled',
          'firstMeetingComplete': 'First Meeting Complete',
          'ongoingMeetings': 'Ongoing Meetings',
          'beingCoached': 'Being Trained to Multiply',
          'coachingOthers': 'Training Others to Multiply',
          /**--------------------------------------------
           *               Disciple Type options
           *---------------------------------------------**/
          'discipleType': 'Disciple type',
          'individual': 'Individual',
          'facilitatesGroup': 'Facilitates Group',
          'facilitatesChurch': 'Facilitates Church',
          'accountable': 'Is held accountable',
          
          /**======================
           **   Notes
           *========================**/
          'meetingplan': 'Next Meeting Plan',
          'expectations': 'Is expecting something from you',
          'availability': 'Upcoming Availability Times',
          'accountablenotes': 'Accountability Notes',
          'barrierstomultiplying': 'Barriers to multiplying',
          'writtenprayer': 'Written Prayers for them',
          'writtentestimony': "Write their testimony here",
          'writtengospel': "Their written gospel presentation",
          'notes': 'Notes',
          'active': 'Wants to meet/Active',

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
      'x': -boxHeight * 0.50 + 1, // Add 1 to the x value
      'y': 0,
      'width': boxHeight * 1 - 2, // Subtract 2 from the width
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
    {
      'header': 'language',
      'initial': null,
      'type': 'text'
    },
    // icons to help github copilot to auto fill in the images
//     05/13/2024  04:50 AM             6,146 1.0notknowgospel.png
// 05/07/2024  12:53 PM             3,703 1.1knowsgospel.png
// 05/13/2024  04:50 AM             4,837 1.2shares.png
// 05/13/2024  04:50 AM             5,774 1.3shares-weekly.png
// 05/13/2024  04:50 AM             7,527 1.shares-daily.png
// 05/07/2024  12:53 PM             4,943 10.knowsgive.png
// 05/13/2024  04:50 AM             8,614 10.notknowgive.png
// 05/13/2024  04:50 AM             7,918 11.knowsnotworship.png
// 05/07/2024  12:53 PM             9,391 11.knowsworship.png
// 05/13/2024  05:10 AM            16,068 12.makingfirstgen.png
// 05/13/2024  05:10 AM            16,007 12.makingsecondgen.png
// 05/13/2024  05:10 AM            16,164 12.makingthirdgen.png
// 05/13/2024  04:50 AM            13,959 12.notmakingnewdisciples.png
// 05/13/2024  04:50 AM             7,196 2.0-notknowrepent.png
// 05/07/2024  12:53 PM             9,100 2.repents.png
// 05/07/2024  12:53 PM               577 3.goandtell.png
// 05/07/2024  12:53 PM            12,336 3.knowsbaptism.png
// 05/13/2024  04:50 AM             9,135 3.notknowbaptism.png
// 05/07/2024  12:53 PM             4,387 4.knowsbefilled.png
// 05/13/2024  04:50 AM             8,206 4.notknowbefilled.png
// 05/07/2024  12:53 PM            16,521 5.knowsreadword.png
// 05/13/2024  04:50 AM            13,238 5.notknowreadword.png
// 05/07/2024  12:53 PM            10,201 6.knowstolove.png
// 05/13/2024  04:50 AM             7,824 6.notknowtolove.png
// 05/07/2024  12:53 PM            16,831 7.knowscommunion.png
// 05/13/2024  04:50 AM            11,673 7.notknowcommunion.png
// 05/07/2024  12:53 PM             8,868 8.knowspray.png
// 05/13/2024  04:50 AM             7,136 8.notknowpray.png
// 05/07/2024  12:53 PM             2,731 9.knowsbeawed.png
// 05/13/2024  04:50 AM             4,863 9.notknowbeawed.png
// 05/07/2024  12:53 PM             6,696 redline.png
// 05/13/2024  04:50 AM             2,682 x.expectingsomething.png
// 05/13/2024  04:50 AM             4,538 x.goingwithweekly.png
// 05/13/2024  04:50 AM             5,715 x.heldaccountable.png
// 05/13/2024  05:10 AM             3,290 x.notexpectingsomething.png
// 05/13/2024  05:10 AM             5,043 x.notgoingwithweekly.png
// 05/13/2024  05:10 AM             6,916 x.notheldaccountable.png
// 05/13/2024  05:10 AM             4,763 x.notprayedforweekly.png
// 05/13/2024  04:50 AM             7,097 x.prayedforweekly.png

          /*---1---- Believe and repent -------*/
    {
      'header': 'believer',
      'initial': true,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Added one column width
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/1.1knowsgospel.png'
        }
      }
    },
    {
      'header': 'believer-shares-monthly',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Added one column width
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/1.2sharesgospelmonthly.png'
        }
      }
    },
    {
      'header': 'believer-shares-weekly',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Added one column width
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/1.3sharesgospelweekly.png'
        }
      }
    },
    {
      'header': 'believer-shares-daily',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Added one column width
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/1.4sharesgospeldaily.png'
        }
      }
    },

    
    /*=======2 Repents =======*/
    {
      'header': 'repents-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/2.repents.png'
        }
      }
    },
    /*=======3 Baptized =======*/
    {
      'header': 'baptism-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/3.knowsbaptism.png'
        }
      }
    },
    /*=======4 Filled with the Spirit =======*/
    {
      'header': 'filled-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/4.knowsbefilled.png'
        }
      }
    },
    /*=======5 Reads Word =======*/
    {
      'header': 'word-knows',
      'initial': false,
      'type': 'checkbox',
      'class': 'horizontal-checkbox', // custom class to indicate layout preferences
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/5.knowsreadword.png'
        }
      }
    },
    
    /*=======6 Love =======*/
    {
      'header': 'loves-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/6.knowstolove.png'
        }
      }
    },
    /*=======7 Takes Communion =======*/
    {
      'header': 'takesCommunion-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/7.knowscommunion.png'
        }
      }
    },
    /*=======8 Prays =======*/
    {
      'header': 'prayer-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/8.knowspray.png'
        }
      }
    },
    /*=======9 Be Awed "Walks in signs and wonders" =======*/
    {
      'header': 'walksInSignsWonders-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/9.knowsbeawed.png'
        }
      }
    },
    /*=======10 Gives "Is generous" =======*/
    {
      'header': 'gives-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.25 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/10.knowsgive.png'
        }
      }
    },
    /*=======11 Worship/Praise =======*/
    {
      'header': 'worships-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.5 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/11.knowsworship.png'
        }
      }
    },
    /*=======12 Go and Tell =======*/
    {
      'header': 'shares-knows',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/12.notmakingnewdisciples.png'
        }
      }
    },
    {
      'header': 'shares-1stGen',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/12.makingfirstgen.png'
        }
      }
    },
    {
      'header': 'shares-2ndGen',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/12.makingsecondgen.png'
        }
      }
    },
    {
      'header': 'shares-3rdGen',
      'initial': false,
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
          'y': boxHeight * 0.75 + 2,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/12.makingthirdgen.png'
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
      'initial': 'immediatecontactAttemptNeeded',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'nofollowupneeded',
          'class': 'nofollowupneeded',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'immediatecontactAttemptNeeded',
          'class': 'immediatecontactAttemptNeeded',
          'attributes': {
            'rx': 10
          }
        },
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
/*-------------------------------- three  BASE------------------------------*/


        /*--- Expecting Meeting-------*/
{
  'header': 'expectingmeeting',
  'initial': false,
  'type': 'checkbox',
  'svg': {
    'type': 'image',
    'attributes': {
      'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9 - 1, // Moved left by 1 pixel
      'y': boxHeight * 0,
      'width': boxHeight / 4,
      'height': boxHeight / 4,
      'xlink:href': 'icons/x.expectingmeeting.png'
    }
  }
},

/*--- Expecting Aid -------*/
{
  'header': 'expectingaid',
  'initial': false,
  'type': 'checkbox',
  'svg': {
    'type': 'image',
    'attributes': {
      'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9 - 1, // Moved left by 1 pixel
      'y': boxHeight * 0 + boxHeight / 4, // Lowered by one icon's height
      'width': boxHeight / 4,
      'height': boxHeight / 4,
      'xlink:href': 'icons/x.expectingaid.png'
    }
  }
},

 
  /*============================ END of side Bar ============================*/
  

  /*----------------------- start of Base ------------------------------*/
  
  

      /*======= Held Accountable =======*/
  {
    'header': 'heldAccountable',
    'initial': false,
    'type': 'checkbox',
    'svg': {
      'type': 'image',
      'attributes': {
        'x': xOffset + boxHeight * -0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
        'y': boxHeight * 1.05 + 5 - 5, // Moved up by 3 pixels
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'xlink:href': 'icons/x.heldaccountable.png'
      }
    }
  },

  /*======= Prayed For Weekly =======*/
  {
    'header': 'prayedForWeekly',
    'initial': false,
    'type': 'checkbox',
    'svg': {
      'type': 'image',
      'attributes': {
        'x': xOffset + boxHeight * 0 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9,
        'y': boxHeight * 1.05 + 5 - 4, // Moved up by 3 pixels
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'xlink:href': 'icons/x.prayedforweekly.png'
      }
    }
  },

    /*======= Going With Them Weekly =======*/
  {
    'header': 'goingWithWeekly',
    'initial': false,
    'type': 'checkbox',
    'svg': {
      'type': 'image',
      'attributes': {
        'x': xOffset + boxHeight * 0.28 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9 + 2, // Added 2 to move right by 2 pixels
        'y': boxHeight * 1.05 + 5 - 4, // Moved up by 3 pixels
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'xlink:href': 'icons/x.goingwithweekly.png'
      }
    }
  },

  /*============================ END OF base ============================*/
  
  

   // /*======= They share Monthly =======*/
    // {
    //   'header': 'believer-shares-monthly',
    //   'initial': false,
    //   'type': 'checkbox',
    //   'svg': {
    //     'type': 'image',
    //     'attributes': {
    //       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
    //       'y': boxHeight * 0 + boxHeight / 4 * 2, // Positioned under "Expecting Aid"
    //       'width': boxHeight / 4,
    //       'height': boxHeight / 4,
    //       'xlink:href': 'icons/x.goingwithweekly.png'
    //     }
    //   }
    // },

    // /*======= They share Weekly =======*/
    // {
    //   'header': 'believer-shares-weekly',
    //   'initial': false,
    //   'type': 'checkbox',
    //   'svg': {
    //     'type': 'image',
    //     'attributes': {
    //       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
    //       'y': boxHeight * 0 + boxHeight / 4 * 3, // Positioned under "They share Monthly"
    //       'width': boxHeight / 4,
    //       'height': boxHeight / 4,
    //       'xlink:href': 'icons/x.goingwithweekly.png'
    //     }
    //   }
    // },

    // /*======= They share Daily =======*/
    // {
    //   'header': 'believer-shares-daily',
    //   'initial': false,
    //   'type': 'checkbox',
    //   'svg': {
    //     'type': 'image',
    //     'attributes': {
    //       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
    //       'y': boxHeight * 0 + boxHeight / 4 * 4, // Positioned under "They share Weekly"
    //       'width': boxHeight / 4,
    //       'height': boxHeight / 4,
    //       'xlink:href': 'icons/x..png'
    //     }
    //   }
    // },
    // /*======= They share Monthly =======*/
// {
//   'header': 'believer-shares-monthly',
//   'initial': false,
//   'type': 'checkbox',
//   'svg': {
//     'type': 'image',
//     'attributes': {
//       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
//       'y': boxHeight * 0 + boxHeight / 4, // Positioned under "Expecting Aid"
//       'width': boxHeight / 4,
//       'height': boxHeight / 4,
//       'xlink:href': 'icons/x.goingwithweekly.png'
//     }
//   }
// },

// /*======= They share Weekly =======*/
// {
//   'header': 'believer-shares-weekly',
//   'initial': false,
//   'type': 'checkbox',
//   'svg': {
//     'type': 'image',
//     'attributes': {
//       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
//       'y': boxHeight * 0 + boxHeight / 4 * 2, // Positioned under "They share Monthly"
//       'width': boxHeight / 4,
//       'height': boxHeight / 4,
//       'xlink:href': 'icons/x.goingwithweekly.png'
//     }
//   }
// },

// /*======= They share Daily =======*/
// {
//   'header': 'believer-shares-daily',
//   'initial': false,
//   'type': 'checkbox',
//   'svg': {
//     'type': 'image',
//     'attributes': {
//       'x': xOffset + boxHeight * -0.56 - boxHeight / 2 + boxHeight / 4 + boxHeight / 9, // Adjusted x position
//       'y': boxHeight * 0 + boxHeight / 4 * 3, // Positioned under "They share Weekly"
//       'width': boxHeight / 4,
//       'height': boxHeight / 4,
//       'xlink:href': 'icons/x.goingwithweekly.png'
//     }
//   }
// }, 

    // was Timothy red line, but now is accountable red line. 
    {
      'header': 'Timothy',
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
      'header': 'meetingplan',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
    },
    {
      'header': 'expectations',
      'initial': '',
      'class': 'no-horizontal-resize min-width',
      'type': 'textarea'
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
      'header': 'writtenprayer',
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
    {
      'header': 'active',
      'initial': true,
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    },
    // // 
  ]
}
