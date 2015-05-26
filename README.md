# Mixdown Url Generator

Plugin for loading an API manifest and generating consistent, correct, and fully qualified urls.  

# Usage

See the tests folder for full example.

```
var UrlGenerator = require('mixdown-url-generator');

var instance = new UrlGenerator({
  manifest: 'http://127.0.0.1:9005/manifest'
});

instance._setup(function (err) {

  console.log(instance.manifest());  // all the routes, fully qualified.

  // generate url 
  // http://127.0.0.1:9005/api/v0/dogs/search/Biggie%20Smalls?tags=bulldog%2Chas_spots

  console.log(instance.format('api/dogs/search', {
  	text: 'Biggie Smalls',
  	tags: 'bulldog,has_spots'
  }));   
});

```

# Manifest Example

A manifest is a json object that specifies the urls that can be generated using this library.  This is what a mixdown manifest looks like.  If your API is in a different format, then it can be converted using an adapter.

```
{
  "api/dogs/search": {
    "name": "api/dogs/search",
    "path": "/api/v0/dogs/search/?:text",
    "params": {
      "text": {
        "kind": "rest",
        "regex": "(.*)",
        "default": "",
        "name": "text"
      },
      "tags": {
        "kind": "query",
        "regex": "(.*)",
        "name": "tags"
      }
    }
  },
  "api/dogs/item": {
    "name": "api/dogs/item",
    "path": "/api/v0/dogs/item/?:id",
    "params": {
      "id": {
        "kind": "rest",
        "regex": "([w-]{5,8})",
        "default": "",
        "name": "id"
      }
    }
  },
  "api/cats/search": {
    "name": "api/cats/search",
    "path": "/api/v0/cats/search/?:text",
    "params": {
      "text": {
        "kind": "rest",
        "regex": "(.*)",
        "default": "",
        "name": "text"
      },
      "tags": {
        "kind": "query",
        "regex": "(.*)",
        "name": "tags"
      }
    }
  },
  "api/cats/item": {
    "name": "api/cats/item",
    "path": "/api/v0/cats/item/?:id",
    "params": {
      "id": {
        "kind": "rest",
        "regex": "([w-]{5,8})",
        "default": "",
        "name": "id"
      }
    }
  }
}
```