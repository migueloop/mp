import 'helpers/polifill';
import 'intl';
import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { Router, useRouterHistory } from 'react-router';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { makeStore } from 'flux/store';
import { fromJS } from 'immutable';
import { GUID } from 'helpers/constants';
import { Actions } from 'v02/flux';
import cookie from 'react-cookie';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import Internationalization from 'v02/common/modules/locale/components/internationalization';
import piwikReactRouter from 'piwik-react-router';

window.guid = GUID();
function run() {
  const clientConfigElement = document.getElementById('clientConfig');
  window.clientConfig = JSON.parse(clientConfigElement.innerHTML);
  const element = document.getElementById('initial-state');
  const initialState = JSON.parse(element.innerHTML);
  if (element.remove) {
    element.remove();
  }
  const store = makeStore(fromJS(initialState));
  const tenant = store.getState().get('tenant');
  store.dispatch(new Actions(tenant).FrontOffice.Cookie
  .setCookieDisclaimer(!!cookie.load('accepted-cookie')));

  if (store.getState().get('v02').get('common').get('user').get('token')) {
    // new UserRepository(tenant).connect(store.getState().get('v02').get('common').get('user').get('token'));
  }

  store.subscribe(() => {
    try {
      const seo = store.getState().get('v02').get('common').get('seo').get('page');
      document.getElementById('page-title').innerHTML = seo.get('title');
      //  Remove current metadata
      const metaElements = document.getElementsByClassName('seo-metadata');
      for (let i = 0, j = metaElements.length; i < j; i++) {
        metaElements[0].remove();
      }
      const head = document.getElementsByTagName('head')[0];
      seo.get('meta').toJS()
      .forEach(m => {
        head.insertAdjacentHTML('beforeend', renderToStaticMarkup(
          <meta className="seo-metadata" name={m.name}content={m.content} />
        ));
      });
    } catch (e) {
      console.log(e);
    }
  });

  window.test = () => store.getState();
  window.setLocale = locale => store.dispatch(new Actions(tenant).Common.Locale.fetch(locale));
  let browserHistory = useScroll(useRouterHistory(createBrowserHistory))();

  if (initialState.v02.common.analytics.piwik_site_id) {
    const piwik = piwikReactRouter({
      url: initialState.v02.common.analytics.piwik_instance_url,
      siteId: initialState.v02.common.analytics.piwik_site_id,
    });
    browserHistory = piwik.connectToHistory(browserHistory);
  }

  const routes = new Routes(initialState.tenant, store).get();
  render(
    <Provider store={store}>
      <Internationalization >
        <Router children={routes} history={browserHistory} />
      </Internationalization>
    </Provider>
    ,
    document.getElementById('react-app')
  );
}


if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) !== -1 && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
