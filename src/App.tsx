import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TagValidatorPage from './pages/TagValidator/TagValidatorPage';

const App = () => {
  return (
    <Provider data-testid="store-provider" store={store}>
      <TagValidatorPage />
    </Provider>
  );
};

export default App;
