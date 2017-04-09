boxHeight = 80;

template = {
  "name": "Church circles",
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
    },
    "node-central-rect": {
      "type": "rect",
      "attributes": {
        "x": - boxHeight * 0.22,
        "y": boxHeight * 0.28,
        "rx": boxHeight * 0.1,
        "width": boxHeight * 0.44,
        "height": boxHeight * 0.44
      }
    },
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
      "type": "text"
    },
    {
      "header": "coach",
      "initial": "Coach",
      "description": "Coach",
      "type": "text"
    },
    {
      "header": "field1",
      "initial": 0,
      "description": "Field 1 (# unbelievers)",
      "type": "text"
    },
    {
      "header": "field2",
      "initial": 0,
      "description": "Field 2 (# believers)",
      "type": "text"
    },
    {
      "header": "field3",
      "initial": 0,
      "description": "Field 3 (# accountable)",
      "type": "text"
    },
    {
      "header": "field4",
      "initial": 0,
      "description": "Field 4 (church?)",
      "type": "text"
    },
    {
      "header": "field5",
      "initial": 0,
      "description": "Field 5 (# reproducing)",
      "type": "text"
    },
    {
      "header": "placeDate",
      "initial": "Place & Date",
      "description": "Place & Date",
      "type": "text"
    },
    {
      "header": "active",
      "initial": true,
      "description": "Active",
      "type": "checkbox"
    }
  ]
};
