import React from 'react';
import './App.css';
import { Routes, Route }  from 'react-router-dom';
import { RequireAuth } from "./routes/requireAuth";
import { About, Login, NotFound, AirPollution, Main } from './pages';

import {ROUTES} from './data/routes'

import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
    return (
    <Provider store={store}>
      <Routes>
          <Route path={ROUTES.main} element={<Main/>} />
          <Route path={ROUTES.airpollution}  element={
                  <RequireAuth>
                      <AirPollution /> 
                  </RequireAuth>
              } />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;