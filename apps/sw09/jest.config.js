module.exports = {
  name: 'sw09',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw09',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
