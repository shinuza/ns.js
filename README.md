Namespace
=========

If you happen to work with people who think using Java inspired namespaces in Javascript is a good idea, you will need this.


Usage
=====

## Creating a package

```js
namespace('my.awesome.package', function(){
    return { foo : 'bar' };
});
```

## Retrieving a package

```js
var package = namespace('my.awesome.package'); // { foo : 'bar' }
var missingPackage = namespace('my.awesome.notfound'); // null
```

## Package protection

```js
namespace('my.awesome.package', function(){
    return { foo : 'bar' };
});

// This is ignored
namespace('my.awesome', function(){
    return { bar : 'baz' };
});

namespace('my.awesome.other.package', function(){
    return { buz : 'bur' };
});

var package = namespace('my.awesome.package'); // { foo : 'bar' }
```

## Passing dependencies

```js
namespace('my.awesome.package', function($){
    return $('div');
}, jQuery);
```