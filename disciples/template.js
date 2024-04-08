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
          'date': 'Date of decision to follow Jesus',
          'phone': 'Phone Number',
          'address': 'Address',
          'believer': 'Is believer?',
          'baptized': 'Is baptized?',
          'word': 'Abides in Word',
          'prayer': 'Abides in Prayer',
          'shares': 'Shares Jesus',
          'accountable': 'Is accountable',
          'discipleship': 'Has discipleship',
          'inChurch': "In a Church?",
          'timothy': 'Is Timothy (key disciple)?',
          
          /**======================
           *    
           *========================**/
          'active': 'Wants Discipleship?',

          /*================== Multiple Options Drop Downs =================*/
          
          
          /**============================================
           *               FOLLOW-UP STATUS
           *=============================================**/
          'followupStatus': 'Followed Up? (Yes/No)', // Changed property name
          'disciple-no-follow-up': 'No, Go Therefore!', // Changed property name and value
          'followed-up-not-interested': 'Went, not interested',
          'disciple-followed-up-no-meetings': 'Yes, no discipleship', // Changed property name and value
          'disciple-followed-up-in-meetings': 'Yes, in discipleship!', // 

          /**======================
           *    EVANGELISM ABILITY
           *========================**/
          'gospelsharingStatus': 'Sharing Gospel with Others?', // Changed property name
          'reaperunequipped': 'No, needs training',
          'reapercompetence': 'Competent- Trained',
          'reaperconfidence': 'Confident- Applying',
          'reapercommitment': 'Committed- Weekly',

          /**======================
           *    FOLLOW-UP ABILITY
           *========================**/
          'followingupStatus': 'Following Up With Others?', // Changed property name
          'followingupunequipped': 'No, needs training',
          'followingupcompetence': 'Competent- Trained',
          'followingupconfidence': 'Confident- Applying',
          'followingupcommitment': 'Committed- 24hr',
          
          /**======================
           *    DISCIPLESHIP ABILITY TEMPLATE
           *========================**/
          'disciplerStatus': 'Discipling Others?', // Changed property name
          'disciplerunequipped': 'No, needs training',
          'disciplercompetence': 'Competent- Trained',
          'disciplerconfidence': 'Confident- Applying',
          'disciplercommitment': 'Committed- Weekly',
          //footer
          'Notes': 'Notes'
          
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
   *========================**/
    {
      'header': 'parentId',
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
    /**----------------------
     *  Each node has a phone
     *  number and address
     *------------------------**/
    {
      'header': 'phone',
      'initial': null,
      'type': 'text'
    },
    {
      'header': 'address',
      'initial': null,
      'type': 'text'
    },
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
    /**============================================
     *               Below are the drop down menus
     * that display multiple options for you to 
     * select. For example, the followupStatus
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
     *               AGAIN, after that long
     * explanation, the values below are the 
     * options that display in the multi select
     * options in the node menu.
     *=============================================**/
    /**============================================
     *               Multiselect OPtions in Node Menu
     * aka. Dropdown menus
     *=============================================**/
    /**======================
     *    Followup Status Options
     *========================**/
    {
      'header': 'followupStatus',
      'initial': 'disciple-no-follow-up',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'disciple-no-follow-up', // Changed header
          'class': 'disciple-no-follow-up',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'followed-up-not-interested', // Changed header
          'class': 'followed-up-not-interested',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-no-meetings', // Changed header
          'class': 'disciple-followed-up-no-meetings',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciple-followed-up-in-meetings', // Changed header
          'class': 'disciple-followed-up-in-meetings',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },
    /**======================
     *  Gospel Sharing Status Options
     *========================**/
    {
      'header': 'gospelsharingStatus',
      'initial': 'reaperunequipped',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'reaperunequipped',
          'class': 'reaperunequipped',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'reapercompetence',
          'class': 'reapercompetence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'reaperconfidence',
          'class': 'reaperconfidence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'reapercommitment',
          'class': 'reapercommitment',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },
    /**======================
     *   Following Up with others Options
     *========================**/
    {
      'header': 'followingupStatus',
      'initial': 'followingupunequipped',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'followingupunequipped',
          'class': 'followingupunequipped',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'followingupcompetence',
          'class': 'followingupcompetence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'followingupconfidence',
          'class': 'followingupconfidence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'followingupcommitment',
          'class': 'followingupcommitment',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },
    /**======================
     * Discipling Others Status Options
     *========================**/
    {
      'header': 'disciplerStatus',
      'initial': 'disciplerunequipped',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'disciplerunequipped',
          'class': 'disciplerunequipped',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciplercompetence',
          'class': 'disciplercompetence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciplerconfidence',
          'class': 'disciplerconfidence',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'disciplercommitment',
          'class': 'disciplercommitment',
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
    },
    {
      'header': 'Notes',
      'initial': '',
      'type': 'textarea',
      'class': 'no-horizontal-resize' // trying to add textarea instead of text 
    }
  ]
}

