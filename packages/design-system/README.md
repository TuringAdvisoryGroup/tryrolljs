# @tryrolljs/design-system

## Install

```sh
yarn add @tryrolljs/design-system
npx install-peerdeps @tryrolljs/design-system
```

## Setup

### Web

Import CSS in the root of your app.

```js
import '@tryrolljs/design-system/dist/web/index.css'
```

### Native

The package is ready for `react-native` with a minimum amount of changes. You have to add an alias to your react-native application & it'll work smoothly.

```js
// babel.config.js

module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@tryrolljs/design-system": "@tryrolljs/design-system/dist/native/esm" // Replace `native` with `ios` or `android` if you build for a specific platform
        }
      }
    ]
  ]
}
```

## Usage

Wrap the root of your application with the theme provider.

```js
import { ThemeProvider } from '@tryrolljs/design-system'

const App = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
```

Enjoy using the well-typed package available for ESM & CJS. 🥳

```js
import { Text, useTheme } from '@tryrolljs/design-system'

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Text style={{ color: theme.text.primary }}>
      @tryrolljs/design-system is awesome!
    </Text>
  )
}
```

## Development

Use Storybook to test your changes locally.

```sh
yarn start
```

### Platform-specific components

If you want to have different components for different platforms, you can use the following file extensions:

- .web.(ts|tsx|js|jsx)
- .native.(ts|tsx|js|jsx)
- .ios.(ts|tsx|js|jsx)
- .android.(ts|tsx|js|jsx)
