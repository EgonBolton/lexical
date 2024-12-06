/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  api: [{dirName: 'api', type: 'autogenerated'}],
  docs: [
    'intro',
    {
      items: [
        'getting-started/quick-start',
        'getting-started/react',
        'getting-started/theming',
        'getting-started/supported-browsers',
        'getting-started/creating-plugin',
        'getting-started/devtools',
      ],
      label: 'Getting Started',
      type: 'category',
    },
    {
      items: [
        'concepts/editor-state',
        'concepts/nodes',
        'concepts/node-customization',
        'concepts/listeners',
        'concepts/transforms',
        'concepts/commands',
        'concepts/selection',
        'concepts/read-only',
        'concepts/history',
        'concepts/serialization',
        'concepts/dom-events',
      ],
      label: 'Concepts',
      type: 'category',
    },
    process.env.FB_INTERNAL
      ? {
          href: 'https://lexical.dev/docs/packages/lexical',
          label: 'Packages',
          type: 'link',
        }
      : {
          items: [
            {
              dirName: 'packages',
              type: 'autogenerated',
            },
          ],
          label: 'Packages',
          type: 'category',
        },
    {
      items: [
        'react/index',
        'react/plugins',
        'react/create_plugin',
        'react/faq',
      ],
      label: 'React',
      type: 'category',
    },
    {
      items: ['collaboration/react', 'collaboration/faq'],
      label: 'Collaboration',
      type: 'category',
    },
    'faq',
  ],
};

module.exports = sidebars;
