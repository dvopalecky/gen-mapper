var boxHeight = 80;
var textHeight = 14;
var textMargin = 6;

template = {
  "name": "Church circles 0.2",
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
        "width": boxHeight,
        "height": boxHeight,
        "opacity": "0"
      }
    },
    "node-attenders-image": {
      "type": "image",
      "attributes": {
        "x": - boxHeight * 0.5,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/attenders.png"
      }
    },
    "node-believers-image": {
      "type": "image",
      "attributes": {
        "x": - boxHeight * 0.25,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/believers.png"
      }
    },
    "node-baptized-image": {
      "type": "image",
      "attributes": {
        "x": boxHeight * 0.1,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/element-baptism.png"
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
          "y": boxHeight + textHeight
        }
      }
    },
    {
      "header": "email",
      "initial": null,
      "description": "Email",
      "type": "text"
    },
    {
      "header": "link",
      "initial": null,
      "description": "Link",
      "type": "text"
    },
    {
      "header": "attenders",
      "initial": 0,
      "description": "# of Attenders",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": - boxHeight * 0.39,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "believers",
      "initial": 0,
      "description": "# of Believers",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": - boxHeight * 0.13,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "baptized",
      "initial": 0,
      "description": "# of Baptized",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight * 0.13,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "newlyBaptized",
      "initial": 0,
      "description": "# of New Baptized (since church start)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight * 0.39,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "church",
      "initial": false,
      "description": "Is church?",
      "type": "checkbox",
      "svg": {
        "type": "rect",
        "attributes": {
          "x": - boxHeight / 2,
          "y": 0,
          "rx": 0,
          "width": boxHeight,
          "height": boxHeight
        }
      }
    },
    {
      "header": "churchType",
      "initial": "newBelievers",
      "description": "Church Type",
      "type": "radio",
      "values": [
        {
          "header": "legacy",
          "description": "Legacy"
        },
        {
          "header": "existingBelievers",
          "description": "Existing Believers"
        },
        {
          "header": "newBelievers",
          "description": "New Believers"
        }
      ]
    },
    {
      "header": "elementBaptism",
      "initial": false,
      "description": "Element: Baptism",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-baptism.png"
        }
      }
    },
    {
      "header": "elementWord",
      "initial": false,
      "description": "Element: God's Word",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-word.png"
        }
      }
    },
    {
      "header": "elementPrayer",
      "initial": false,
      "description": "Element: Prayer",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-prayer.png"
        }
      }
    },
    {
      "header": "elementLordsSupper",
      "initial": false,
      "description": "Element: Lord's supper",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-lords-supper.png"
        }
      }
    },
    {
      "header": "elementGive",
      "initial": false,
      "description": "Element: Giving",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-give.png"
        }
      }
    },
    {
      "header": "elementLove",
      "initial": false,
      "description": "Element: Love",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-love.png"
        }
      }
    },
    {
      "header": "elementWorship",
      "initial": false,
      "description": "Element: Worship",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-worship.png"
        }
      }
    },
    {
      "header": "elementLeaders",
      "initial": false,
      "description": "Element: Leaders",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-leaders.png"
        }
      }
    },
    {
      "header": "elementMakeDisciples",
      "initial": false,
      "description": "Element: Make disciples",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-make-disciples.png",
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
          "y": boxHeight + 2 * textHeight
        }
      }
    },
    {
      "header": "threeThirds",
      "initial": "1234567",
      "description": "Elements of 3/3 process (see help for details)",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight * -0.7,
          "y": boxHeight * 0.6,
          "transform": "rotate(90 -56 48)",
          "rotate": -90
        },
        "style": {
          "text-anchor": "center",
          "letter-spacing": "0.35em"
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
