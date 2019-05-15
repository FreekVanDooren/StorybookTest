# Storybook Test
## Preface
The welcoming text of the app is meant to instill that all too common feeling of uneasy relief that I have when developing: 'At least I got to this point'.

## Introduction
Project to see [React Native](https://facebook.github.io/react-native/) and [Storybook](https://storybook.js.org/) and [TypeScript](https://www.typescriptlang.org/) can play nice together.

Followed this tutorial: 

https://pusher.com/tutorials/storybook-react-native

Plus added the Typescript and navigation with a lot of googling.


## Goal
React native app that is integrated with Storybook UI that is navigable from the app.
The idea is that as a developer one could navigate to the StoryBook, but also dive into the app simultaneously.
Admittedly, this is mostly a fear born out of unfamiliarity with Storybook.

## Prerequisites

| Tool | Version |
| ---- | ------- |
| yarn | 1.13.0 |
| npm | 6.1.0 |
| node | 10.3.0 |
| react-native-cli | 2.0.1 |

## How to
### Run
Open iOS simulator or Android emulator or have device connected to computer and then:
```
yarn install
yarn <android|ios> # choose one
```
__NB__ With this version of React Native and XCode 10.2.1, iOS simulator has to be run from XCode itself. 

### Test
```
yarn test
```
If trying to run from Jetbrains IDE, make sure to use Jest run configuration and not npm/node.

## Possible weirdness
1. I introduced TypeScript after starting with this project, so followed migration to TypeScript rather than starting project afresh.
1. Accidentally using library `react-native-navigation` instead of more common `react-navigation`. Got some wires crossed, but decided to keep it. Although the iOS code had to look exactly as in their installation manual with which I'm not overly happy.
1. May have added some unnecessary libraries as I tried to solve an issue that had nothing to do with the project code, but more with me incorrectly downloading the jpg-files.
 


## Conclusion
They can
