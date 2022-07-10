const Alexa = require('alexa-sdk');

// Replace with your app ID (OPTIONAL).


const APP_ID = ' ';

const handlers = {
  'LaunchRequest': function () {
    this.emit('WhatDidILearnIntent');
  },
  
  'WhatDidILearnIntent': function () {
    const say = 'Congratulations! You have learned how to build your first Alexa skill.';

    this.response.speak(say);
    this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function () {
    const say = 'You can say what did I learn, or, you can say exit... How can I help you?';

    this.response.speak(say).listen(say);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak('Bye!');
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak('Bye!');
    this.emit(':responseReady');
  }
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}; 


// Happy Alexa !!
