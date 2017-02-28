require('./styles/main');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './components/App';
import Form from './components/Form';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
  return(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact={true} path='/' component={App} />
          <Route exact={true} path='/settings' component={Form} />
        </div>
      </Router>
    </Provider>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
