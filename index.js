var UrlGenerator = require('mixdown-router/lib/generator.js');
var xhr = {
  get: require('xhr-browserify')
};
var url = require('url');

// A url generator that asks the server for the routes it supports.
module.exports = UrlGenerator.extend({

  // this instance pulls the manifest from the external server to bootstrap.
  _setup: function (done) {
    var self = this;

    // parse uri and use the protocol, host, port from manifest for the routes.
    var uri = typeof (this._options.manifest) === 'string' ? url.parse(this._options.manifest) : this._options.manifest;
    var filter = this._options.filter;

    xhr.get(this._options.manifest, {
      jsonp: this._options.jsonp
    }, function (err, manifest) {

      var filtered_manifest = {};

      // add protocol and host so the urls are FQD
      for (var k in manifest) {
        var m = manifest[k];

        // only load the routes that pass the filter.  No filter means all routes pass.
        if (!filter || filter.test(k)) {
          filtered_manifest[k] = m;

          if (uri.protocol) {
            m.protocol = uri.protocol;
          }
          if (uri.host) {
            m.host = uri.host;
          }
          if (uri.hostname) {
            m.hostname = uri.hostname;
          }
          if (uri.port) {
            m.port = uri.port;
          }
        }
      }

      self.manifest(filtered_manifest);
      done();
    });
  }

});