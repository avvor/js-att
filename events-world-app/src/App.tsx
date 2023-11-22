import React from 'react';
import './App.css';
import { Routes, Route }  from 'react-router-dom';
import { RequireAuth } from "./hocs/requireAuth";
import { About, Login, NotFound, AirPollution, Main } from './pages';

import {ROUTES} from './data/routes'

function App() {
    return (
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
  );
}

export default App;