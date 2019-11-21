const {
  container, flex, section, flexColumn,
  flexOne, alignCenter, center, spaceBetween,
  btn, btnDefault, btnPrimary, formControl,
  textLight, textSecondary, textPrimary, declarations } = require('./declarations');

describe('Utility Classes', () => {

  it(`\`main.css\` should contain a \`${declarations.container.selector}\` class @container`, () => {
    assert(container.assert, container.message);
  });

  it(`\`main.css\` should contain a \`${declarations.container.selector}\` class, it should be used in \`index.html\` @container-class-attribute`, () => {
    assert(container.class, 'The `.container` class should exist before it can be used in the HTML.');
    assert($('nav > div').hasClass(container.class), 'The first `<div>` in the `<nav>` does not have the `container` class.');
    assert($('nav + section > div').hasClass(container.class), 'The first `<div>` in the `<!-- HERO -->` `<section>` does not have the `container` class.');
    assert($('nav ~ div').hasClass(container.class), 'The first `<div>` in the `<!-- MAIN CONTAINER -->` block does not have the `container` class.');
    assert($('footer > section').hasClass(container.class), 'The first `<section>` in the `<footer>` does not have the `container` class.');
  });

  it(`\`main.css\` should contain a \`section\` element selector, setting all \`section\` elements to flex containers @sections-flex`, () => {
    assert(section.assert, section.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.flex.selector}\`, \`${declarations.flexColumn.selector}\`, and \`${declarations.flexOne.selector}\` @flex-utilities`, () => {
    assert(flex.assert, flex.message);
    assert(flexColumn.assert, flexColumn.message);
    assert(flexOne.assert, flexOne.message);
  });

  it(`\`main.css\` should contain a \`${declarations.flex.selector}\` class, it should be used in \`index.html\` @flex-utilities-class-attribute`, () => {
    assert(flex.class, 'The `.flex` class should exist before it can be used in the HTML.');
    assert($('nav > div:nth-child(1)').hasClass(flex.class), 'The first `<div>` in the `<nav>` does not have a class of `flex`.');
    assert($('nav > div:nth-child(1) > div:nth-child(1)').hasClass(flex.class), 'The first `<div>` in the `<!-- BRANDING -->` block does not have a class of `flex`.');
    assert($('nav > div:nth-child(1) > div:nth-child(2)').hasClass(flex.class), 'The first `<div>` in the `<!-- SEARCH -->` block does not have a class of `flex`.');
    assert($('nav ul').hasClass(flex.class), 'The first `<ul>` in the `<!-- SEARCH -->` block does not have a class of `flex`.');
    assert($('nav > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').hasClass(flex.class), 'The first `<div>` in the `<!-- PROFILE -->` block does not have a class of `flex`.');
    assert($('nav > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').hasClass(flex.class), 'The second `<div>` in the `<!-- PROFILE -->` block does not have a class of `flex`.');
    assert($('nav + section > div').hasClass(flex.class), 'The first `<div>` in the `<!-- HERO -->` `<section>` does not have a class of `flex`.');
    assert($('nav ~ div > section:nth-child(1) > div').hasClass(flex.class), 'The first `<div>` in the `<!-- SALE BANNER -->` `<section>` does not have a class of `flex`.');
    assert($('nav ~ div > section:nth-child(3) > div:nth-child(2)').hasClass(flex.class), 'The second `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `flex`.');
    assert($('footer > section:nth-child(2) > div').hasClass(flex.class), 'The first `<div>` in the `<!-- PS DEMO -->` `<section>` does not have a class of `flex`.');
  });

  it(`\`main.css\` should contain the classes, \`${declarations.flexColumn.selector}\`, and \`${declarations.flexOne.selector}\`, they should be used in \`index.html\` @flex-column-one-class-attributes`, () => {
    assert(flexColumn.class, 'The `.flex-column` class should exist before it can be used in the HTML.');
    assert(flexOne.class, 'The `.flex-one` class should exist before it can be used in the HTML.');
    assert($('nav > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1)').hasClass(flexColumn.class), 'The first nested `<div>` in the `<!-- PROFILE -->` block does not have a class of `flex-column`.');
    assert($('nav + section > div').hasClass(flexColumn.class), 'The first `<div>` in the `<!-- HERO -->` `<section>` does not have a class of `flex-column`.');
    assert($('nav ~ div > section:nth-of-type(3) > div:nth-of-type(2)').hasClass(flexColumn.class), 'The second `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `flex-column`.');
    assert($('footer > section:nth-of-type(2) > div').hasClass(flexColumn.class), 'The first `<div>` in the `<!-- PS DEMO -->` `<section>` does not have a class of `flex-column`.');
    assert($('nav > div > div:nth-of-type(2)').hasClass(flexOne.class), 'The first `<div>` in the `<!-- SEARCH -->` block does not have a class of `flex-one`.');
  });

  it(`\`main.css\` should contain the classes, \`${declarations.alignCenter.selector}\`, \`${declarations.center.selector}\`, and \`${declarations.spaceBetween.selector}\` @flex-alignment-utilities`, () => {
    assert(alignCenter.assert, alignCenter.message);
    assert(center.assert, center.message);
    assert(spaceBetween.assert, spaceBetween.message);
  });

  it(`\`main.css\` should contain a \`${declarations.alignCenter.selector}\` class, it should be used in \`index.html\` @flex-alignment-utilities-class-attributes`, () => {
    assert(alignCenter.class, 'The `.align-center` class should exist before it can be used in the HTML.');
    assert($('nav > div > div:nth-child(1)').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- BRANDING -->` block does not have a class of `align-center`.');
    assert($('nav > div > div:nth-child(2)').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- SEARCH -->` block does not have a class of `align-center`.');
    assert($('nav > div > div:nth-child(2) > div:nth-child(2)').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- PROFILE -->` block does not have a class of `align-center`.');
    assert($('nav + section > div').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- HERO -->` `<section>` does not have a class of `align-center`.');
    assert($('nav ~ div > section:nth-child(1) > div:nth-child(1)').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- SALE BANNER -->` `<section>` does not have a class of `align-center`.');
    assert($('nav ~ div > section:nth-child(3) > div:nth-child(2)').hasClass(alignCenter.class), 'The second `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `align-center`.');
    assert($('footer section:nth-child(2) > div:nth-child(1)').hasClass(alignCenter.class), 'The first `<div>` in the `<!-- PS DEMO -->` `<section>` does not have a class of `align-center`.');
  });

  it(`\`main.css\` should contain the classes, \`${declarations.center.selector}\`, and \`${declarations.spaceBetween.selector}\`, they should be used in \`index.html\` @flex-space-between-utilities-class-attribute`, () => {
    assert(center.class, 'The `.center` class should exist before it can be used in the HTML.');
    assert(spaceBetween.class, 'The `.space-between` class should exist before it can be used in the HTML.');
    assert($('nav + section > div').hasClass(center.class), 'The first `<div>` in the `<!-- HERO -->` `<section>` does not have a class of `center`.');
    assert($('nav ~ div > section:nth-child(1) > div:nth-child(1)').hasClass(center.class), 'The first `<div>` in the `<!-- SALE BANNER -->` `<section>` does not have a class of `center`.');
    assert($('nav ~ div > section:nth-child(3) > div:nth-child(2)').hasClass(center.class), 'The second `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `center`.');
    assert($('nav > div:nth-child(1)').hasClass(spaceBetween.class), 'The first `<div>` in the `<nav>` does not have a class of `space-between`.');
    assert($('nav ul').hasClass(spaceBetween.class), 'The first `<ul>` in the `<!-- SEARCH -->` block does not have a class of `space-between`.');
    assert($('footer section:nth-child(1)').hasClass(spaceBetween.class), 'The first `<section>` in the `<footer>` does not have a class of `space-between`.');
  });

  it(`\`main.css\` should contain the classes, \`${declarations.btn.selector}\`, \`${declarations.btnDefault.selector}\`, and \`${declarations.btnPrimary.selector}\` @button-utilities`, () => {
    assert(btn.assert, btn.message);
    assert(btnDefault.assert, btnDefault.message);
    assert(btnPrimary.assert, btnPrimary.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.btn.selector}\`, \`${declarations.btnDefault.selector}\`, and \`${declarations.btnPrimary.selector}\`, they should be used in \`index.html\` @button-utilities-class-attribute`, () => {
    assert(btn.class, 'The `.btn` class should exist before applying it in the HTML.');
    assert(btnDefault.class, 'The `.btn-default` class should exist before it can be used in the HTML.');
    assert(btnPrimary.class, 'The `.btn-primary` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:nth-child(3) a').hasClass(btn.class), 'The `<a>` element in the `<!-- FULL BANNER -->` does not have the `btn` class.');
    assert($('nav ~ div > section:nth-child(3) a').hasClass(btnDefault.class), 'The `<a>` element in the `<!-- FULL BANNER -->` does not have the `btn-default` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(4) button').hasClass(btn.class), 'The `<button>` element in the `<footer>` does not have the `btn` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(4) button').hasClass(btnPrimary.class), 'The `<button>` element in the `<footer>` does not have the `btn-primary` class.');
  });

  it(`\`main.css\` should contain a \`${declarations.formControl.selector}\` class @form-controls`, () => {
    assert(formControl.assert, formControl.message);
  });

  it(`\`main.css\` should contain a \`${declarations.formControl.selector}\` class, it should be used in \`index.html\` @form-controls-class-attribute`, () => {
    assert(formControl.class, 'The `.form-control` class should exist before it can be used in the HTML.');
    assert($('footer > section:nth-child(1) > div:nth-child(4) input').hasClass(formControl.class), 'The `<input>` in the `<footer>` element does not have the `form-control` class.');
  });

  it(`\`main.css\` should contain the classes, \`${declarations.textLight.selector}\`, \`${declarations.textSecondary.selector}\`, and \`${declarations.textPrimary.selector}\` @typography-utilities`, () => {
    assert(textLight.assert, textLight.message);
    assert(textSecondary.assert, textSecondary.message);
    assert(textPrimary.assert, textPrimary.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.textLight.selector}\`, and \`${declarations.textSecondary.selector}\`, they should be used in \`index.html\` @typography-utilities-class-attributes`, () => {
    assert(textLight.class, 'The `.text-light` class should exist before it can be used in the HTML.');
    assert(textSecondary.class, 'The `.text-secondary` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:nth-child(1) > div > div > div:nth-child(1)').hasClass(textLight.class), 'The `<div>` with contents `Couples retreat weekend` does not have the `text-light` class.');
    assert($('nav ~ div > section:nth-child(1) > div > div > div:nth-child(2)').hasClass(textSecondary.class), 'The `<div>` with contents `Save an extra 20%` does not have the `text-secondary` class.');
  });

  it(`\`main.css\` should contain a \`${declarations.textPrimary.selector}\` class, it should be used in \`index.html\` @typography-utilities-primary-class-attribute`, () => {
    assert(textPrimary.class, 'The `.text-primary` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:nth-child(1) > div > div > div:nth-child(3)').hasClass(textPrimary.class), 'The `<div>` with contents `when you buy 2 pairs of boots` does not have the `text-primary` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(1) > div:nth-child(1)').hasClass(textPrimary.class), 'The `<div>` in footer with contents `Customer Support` does not have the `text-primary` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(2) > div:nth-child(1)').hasClass(textPrimary.class), 'The `<div>` in footer with contents `Company Info` does not have the `text-primary` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(3) > div:nth-child(1)').hasClass(textPrimary.class), 'The `<div>` in footer with contents `Privacy &amp; Terms` does not have the `text-primary` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(4) > div:nth-child(1)').hasClass(textPrimary.class), 'The `<div>` in footer with contents `Follow Us` does not have the `text-primary` class.');
    assert($('footer > div:last-child').hasClass(textPrimary.class), 'The `<div>` in footer with contents `&copy;Pluralsight 2018` does not have the `text-primary` class.');
  });

});


