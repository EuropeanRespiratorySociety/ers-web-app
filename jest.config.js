module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!**/__tests__/**",
    "!**/*.spec.js",
    "!**/*.config.js",
    "!.eslintrc.js",
    "!.postcssrc.js"
  ]
};
