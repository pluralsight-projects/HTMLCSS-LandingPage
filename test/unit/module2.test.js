const { 
  headerNav, brand, logo, 
  searchBox, searchButton, navList, 
  navListLinks, profile, account, 
  accountLinks, profilePic, profilePicImage, declarations } = require('./declarations');

describe('Header & Navigation', () => {

  it(`\`main.css\` should contain a \`${declarations.headerNav.selector}\` class @header`, () => {
    assert(headerNav.assert, headerNav.message);
  });

  it(`\`main.css\` should contain a \`${declarations.brand.selector}\` class @brand`, () => {
    assert(brand.assert, brand.message);
  });

  it(`\`main.css\` should contain a \`${declarations.logo.selector}\` class @logo`, () => {
    assert(logo.assert, logo.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.headerNav.selector}\`, \`${declarations.brand.selector}\`, and \`${declarations.logo.selector}\`, they should be used in \`index.html\` @header-brand-logo-class-attributes`, () => {
    assert(headerNav.class, 'The `.header-nav` class should exist before it can be used in the HTML.');
    assert(brand.class, 'The `.brand` class should exist before it can be used in the HTML.');
    assert(logo.class, 'The `.logo` class should exist before it can be used in the HTML.');
    assert($('nav').hasClass(headerNav.class), 'The `<nav>` does not have the `header-nav` class.');
    assert($('nav > div > div:first-child').hasClass(brand.class), 'The first `<div>` in the `<!-- BRANDING -->` block does not have the `brand` class.');
    assert($('nav > div > div:first-child > a > img').hasClass(logo.class), 'The `<img>` in the `<!-- BRANDING -->` block does not have the `logo` class.');
  });

  it(`\`main.css\` should contain a \`${declarations.searchBox.selector}\` class @search-box`, () => {
    assert(searchBox.assert, searchBox.message);
  });

  it(`\`main.css\` should contain a \`${declarations.searchButton.selector}\` class @search-button`, () => {
    assert(searchButton.assert, searchButton.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.searchBox.selector}\`, and \`${declarations.searchButton.selector}\`, they should be used in \`index.html\` @search-class-attributes`, () => {
    assert(searchBox.class, 'The `.search-box` class should exist before it can be used in the HTML.');
    assert(searchButton.class, 'The `.search-button` class should exist before it can be used in the HTML.');
    assert($('form input').hasClass(searchBox.class), 'The `<input>` in the `<nav>` does not have the `search-box` class.');
    assert($('form button').hasClass(searchButton.class), 'The `<button>` in the `<nav>` does not have the `search-button` class.');
  });

  it(`\`main.css\` should contain a \`${declarations.navList.selector}\` class @navigation-list`, () => {
    assert(navList.assert, navList.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.navListLinks.selector}\` @navigation-list-links`, () => {
    assert(navListLinks.assert, navListLinks.message);
  });

  it(`\`main.css\` should contain a \`${declarations.navList.selector}\` class, it should be used in \`index.html\` @navigation-list-class-attribute`, () => {
    assert(navList.class, 'The `.nav-list` class should exist before it can be used in the HTML.');
    assert($('nav ul').hasClass(navList.class), 'The `<ul>` in the `<nav>` does not have the `nav-list` class.');
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.profile.selector}\`, \`${declarations.account.selector}\`, and \`${declarations.accountLinks.selector}\` @profile`, () => {
    assert(profile.assert, profile.message);
    assert(account.assert, account.message);
    assert(accountLinks.assert, accountLinks.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.profilePic.selector}\`, and \`${declarations.profilePicImage.selector}\` @profile-picture`, () => {
    assert(profilePic.assert, profilePic.message);
    assert(profilePicImage.assert, profilePicImage.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.profile.selector}\`, \`${declarations.account.selector}\`, and \`${declarations.profilePic.selector}\`, they should be used in \`index.html\` @profile-class-attribute`, () => {
    assert(profile.class, 'The `.profile` class should exist before it can be used in the HTML.');
    assert(account.class, 'The `.account` class should exist before it can be used in the HTML.');
    assert(profilePic.class, 'The `.profile-pic` class should exist before it can be used in the HTML.');
    assert($('nav > div > div:nth-child(2) > div:nth-child(2)').hasClass(profile.class), 'The first `<div>` in the `<!-- PROFILE -->` block does not have the `profile` class.');
    assert($('nav > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').hasClass(account.class), 'The `<div>` that wraps the logout link does not have the `account` class.');
    assert($('nav > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').hasClass(profilePic.class), 'The `<div>` that wraps the profile `<img>` does not have the `profile-pic` class.');
  });


});