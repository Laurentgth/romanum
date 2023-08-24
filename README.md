# Romanum

### ( version 1.1.0 )

### Author: Laurent Gauthier

### Initiated with love in August 2023

## A Roman-Arabic Numerals Converter

I have designed this project as a fun way to learn about creating a UI with [Svelte](https://svelte.dev/) and handling interactivity from a Typescript codebase.

The purpose is to provide a converter from Arabic numerals to Roman numerals and vice versa: the user enters the number and the app instantly displays the conversion.

## Requirements

Your machines needs [NodeJS version 18+ and npm version 9+](https://nodejs.org/fr) to run the app in dev mode and build the project to deploy.

Install the dependencies:

```
npm install
```

## Run the App

The Romanum app can be run in dev mode:

```
npm run dev
```

You may then implement the changes you need. The code then can be verified with:

```
npm run svelte-check
```

When the app is ready to deploy:

```
npm run build
```

The `./dist` folder contains the compiled code to deploy; a preview is accessible from (follow instructions given then):

```
npm run preview
```
