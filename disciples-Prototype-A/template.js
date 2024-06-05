const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Disciples 0.2',
  'translations': {
    en: {
      /**============================================
       *                what the node menu displays
       *=============================================**/
      translation: {
        'template': {
          'helpLegend': '<p>This version of GenMapper is for mapping individual disciples, not groups/churches. Each rectangle represents a disciple.</p><p>Click on the disciple to edit.<br>Click on red (x) button to remove a disciple.<br>Click on green (+) button to add child disciple.</p>',
          'name': 'Name',
          'reaper': 'Who led them to Jesus Christ?',
          'date': 'Date of Salvation',
          'phone': 'Phone Number',
          'address': 'Address',
          
          'barrierstomultiplication': 'Major Barriers to Multiplication',
          'prayerrequests': 'Prayer Requests/Answers',
          'Prayer': 'Prayer for them',
          'nextmeeting': 'Next Meeting (Goals, Rythms)',
          
          
          /*================== Checkboxes =================*/
           
          'believer': 'Believer?',
          'hasbible': 'Has Bible', //
          'word': 'Abiding in Word', // self feeding: Bible
          'prayer': 'Abiding in Prayer', // self feeding: Prayer
          'discipleship': 'Discipleship Weekly with you?',  
          'accountable': 'Held Accountable (sins, goals)', // who is keeping them accountable? // this is below in the discipleship status.
          // did we obey what we are reading, is it applicable, are they being asked to be accountable?
          'baptized': 'Baptized',           
          'persecution': 'Ready for rejection/persecution',
          'canshare' : 'Can Share Gospel/Testimony',
          'shares': 'Shares Gospel/Testimony',
          'makingconverts': 'Leading people to Jesus',
          'makingdisciples': 'Discipling new converts', // problem, people will disciple existing believers, yet never make a convert and lead that convert to be a disciple. Just going to existing converts and discipling them is not making new converts and making new disciples. 
          'baptizing': 'Baptizing Others',
          'inChurch': "In a Church/Group?",
          'startingchurches': "Starting Churches",
          

          
          
          
          
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
          

          /*-------------- Timothy Red Underline on Node box-----------------*/
          'timothy': 'Is Timothy (key disciple)?',
          
          /**======================
           *    Turns the node grey 
           *      if it is not checked
           *========================**/
          'active': 'Wants Discipleship?',

          /*========================*/
          // EVANGEL FIRE. INCREASE THE PACE!
          'weeklydiscipleship': 'Discipleship Weekly with you?',
          'weeklysharingtogether': 'Evangelism weekly with you?',
          'weeklysharingothers': 'Evangelism weekly with friends',
          'canequipsaints-sharejesus': 'Can equip saints to share Jesus',
          'isequipsaints-sharejesus': 'Equipping saints to share Jesus',
          'canfollowup': 'Can do follow-up discipleship',
          'isfollowingupgroups': 'Is following up into groups',

          'weeklygroup': 'Leads Disciple Groups weekly?',
          
          

          
          
          // /**======================
          //  *    DISCIPLESHIP ABILITY TEMPLATE
          //  *========================**/
          // 'disciplerStatus': 'Faithful in discipling others?',
          // 'notGoingDiscipler': 'No, not going faithfully',
          // 'inModellingPhaseDiscipler': 'in Model phase',
          // 'inAssistPhaseDiscipler': 'in Assist phase',
          // 'inWatchPhaseDiscipler': 'in Watch phase',
          // 'launchedSuccessfullyDiscipler': 'in Launch phase',
          // 'mawlingothersDiscipler': '"MAWL"ing Others',
      
          //footer tracking notes
          
          'followupnotes': 'Follow-up Progress',
          'disciplestatusnotes': 'Discipleship Progress', 
          'disciplestatusaccountability': 'Accountability Progress',
          'training-shares': 'Train them to Share Jesus',
          'training-followup': 'Train them to Follow Up',
          'training-discipleothers': 'Train them to Disciple Groups',
          'training-simplechurch': 'Train them to Start Churches',
          'Notes': 'Extra Notes'
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
  /**============================================
   *          node box size and placement
   *=============================================**/
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
    /**======================
     *    node size
     *========================**/
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
  /**============================================
   *               Node menu fields
   *  These are the underlying variables that
   *  the template uses. The node menu may display
   *  'Who led them to Jesus Christ?' while the
   *  underlying variable is 'reaper'. You can 
   *  scroll down and find the reaper field.
   *  If I changed the reaper field, then the 
   *  template above that has the code
   *  'reaper': 'Who led them to Jesus Christ?'
   *  would no longer display the correct text.
   *  'reaper' field must be defined first. 
   *  Then you can edit the template and it will
   *  display the text you want where the field
   *  is referenced.. For example, the fields
   *  below are ordered from top to bottom.
   *  If you look at the node menu, you will see
   *  it displays the fields in the order they
   *  are defined below. If you want to change
   *  the order of the fields in the node menu,
   *  you must change the order of the fields
   *  below. Then, you will see the text defined
   *  in the template above displayed in the menu 
   *  in the order you defined the fields below. 
   *  If you want to add a new field to the menu
   *  you must define it below. For example, if 
   *  I wanted to define a new field called 
   *  'favorite-gospel-sharing-tool', and I wanted 
   *  it to be at the bottom of the node menu, 
   *  then I would add a new field below called
   *  'favorite-gospel-sharing-tool' at the bottom
   *  of the list. Then I would go up to the 
   *  template and add the text I want to display
   *  like so:
   *  'favorite-gospel-sharing-tool': '3 Circles',
   *  'This would add a new line in the node menu
   *  that displays '3 Circles' at the bottom of the
   *  menu. If I wanted to add a new field to the
   *  middle of the menu, I would add the field
   *  in the middle of the list below. Then I would
   *  go up to the template and add the text I want
   *  to display.  
   *=============================================**/
  
  
  'fields': [
    /**======================
   *    Each node has an ID
   *========================**/
    {
      'header': 'id',
      'initial': 0,
      'type': null
    },
    /**======================
   * Each node has a parent ID
   * example:
   * John is discipling Matthew
   * John is the parent
   * Matthew is the child
   * -- you can change what
   * -- each node displays
   * -- for the parentID
   * -- in the translations.js
   * -- file that translates
   * -- parentId to "discipler"
   * -- in English, but has
   * -- not been updated for 
   * -- other languages in
   * -- translations.js
   *========================**/
  /*================================ Menu Discipler ===========================*/
  
  
    {
      'header': 'parentId', // parent
      'initial': null,
      'type': null
    },
    /**======================
   *    Each node has a name
   * Example: 
   * the name of the disciple
   * in one of the node menus
   * is 'name', but when 
   * editted to 'John' it will
   * display 'John' in the node
   * in the name textbox.
   *========================**/
  /*================================ MENU NAME ==============================*/
  
   
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
    /**======================
   *    Each node has a reaper
   * or the person who led them
   * to Jesus Christ. 
   * Example:
   * John led Matthew to Jesus
   * Christ. John is the reaper.
   * Matthew is the disciple.
   * IMPORTANT NOTE:
   * Why do we have a reaper
   * field, but also a parent
   * ID field? The reaper
   * often is not trained
   * to disciple new believers.
   * So who reaped the person
   * may not be the same person
   * who is discipling the person.
   * so the parent ID field is
   * the person who is discipling
   * the new believer. The reaper
   * field is the person who led
   * them to Jesus Christ.
   *========================**/
  /*================================ Menu Reaper ==============================*/
  
  
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
    /*========================== Menu Barriers to Multiplication =============*/
    {
      'header': 'barrierstomultiplication',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    /*================================ Prayer =========================*/
    {
      'header': 'prayerrequests',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'Prayer',
      'initial': '"Jesus may this person enter eternal life through you. -- Continue typing prayers, or call them and record how you are praying for them here."', // prayer
      'type': 'textarea',
      'class': 'no-horizontal-resize' // trying to add textarea instead of text 
    }, 
    
    /*================================ Menu Next Meeting ======================*/
    
    
    {
      'header': 'nextmeeting',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
            /**============================================
     *               Below are the drop down menus
     * that display multiple options for you to 
     * select. 
     * 
     * These menues are for the training process
     * I'm hoping to make it seem fun to MAWL 
     * new believers and existing believers and 
     * help them to reach their lost friends and 
     * disciple them. I'm hoping to create drop 
     * down menus where the user can see where 
     * their disciples are at in each of the 
     * phases of followed up, in discipleship
     * sharing with others, following up with 
     * others, and discipling others. 
     * 
     * For example, the followupStatus
     * drop down menu has multiple options for
     * you to select. You can customize the options
     * by changing the values in the drop down menu.
     * You can also customize the text that displays
     * in the node menu by changing the text in the
     * template above. 
     * 
     * For example in the followupStatus menu:
     * In the actual node menu where you can click
     * buttons and view information for each disciple,
     * the template code above
     * displays 'Followed Up? (Yes/No)', and there
     * are multiple options for you to select.
     * The text displayed in the menu is defined in
     * the template above. The options are defined
     * below. If you want to change the text that
     * displays in the node menu, you must change
     * the text in the template above. If you want
     * to change the options in the drop down menu,
     * you must change the options below.
     * For example FOR ADDING NEW OPTIONS TO THE 
     * DROP DOWN:
     * You can add a new value to the drop down
     * by adding a header which defines its field
     * and you can add a class which defines the
     * value of the field. You can also add an
     * attribute which defines the position of
     * the value in the drop down.
     * If I wanted to add a new option to the
     * followupStatus drop down menu at the top of 
     * the other options, I would add a new value
     * at the top values in the followupStatus and
     * copy the same formatting as the other values.
     * Then I would go up to the template and add
     * the text I want to display in the node menu
     * like so:
     * 'disciple-no-follow-up': 'No, Go Therefore!',
     * disciple no follow up is the header of the
     * value in the drop down menu. 'No, Go Therefore!'
     * is the text that will display in the node menu.
     * Basically the values below position the variable
     * and the template above adds text to the variables
     * and displays the text where the variables are 
     * positioned below. 
    
     *=============================================**/
    /**============================================
     *              SUMMARY OF TRAINING BOXES + COLORS
     *  AGAIN, after that long
     * explanation, the values below are the 
     * options that display in the multi select
     * options in the node menu. I put color changes
     * to the node boxes in style.css. If one option
     * is clicked then it will change the color of the
     * node box. 
     * For example (Followup)
     *  no followup, go therefore = red
     *  followed up, not interested = grey
     *  followed up, no meetings = orange
     *  followed up, in meetings = green
     * Further example (Discipleship Status)
     * 
     *  
     *=============================================**/
    /**============================================
     *               Multiselect OPtions in Node Menu
     * aka. Dropdown menus
     *=============================================**/
    /**======================
     *    Followup Status Options
     *    Contact Attempt Needed
     *    Contact Attempted
     *    Contact Established
     *    First Meeting Scheduled
     *    First Meeting Complete
     *    Ongoing Meetings
     *    Being Coached
     *========================**/
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
        }
      ]
    },
    // relational stewardship
    // friends, family, neighbors, coworkers, classmates
    // every people tribe, tongue, and nation
    // make a list of 100 people (interact with on a regular basis, know how to get a hold of them, we have to be patient and persistent). 
    //Stewarding lost relationships;
    //Reaching their 
    // Evangelism weekly with friends:
    // Has list of 
    // Has a list of lost people (100 people) 
    // 
    
   

//   /**======================
//    * Discipleship Status Options prototype
//    when you click on an option in the MAWL 
//    dropdown menu, it will change the color of
//    the node box.
//    
// {
//   'header': 'disciplerStatus',
//   'initial': 'notGoingDiscipler',
//   'type': 'radio',
//   'inheritsFrom': 'box',
//   'values': [
//     {
//       'header': 'notGoingDiscipler',
//       'class': 'notGoingDiscipler',
//       'attributes': {
//         'rx': 10
//       }
//     },
//     {
//       'header': 'inModellingPhaseDiscipler',
//       'class': 'inModellingPhaseDiscipler',
//       'attributes': {
//         'rx': 10
//       }
//     },
//     {
//       'header': 'inAssistPhaseDiscipler',
//       'class': 'inAssistPhaseDiscipler',
//       'attributes': {
//         'rx': 10
//       }
//     },
//     {
//       'header': 'inWatchPhaseDiscipler',
//       'class': 'inWatchPhaseDiscipler',
//       'attributes': {
//         'rx': 10
//       }
//     },
//     {
//       'header': 'launchedSuccessfullyDiscipler',
//       'class': 'launchedSuccessfullyDiscipler',
//       'attributes': {
//         'rx': 0
//       }
//     },
//     {
//       'header': 'mawlingothersDiscipler',
//       'class': 'mawlingothersDiscipler',
//       'attributes': {
//         'rx': 0
//       }
//     }
//   ]
// },
    /**============================================
     *               Below are the checkboxes
     *  that display icons in each node. 
     * For example, if the believer checkbox
     * is checked, then the believer icon
     * will display in the node. If the believer
     * checkbox is not checked, then the believer
     * icon will not display in the node. 
     * You can customize the icons by changing
     * the icons in the icone folder.
     *=============================================**/
    /*================================ Check Believer ==========================*/
    
    
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
    /*================================ Check Baptized ==========================*/
    
    
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
    /*================================ Check WORD ==============================*/
    
    
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
    /*================================ Check Prayer ===========================*/
    
    
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
    /*================================ Check Shares ==========================*/
    
    
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
    /*================================ Check Accountable =======================*/
    
    
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
    /*================================ Check Discipleship ======================*/
    
    
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
    /*================================ Check inChurch =========================*/
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
      'header': 'weeklysharingtogether',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'weeklysharingothers',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'canequipsaints-sharejesus',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'isequipsaints-sharejesus',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'canfollowup',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'isfollowingupgroups',
      'initial': false,
      'type': 'checkbox'
    },
    {
      'header': 'weeklygroup',
      'initial': false,
      'type': 'checkbox'
    },
   

    
    {
      'header': 'followupnotes',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'disciplestatusnotes',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    }, 
    {
      'header': 'disciplestatusaccountability',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'training-shares',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'training-followup',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'training-discipleothers',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'training-simplechurch',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize'
    },
    {
      'header': 'Notes',
      'initial': 'Jesus please bless this person',
      'type': 'textarea',
      'class': 'no-horizontal-resize' // trying to add textarea instead of text 
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

