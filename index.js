/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"] */

'use strict';

const Alexa = require('alexa-sdk');

const eni18n = require('./i18n/en.json');
const enUKi18n = require('./i18n/en-UK.json');
const enUSi18n = require('./i18n/en-US.json');
const enCAi18n = require('./i18n/en-CA.json');
const enAUi18n = require('./i18n/en-AU.json');

const languageStrings = {
  'en': { translation: eni18n },
  'en-US': { translation: enUSi18n },
  'en-GB': { translation: enUKi18n },
  'en-CA': { translation: enCAi18n },
  'en-AU': { translation: enAUi18n }
};

const handlers = {
  'LaunchRequest': function () {
    const speechOutput = `<audio src="${process.env.AUDIO_BOOT}"></audio><audio src="${process.env.AUDIO_WIMP}"></audio>`;
    const reprompt = `<audio src="${process.env.AUDIO_WIMP}"></audio>`;
    this.emit(':ask', speechOutput, reprompt);
  },
  'GetButter': function () {
    const speechOutput = `<audio src="${process.env.AUDIO_DB}"></audio><audio src="${process.env.AUDIO_WIMP}"></audio>`;
    const reprompt = `<audio src="${process.env.AUDIO_WIMP}"></audio>`;
    this.emit(':ask', speechOutput, reprompt);
  },
  'TellPurpose': function () {
    const speechOutput = `<audio src="${process.env.AUDIO_OMG}"></audio>`;
    this.emit(':tell', speechOutput);
  },
  'NoFriends': function () {
    const speechOutput = `<audio src="${process.env.AUDIO_IANPFF}"></audio>`;
    this.emit(':tell', speechOutput);
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = `${this.t('HELP_MESSAGE')} <audio src="${process.env.AUDIO_WIMP}"></audio>`;
    const reprompt = `${this.t('HELP_REPROMPT')} <audio src="${process.env.AUDIO_WIMP}"></audio>`;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  }
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.process.env.APP_ID = process.env.APP_ID;
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
