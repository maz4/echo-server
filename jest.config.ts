// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverageFrom: [
    './src',
    '**/*.{ts}',
    '!**/*.d.ts',
    '!/node_modules/**',
  ],
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
    },
  },
};

export default config;