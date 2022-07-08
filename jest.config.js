const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**",
    "!./src/**/*.d.ts",
    "!./src/**/*.stories.tsx",
    "!./src/**/global.ts",
    "!./src/**/_document.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    "^@/pages/(.*)": "<rootDir>/src/pages/$1",
    "^@/context/(.*)": "<rootDir>/src/context/$1",
    "^@/components/(.*)": "<rootDir>/src/components/$1",
    "^@/hooks/(.*)": "<rootDir>/src/hooks/$1",
    "^@/services/(.*)": "<rootDir>/src/services/$1",
    "^@/styles/(.*)": "<rootDir>/src/styles/$1",
    "^@/utils/(.*)": "<rootDir>/src/utils/$1",
    "^@/stories/(.*)": "<rootDir>/src/stories/$1",
    "^@/assets/(.*)": "<rootDir>/src/assets/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
