const boxHeight = 80
const textHeight = 14
const textMargin = 6

const template = {
  'name': 'MOVEMENTeer 0.4',
  'translations': {
    'en': {
      'translation': {
        'template': {
          'logo': '<a href="http://movementeer.org/"><img src="http://movementeer.org/movement/wp-content/uploads/2017/08/movementeer-logo.png" style="width:100%; text-align: center; margin:10px 0 5px 0;" alt="Movementeer logo"></a>',
          'helpLegend': '<h3><a href="https://docs.google.com/document/d/1-27v_mjdJHrrN1-UFX8_gTtHVerC1-1e6hSVrXAjNbs/edit?usp=sharing">Further instructions on using Genmapper for Movementeer</a></h3><br><img src="genmapper-node-example.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Legend</h3><p>Each circle represents a group / church. Circle means group, Square means church.<br>Color of border specifies the leader\'s type<br><ul><li><span style="color:#FD0402;">red</span> &mdash; Full time missionary</li><li><span style="color:#3D7AD3;">blue</span> &mdash; Existing lay believer</li><li><span style="color:#5EA650;">green</span> &mdash; Leader\'s disciple</li></ul>On the top the numbers describe: # total, # believers, # baptized.<br>Inside the circle are the elements that are practiced in the group.</p><p>Click on the group to edit it.<br>Click on red (x) button to remove group.<br>Click on green (+) button to add child group.</p>',
          'name': 'Name of the Leader',
          'initialName': "Leader's Name",
          'leaderType': 'Leader',
          'fullTimeMissionary': 'Full time missionary',
          'existingLayBeliever': 'Existing lay believer',
          'leadersDisciple': "Leader's disciple",
          'place': 'Place',
          'date': 'Date started',
          'attenders': '# of Attenders',
          'believers': '# of Believers',
          'baptized': '# of Baptized',
          'church': 'Is church?',
          'elementWord': "Element: God's Word",
          'elementPrayer': 'Element: Prayer',
          'elementLove': 'Element: Love',
          'elementWorship': 'Element: Worship',
          'elementMakeDisciples': 'Element: Make disciples',
          'elementLeaders': 'Element: Leaders',
          'elementGive': 'Element: Giving',
          'elementLordsSupper': "Element: Lord's supper",
          'elementBaptism': 'Element: Baptism',
          'threeThirds': 'Elements of 3/3 process',
          'trainingUsed': 'Training used',
          'trainingPhase': 'Training phase',
          'active': 'Active',
          'actionSteps': 'Action steps for this month',
          'initialActionSteps': 'action',
          'contact': 'How to contact',
          'initialContact': 'contact'
        }
      }
    },
    'pl': {
      'translation': {
        'template': {
          'logo': '<a href="http://movementeer.org/"><img src="http://movementeer.org/movement/wp-content/uploads/2017/08/movementeer-logo.png" style="width:100%; text-align: center; margin:10px 0 5px 0;" alt="Movementeer logo"></a>',
          'helpLegend': '<img src="genmapper-node-example.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Legenda</h3><p>Każde kółko przedstawia grupę / kościół. Kółko oznacza grupę, kwadrat oznacza kościół.<br>Kolor ramki oznacza rodzaj lidera<br><ul><li><span style="color:#FD0402;">czerwony</span> &mdash; pracownik pełnoetatowy</li><li><span style="color:#3D7AD3;">niebieski</span> &mdash; świecka osoba już wcześniej wierząca</li><li><span style="color:#5EA650;">zielony</span> &mdash; uczeń lidera</li></ul>Na górze liczby oznaczają: liczbę całkowitą, liczbę wierzących, liczbę ochrzczonych, liczbę nowoochrzczonych<br>Wewnątrz kółka widzimy elementy praktywkowane przez tę grupę.</p><p>Kliknij na grupę, aby ją edytować.<br>Kliknij na czerwony guzik (x) aby usunąć groupę.<br>Kliknij na zielony guzik (+) aby dodać grupę.</p>',
          'name': 'Imię lidera',
          'initialName': 'Imię lidera',
          'leaderType': 'Lider',
          'fullTimeMissionary': 'Pełnoetatowy pracownik',
          'existingLayBeliever': 'Osoba świecka już wcześniej wierząca',
          'leadersDisciple': 'Uczeń lidera',
          'place': 'Miejsce',
          'date': 'Data rozpoczęcia:',
          'attenders': 'liczba uczestników',
          'believers': 'liczba wierzących',
          'baptized': 'liczba ochrzczonych',
          'church': 'Czy to jest kościół?',
          'elementWord': 'Element: Słowo Boże',
          'elementPrayer': 'Element: Modlitwa',
          'elementLove': 'Element: Miłość',
          'elementWorship': 'Element: Wielbienie',
          'elementMakeDisciples': 'Element: Czynienie uczniami',
          'elementLeaders': 'Element: Liderzy',
          'elementGive': 'Element: Dawanie',
          'elementLordsSupper': 'Element: Wieczerza',
          'elementBaptism': 'Element: Chrzest',
          'threeThirds': 'Elementy procesu 3/3',
          'trainingUsed': 'Używane szkolenie',
          'trainingPhase': 'Faza w szkoleniu',
          'active': 'Aktywny',
          'actionSteps': 'Zadania na ten miesiąc',
          'initialActionSteps': 'Zadanie',
          'contact': 'Jak się skontaktować',
          'initialContact': 'Kontakt'
        }
      }
    },
    'ro': {
      'translation': {
        'template': {
          'helpLegend': '<img src="genmapper-node-example.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Legendăd</h3><p>Fiecare cerc reprezintă un grup/biserică. Cerc reprezintă grup. Pătrat reprezintă biserică.<br>Culoarea de contur arată tipul de lider.<br><ul><li><span style="color:#FD0402;">Roşu</span> &mdash; misionar</li><li><span style="color:#3D7AD3;">Albastru</span> &mdash; Credincios laic</li><li><span style="color:#5EA650;">Verde</span> &mdash; Liderul ucenicului</li></ul>Deasupra numerele descriu: #total, #credincioşi, #botezaţi<br>Înăuntrul cercului sunt elementele practicate în grup.</p><p>Daţi click pe grup ca să editaţi.<br>Daţi click pe butonul roşu (x) ca să ştergeţi grupul.<br>Daţi click pe butonul verde (+) ca să adăugaţi un grup copil.</p>',
          'name': 'Numele Liderului',
          'initialName': 'Numele Liderului',
          'leaderType': 'Lider',
          'fullTimeMissionary': 'Misionar cu normă întreagă',
          'existingLayBeliever': 'Există credincios laic',
          'leadersDisciple': 'Liderul ucenicului',
          'place': 'Locul',
          'date': 'Data începerii:',
          'attenders': '# de Participanţi',
          'believers': 'număr de credincioși',
          'baptized': '# dintre cei botezați',
          'elementWord': 'Element: Cuvântul lui Dumnezeu',
          'elementPrayer': 'Element: Rugăciune',
          'elementLove': 'Element: Iubire frăţească',
          'elementWorship': 'Element: închinare',
          'elementMakeDisciples': 'Element: Faceți ucenici',
          'elementLeaders': 'Element: Lideri',
          'elementGive': 'Element: Dărnicia',
          'elementLordsSupper': 'Element: Cina Domnului',
          'elementBaptism': 'Element: Botezul',
          'threeThirds': 'Elemente de proces 3/3',
          'trainingUsed': 'Instruire utilizată',
          'trainingPhase': 'Faza de instruire',
          'active': 'Activ',
          'actionSteps': 'Pașii de acțiune pentru această lună',
          'initialActionSteps': 'acțiune',
          'contact': 'Cum să contactați',
          'initialContact': 'contact telefonic'
        }
      }
    },
    'ru': {
      'translation': {
        'template': {
          'helpLegend': '<img src="genmapper-node-example.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>легенда</h3><p>«Каждый круг представляет собой группу / церковь. Круг означает группу, Квадрат означает церковь.<br>Цвет границы указывает тип лидера<br><ul><li><span style="color:#FD0402;">красный</span> &mdash; Освобожденный миссионер</li><li><span style="color:#3D7AD3;">синий</span> &mdash; Изначально верующий</li><li><span style="color:#5EA650;">зеленый</span> &mdash; ученик лидера "</li></ul>В верхней части номера описываются: Количество посетителей, # Верующих, # крещеных. <br>Внутри круга находятся элементы, которые практикуются в группе.</p><p>Нажмите на группу, чтобы изменить ее.<br>Нажмите на красную кнопку, чтобы удалить группу.<br>Нажмите зеленую кнопку, чтобы добавить дочернюю группу.</p>',
          'name': 'Имя лидера',
          'initialName': 'Имя лидера',
          'leaderType': 'лидер',
          'fullTimeMissionary': 'Освобожденный миссионер',
          'existingLayBeliever': 'Верующий изначально',
          'leadersDisciple': 'Ученик уверовавший через Лидера',
          'place': 'Место проведения группы',
          'date': 'Дата начала группы:',
          'attenders': 'Количество посетителей',
          'believers': '# Верующих',
          'baptized': '# крещеных',
          'elementWord': 'Элемент: Божье Слово',
          'elementPrayer': 'Элемент: Молитва',
          'elementLove': 'Элемент: Любовь',
          'elementWorship': 'Элемент: Поклонение',
          'elementMakeDisciples': 'Элемент: Ученичество',
          'elementLeaders': 'Элемент: Подготовка Лидеров',
          'elementGive': 'Элемент: Пожертвование',
          'elementLordsSupper': 'Элемент: Вечеря Господня',
          'elementBaptism': 'Элемент: Крещение',
          'threeThirds': 'Элементы: Метод 3 колонок',
          'trainingUsed': 'Обучение',
          'trainingPhase': 'Этап обучения',
          'active': 'активный',
          'actionSteps': 'Шаги действий в этом месяце',
          'initialActionSteps': 'действие',
          'contact': 'Как связаться',
          'initialContact': 'контакт'
        }
      }
    },
    'sq': {
      'translation': {
        'template': {
          'name': 'Emri i Drejtuesit',
          'initialName': 'Emri i Drejtuesit',
          'leaderType': 'Drejtuesi',
          'fullTimeMissionary': 'Misionar me kohe te plote',
          'place': 'Vendodhja',
          'date': 'Data e fillimit',
          'attenders': '# i Pjesemarresve',
          'believers': '# i Besimtareve',
          'baptized': '# i Te pagezuarve',
          'church': 'A eshte kishe?',
          'elementWord': 'Elementet: Fjala e Zotit',
          'elementPrayer': 'Elementet: Lutja',
          'elementLove': 'Elementet: Dashuria',
          'elementWorship': 'Elementet: Adhurimi',
          'elementMakeDisciples': 'Elementet: Berja e dishepujve',
          'elementLeaders': 'Elementet: Drejtuesit',
          'elementGive': 'Elementet: Dhenia',
          'elementLordsSupper': 'Elementet: Darka e Zotit',
          'elementBaptism': 'Elementet: Pagezimi'
        }
      }
    },
    'zh': {
      'translation': {
        'template': {
          'logo': '<a href="http://movementeer.org/"><img src="http://movementeer.org/movement/wp-content/uploads/2017/08/movementeer-logo.png" style="width:100%; text-align: center; margin:10px 0 5px 0;" alt="Movementeer logo"></a>',
          'helpLegend': '<h3>Legend</h3><p>每个圈代表一个组/教会。圈代表小组。正方形代表教会。<br>边框的颜色具体代表带领者类型<br><ul><li><span style="color:#FD0402;">红色</span> &mdash; 全时间工人</li>          <li><span style="color:#3D7AD3;">蓝色</span> &mdash; 现有平信徒</li><li><span style="color:#5EA650;">绿色</span> &mdash; 带领者的门徒</li></ul>在上面的数字分别代表：#总人数，#信徒人数，#受过洗礼者的人数，#新受洗者的人数<br>圈里是这个组在做的事情，不同的组成部分。</p><p>点击组来进行编辑。<br>点击红色 (x)按钮，删除组。<br>点击绿色 (+) 按钮，添加后代组。</p>',
          'name': '带领者的门徒',
          'initialName': '带领者的门徒',
          'leaderType': '带领者',
          'fullTimeMissionary': '全时间工人',
          'existingLayBeliever': '现有平信徒',
          'leadersDisciple': '带领者的门徒',
          'place': '地点',
          'date': '开始日期：',
          'attenders': '#参加者人数',
          'believers': '#信徒人数',
          'baptized': '#受过洗礼者的人数',
          'church': '是教会吗？',
          'elementWord': '组成部分：神的话语',
          'elementPrayer': '组成部分：祷告',
          'elementLove': '组成部分：爱',
          'elementWorship': '组成部分：敬拜',
          'elementMakeDisciples': '组成部分：造就门徒',
          'elementLeaders': '组成部分：领袖',
          'elementGive': '组成部分：奉献',
          'elementLordsSupper': '组成部分：圣餐',
          'elementBaptism': '组成部分：受洗',
          'threeThirds': '3/3过程的要素',
          'trainingUsed': '使用的训练',
          'trainingPhase': '训练阶段',
          'active': '有活力在发展',
          'actionSteps': '这个月的行动点',
          'initialActionSteps': '行动',
          'contact': '如何联系',
          'initialContact': '联系'
        }
      }
    }
  },
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
        'x': -boxHeight * 0.45,
        'y': -2.5 * textHeight,
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'href': 'icons/attenders.png'
      }
    },
    'believers-image': {
      'type': 'image',
      'attributes': {
        'x': -boxHeight * 0.125,
        'y': -2.5 * textHeight,
        'width': boxHeight / 4,
        'height': boxHeight / 4,
        'href': 'icons/believers.png'
      }
    },
    'baptized-image': {
      'type': 'image',
      'attributes': {
        'x': boxHeight * 0.2,
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
      'initialTranslationCode': 'initialName',
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
      'type': 'radio',
      'inheritsFrom': 'church-box',
      'values': [
        {
          'header': 'fullTimeMissionary',
          'class': 'full-time-missionary'
        },
        {
          'header': 'existingLayBeliever',
          'class': 'existing-lay-believer'
        },
        {
          'header': 'leadersDisciple',
          'class': 'leaders-disciple'
        }
      ]
    },
    {
      'header': 'place',
      'initial': '',
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
      'type': 'text',
      'svg': {
        'type': 'text',
        'attributes': {
          'x': -boxHeight * 0.325,
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
          'x': 0,
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
          'x': boxHeight * 0.325,
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
      'header': 'threeThirds',
      'initial': '',
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
      'header': 'active',
      'initial': true,
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    },
    {
      'header': 'actionSteps',
      'initialTranslationCode': 'initialActionSteps',
      'type': 'text'
    },
    {
      'header': 'contact',
      'initialTranslationCode': 'initialContact',
      'type': 'text'
    }
  ]
}
