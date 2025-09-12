import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/katas"],
  testMatch: [
    "**/*.spec.ts"
  ],
  moduleFileExtensions: ["ts", "js", "json"],
  clearMocks: true,
  collectCoverage: false,
  verbose: true
};

export default config;