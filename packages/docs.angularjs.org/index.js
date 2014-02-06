var _ = require('lodash');
var fs = require('fs');
var path = require('canonical-path');
var gitInfo = require('../../lib/utils/git-info');
var packagePath = __dirname;

var angularjsPackage = require('../angularjs');

module.exports = function(config) {

  config = angularjsPackage(config);
  
  config.append('processing.processors', [
    require('./processors/keywords'),
    require('./processors/versions-data'),
    require('./processors/pages-data'),
    require('./processors/index-page')
  ]);

  config.processing.tagDefinitions.push(require('./tag-defs/tutorial-step'));

  config.set('processing.search.ignoreWordsFile', path.resolve(packagePath, 'ignore.words'));

  config.prepend('rendering.templateFolders', [
    path.resolve(packagePath, 'templates')
  ]);

  return config;
};
