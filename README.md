# Atlaskit starter

This is a basic app which includes some Atlaskit components, built on top of [create-react-app](https://github.com/facebookincubator/create-react-app). You can use this as a starting point for your next ADG3-themed project.

A live demo is available at [http://atlaskit-starter.surge.sh/](http://atlaskit-starter.surge.sh/)

## Getting started

```bash
yarn
npm run start
```

## Using more Atlaskit components

This repo ships with some of the Atlaskit components such as `@atlaskit/navigation`.

You can add other components (listed at [https://atlaskit.atlassian.com/](https://atlaskit.atlassian.com/)) to your project. To see an exmaple in order to add button in your project run:

```bash
yarn add @atlaskit/button
```

Then in the relevant React component file (e.g. `src/App.jsx`) do the following:

```js
import Button from '@atlaskit/button';

// ...

render() {
  <Page>
    <Button>My button text</Button>
  </Page>
}
```

## Want some help?

This repo is helpful for people using Atlaskit + React for the first time. If you've had a look and have more questions, please open an issue in the repository with clear descriptive title and include as much details as required to answer the questions.

![Screenshot](https://i.imgur.com/p4N266G.gif)
