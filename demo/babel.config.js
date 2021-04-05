module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-object-rest-spread",
  ];

  return {
    presets,
    plugins
  };
};