import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
