const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'MOVEMENTeer 0.3',
  'settings': {
    'nodeSize': {
      'width': boxHeight * 1.5,
      'height': boxHeight * 2.3
    }
  },
  'svg': {
    'big-rect': {
      // Rect with opacity 0, so that one could hover over all the square even
      // if the visible shape is circle
      'type': 'rect',
      'attributes': {
        'x': -boxHeight / 2,
        'y': 0,
        'width': boxHeight,
        'height': boxHeight,
        'opacity': '0'
      }
    },
    'attenders-image': {
      'type': 'image',
      'attributes': {
        'x': -boxHeight * 0.5,
        'y': -2.5 * textHeight,
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'href': 'icons/attenders.png'
      }
    },
    'believers-image': {
      'type': 'image',
      'attributes': {
        'x': -boxHeight * 0.25,
        'y': -2.5 * textHeight,
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'href': 'icons/believers.png'
      }
    },
    'baptized-image': {
      'type': 'image',
      'attributes': {
        'x': boxHeight * 0.1,
        'y': -2.5 * textHeight,
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'href': 'icons/element-baptism.png'
      }
    },
    'church-box': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight / 2,
        'y': 0,
        'rx': 0.5 * boxHeight,
        'width': boxHeight,
        'height': boxHeight
      }
    }
  },
  'fields': [
    {
      'header': 'id',
      'initial': 0,
      'description': 'Id',
      'type': null
    },
    {
      'header': 'parentId',
      'initial': null,
      'description': 'Parent',
      'type': null
    },
    {
      'header': 'name',
      'initial': "Leader's Name",
      'description': 'Name of the Leader',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': boxHeight + textHeight
        }
      }
    },
    {
      'header': 'leaderType',
      'initial': 'fullTimeMissionary',
      'description': 'Leader',
      'type': 'radio',
      'inheritsFrom': 'church-box',
      'values': [
        {
          'header': 'fullTimeMissionary',
          'description': 'Full time missionary',
          'class': 'full-time-missionary'
        },
        {
          'header': 'existingLayBeliever',
          'description': 'Existing lay believer',
          'class': 'existing-lay-believer'
        },
        {
          'header': 'leadersDisciple',
          'description': "Leader's disciple",
          'class': 'leaders-disciple'
        }
      ]
    },
   {
      'header': 'place',
      'initial': '',
      'description': 'Place',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': boxHeight + 2 * textHeight
        }
      }
    },
    {
      'header': 'date',
      'initial': '',
      'description': 'Date started',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': boxHeight + 3 * textHeight
        }
      }
    },
    {
      'header': 'attenders',
      'initial': 0,
      'description': '# of Attenders',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight * 0.39,
          'y': -0.5 * textMargin
        },
        'style': {
          'text-anchor': 'center'
        }
      }
    },
    {
      'header': 'believers',
      'initial': 0,
      'description': '# of Believers',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight * 0.13,
          'y': -0.5 * textMargin
        },
        'style': {
          'text-anchor': 'center'
        }
      }
    },
    {
      'header': 'baptized',
      'initial': 0,
      'description': '# of Baptized',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight * 0.13,
          'y': -0.5 * textMargin
        },
        'style': {
          'text-anchor': 'center'
        }
      }
    },
    {
      'header': 'multipliers',
      'initial': '1',
      'description': '# of Multiplying disciples',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight * 0.39,
          'y': -0.5 * textMargin
        },
        'style': {
          'text-anchor': 'center'
        }
      }
    },
    {
      'header': 'church',
      'initial': false,
      'description': 'Is church?',
      'type': 'checkbox',
      'inheritsFrom': 'church-box',
      'attributes': {
        'rx': {
          'checkedTrue': 0,
          'checkedFalse': 0.5 * boxHeight
        }
      }
    },
    {
      'header': 'elementWord',
      'initial': false,
      'description': "Element: God's Word",
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.125,
          'y': boxHeight * 0.1,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-word.png'
        }
      }
    },
    {
      'header': 'elementPrayer',
      'initial': false,
      'description': 'Element: Prayer',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0.15,
          'y': boxHeight * 0.1,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-prayer.png'
        }
      }
    },
    {
      'header': 'elementLove',
      'initial': false,
      'description': 'Element: Love',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0.15,
          'y': boxHeight * 0.375,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-love.png'
        }
      }
    },
    {
      'header': 'elementWorship',
      'initial': false,
      'description': 'Element: Worship',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.4,
          'y': boxHeight * 0.65,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-worship.png'
        }
      }
    },
    {
      'header': 'elementMakeDisciples',
      'initial': false,
      'description': 'Element: Make disciples',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': boxHeight * 0.15,
          'y': boxHeight * 0.65,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-make-disciples.png'
        }
      }
    },
    {
      'header': 'elementLeaders',
      'initial': false,
      'description': 'Element: Leaders',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.125,
          'y': boxHeight * 0.65,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-leaders.png'
        }
      }
    },
    {
      'header': 'elementGive',
      'initial': false,
      'description': 'Element: Giving',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.125,
          'y': boxHeight * 0.375,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-give.png'
        }
      }
    },
    {
      'header': 'elementLordsSupper',
      'initial': false,
      'description': "Element: Lord's supper",
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.4,
          'y': boxHeight * 0.375,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-lords-supper.png'
        }
      }
    },
    {
      'header': 'elementBaptism',
      'initial': false,
      'description': 'Element: Baptism',
      'type': 'checkbox',
      'svg': {
        'type': 'image',
        'attributes': {
          'x': -boxHeight * 0.4,
          'y': boxHeight * 0.1,
          'width': boxHeight / 4,
          'height': boxHeight / 4,
          'xlink:href': 'icons/element-baptism.png'
        }
      }
    },
    {
      'header': 'threeThirds',
      'initial': '',
      'description': 'Elements of 3/3 process',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight * -0.7,
          'y': boxHeight * 0.6,
          'transform': 'rotate(90 -56 48)',
          'rotate': -90
        },
        'style': {
          'text-anchor': 'center',
          'letter-spacing': '0.35em'
        }
      }
    },
    {
      'header': 'trainingUsed',
      'initial': '',
      'description': 'Training used',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight * 0,
          'y': boxHeight + 4 * textHeight
        },
        'style': {
          'text-anchor': 'end'
        }
      }
    },
    {
      'header': 'trainingPhase',
      'initial': '',
      'description': 'Training phase',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight * 0.1,
          'y': boxHeight + 4 * textHeight
        },
        'style': {
          'text-anchor': 'start'
        }
      }
    },
    {
      'header': 'contact',
      'initial': '',
      'description': 'Contact info',
      'type': 'text',
    },
    {
      'header': 'active',
      'initial': true,
      'description': 'Active',
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    },
    {
      'header': 'actionSteps',
      'initial': 'action',
      'description': 'Action steps for this month',
      'type': 'text'
    }
  ]
}
