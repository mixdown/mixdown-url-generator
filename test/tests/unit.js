var server = require('../fixture/server.js');
var assert = require('assert');
var UrlGenerator = require('../../index.js');
var validate_fq = function (route) {
  assert.equal(route.protocol, 'http:', 'FQ protocol');
  assert.equal(route.host, '127.0.0.1:9005', 'FQ host');
  assert.equal(route.hostname, '127.0.0.1', 'FQ hostname');
  assert.equal(route.port, '9005', 'FQ protocol');
};

suite('Manifest Url Generator', function () {

  setup(server);

  test('Load Full Manifest', function (done) {
    var instance = new UrlGenerator({
      manifest: 'http://127.0.0.1:9005/manifest'
    });

    instance._setup(function (err) {
      assert.ifError(err);
      console.log(instance.manifest());
      assert.equal(Object.keys(instance.manifest()).length, 4, 'Should have 4 routes');

      for (var k in instance.manifest()) {
        validate_fq(instance.manifest()[k]);
      }
      done();
    });

  });


  test('Load Filtered Manifest', function (done) {
    var instance = new UrlGenerator({
      manifest: 'http://127.0.0.1:9005/manifest',
      filter: /(dogs)/
    });

    instance._setup(function (err) {
      assert.ifError(err);
      assert.equal(Object.keys(instance.manifest()).length, 2, 'Should be only "dogs" routes');
      assert.ok(instance.manifest()["api/dogs/item"], 'Should be only "dogs" routes');
      assert.ok(instance.manifest()["api/dogs/search"], 'Should be only "dogs" routes');
      for (var k in instance.manifest()) {
        validate_fq(instance.manifest()[k]);
      }
      done();
    });

  });
});