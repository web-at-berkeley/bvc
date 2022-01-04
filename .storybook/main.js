import { join } from 'path';
const toPath = (_path) => join(process.cwd(), _path);

export const stories = [
  '../src/templates/*.stories.tsx',
  '../src/components/*.stories.tsx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];
export const addons = ['@storybook/addon-links', '@storybook/addon-essentials'];
export const core = {
  builder: 'webpack5',
};
export const typescript = { reactDocgen: false };
export async function webpackFinal(config) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    },
  };
}
