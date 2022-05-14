const config = {
    verbose: true,
    moduleNameMapper: {
        "^.+\\.(css|scss|sass)$": "babel-jest",
        "^@/(.*)$" : "<rootDir>/resources/js/$1"
    }
  };

  module.exports = config;
