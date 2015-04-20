Namespace 0.3.1
===============

If you happen to work with people who think using Java inspired namespaces in Javascript is a good idea, you will need this.


Usage
=====

## Creating a package

```js
ns('my.awesome.package', function(){
    return { foo : 'bar' };
});
```

## Retrieving a package

```js
var package = ns('my.awesome.package'); // { foo : 'bar' }
var missingPackage = ns('my.awesome.notfound'); // null
```

## Package protection

```js
ns('my.awesome.package', function(){
    return { foo : 'bar' };
});

// This is ignored
ns('my.awesome', function(){
    return { bar : 'baz' };
});

ns('my.awesome.other.package', function(){
    return { buz : 'bur' };
});

var package = ns('my.awesome.package'); // { foo : 'bar' }
```

## Passing dependencies

```js
ns('my.awesome.package', function($){
    return $('div');
}, jQuery);
```