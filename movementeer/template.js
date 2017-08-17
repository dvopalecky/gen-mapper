const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'MOVEMENTeer 0.1',
  'settings': {
    'nodeSize': {
      'width': boxHeight * 1.5,
      'height': boxHeight * 2.0
    }
  },
  'svg': {
    'big-rect-1': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight / 2,
        'y': 0,
        'stroke-width': 0,
        'width': boxHeight,
        'height': boxHeight,
        'opacity': 0
      }
    },
    'big-rect-2': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight / 2,
        'y': 0,
        'rx': boxHeight * 0.5,
        'stroke-width': 0,
        'width': boxHeight,
        'height': boxHeight
      }
    },
    'vertical-line': {
      'type': 'line',
      'attributes': {
        'x1': 0,
        'y1': 0,
        'x2': 0,
        'y2': boxHeight
      }
    },
    'horizontal-line': {
      'type': 'line',
      'attributes': {
        'x1': -boxHeight / 2,
        'y1': boxHeight / 2,
        'x2': boxHeight / 2,
        'y2': boxHeight / 2
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
      'initial': 'Name',
      'description': 'Name',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': -textMargin
        }
      }
    },
    {
      'header': 'leaderType',
      'initial': 'timothy',
      'description': 'Leader',
      'type': 'radio',
      'values': [
        {
          'header': 'missionary',
          'description': 'Full time missionary'
        },
        {
          'header': 'existingBeliever',
          'description': 'Existing lay believer'
        },
        {
          'header': 'timothy',
          'description': 'A Timothy'
        }
      ]
    },
    {
      'header': 'unbelievers',
      'initial': 0,
      'description': 'Field 1 (# unbelievers)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight / 4,
          'y': boxHeight / 4 + textMargin
        },
        'style': {
          'text-anchor': 'middle'
        }
      }
    },
    {
      'header': 'believers',
      'initial': 0,
      'description': 'Field 2 (# believers)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight / 4,
          'y': boxHeight / 4 + textMargin
        },
        'style': {
          'text-anchor': 'middle'
        }
      }
    },
    {
      'header': 'leaders',
      'initial': 0,
      'description': 'Field 3 (# leaders)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight / 4,
          'y': boxHeight * 3 / 4 + textMargin
        },
        'style': {
          'text-anchor': 'middle'
        }
      }
    },
    {
      'header': 'reproducing',
      'initial': '0',
      'description': 'Field 4 (# reproducing)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight / 4,
          'y': boxHeight * 3 / 4 + textMargin
        },
        'style': {
          'text-anchor': 'middle'
        }
      }
    },
    {
      'header': 'placeDate',
      'initial': 'Place & Date',
      'description': 'Place & Date',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': boxHeight + textHeight + textMargin
        }
      }
    },
    {
      'header': 'active',
      'initial': true,
      'description': 'Active',
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    },
    {
      'header': 'newBelievers',
      'initial': 0,
      'description': '# New Belivers (since church group started)',
      'type': 'text'
    },
    {
      'header': 'church',
      'initial': false,
      'description': 'Is church?',
      'type': 'checkbox',
      'svg': {
        'type': 'rect',
        'attributes': {
          'x': -boxHeight / 2,
          'y': 0,
          'rx': boxHeight * 0.5,
          'width': boxHeight,
          'height': boxHeight,
          'stroke-dasharray': '7, 7',
          'fill-opacity': 0
        }
      }
    },
    {
      'header': 'actionSteps',
      'initial': '',
      'description': 'Action step/s for this month',
      'type': 'textbox'
    }
  ]
}
