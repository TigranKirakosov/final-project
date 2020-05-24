import React, { useEffect } from 'react';

import Navbar from 'Common/components/navbar/navbar.hoc';

import './App.scss';
import { Props } from './App.hoc';
import { RenderRoutes } from 'State/routing/routing.components';
import ROUTES from 'State/routing/routing.model';

const App: React.FC<Props> = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <>
      <Navbar />
      <RenderRoutes routes={ROUTES} />
    </>
  );
};

export default App;
