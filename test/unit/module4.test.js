const { 
  fullBanner, fullBannerBefore, fullBannerImage,
  fullBannerSidebar, fullBannerSidebarH4, fullBannerSidebarH4After,
  fullBannerSidebarFirst, fullBannerSidebarSecond, fullBannerSidebarButton, declarations } = require('./declarations');

describe('Full Banner', () => {

  it(`\`main.css\` should contain a \`${declarations.fullBanner.selector}\` class @full-banner-container`, () => {
    assert(fullBanner.assert, fullBanner.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.fullBannerBefore.selector}\` @full-banner-border`, () => {
    assert(fullBannerBefore.assert, fullBannerBefore.message);
  });

  it(`\`main.css\` should contain a \`${declarations.fullBannerImage.selector}\` class @full-banner-image`, () => {
    assert(fullBannerImage.assert, fullBannerImage.message);
  });

  it(`\`main.css\` should contain a \`${declarations.fullBannerSidebar.selector}\` class @full-banner-sidebar`, () => {
    assert(fullBannerSidebar.assert, fullBannerSidebar.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.fullBannerSidebarH4.selector}\` @full-banner-sidebar-heading`, () => {
    assert(fullBannerSidebarH4.assert, fullBannerSidebarH4.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.fullBannerSidebarH4After.selector}\` @full-banner-sidebar-text-decoration`, () => {
    assert(fullBannerSidebarH4After.assert, fullBannerSidebarH4After.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.fullBannerSidebarFirst.selector}\`, and \`${declarations.fullBannerSidebarSecond.selector}\` @full-banner-sidebar-styling`, () => {
    assert(fullBannerSidebarFirst.assert, fullBannerSidebarFirst.message);
    assert(fullBannerSidebarSecond.assert, fullBannerSidebarSecond.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.fullBannerSidebarButton.selector}\` @full-banner-sidebar-button`, () => {
    assert(fullBannerSidebarButton.assert, fullBannerSidebarButton.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.fullBanner.selector}\`, \`${declarations.fullBannerImage.selector}\`, and \`${declarations.fullBannerSidebar.selector}\`, they should be used in \`index.html\` @full-banner-class-attributes`, () => {
    assert(fullBanner.class, 'The `.full-banner` class should exist before it can be used in the HTML.');
    assert(fullBannerImage.class, 'The `.full-banner-image` class should exist before it can be used in the HTML.');
    assert(fullBannerSidebar.class, 'The `.full-banner-sidebar` class should exist before it can be used in the HTML.');
    assert($('nav ~ div > section:last-child').hasClass(fullBanner.class),
      'The first `<section>` in the `<!-- FULL BANNER -->` block does not have a class of `full-banner`.');
    assert($('nav ~ div > section:last-child > div:first-child').hasClass(fullBannerImage.class),
      'The first `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `full-banner-image`.');
    assert($('nav ~ div > section:last-child > div:last-child').hasClass(fullBannerSidebar.class),
      'The second `<div>` in the `<!-- FULL BANNER -->` `<section>` does not have a class of `full-banner-sidebar`.');
  });

});