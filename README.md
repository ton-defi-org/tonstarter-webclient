# TON Starter Template - Web Client

> Starter template for a new TON project - React frontend in TypeScript to communicate with an on-chain contract

## Overview

This project is part of a set of 3 typical repositories needed for a blockchain dapp running on TON blockchain:

* Smart contracts in FunC that are deployed on-chain ([different repo](https://github.com/ton-defi-org/tonstarter-contracts))
* Web frontend for interacting with the dapp from a web browser (this repo)
* Telegram bot for interacting with the dapp from inside Telegram messenger (coming soon)

## What does this repo contain?

* `src/pages/*.tsx` - The different pages in your app website (top level non-reusable components)
* `src/components/*.tsx` - Reusable React components usually for populating pages with special content
* `src/contracts/*.ts` - TypeScript adapters to all integrated on-chain [FunC](https://ton.org/docs/#/func) contracts
* `src/helpers/*.ts` - Project agnostic general purpose helpers that will cut some of your boilerplate
* `src/hooks/*.ts` - Custom React [hooks](https://reactjs.org/docs/hooks-overview.html) implementations
* `src/translations/*.json` - Static textual content (copy) in various languages
* `public/*.*` - Static site assets (like images, HTML files) that will be copied as-is when publishing

There is no one official way to develop smart contracts for TON. Every developer has their own best practices. This setup is definitely opinionated and some developers may not appreciate the choices made. Nevertheless, we stand by every choice made here and believe that this is the optimal setup to develop fully tested contracts in the most seamless way possible.

Some of the opinionated choices made here include:

* Support for all major TON wallets - native mobile wallets, chrome extension, universal deep links
* Based on React library - probably the most popular frontend library for simple declarative UI
* No fancy state management - simple React hooks without libraries like redux or mobx
* Built for Github Pages - the best place to host your open source dapp for free and allow users to fork it
* Material UI - relies on [MUI](https://mui.com/), probably the most popular UI library for JavaScript

## Dependencies and requirements

To setup your local machine for development, please make sure you have the following:

* A modern version of Node.js
  * Installation instructions can be found [here](https://nodejs.org/)
  * Run in terminal `node -v` to verify your installation, the project was tested on `v17.3.0`
* A decent IDE with TypeScript support
  * We recommend using [Visual Studio Code](https://code.visualstudio.com/)

Once your local machine is ready, install the project:

* Git clone the repo locally and rename the directory to your own project name
* In the root repo dir, run in terminal `npm install`

### or.. work 100% online instead

Alternatively, you can ignore the above requirements and develop right inside a web browser with an online IDE and *zero* setup. Simply open this repo inside [Glitch](https://glitch.com/) without installing anything:

* Create your new Glitch workspace by opening [this link](https://glitch.com/edit/#!/remix/clone-from-repo?&REPO_URL=https%3A%2F%2Fgithub.com%2Fton-defi-org%2Ftonstarter-webclient.git) in your browser
* Wait about 40 seconds until installation completes <br>(click the "LOGS" button on the bottom of the IDE to see progress)
* Edit your source files in the `src` directory in the online IDE
* To run terminal commands like `npm run build` click the "TERMINAL" button on the bottom of the online IDE
* Working online is slow! run on a local machine if you want a much faster experience

## Development instructions

* Write code
  * Everything is in the `src/**/*` directory
    * Top-level pages in `src/pages/*.tsx`
    * Adapters to all integrated FunC contracts in `src/contracts/*.ts`
  * To run app in development mode, run in terminal `npm start`
    * Open [http://localhost:3000](http://localhost:3000) to view it in the browser

* Build
  * In the root repo dir, run in terminal `npm run build`
  * Website will be generated and minified in the `docs` directory

* Deploy
  * Make sure Github Pages is enabled in your repo settings
    * In Github: Settings > Pages > Select branch = `main`, Select folder = `/docs`
    * You can also define a [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
  * Deploy built site to Github Pages
    * Simple git push, the `docs` directory contains your website content
  