import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'custom-event-polyfill';

import { Constants, ModelManager } from '@adobe/aem-spa-page-model-manager';

import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import LocalDevModelClient from './LocalDevModelClient';
import './index.css';

import Container from './components/Container/Container';
import Text from './components/Text/Text';
import Page from './components/Page/Page';

const modelManagerOptions = {};
if(process.env.REACT_APP_PROXY_ENABLED) {
    modelManagerOptions.modelClient = new LocalDevModelClient(process.env.REACT_APP_API_HOST);
}

document.addEventListener('DOMContentLoaded', () => {
    ModelManager.initialize(modelManagerOptions).then(pageModel => {
      const history = createBrowserHistory();
      render(
        <Router history={history}>
          <Page
            history={history}
            cqChildren={pageModel[Constants.CHILDREN_PROP]}
            cqItems={pageModel[Constants.ITEMS_PROP]}
            cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
            cqPath={pageModel[Constants.PATH_PROP]}
            locationPathname={window.location.pathname}
          />
        </Router>,
        document.getElementById('spa-root')
      );
    });
  });