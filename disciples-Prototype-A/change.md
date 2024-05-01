  'discipleType': 'Disciple type',
          'individual': 'Individual',
          'facilitatesGroup': 'Facilitates Group',
          'facilitatesChurch': 'Facilitates Church',
          'active': 'Active'

'discipleStatus': 'Disciple Status',
          'NotFollowedUp': 'Not Followed Up',
          'FollowedUpNoDiscipleshipMeetings': 'Followed Up, No Discipleship Meetings',
          'FollowedUpInDiscipleshipMeetings': 'Followed Up, In Discipleship 
          Meetings',
          'NotInterested': 'NotInterested'


const template = {
  // ... other properties remain the same
  'fields': [
    // ... other fields remain the same
    {
      'header': 'discipleStatus',
      'initial': 'NotFollowedUp',
      'type': 'radio',
      'inheritsFrom': 'box',
      'values': [
        {
          'header': 'NotFollowedUp',
          'class': 'disciple-not-followed-up',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'FollowedUpNoDiscipleshipMeetings',
          'class': 'disciple-followed-up-no-meetings',
          'attributes': {
            'rx': 10
          }
        },
        {
          'header': 'FollowedUpInDiscipleshipMeetings',
          'class': 'disciple-followed-up-in-meetings',
          'attributes': {
            'rx': 0
          }
        }
      ]
    },
    {
      'header': 'NotInterested',
      'initial': false,
      'type': 'checkbox'
      // svg defined currently in genmapper.js
    }
  ]
}