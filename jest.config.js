module.exports = {
  preset: 'react-native',
 transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|msw|@mswjs|rettime|strict-event-emitter|@bundled-es-modules)',
  ],
  setupFiles:[ "<rootDir>/src/test/jestSetup.ts"],
  moduleDirectories: ['node_modules', "./src/test"],
  modulePathIgnorePatterns: [
      ".*/mockedData/.*"
    ],
}
