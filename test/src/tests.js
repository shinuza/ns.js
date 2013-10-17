function fo() { return { x: 5 }; }
function fe() { return {}; }


module('Namespace', {
  setup: function() {
    delete window.ACME;
  },
  tearDown: function() {
    delete window.ACME;
  }
});

test('Top level', function() {
  ns('ACME', fo);
  deepEqual(window.ACME, fo());
});

test('Deep level', function() {
  ns('ACME.Coyote.Crossbow.Failure', fo);
  deepEqual(window.ACME.Coyote.Crossbow.Failure, fo());
});

test('No override', function() {
  ns('ACME.Coyote.Crossbow.Failure', fe);
  ns('ACME.Coyote.Crossbow', fo);
  ns('ACME.Coyote.Crossbow.Win', fe);
  deepEqual(Object.keys(window.ACME.Coyote.Crossbow), ['Failure', 'Win']);
});

test('Context', function() {
  ns('ACME.Coyote.QunitCopy', function($) {
    return $;
  }, QUnit);

  deepEqual(ACME.Coyote.QunitCopy, QUnit);
});

test('Return value', function() {
  ns('ACME.Coyote.Crossbow.Failure', fo);

  deepEqual(ns('ACME.Coyote.Crossbow.Failure'), fo());
});