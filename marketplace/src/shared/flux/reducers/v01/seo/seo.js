import { ACTION } from 'flux/actions';
import { Map, fromJS, List } from 'immutable';

// TODO: some updates are required for property="" or <link/>

// Meta DublinCore
//  dcterms.title
//  dcterms.description
//  dc.language fr-FR
//  dcterms.type Text, Collection, Dataset, Service, Software, Sound
//  dcterms.created 2015-10-01T16:14:12+02:00
//  dcterms.creator
//  dcterms.publisher

// Meta Open Graph
//  TODO! WARNING, this is og:title & og:description (not .)
//  Take care, og:* is a property="", not content=""
//  og:title
//  og:description
//  og:image
//  og:locale fr_FR
//  og:type product, product.group, profile, website
//  og:url
//  fb:app_id
//  fb:admins

// Meta Twitter
//  twitter:title
//  twitter:description
//  twitter:image
//  twitter:card
//  twitter:site

function metaDescription(meta, content) {
  return meta.concat(['description', 'og:description', 'dcterms.description', 'twitter:description'].map(name => Map({
    name,
    content,
  })));
}

function metaTitle(meta, content) {
  return meta.concat(['twitter:title', 'og:title', 'dcterms.title'].map(name => Map({
    name,
    content,
  })));
}

function metaImage(meta, content) {
  return meta.concat(['og:image', 'twitter:image'].map(name => (
    Map({
      name,
      content,
    })
  )));
}

export default (state, action, globalState) => {
  switch (action.type) {
    case ACTION.SEO.SET_URL:
      return state.set('url', action.url);
    case ACTION.SEO.SET_FB_ID:
      return state.set('fb_id', action.id);
    case ACTION.SEO.SET:
      const { title, tagline, description } = globalState.get('settings').get('seo').toJS();
      let meta = [
        Map({
          name: 'og:locale',
          content: globalState.get('locale').get('language').replace('-', '_'),
        }),
        Map({
          name: 'dc.language',
          content: globalState.get('locale').get('language'),
        }),
        Map({
          name: 'fb:app_id',
          content: state.get('fb_id'),
        }),
      ];
      switch (action.payload.type) {
        case 'index':
          meta = metaDescription(meta, description);
          meta = metaTitle(meta, title);
          meta = metaImage(meta, `${state.get('url')}/public/images/logo.png`);
          return state.set('meta', List(meta))
            .set('title', `${title} | ${tagline}`);
        case 'corner':
          const corner = globalState.get('corners').toJS()
            .find(c => c.alias === action.payload.data.alias);
          // TODO: missing og:type & dcterms.type
          meta = metaDescription(meta, corner.description);
          meta = metaTitle(meta, corner.name);
          meta = metaImage(meta, `${state.get('url')}/public/images/logo.png`);
          meta = meta.concat([{
            name: 'og:type',
            content: 'product.group',
          }, {
            name: 'dcterms.type',
            content: 'Collection',
          }]);
          return state.set('meta', List(meta))
            .set('title', `${corner.name} | ${title}`);

        case 'product':
          const product = globalState.get('products').toJS()
            .find(p => p.alias === action.payload.data.alias);
          // TODO: missing og:type & dcterms.type
          return state.set('meta', List(['description', 'og:description', 'dcterms.description'].map(name => Map({
            name,
            content: product.baseline,
          }))))
            .set('title', `${product.name} | ${title} `);
        case 'author':
          const author = globalState.get('authors').toJS()
            .find(p => p.alias === action.payload.data.alias);
          // TODO: missing og:type & dcterms.type, author & <link/>author
          return state.set('meta', List(['description', 'og:description', 'dcterms.description'].map(name => Map({
            name,
            content: author.description || author.title,
          }))))
            .set('title', `${author.title} | ${globalState.get('settings').get('seo').get('title')} `);
        default:
          return state.set('title', globalState.get('settings').get('seo').get('title'));
      }
    default:
      return state;
  }
};
