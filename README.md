# next-abstract-dom-selector
> An abstract dom selector

## install:
```bash
npm install -S afeiship/next-abstract-dom-selector --registry=https://registry.npm.taobao.org
```

## usage:
```js
var els1 = NxSelectorId.qsa('#abc');
var els2 = NxSelectorTag.qsa('ul');
var els3 = NxSelectorClass.qsa('.cls2');
var els4 = NxSelectorQuery.qsa('.cls2>div');
var els5 = NxSelectorQueryAll.qsa('ul li[class="active"]');
```

## implements:
- [next-selector-id](https://github.com/afeiship/next-selector-id)
- [next-selector-tag](https://github.com/afeiship/next-selector-tag)
- [next-selector-class](https://github.com/afeiship/next-selector-class)
- [next-selector-query](https://github.com/afeiship/next-selector-query)
- [next-selector-query-all](https://github.com/afeiship/next-selector-query-all)
