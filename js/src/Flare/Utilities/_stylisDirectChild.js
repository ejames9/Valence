/*
** _stylisDirectChild.js
**
** _stylisDirectChild.js is essentially a stylis plugin that alters the selectors of the
** css rules that stylis creates. A ">" is added between parent and child to establish
** a direct relationship so that styles may be overridden down the DOM tree.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Regular Expressions...
const fullSelectorRE = /\[flareid\=\"?[\w\.]+\"?\]\s?\w+\s?\{/g
const fullSelectorSplitRE = /\[flareid\=\"?[\w\.]+\"?\]|[a-z0-9\-]+\s?\{/g

export default function addRightArrowToSelector(rule) {
  let selectorArr
// 
  if (fullSelectorSplitRE.test(rule)) {
    selectorArr = rule.match(fullSelectorSplitRE)

    if (selectorArr.length > 1 && rule.indexOf('@keyframes') === -1) {

      return rule.replace(fullSelectorRE, selectorArr.join(' > '))
    } else {
      return rule
    }
  } else {
    return rule
  }
}
