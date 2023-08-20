
import { Constants, ModelManager } from '@adobe/aem-spa-page-model-manager';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
//import './components/import-components';

import './components/Page/Page';
import './components/Text/Text';

document.addEventListener('DOMContentLoaded', () => {
    ModelManager.initialize().then(pageModel => {
        const history = createBrowserHistory();
        render(
            <Router history={history}>
                <App
                    history={history}
                    cqChildren={pageModel[Constants.CHILDREN_PROP]}
                    cqItems={pageModel[Constants.ITEMS_PROP]}
                    cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
                    cqPath={pageModel[Constants.PATH_PROP]}
                    locationPathname={window.location.pathname}
                />
            </Router>,
            //document.getElementById('page')
            document.getElementById('spa-root');
        );
    });
});
