const { 
  footer, footerAfter, lists,
  linkHeader, footerLinks, footerLinksHover,
  socialLists, socialListsLinks, twitter,
  facebook, instagram, pinterest,
  newsletterLinkHeader, newsletterLinkSubheader, newsletterInput,
  newsletterButton, ps, psImage,
  demo, demoBefore, copyright, declarations } = require('./declarations');

describe('Footer', () => {

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.footer.selector}\` @footer`, () => {
    assert(footer.assert, footer.message);
  });

  it(`\`main.css\` should contain a rule with a selector of \`${declarations.footerAfter.selector}\` @footer-sidebar`, () => {
    assert(footerAfter.assert, footerAfter.message);
  });

  it(`\`main.css\` should contain a \`${declarations.lists.selector}\` class @lists`, () => {
    assert(lists.assert, lists.message);
  });

  it(`\`main.css\` should contain a \`${declarations.linkHeader.selector}\` class @link-headers`, () => {
    assert(linkHeader.assert, linkHeader.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.footerLinks.selector}\`, and \`${declarations.footerLinksHover.selector}\` @links`, () => {
    assert(footerLinks.assert, footerLinks.message);
    assert(footerLinksHover.assert, footerLinksHover.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.lists.selector}\`, and \`${declarations.linkHeader.selector}\`, they should be used in \`index.html\` @link-class-attributes`, () => {
    assert(lists.class, 'The `.lists` class should exist before it can be used in the HTML.');
    assert(linkHeader.class, 'The `.link-header` class should exist before it can be used in the HTML.');
    assert($('footer > section:first-child').hasClass(lists.class),'The first `<section>` in the `<footer>` does not have a class of `lists`.');
    assert($('footer > section:nth-child(1) > div:nth-child(1) > div:nth-child(1)').hasClass(linkHeader.class),
      'The `<div>` in the `<footer>` that has the contents `Customer Support` does not have the `link-header` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(2) > div:nth-child(1)').hasClass(linkHeader.class),
      'The `<div>` in the `<footer>` that has the contents `Company Info` does not have the `link-header` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(3) > div:nth-child(1)').hasClass(linkHeader.class),
      'The `<div>` in the `<footer>` that has the contents `Privacy &amp; Terms` does not have the `link-header` class.');
    assert($('footer > section:nth-child(1) > div:nth-child(4) > div:nth-child(1)').hasClass(linkHeader.class),
      'The `<div>` in the `<footer>` that has the contents `Follow Us` does not have the `link-header` class.');
    
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.socialLists.selector}\`, and \`${declarations.socialListsLinks.selector}\` @social-links`, () => {
    assert(socialLists.assert, socialLists.message);
    assert(socialListsLinks.assert, socialListsLinks.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.twitter.selector}\`, \`${declarations.facebook.selector}\`, \`${declarations.instagram.selector}\`, and \`${declarations.pinterest.selector}\` @social-icons`, () => {
    assert(twitter.assert, twitter.message);
    assert(facebook.assert, facebook.message);
    assert(instagram.assert, instagram.message);
    assert(pinterest.assert, pinterest.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.twitter.selector}\`, \`${declarations.facebook.selector}\`, \`${declarations.instagram.selector}\`, and \`${declarations.pinterest.selector}\`, they should be used in \`index.html\` @social-class-attributes`, () => {
    assert(twitter.class, 'The `.twitter` class should exist before it can be used in the HTML.');
    assert(facebook.class, 'The `.facebook` class should exist before it can be used in the HTML.');
    assert(instagram.class, 'The `.instagram` class should exist before it can be used in the HTML.');
    assert(pinterest.class, 'The `.pinterest` class should exist before it can be used in the HTML.');
    assert($('footer > section:first-child > div:last-child').hasClass('social'),
      'The last `<div>` in the first `<section>` of the `<footer>` does not have a class of `social`.');
    assert($('footer > section:first-child > div:last-child ul > li:nth-of-type(1) > a').hasClass(twitter.class),
      'The first `<a>` element in the social list should have a class of `twitter`.');
    assert($('footer > section:first-child > div:last-child ul > li:nth-of-type(2) > a').hasClass(facebook.class),
      'The second `<a>` element in the social list should have a class of `facebook`.');
    assert($('footer > section:first-child > div:last-child ul > li:nth-of-type(3) > a').hasClass(instagram.class),
      'The third `<a>` element in the social list should have a class of `instagram`.');
    assert($('footer > section:first-child > div:last-child ul > li:nth-of-type(4) > a').hasClass(pinterest.class),
      'The fourth `<a>` element in the social list should have a class of `pinterest`.');
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.newsletterLinkHeader.selector}\`, and \`${declarations.newsletterLinkSubheader.selector}\` @newsletter-headers`, () => {
    assert(newsletterLinkHeader.assert, newsletterLinkHeader.message);
    assert(newsletterLinkSubheader.assert, newsletterLinkSubheader.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.newsletterInput.selector}\`, and \`${declarations.newsletterButton.selector}\` @newsletter-form`, () => {
    assert(newsletterInput.assert, newsletterInput.message);
    assert(newsletterButton.assert, newsletterButton.message);
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.newsletterLinkHeader.selector}\`, and \`${declarations.newsletterLinkSubheader.selector}\`, they should be used in \`index.html\` @newsletter-class-attributes`, () => {
    assert(newsletterLinkHeader.class, 'The `.newsletter .link-header` class should exist before it can be used in the HTML.');
    assert(newsletterLinkSubheader.class, 'The `.newsletter .link-subheader` class should exist before it can be used in the HTML.');
    assert($('footer > section:first-child > div:last-child > div:last-child > div:nth-child(1)').hasClass(newsletterLinkHeader.class.replace('newsletter .', '')),
      'The `<div>` with the contents `Email Updates` does not have a class of `' + newsletterLinkHeader.class.replace('newsletter .', '') + '`.');
    assert($('footer > section:first-child > div:last-child > div:last-child > div:nth-child(2)').hasClass(newsletterLinkSubheader.class.replace('newsletter .', '')),
      'The `<div>` with the contents `Exclusive sales, special offers, and more.` does not have a class of `' + newsletterLinkSubheader.class.replace('newsletter .', '') + '`.');
  });

  it(`\`main.css\` should contain rules with the selectors, \`${declarations.ps.selector}\`, and \`${declarations.psImage.selector}\` @pluralsight-demo-container`, () => {
    assert(ps.assert, ps.message);
    assert(psImage.assert, psImage.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.demo.selector}\`, and \`${declarations.demoBefore.selector}\` @pluralsight-demo-styles`, () => {
    assert(demo.assert, demo.message);
    assert(demoBefore.assert, demoBefore.message);
  });

  it(`\`main.css\` should contain a \`${declarations.copyright.selector}\` class @copyright`, () => {
    assert(copyright.assert, copyright.message);
  });

  it(`\`main.css\` should contain the classes, \`${declarations.ps.selector}\`, \`${declarations.demo.selector}\`, and \`${declarations.copyright.selector}\`, they should be used in \`index.html\` @pluralsight-demo-class-attributes`, () => {
    assert(ps.class, 'The `.ps` class should exist before it can be used in the HTML.');
    assert(demo.class, 'The `.demo` class should exist before it can be used in the HTML.');
    assert(copyright.class, 'The `.copyright` class should exist before it can be used in the HTML.');
    assert($('footer > section:nth-child(2)').hasClass(ps.class),
      'The second `<section>` in the `<footer>` does not have a class of `ps`.');
    assert($('footer > section:nth-child(2) > div > div').hasClass(demo.class),
      'The nested `<div>` in the `<!-- PS DEMO -->` `<section>` in the `<footer>` does not have a class of `demo`.');
    assert($('footer > div:last-child').hasClass(copyright.class),
      'The last `<div>` in the `<footer>` does not have a class of `copyright`.');
  });

});