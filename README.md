# stylelint-plugin-presets

Basic presets for stylelint

## Installation

You'll first need to install [stylelint](https://stylelint.io/):

```sh
npm i stylelint --save-dev
```

Next, install `@dvcol/stylelint-plugin-presets`:

```sh
npm install @dvcol/stylelint-plugin-presets --save-dev
```

And potentially some additional dependencies depending on the preset

```sh

npm install postcss postcss-scss postcss-html prettier --save-dev
```

## Usage

Add `@dvcol/stylelint-plugin-presets/config/<preset>` to the extend array of your .stylelintrc config file

```json
{
  "extends": [
    "@dvcol/stylelint-plugin-presets/config/scss"
  ]
}
```
