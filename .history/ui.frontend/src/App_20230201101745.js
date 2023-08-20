/*
import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
*/

import React from 'react';

import Text from '../components/Text/Text';
import Page from '../components/Page/Page';
import Container from '../components/Container/Container';

/**
 * This component is the application entry point.
 *
 * Optionally the index.js's use of <App ../> can be replaced with <Page ../>
 *
 * We'll keep this broken out in case we need to do more complex App-level configurations
 * like setting context, etc.
 */
const App = (props) => (
    <Page {...props}/>
)

export default App;
