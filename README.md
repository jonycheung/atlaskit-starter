# AtlasKit starter

This is a basic app which includes some AtlasKit components, built on top of [create-react-app](https://github.com/facebookincubator/create-react-app). You can use this as a starting point for your next ADG3-themed project.

## Getting started

```bash
yarn # if you don't have yarn, install with: npm install -g yarn
npm run start
```

## Using more AtlasKit components

This repo ships with the `ak-page` and `ak-navigation` components.

You can add other components (listed at http://go/ak) to your project:

```bash
yarn add ak-button
```

Then in `src/App.jsx` (or any related `jsx` file) do the following:

```js
import Button from `ak-button`;

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
