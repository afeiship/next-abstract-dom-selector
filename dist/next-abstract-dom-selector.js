(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxStubSingleton = nx.stubSingleton || require('next-stub-singleton');

  var NxAbstractDomSelector = nx.declare('nx.AbstractDomSelector', {
    statics: nx.mix(nxStubSingleton(), {
      qsa: function(inSelector, inContext) {
        var instance = this.getInstance();
        var context = inContext || document;
        nx.mix(instance, { selector: inSelector, context: context });
        return instance.select();
      }
    }),
    methods: {
      init: function(inSelector, inContext) {
        this.selector = inSelector;
        this.context = inContext;
      },
      select: function() {
        var els = this.exec();
        return this.toArray(els);
      },
      exec: function() {
        return [];
      },
      toArray: function(inElements) {
        return nx.slice(inElements);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractDomSelector;
  }
})();
