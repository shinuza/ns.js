!(function(root) {

  function ns(path, fn) {
    var i = 0
      , isLast
      , parent = root
      , components = path.split('.')
      , len = components.length;

    for(;i < len; i+= 1) {
      isLast = i === len - 1;
      if(!parent[components[i]]) {
        parent[components[i]] = isLast ? fn() : {};
      }
      parent = parent[components[i]];
    }
  }

  root.ns = ns;

}(this));