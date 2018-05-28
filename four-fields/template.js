const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Four fields 0.3',
  'translations': {
    en: {
      translation: {
        template: {
          helpLegend: '<img src="genmapper-node-example.png" style="float:right;margin:10px;margin-left:0px;" alt="legend"><h3>Legend</h3><p>There are 5 squares in the diagram. They stand for:<br>1 - # of unbelievers<br>2 - # of believers<br>3 - # of people in accountability group<br>4 - is the group a church?<br>5 - # of people helping start other groups<br></p><p>Click on the group to edit it.<br>Click on red (x) button to remove group.<br>Click on green (+) button to add child group.</p>',
          name: "Leader's Name",
          coach: 'Coach',
          field1: 'Field 1 (# unbelievers)',
          field2: 'Field 2 (# believers)',
          field3: 'Field 3 (# accountable)',
          field4: 'Field 4 (church?)',
          field5: 'Field 5 (# reproducing)',
          placeDate: 'Place & Date',
          active: 'Active'
        }
      }
    },
    zh: {
      translation: {
        template: {
          'name': '带领者的名字',
          'coach': '教练',
          'field1': '板块1（#非信徒人数）',
          'field2': '板块2（#信徒人数）',
          'field3': '板块3（#有监督）',
          'field4': '板块4（#教会？）',
          'field5': '板块5（#倍增次数）',
          'placeDate': '地点&日期',
          'active': '有活力在发展'
        }
      }
    }
  },
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
      'type': null
    },
    {
      'header': 'parentId',
      'initial': null,
      'type': null
    },
    {
      'header': 'name',
      'initial': 'Name',
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
      'type': 'text'
      // svg defined currently in genmapper.js
    },
    {
      'header': 'field1',
      'initial': 0,
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
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    }
  ]
}
