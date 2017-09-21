const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'Church circles 0.5',
  'translations': {
    en: {
      translation: {
        'template': {
          'name': "Leader's Name",
          'email': 'Email',
          'link': 'Link',
          'attenders': '# of Attenders',
          'believers': '# of Believers',
          'baptized': '# of Baptized',
          'newlyBaptized': '# of New Baptized (since church start)',
          'church': 'Is church?',
          'churchType': 'Church Type',
          'legacy': 'Legacy',
          'existingBelievers': 'Existing Believers',
          'newBelievers': 'New Believers',
          'elementBaptism': 'Element: Baptism',
          'elementWord': "Element: God's Word",
          'elementPrayer': 'Element: Prayer',
          'elementLordsSupper': "Element: Lord's supper",
          'elementGive': 'Element: Giving',
          'elementLove': 'Element: Love',
          'elementWorship': 'Element: Worship',
          'elementLeaders': 'Element: Leaders',
          'elementMakeDisciples': 'Element: Make disciples',
          'place': 'Place (City, State, Country)',
          'date': 'Date of Start (Ex. 2017-01)',
          'threeThirds': 'Elements of 3/3 process (see help for details)',
          'active': 'Active',
          'initialLeadersName': "Leader's Name",
          'initialPlace': 'Place',
          'initialDate': 'Date'
        }
      }
    },
    es: {
      translation: {
        'template': {
          'name': 'Nombre de lider',
          'initialLeadersName': 'Nombre de lider',
          'email': 'Email',
          'link': 'Vínculo',
          'attenders': '# of assistantes',
          'believers': '# of creyentes',
          'baptized': '# of bautizados',
          'newlyBaptized': '# of nuevos bautizados (desde inicio de iglesia)',
          'church': 'Iglesia?',
          'churchType': 'Tipo de Iglesia:',
          'legacy': 'Tradicional',
          'existingBelievers': 'Creyentes existentes',
          'newBelievers': 'Nuevos creyentes',
          'elementBaptism': 'Elemento: Bautismo',
          'elementWord': 'Elemento: Biblia',
          'elementPrayer': 'Elemento: Oración',
          'elementLordsSupper': 'Elemento: Santa Cena',
          'elementGive': 'Elemento: Dar/Generosidad',
          'elementLove': 'Elemento: Amor',
          'elementWorship': 'Elemento: Adorar',
          'elementLeaders': 'Elemento: Lider',
          'elementMakeDisciples': 'Elemento: Hacer discípulos',
          'place': 'Lugar (Ciudad, Provincia, Pais)',
          'initialPlace': 'Lugar',
          'date': 'Fecha de Inicio (Ex. 2017-01):',
          'initialDate': 'Fecha',
          'threeThirds': 'Elementos del proceso de 3/3  (Ver ayuda para detalles):',
          'active': 'Activo'
        }
      }
    },
    cs: {
      translation: {
        'template': {
          'name': 'Jméno vedoucího',
          'email': 'Email',
          'link': 'Odkaz',
          'attenders': 'Počet účastníků',
          'believers': 'Počet věřících',
          'baptized': 'Počet pokřtěných',
          'newlyBaptized': 'Počet nově pokřtěných (od začátku skupiny)',
          'church': 'Je církev/Boží rodina?',
          'churchType': 'Typ církve',
          'legacy': 'Tradiční',
          'existingBelievers': 'Existující věřící',
          'newBelievers': 'Noví věřící',
          'elementBaptism': 'Prvek: Křest',
          'elementWord': 'Prvek: Boží Slovo',
          'elementPrayer': 'Prvek: Modlitba',
          'elementLordsSupper': 'Prvek: Připomínka Ježíšovy oběti',
          'elementGive': 'Prvek: Dávání',
          'elementLove': 'Prvek: Láska',
          'elementWorship': 'Prvek: Oslava Ježíše',
          'elementLeaders': 'Prvek: Vedoucí',
          'elementMakeDisciples': 'Prvek: Činění učedníků',
          'place': 'Místo',
          'date': 'Datum začátku (např. 2017-01)',
          'threeThirds': 'Prvky 3/3 (viz nápovědu pro více info)',
          'active': 'Aktivní',
          'initialLeadersName': 'Jméno',
          'initialPlace': 'Místo',
          'initialDate': 'Datum'
        }
      }
    }
  },
  'settings': {
    'nodeSize': {
      'width': boxHeight * 1.5,
      'height': boxHeight * 2.1
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
      'type': null
    },
    {
      'header': 'parentId',
      'initial': null,
      'type': null
    },
    {
      'header': 'name',
      'initialTranslationCode': 'initialLeadersName',
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
      'header': 'email',
      'initial': null,
      'type': 'text'
    },
    {
      'header': 'link',
      'initial': null,
      'type': 'text'
    },
    {
      'header': 'attenders',
      'initial': 0,
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
      'header': 'newlyBaptized',
      'initial': 0,
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
      'type': 'checkbox',
      'inheritsFrom': 'church-box',
      'class': {
        'checkedTrue': 'is-church',
        'checkedFalse': 'is-not-church'
      }
    },
    {
      'header': 'churchType',
      'initial': 'newBelievers',
      'type': 'radio',
      'inheritsFrom': 'church-box',
      'values': [
        {
          'header': 'legacy',
          'class': 'church-legacy',
          'attributes': {
            'rx': 0
          }
        },
        {
          'header': 'existingBelievers',
          'attributes': {
            'rx': 0
          }
        },
        {
          'header': 'newBelievers'
        }
      ]
    },
    {
      'header': 'elementBaptism',
      'initial': false,
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
      'header': 'elementWord',
      'initial': false,
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
      'header': 'elementLordsSupper',
      'initial': false,
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
      'header': 'elementGive',
      'initial': false,
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
      'header': 'elementLove',
      'initial': false,
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
      'header': 'elementLeaders',
      'initial': false,
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
      'header': 'elementMakeDisciples',
      'initial': false,
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
      'header': 'place',
      'initialTranslationCode': 'initialPlace',
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
      'initialTranslationCode': 'initialDate',
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
      'header': 'threeThirds',
      'initial': '1234567',
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
      'header': 'active',
      'initial': true,
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    }
  ]
}
