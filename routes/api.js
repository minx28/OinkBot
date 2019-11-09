var express = require('express');
var router = express.Router();
var apiVer1 = require('./api/1')
const client = require('../bot/app').client;

let version = '1.0.0'
const endpointsList = [
  {
    name: 'Send message to channel',
    type: 'post',
    level: 1,
    endpoint: '/1/sendMessage?token{token}&channel={channelID}&msg={message}',
    required: [
      {
        id: 'token',
        description: 'The developer token, you have been given.'
      },
      {
        id: 'channelID',
        description: 'The ID of the channel you wish to send a message to.'
      },
      {
        id: 'message',
        description: 'The message you wish to send.'
      }],
    optional: [],
    explanation: `Allows you to send messages to a given channel, as the bot. Useful for minigame plugins, that need to announce a winner or lack of players.`
  }, {
    name: 'Send message to user',
    type: 'post',
    level: 1,
    endpoint: '/1/sendMessage?token{token}&user={userID}&msg={message}',
    required: [
      {
        id: 'token',
        description: 'The developer token, you have been given.'
      },
      {
        id: 'userID',
        description: 'The ID of the user you wish to send a message to.'
      },
      {
        id: 'message',
        description: 'The message you wish to send.'
      }],
    optional: [],
    explanation: `Allows you to send messages to a given user, as the bot. Useful for giving out debug information from plugins.`
  },
]
router.use('/1', apiVer1)
router.get('/', function (req, res, next) {
  res.render('api', {
    version: version
  });
});
router.get('/docs', function (req, res, next) {
  res.render('apidocs', {
    version: version,
    endpoints: endpointsList.sort((a, b) => a.name > b.name)
  });
});


module.exports = router;