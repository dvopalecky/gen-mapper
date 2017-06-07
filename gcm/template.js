var boxHeight = 80;
var textHeight = 14;
var textMargin = 6;

template = {
  "name": "GCM 0.1",
  "settings": {
    "nodeSize": {
      "width": boxHeight * 1.5,
      "height": boxHeight * 2.0
    }
  },
  "svg": {
    "node-big-rect": {
      "type": "rect",
      "attributes": {
        "x": - boxHeight / 2,
        "y": 0,
        "rx": boxHeight * 0.1,
        "width": boxHeight,
        "height": boxHeight
      }
    },
    "node-vertical-line": {
      "type": "line",
      "attributes": {
        "x1": 0,
        "y1": 0,
        "x2": 0,
        "y2": boxHeight
      }
    },
    "node-horizontal-line": {
      "type": "line",
      "attributes": {
        "x1": - boxHeight / 2,
        "y1": boxHeight / 2,
        "x2": boxHeight / 2,
        "y2": boxHeight / 2
      }
    }
  },
  "fields": [
    {
      "header": "id",
      "initial": 0,
      "description": "Id",
      "type": null
    },
    {
      "header": "parentId",
      "initial": null,
      "description": "Parent",
      "type": null
    },
    {
      "header": "name",
      "initial": "Name",
      "description": "Name",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": 0,
          "y": -textMargin
        }
      }
    },
    {
      "header": "coach",
      "initial": "Coach",
      "description": "Coach",
      "type": "text"
      // svg defined currently in genmapper.js
    },
    {
      "header": "field1",
      "initial": 0,
      "description": "Field 1 (# unbelievers)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": - boxHeight / 4,
          "y": boxHeight / 4 + textMargin
        },
        "style": {
          "text-anchor": "middle"
        }
      }
    },
    {
      "header": "field2",
      "initial": 0,
      "description": "Field 2 (# believers)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight / 4,
          "y": boxHeight / 4 + textMargin
        },
        "style": {
          "text-anchor": "middle"
        }
      }
    },
    {
      "header": "field3",
      "initial": 0,
      "description": "Field 3 (# leaders)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight / 4,
          "y": boxHeight * 3 / 4 + textMargin
        },
        "style": {
          "text-anchor": "middle"
        }
      }
    },
    {
      "header": "field4",
      "initial": "0",
      "description": "Field 4 (# new churches)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": - boxHeight / 4,
          "y": boxHeight * 3 / 4 + textMargin
        },
        "style": {
          "text-anchor": "middle"
        }
      }
    },
    {
      "header": "placeDate",
      "initial": "Place & Date",
      "description": "Place & Date",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": 0,
          "y": boxHeight + textHeight + textMargin
        }
      }
    },
    {
      "header": "active",
      "initial": true,
      "description": "Active",
      "type": "checkbox"
      // svg defined currently in genmapper.js
    }
  ]
};
