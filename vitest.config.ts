/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    exclude: [
      '**/__tests__/e2e/**',
      '**/__tests__/integration/**',
      '**/node_modules/**',
    ],
    globals: true,
    include: [],
    name: 'unit',
    // include: ['**/__tests__/unit/**/*.test{.ts,.tsx,.js,.jsx}'],
  },
});
