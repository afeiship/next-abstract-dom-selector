(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxStubSingleton = nx.stubSingleton || require('next-stub-singleton');

  var NxAbstractDomSelector = nx.declare('nx.AbstractDomSelector', {
    statics: nx.mix(nxStubSingleton(), {
      qsa: function(inSelector, inContext) {
        nx.mix(this.instance, { selector: inSelector, context: inContext });
        return this.instance.select();
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
