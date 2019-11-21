const {
  hero, heroH1, heroH2,
  heroHeaders, heroParagraph, banner,
  bannerImage, bannerText, bannerTextLastChild,
  category, categoryImage, categoryText,
  categoryTextDiv, categoryTextH3, declarations } = require('./declarations')

describe('Hero, Sales Banner, & Categories', () => {

  it(`\`main.css\` should contain a \`${declarations.hero.selector}\` class @hero-section`, () => {
    assert(hero.assert, hero.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.heroHeaders.selector}\`, \`${declarations.heroH1.selector}\`, and \`${declarations.heroH2.selector}\` @hero-headings`, () => {
    assert(heroHeaders.assert, heroHeaders.message);
    assert(heroH1.assert, heroH1.message);
    assert(heroH2.assert, heroH2.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.heroParagraph.selector}\` @hero-paragraph`, () => {
    assert(heroParagraph.assert, heroParagraph.message);
  });

  it(`\`main.css\` should contain a \`${declarations.hero.selector}\` class, it should be used in \`index.html\` @hero-class-attribute`, () => {
    assert(hero.class, 'The `.hero` class should exist before it can be used in the HTML.');
    assert($('nav + section').hasClass(hero.class), 'The first `<section>` in the `<!-- HERO -->` block does not have a class of `hero`.');
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.banner.selector}\`, and \`${declarations.bannerImage.selector}\` @banner-container-image`, () => {
    assert(banner.assert, banner.message);
    assert(bannerImage.assert, bannerImage.message);
  });

  it(`\`main.css\` should contain a \`${declarations.hero.selector}\` class @banner-text`, () => {
    assert(bannerText.assert, bannerText.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.hero.selector}\` @banner-text-last-child`, () => {
    assert(bannerTextLastChild.assert, bannerTextLastChild.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.banner.selector}\`, and \`${declarations.bannerImage.selector}\`, they should be used in \`index.html\` @banner-class-attributes`, () => {
    assert(banner.class, 'The `.banner` class should exist before it can be used in the HTML.');
    assert(bannerText.class, 'The `.banner-text` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:first-child > div').hasClass(banner.class), 'The first `<div>` in the `<!-- SALE BANNER -->` `<section>` does not have a class of `banner`.');
    assert($('nav ~ div > section:first-child > div > div').hasClass(bannerText.class), 'The nest `<div>` between the images in the `<!-- SALE BANNER -->` block does not have a class of `banner-text`.');
  });

  it(`\`main.css\` should contain a \`${declarations.heroParagraph.selector}\` class @category`, () => {
    assert(category.assert, category.message);
  });

  it(`\`main.css\` should contain a \`${declarations.heroParagraph.selector}\` class @category-text`, () => {
    assert(categoryText.assert, categoryText.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.heroParagraph.selector}\`  @category-text-divs`, () => {
    assert(categoryTextDiv.assert, categoryTextDiv.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.categoryTextH3.selector}\` @category-headings`, () => {
    assert(categoryTextH3.assert, categoryTextH3.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.category.selector}\`, and \`${declarations.categoryText.selector}\`, they should be used in \`index.html\` @category-class-attributes`, () => {
    assert(category.class, 'The `.category` class should exist before it can be used in the HTML.');
    assert(categoryText.class, 'The `.category-text` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(1)').hasClass(category.class), 'The first `<div>` in the `<!-- CATEGORY -->` `<section>` should have a class of `category`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(2)').hasClass(category.class), 'The second `<div>` in the `<!-- CATEGORY -->` `<section>` should have a class of `category`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(3)').hasClass(category.class), 'The third `<div>` in the `<!-- CATEGORY -->` `<section>` should have a class of `category`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(4)').hasClass(category.class), 'The fourth `<div>` in the `<!-- CATEGORY -->` `<section>` should have a class of `category`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(1) > a > div').hasClass(categoryText.class), 'The first `<div>` in the first category `<div>` should have a class of `category-text`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(2) > a > div').hasClass(categoryText.class), 'The first `<div>` in the second category `<div>` should have a class of `category-text`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(3) > a > div').hasClass(categoryText.class), 'The first `<div>` in the third category `<div>` should have a class of `category-text`.');
    assert($('nav ~ div > section:nth-of-type(2) > div:nth-of-type(4) > a > div').hasClass(categoryText.class), 'The first `<div>` in the fourth category `<div>` should have a class of `category-text`.');
  });


});