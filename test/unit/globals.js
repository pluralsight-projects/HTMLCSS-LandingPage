const fs = require('fs');
const path = require('path');
const { assert } = require('chai');
const postcss = require('postcss');
const short = require('postcss-merge-longhand');
const cheerio = require('cheerio');
const R = require('ramda');

const source_html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
const $ = cheerio.load(source_html);

const normalize = css => {
  return css.replace(/#(\w+)/gi, hex => hex.toLowerCase())
  .replace(/\b0px/gi, '0')
  .replace(/white/gi, '#ffffff')
  .replace(/black/gi, '#000000')
  .replace(/#fff(;)?\b/gi, '#ffffff$1')
  .replace(/#000(;)?\b/gi, '#000000$1');
}

const source_css = fs.readFileSync(path.join(process.cwd(), 'css', 'main.css'), 'utf8');
const css = postcss([short]).process(normalize(source_css), { from: 'css/main.css' }).root;

const rules = css.nodes
  .filter(node => node.type === 'rule')
  .map(node => {
    const declarations = node.nodes
      .map(node => { return {[node.prop]: node.value}; })
      .reduce((result, current) => { return Object.assign(result, current); }, {});

    declarations['length'] = node.nodes.length;
    declarations['selector'] = node.selector;
    declarations['class'] = node.selector.replace(/^\./, '');
    declarations['css'] = node.toString().replace(/[^\x20-\x7E]/gmi, '').replace(/\s{2}/gmi, ' ');

    return declarations;
  });

const diff = (check, base, name) => {

  const changes = (check, base) => {
    const results = {};
    for (const key in check) {
      if (R.not(R.equals(check[key], base[key]))) {
        results[key] = (R.is(Object, check[key]) && R.is(Object, base[key])) ? changes(check[key], base[key]) : check[key];
      }
    }
    return results;
  }

  const results = R.omit(['unique'], changes(check, base));

  if (R.isEmpty(results)) {
    return { assert: true, message: '', class: base.class, selector: base.selector };
  } else {
    let message = 'It looks like your ' + name + ' rule is missing the following:\n';
    let selectorMessage = 'It seems that you are missing a rule with a selector like '
    for (let key in results) {
      if(key == 'selector') {
        message = selectorMessage + '`' + results[key] + '`, or you are missing key declarations in that rule.';
      } else if (key !== 'unique') {
        message += '\n- `' + key + ': ' + results[key] + '`';
      }
      
    }
    return { assert: false, message, class: base.class, selector: base.selector };
  }
};

const matchAny = decl => {
  const decls = [];
  for (let prop in decl) {
    decls.push(R.propEq(prop, decl[prop]));
  }

  const matches = R.filter(R.anyPass(decls), rules)
  if (matches.length === 0) {
    return {};
  } else if (matches.length === 1) {
    return matches[0];
  } else if (matches.length >= 2) {
    const uniqueChecks = [];
    const unique = decl.unique;
    for (let prop in unique) {
      uniqueChecks.push(R.propEq(prop, unique[prop]));
    }
    const results = R.filter(R.allPass(uniqueChecks), matches);
    return R.isEmpty(results) ? {} : results[0];
  }
};

const diffAny = (decl, name) => diff(decl, matchAny(decl), name);

const getRule = (selector, name) => {
  const base = rules.filter(rule => rule.selector === selector);
  if (R.not(R.isEmpty(base))) {
    return { assert: true, message: '', class: base[0].class, selector: base[0].selector };
  } else {
    return { assert: false, message: 'It seems that you are missing a rule with a selector of '+ name + '.' };
  }
};

Object.assign(global, {
  assert,
  $,
  rules,
  diffAny,
  getRule
});