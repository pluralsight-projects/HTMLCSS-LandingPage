const declarations = {
  'container': {
    'margin': '0 auto',
    'max-width': '1170px',
    'selector': '.container'
  },
  'section': {
    'display': 'flex',
    'selector': 'section'
  },
  'flex': {
    'display': 'flex',
    'selector': '.flex'
  },
  'flexColumn': {
    'flex-direction': 'column',
    'selector': '.flex-column'
  },
  'flexOne': {
    'flex': '1',
    'selector': '.flex-one'
  },
  'alignCenter': {
    'align-items': 'center',
    'selector': '.align-center'
  },
  'center': {
    'justify-content': 'center',
    'selector': '.center'
  },
  'spaceBetween': {
    'justify-content': 'space-between',
    'selector': '.space-between'
  },
  'btn': {
    'cursor': 'pointer',
    'border': '0',
    'padding': '6px 12px',
    'line-height': '1.4',
    'border-radius': '3px',
    'selector': '.btn',
    'unique': {
      'border-radius': '3px'
    }
  },
  'btnDefault': {
    'color': '#ffffff',
    'background-color': '#faa541',
    'selector': '.btn-default',
    'unique': {
      'background-color': '#faa541'
    }
  },
  'btnPrimary': {
    'color': '#ffffff',
    'background-color': '#364147',
    'selector': '.btn-primary',
    'unique': {
      'background-color': '#364147'
    }
  },
  'formControl': {
    'display': 'block',
    'padding': '6px 12px',
    'border': '1px solid #a0a0a0',
    'color': '#8598a2',
    'line-height': '1.4',
    'selector': '.form-control',
    'unique': {
      'color': '#8598a2'
    }
  },
  'textLight': {
    'font-size': '30px',
    'color': '#a0a0a0',
    'selector': '.text-light',
    'unique': {
      'font-size': '30px',
      'color': '#a0a0a0'
    }
  },
  'textSecondary': {
    'font-size': '30px',
    'color': '#faa541',
    'selector': '.text-secondary',
    'unique': {
      'font-size': '30px',
      'color': '#faa541'
    }
  },
  'textPrimary': {
    'font-size': '16px',
    'color': '#364147',
    'selector': '.text-primary',
    'unique': {
      'font-size': '16px',
      'color': '#364147'
    }
  },
  'headerNav': {
    'border-bottom': '1px solid #a0a0a0',
    'selector': '.header-nav'
  },
  'brand': {
    'width': '170px',
    'height': '85px',
    'margin-left': '-15px',
    'margin-right': '60px',
    'selector': '.brand',
    'unique': {
      'width': '170px'
    }
  },
  'logo': {
    'max-width': '100%',
    'height': 'auto',
    'selector': '.logo',
    'unique': {
      'height': 'auto'
    }
  },
  'searchBox': {
    'width': '330px',
    'height': '30px',
    'padding': '6px 12px',
    'border': '1px solid #a0a0a0',
    'selector': '.search-box',
    'unique': {
      'width': '330px'
    }
  },
  'searchButton': {
    'background-color': '#a0a0a0',
    'width': '100px',
    'height': '30px',
    'color': '#ffffff',
    'border': '0',
    'padding': '0',
    'selector': '.search-button',
    'unique': {
      'background-color': '#a0a0a0'
    }
  },
  'navList': {
    'padding-left': '0',
    'width': '575px',
    'margin-top': '10px',
    'selector': '.nav-list'
  },
  'navListLinks': {
    'font-size': '16px',
    'text-transform': 'uppercase',
    'font-weight': '700',
    'letter-spacing': '0.2px',
    'selector': '.nav-list li a',
    'unique': {
      'letter-spacing': '0.2px'
    }
  },
  'profile': {
    'margin-left': 'auto',
    'selector': '.profile'
  },
  'account': {
    'text-align': 'right',
    'padding': '15px',
    'font-size': '18px',
    'color': '#364147',
    'selector': '.account',
    'unique': {
      'text-align': 'right'
    }
  },
  'accountLinks': {
    'font-size': '14px',
    'selector': '.account a'
  },
  'profilePic': {
    'width': '60px',
    'height': '60px',
    'selector': '.profile-pic'
  },
  'profilePicImage': {
    'border-radius': '100px',
    'max-width': '100%',
    'selector': '.profile-pic img',
    'unique': {
      'border-radius': '100px'
    }
  },
  'hero': {
    'background-image': 'url(\'../img/hero.jpg\')',
    'height': '400px',
    'background-size': 'cover',
    'background-position': 'center center',
    'text-transform': 'uppercase',
    'selector': '.hero',
    'unique': {
      'background-position': 'center center'
    }
  },
  'heroH1': {
    'position': 'relative',
    'left': '-30px',
    'selector': '.hero h1',
    'unique': {
      'left': '-30px'
    }
  },
  'heroH2': {
    'color': '#faa541',
    'selector': '.hero h2'
  },
  'heroHeaders': {
    'font-size': '63px',
    'font-weight': '700',
    'line-height': '0.9',
    'selector': '.hero h1, .hero h2',
    'unique': {
      'line-height': '0.9'
    }
  },
  'heroParagraph': {
    'letter-spacing': '2px',
    'font-weight': '700',
    'font-size': '21px',
    'margin': '0 0 10px',
    'selector': '.hero p',
    'unique': {
      'letter-spacing': '2px'
    }
  },
  'banner': {
    'margin': '55px 15px',
    'width': '100%',
    'border-top': '1px solid #a0a0a0',
    'border-bottom': '1px solid #a0a0a0',
    'padding': '25px 0',
    'selector': '.banner',
    'unique': {
      'padding': '25px 0'
    }
  },
  'bannerImage': {
    'width': '250px',
    'selector': '.banner img'
  },
  'bannerText': {
    'font-size': '30px',
    'font-weight': '700',
    'text-transform': 'uppercase',
    'line-height': '1',
    'text-align': 'center',
    'selector': '.banner-text',
    'unique': {
      'font-size': '30px',
      'text-align': 'center'
    }
  },
  'bannerTextLastChild': {
    'font-size': '16px',
    'font-weight': '400',
    'margin-top': '5px',
    'selector': '.banner-text > div:last-child',
    'unique': {
      'margin-top': '5px'
    }
  },
  'category': {
    'flex': '0 0 25%',
    'padding': '0 15px',
    'selector': '.category'
  },
  'categoryImage': {
    'width': '100%',
    'selector': '.category img'
  },
  'categoryText': {
    'color': '#364147',
    'padding': '30px 0',
    'text-transform': 'uppercase',
    'text-align': 'center',
    'selector': '.category-text',
    'unique': {
      'padding': '30px 0'
    }
  },
  'categoryTextDiv': {
    'font-size': '16px',
    'font-weight': '200',
    'color': '#faa541',
    'selector': '.category-text > div',
    'unique': {
      'padding': '30px 0'
    }
  },
  'categoryTextH3': {
    'font-size': '30px',
    'font-weight': '700',
    'line-height': '1',
    'selector': '.category-text h3'
  },
  'fullBanner': {
    'padding': '0 15px',
    'margin': '50px 0',
    'position': 'relative',
    'selector': '.full-banner',
    'unique': {
      'margin': '50px 0'
    }
  },
  'fullBannerBefore': {
    'content': '""',
    'position': 'absolute',
    'border': '1px solid #ffffff',
    'top': '30px',
    'bottom': '30px',
    'left': '50px',
    'right': '50px',
    'z-index': '1',
    'selector': '.full-banner:before',
    'unique': {
      'top': '30px'
    }
  },
  'fullBannerImage': {
    'flex': '0 0 58.333333%',
    'background-image': 'url(\'../img/vista.jpg\')',
    'background-size': 'cover',
    'background-position': 'top center',
    'min-height': '400px',
    'selector': '.full-banner-image',
    'unique': {
      'flex': '0 0 58.333333%'
    }
  },
  'fullBannerSidebar': {
    'flex': '0 0 41.666667%',
    'background-color': '#364147',
    'text-transform': 'uppercase',
    'padding': '30px',
    'color': '#ffffff',
    'selector': '.full-banner-sidebar',
    'unique': {
      'flex': '0 0 41.666667%'
    }
  },
  'fullBannerSidebarH4': {
    'font-size': '40px',
    'font-weight': '700',
    'color': '#637f94',
    'font-style': 'italic',
    'line-height': '1',
    'selector': '.full-banner-sidebar h4',
    'unique': {
      'font-size': '40px'
    }
  },
  'fullBannerSidebarH4After': {
    'content': '""',
    'width': '100px',
    'height': '1px',
    'background-color': '#faa541',
    'margin': '20px auto',
    'display': 'block',
    'selector': '.full-banner-sidebar h4:after',
    'unique': {
      'margin': '20px auto'
    }
  },
  'fullBannerSidebarFirst': {
    'font-size': '60px',
    'font-weight': '700',
    'line-height': '1',
    'selector': '.full-banner-sidebar > div:nth-of-type(1)',
    'unique': {
      'font-size': '60px'
    }
  },
  'fullBannerSidebarSecond': {
    'font-size': '25px',
    'font-weight': '200',
    'letter-spacing': '3px',
    'selector': '.full-banner-sidebar > div:nth-of-type(2)',
    'unique': {
      'letter-spacing': '3px'
    }
  },
  'fullBannerSidebarButton': {
    'margin-top': '50px',
    'text-transform': 'uppercase',
    'letter-spacing': '1px',
    'z-index': '1',
    'selector': '.full-banner-sidebar .btn.btn-default',
    'unique': {
      'margin-top': '50px'
    }
  },
  'footer': {
    'display': 'flex',
    'flex-wrap': 'wrap',
    'position': 'relative',
    'background-color': '#000000',
    'min-height': '330px',
    'z-index': '0',
    'selector': 'footer',
    'unique': {
      'flex-wrap': 'wrap'
    }
  },
  'footerAfter': {
    'content': '""',
    'background-color': '#a0a0a0',
    'width': '75%',
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '0',
    'z-index': '-1',
    'selector': 'footer:after',
    'unique': {
      'width': '75%'
    }
  },
  'lists': {
    'flex': '0 0 75%',
    'padding': '40px 15px',
    'selector': '.lists',
    'unique': {
      'padding': '40px 15px'
    }
  },
  'linkHeader': {
    'text-transform': 'uppercase',
    'font-weight': '700',
    'font-size': '16px',
    'margin-bottom': '15px',
    'selector': '.link-header',
    'unique': {
      'font-size': '16px',
      'margin-bottom': '15px'
    }
  },
  'footerLinks': {
    'color': '#ffffff',
    'text-transform': 'uppercase',
    'font-size': '12px',
    'padding': '0 0 4px',
    'selector': 'footer a',
    'unique': {
      'padding': '0 0 4px'
    }
  },
  'footerLinksHover': {
    'text-decoration': 'underline',
    'selector': 'footer a:hover'
  },
  'socialLists': {
    'display': 'inline-block',
    'selector': '.social ul li'
  },
  'socialListsLinks': {
    'display': 'block',
    'width': '23px',
    'height': '23px',
    'background-size': '23px 23px',
    'background-position': 'center',
    'selector': '.social ul li a',
    'unique': {
      'width': '23px'
    }
  },
  'twitter': {
    'background-image': 'url(\'../img/twitter.svg\')',
    'selector': '.twitter'
  },
  'facebook': {
    'background-image': 'url(\'../img/facebook.svg\')',
    'selector': '.facebook'
  },
  'instagram': {
    'background-image': 'url(\'../img/instagram.svg\')',
    'selector': '.instagram'
  },
  'pinterest': {
    'background-image': 'url(\'../img/pinterest.svg\')',
    'selector': '.pinterest'
  },
  'newsletterLinkHeader': {
    'font-size': '12px',
    'font-weight': '400',
    'margin-bottom': '5px',
    'selector': '.newsletter .link-header',
    'unique': {
      'margin-bottom': '5px'
    }
  },
  'newsletterLinkSubheader': {
    'font-style': 'italic',
    'font-size': '12px',
    'font-weight': '400',
    'margin-bottom': '15px',
    'selector': '.newsletter .link-subheader',
    'unique': {
      'font-style': 'italic',
      'margin-bottom': '15px'
    }
  },
  'newsletterInput': {
    'border': '1px solid #364147',
    'width': '200px',
    'margin-bottom': '10px',
    'selector': '.newsletter input'
  },
  'newsletterButton': {
    'width': '150px',
    'min-width': 'auto',
    'text-transform': 'uppercase',
    'letter-spacing': '1px',
    'selector': '.newsletter button',
    'unique': {
      'min-width': 'auto'
    }
  },
  'ps': {
    'padding': '40px 0',
    'color': '#e5e5e5',
    'font-size': '16px',
    'flex': '0 0 25%',
    'selector': '.ps',
    'unique': {
      'color': '#e5e5e5'
    }
  },
  'psImage': {
    'max-width': '230px',
    'selector': '.ps img'
  },
  'demo': {
    'padding': '0 30px',
    'selector': '.demo'
  },
  'demoBefore': {
    'content': '""',
    'display': 'block',
    'width': '100%',
    'height': '1px',
    'margin': '30px 0',
    'background': 'linear-gradient(to right,#f05a28 0,#e80a89 100%)',
    'selector': '.demo:before',
    'unique': {
      'margin': '30px 0'
    }
  },
  'copyright': {
    'text-align': 'center',
    'font-size': '12px',
    'flex': '0 0 75%',
    'padding': '10px 0',
    'selector': '.copyright',
    'unique': {
      'flex': '0 0 75%',
      'padding': '10px 0'
    }
  }
}

module.exports = {
  declarations,
  container: diffAny(declarations.container, '`Container`'),
  section: getRule('section', declarations.section.selector),
  flex: getRule('.flex', declarations.flex.selector),
  flexColumn: diffAny(declarations.flexColumn, '`Flex Column`'),
  flexOne: diffAny(declarations.flexOne, '`Flex One`'),
  alignCenter: diffAny(declarations.alignCenter, '`Align Center`'),
  center: diffAny(declarations.center, '`Center`'),
  spaceBetween: diffAny(declarations.spaceBetween, '`Space Between`'),
  btn: diffAny(declarations.btn, '`Button`'),
  btnDefault: diffAny(declarations.btnDefault, '`Default Button`'),
  btnPrimary: diffAny(declarations.btnPrimary, '`Primary Button`'),
  formControl: diffAny(declarations.formControl, '`Form Control`'),
  textLight: diffAny(declarations.textLight, '`Light Text`'),
  textSecondary: diffAny(declarations.textSecondary, '`Secondary Text`'),
  textPrimary: diffAny(declarations.textPrimary, '`Primary Text`'),
  headerNav: getRule('.header-nav', declarations.headerNav.selector),
  brand: diffAny(declarations.brand, '`Brand`'),
  logo: diffAny(declarations.logo, '`Logo`'),
  searchBox: diffAny(declarations.searchBox, '`Search Box`'),
  searchButton: diffAny(declarations.searchButton, '`Search Button`'),
  navList: diffAny(declarations.navList, '`Nav List`'),
  navListLinks: diffAny(declarations.navListLinks, '`Nav List Links`'),
  profile: diffAny(declarations.profile, '`Profile`'),
  account: diffAny(declarations.account, '`Account`'),
  accountLinks: getRule('.account a', declarations.accountLinks.selector),
  profilePic: diffAny(declarations.profilePic, '`Profile Pic`'),
  profilePicImage: diffAny(declarations.profilePicImage, '`Profile Pic Image`'),
  hero: diffAny(declarations.hero, '`Hero`'),
  heroH1: diffAny(declarations.heroH1, '`Hero H1`'),
  heroH2: getRule('.hero h2', declarations.heroH2.selector),
  heroHeaders: diffAny(declarations.heroHeaders, '`Hero Headers`'),
  heroParagraph: diffAny(declarations.heroParagraph, '`Hero Paragraph`'),
  banner: diffAny(declarations.banner, '`Banner`'),
  bannerImage: diffAny(declarations.bannerImage, '`Banner Image`'),
  bannerText: diffAny(declarations.bannerText, '`Banner Text`'),
  bannerTextLastChild: diffAny(declarations.bannerTextLastChild, '`Banner Text Last Child`'),
  category: getRule('.category', declarations.category.selector),
  categoryImage: getRule('.category img', declarations.categoryImage.selector),
  categoryText: diffAny(declarations.categoryText, '`Category Text`'),
  categoryTextDiv: getRule('.category-text > div', declarations.categoryTextDiv.selector),
  categoryTextH3: getRule('.category-text h3', declarations.categoryTextH3.selector),
  fullBanner: diffAny(declarations.fullBanner, '`Full Banner`'),
  fullBannerBefore: diffAny(declarations.fullBannerBefore, '`Full Banner Before`'),
  fullBannerImage: diffAny(declarations.fullBannerImage, '`Full Banner Image`'),
  fullBannerSidebar: diffAny(declarations.fullBannerSidebar, '`Full Banner Sidebar`'),
  fullBannerSidebarH4: diffAny(declarations.fullBannerSidebarH4, '`Full Banner Sidebar H4`'),
  fullBannerSidebarH4After: diffAny(declarations.fullBannerSidebarH4After, '`Full Banner Sidebar H4 After`'),
  fullBannerSidebarFirst: diffAny(declarations.fullBannerSidebarFirst, '`Full Banner Sidebar First`'),
  fullBannerSidebarSecond: diffAny(declarations.fullBannerSidebarSecond, '`Full Banner Sidebar Second`'),
  fullBannerSidebarButton: diffAny(declarations.fullBannerSidebarButton, '`Full Banner Sidebar Button`'),
  footer: diffAny(declarations.footer, '`Footer`'),
  footerAfter: diffAny(declarations.footerAfter, '`Footer After`'),
  lists: diffAny(declarations.lists, '`Lists`'),
  linkHeader: diffAny(declarations.linkHeader, '`Link Header`'),
  footerLinks: diffAny(declarations.footerLinks, '`Footer Links`'),
  footerLinksHover: diffAny(declarations.footerLinksHover, '`Footer Links Hover`'),
  socialLists: diffAny(declarations.socialLists, '`Social Lists`'),
  socialListsLinks: diffAny(declarations.socialListsLinks, '`Social Lists Links`'),
  twitter: diffAny(declarations.twitter, '`Twitter`'),
  facebook: diffAny(declarations.facebook, '`Facebook`'),
  instagram: diffAny(declarations.instagram, '`Instagram`'),
  pinterest: diffAny(declarations.pinterest, '`Pinterest`'),
  newsletterLinkHeader: diffAny(declarations.newsletterLinkHeader, '`Newsletter Link Header`'),
  newsletterLinkSubheader: diffAny(declarations.newsletterLinkSubheader, '`Newsletter Link Sub Header`'),
  newsletterInput: diffAny(declarations.newsletterInput, '`Newsletter Input`'),
  newsletterButton: diffAny(declarations.newsletterButton, '`Newsletter Button`'),
  ps: diffAny(declarations.ps, '`PS`'),
  psImage: diffAny(declarations.psImage, '`PS Image`'),
  demo: diffAny(declarations.demo, '`Demo`'),
  demoBefore: diffAny(declarations.demoBefore, '`Demo Before`'),
  copyright: diffAny(declarations.copyright, '`Copyright`')
}