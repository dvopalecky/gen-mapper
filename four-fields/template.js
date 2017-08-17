const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Four fields 0.3',
  'settings': {
    'nodeSize': {
      'width': boxHeight * 1.5,
      'height': boxHeight * 2.0
    }
  },
  'svg': {
    'big-rect': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight / 2,
        'y': 0,
        'rx': boxHeight * 0.1,
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
    },
    'central-rect': {
      'type': 'rect',
      'attributes': {
        'x': -boxHeight * 0.22,
        'y': boxHeight * 0.28,
        'rx': boxHeight * 0.1,
        'width': boxHeight * 0.44,
        'height': boxHeight * 0.44
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
      'header': 'coach',
      'initial': 'Coach',
      'description': 'Coach',
      'type': 'text'
      // svg defined currently in genmapper.js
    },
    {
      'header': 'field1',
      'initial': 0,
      'description': 'Field 1 (# unbelievers)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight / 2 + textMargin,
          'y': textHeight + textMargin
        },
        'style': {
          'text-anchor': 'start'
        }
      }
    },
    {
      'header': 'field2',
      'initial': 0,
      'description': 'Field 2 (# believers)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight / 2 - textMargin,
          'y': textHeight + textMargin
        },
        'style': {
          'text-anchor': 'end'
        }
      }
    },
    {
      'header': 'field3',
      'initial': 0,
      'description': 'Field 3 (# accountable)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': boxHeight / 2 - textMargin,
          'y': boxHeight - textMargin
        },
        'style': {
          'text-anchor': 'end'
        }
      }
    },
    {
      'header': 'field4',
      'initial': 'No',
      'description': 'Field 4 (church?)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight / 2 + textMargin,
          'y': boxHeight - textMargin
        },
        'style': {
          'text-anchor': 'start'
        }
      }
    },
    {
      'header': 'field5',
      'initial': 0,
      'description': 'Field 5 (# reproducing)',
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': 0,
          'y': boxHeight / 2 + textHeight / 2
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
    }
  ]
}
