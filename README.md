<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Berkeley Venture Capital – Static Site Source Code
</h1>
This React App was designed and developed by [Web Development at Berkeley](https://webatberkeley.org/). The React flavor is [Gatsby](https://www.gatsbyjs.com/docs/), and the components are from [Chakra UI](https://chakra-ui.com/docs/components/overview). [Storybook](https://storybook.js.org/) was used for some components.

# Introduction

## 🚀 Quick Start

First-Time Setup

- Clone the repo from GitHub
- Ensure `yarn` is installed on your machine
- `yarn global add gatsby-cli` to install the Gatsby CLI
- In `~/.config/gatsby/config.json`, add the following to make Gatsby use Yarn
  ```json
  {
    "cli": {
      "packageManager": "yarn"
    }
  }
  ```

First-Time or After Pulling New Code

- `yarn` to install libraries
- `yarn develop` to start the main web app
- `yarn storybook` to see the storybook

## ✏️ How to Make Common Changes

### Updating Text

...

### Replacing a Link

...

### Replacing an Image

...

# Detailed Information

## 📚 Organization

Here is a partial map of the directory stucture.

```
BVC/
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── fonts/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── templates/
│   │   └── ...
│   └── theme/
│       └── ...
├── ...
├── package.json
└── yarn.lock
```

Notable folders:

- `pages` are top-level React components that inject data (images, titles, captions) into templates

- `templates` are top-level React components that give context to data by passing it to smaller components and organizing the overall layout

- `components` are smaller React components that can be re-used throughout the app

- `assets` contains images and logos

- `fonts` is where typefaces are imported [according to the Chakra docs](https://chakra-ui.com/docs/styled-system/recipes/using-fonts#option-2-using-font-face)
- `theme` defines the site's typography, color scheme, and [custom styling for Chakra components](https://chakra-ui.com/docs/styled-system/theming/customize-theme)
