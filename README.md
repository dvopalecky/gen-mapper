forked from dvopalecky/gen-mapper
# disciple-mapper
App for mapping generations of reproducible disciples.

## Usage
The app can be found [here]().
For details about usage click the Help button (?) in the app.

There are several variants of the App, e.g. [Four Fields](https://dvopalecky.github.io/gen-mapper/four-fields/index.html) or [Church Circles](https://dvopalecky.github.io/gen-mapper/church-circles/index.html).
These variants use templates so it's relatively easy to create a new variant for specific purpose.

Currently the App use only front-end technologies: HTML, CSS, JavaScript.
It can be also run offline. Downside is that the work must be stored in local .csv files.
Backend support, i.e. saving work on the server, sharing etc. might be added later.

## Example
![gen-mapper example](https://dvopalecky.github.io/gen-mapper/gen-mapper-example1.png)

## Changelog
see [here](changelog.md)

## Known issues
* Safari - not displaying some icons
* Edge/Internet Explorer - wrong display of map

## Ideas for improvements
* Backend support: Saving work on server, sharing, etc.
* Differentiate Between a reaper who didn't disciple the new convert with a red colored disciple (not discipled)
* To address the issues you've highlighted with managing and tracking both discipleship and reaping relationships within the disciple mapper, here's a refined approach to enhancing the tool's functionality:

### Enhanced Data Model

To allow for a more nuanced tracking of discipleship relationships and the initial reaping, the data structure can be modified to include the following fields for each disciple:

1. **Discipled By**: Replaces the current 'Parent' dropdown. This field records the current discipler of the individual. The goal is to disciple new converts and so this is the most important part once a new disciple is added to the disciple map. They should be assigned a disciple maker who can disciple them in reproducible discipleship. We hope to use this app to decrease new convert orphans who are reaped and never discipled. 

2. **Reaped By**: A new entry in the menu that denotes who led the disciple to the Lord. This maintains the connection to the original reaper even if discipleship is reassigned.

3. **Is Discipleship Active (1 or 0)**: Indicates whether discipleship is ongoing (1) or has stopped (0). When discipleship stops (0), the disciple's cell or row could turn red as a visual cue for intervention or follow-up.

By adding these fields, the tool can maintain a clear record of both who led a person to Christ (reaping) and who is currently discipling them, even if these roles shift over time. This dual tracking helps maintain a fuller picture of each disciple's spiritual journey.

### Implementing the Changes

1. **Update User Interface**: Adjust the tool's UI to include the new fields. Use clear labeling and tooltips to guide users on the purpose of each field and how to use them accurately.

2. **Visual Cues for Active/Inactive Discipleship**: Implement color-coding or icons next to disciples to indicate the status of their discipleship. This visual indication can help leaders quickly identify areas of the network that may need attention.

3. **Maintain Historical Data**: When the "Discipled By" field changes, ensure the historical data is preserved. One approach is creating a log or a separate section that records past discipleship relationships, ensuring that the history is not lost when reassignments happen.

4. **Training and Documentation**: Offer clear guidance and training materials for users on how to understand and utilize these new fields. Documentation can include best practices on managing discipleship transitions and monitoring the health of the disciple-making network.

### Advanced Functionality (Optional)

For an even more detailed tracking system:

- **Automatic Alerts or Reports**: Generate automatic alerts or reports for leaders when discipleship activities halt (i.e., when the "Is Discipleship Active" flag is set to 0). This proactive feature can help in timely interventions.

- **Visual Mapping Enhancements**: For visual mapping, consider allowing links or arrows from each disciple to both their "Reaped By" and "Discipled By" individuals. This could visually represent both relationships simultaneously, though it may require a sophisticated design to avoid clutter.

- **Analytics Dashboard**: A dashboard that aggregates data on discipleship effectiveness, highlighting areas of strength and concern within the network. Metrics could include the number of active vs. inactive discipleship relationships, reaping without follow-up, and trends over time.

### Conclusion

By revising the disciple mapper tool to separate and clearly track the roles of reaping and discipling, along with the active status of each discipleship relationship, leaders can gain deeper insights into the health of their disciple-making efforts. These enhancements not only improve operational functionality but also foster a more accountable and effective discipleship network.


## License
MIT

## Projects / pages which use GenMapper:
* [NoPlaceLeft](http://noplaceleft.net/genmapper/)
* [MetaCamp](https://metacamp.org/generational-mapping-software/)
* [TrainingFuerTrainer.de](https://www.trainingfuertrainer.de/baumzeichner/)

## Credits
I found the app [here](https://dvopalecky.github.io/gen-mapper).
I forked the app [here](). 
Curtis Sergeant - introduced the OG programmer to the concept of generational mapping and
  provided useful feedback for this app
Translators from all over the world that helped with different translations
JavaScript/CSS libraries used:
* [d3.js](https://d3js.org) - Mike Bostock
* [FileSaver.js](https://github.com/eligrey/FileSaver.js) - Eli Grey
* [js-xlsx](https://github.com/SheetJS/js-xlsx) - SheetJS
* [lodash](https://lodash.com) - JS Foundation and other contributors
* [hint.css](https://github.com/chinchang/hint.css/) - Kushagra Gour

Icons used:
* [IcoMoon-Free](https://github.com/Keyamoon/IcoMoon-Free) - Keyamoon

tech Stack:
https://stackshare.io/kingdomgits/disciple-mapper

