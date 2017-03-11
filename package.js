Package.describe({
  name: 'littlegauze:picker-with-group',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'an simple encapsulation for meteorhacks:picker',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "body-parser": "1.15.0"
});
Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.0.1');
  api.use([
    'ecmascript',
    'check',
    'underscore',
    'meteorhacks:picker'
  ], 'server');
  api.mainModule('picker-with-group.js', 'server');
});

Package.describe({
  documentation: '/readme.md',
  git: 'https://github.com/user/repo.git'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('littlegauze:picker-with-group');
  api.mainModule('picker-with-group-tests.js');
});
