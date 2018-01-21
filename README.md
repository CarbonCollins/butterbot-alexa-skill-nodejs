# butterbot-alexa-skill-nodejs

[![GitHub issues](https://img.shields.io/github/issues/CarbonCollins/butterbot-alexa-skill-nodejs.svg)](https://github.com/CarbonCollins/butterbot-alexa-skill-nodejs/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/CarbonCollins/butterbot-alexa-skill-nodejs/master/LICENSE)
[![David](https://img.shields.io/david/CarbonCollins/butterbot-alexa-skill-nodejs.svg)]()
[![David](https://img.shields.io/david/dev/CarbonCollins/butterbot-alexa-skill-nodejs.svg)]()
[![Known Vulnerabilities](https://snyk.io/test/github/carboncollins/butterbot-alexa-skill-nodejs/badge.svg?targetFile=package.json)](https://snyk.io/test/github/carboncollins/butterbot-alexa-skill-nodejs?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/4600fffc5f96ca0bbf9f/maintainability)](https://codeclimate.com/github/CarbonCollins/butterbot-alexa-skill-nodejs/maintainability)

This is an alexa skill for butterbot. It's main purpose is to pass the butter. however, it was more of an experiment into how to program alexa skills using Node.JS more than anything.

## description

This skill mimics the voice of the butter robot from the popular TV Series Rick & Morty in Season 1 Episode 9. 

When the skill is activated it will ask you what its purpose is, you can respond with either "pass the butter" or "you pass butter" depending which utterance you use with depend if the butter bot becomes self aware or not. As an extra you can also ask the Butter Bot if it "wants to watch a movie" with you.

The skill is for entertainment purposes only and does not control and actual butter bot.

## usage

Once published this skill can be accessed from the Amazon Alexa skill store under the name of "butter bot". This skill first has to be enabled on your alexa account before you can use it.

Once enabled you can start the butterbot by saying: `Alexa, Start butter bot`

from here you can then run any of the follwoing utterances:

* `Pass the butter`
* `You pass butter`
* `Want to watch a movie?`

## intents

This skill is currently programmed to run the following built in alexa intents:

* AMAZON.HelpIntent
* AMAZON.CancelIntent
* AMAZON.StopIntent

as well as the following custom intents:

* LaunchRequest
* GetButter
* TellPurpose
* NoFriends

Planned intents:

* AMAZON.PauseIntent
* AMAZON.ResumeIntent

## other notes

If you have an actual butter bot then please contact me so alexa can command it :D
