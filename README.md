# AtlasKit starter

This is a basic app which includes some AtlasKit components, built on top of [create-react-app](https://github.com/facebookincubator/create-react-app). You can use this as a starting point for your next ADG3-themed project.

## Getting started

```bash
yarn # if you don't have yarn, install with: npm install -g yarn
npm run start
```

## Using more AtlasKit components

This repo ships with a couple of AtlasKit components such as `ak-navigation`.

You can add other components (listed at [http://go/ak](http://go/ak)) to your project:

```bash
yarn add ak-button
```

Then in the relevant React component file (e.g. `src/App.jsx`) do the following:

```js
import Button from 'ak-button';
import Page from 'ak-page';

// ...

render() {
  <Page>
    <Button>My button text</Button>
  </Page>
}
```

## Want some help?

This repo is helpful for people using AtlasKit + React for the first time. If you've had a look and have more questions, please contact the AtlasKit team in the ["AtlasKit" HipChat room](hipchat://atlassian.hipchat.com/chat/room/AtlasKit).

![Screenshot](https://bitbucket.org/atlassian/atlaskit-starter/raw/master/screenshot.png)