# Intro Website

This is a single-page, association-neutral information site on the introduction of the computing and information science studies at Utrecht University.

## Installation

Install node (>=14.4.0) and npm (>=6.1.5):

`nvm install stable`

Install dependencies:

`npm install`

## Developing

`cp sample.env .env`

And fill in the env variables inside `.env` to your liking

`npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Building

`npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Copy the contents of the build folder to the appropiate server.
