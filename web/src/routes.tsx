import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import useUser from './hooks/useUser';

import { Congrats } from './pages/Congrats';
import { FaseEight } from './pages/FaseEight';
import { FaseFive } from './pages/FaseFive';
import { FaseFour } from './pages/FaseFour';
import { FaseNine } from './pages/FaseNine';
import { FaseOne } from './pages/FaseOne';
import { FaseSeven } from './pages/FaseSeven';
import { FaseSix } from './pages/FaseSix';
import { FaseTen } from './pages/FaseTen';
import { FaseThree } from './pages/FaseThree';
import { FaseTwo } from './pages/FaseTwo';
import { Login } from './pages/Login';

function PrivateRoute({ component }: { component: JSX.Element }) {
  const { authenticated } = useUser();
  
  if(!authenticated)
    return <Navigate to='/' />;
    
  return component;
}
  
function LoginRoute({ component }: { component: JSX.Element }) {
  const { authenticated } = useUser();

  if(!authenticated)
    return component;

  return <Navigate to='/gAWluizyEQ' />;
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<LoginRoute component={<Login />} />}
        />
        <Route 
          path='/gAWluizyEQ' 
          element={<PrivateRoute component={<FaseOne />} />}
        />
        <Route 
          path='/HsJCZBfTTk' 
          element={<PrivateRoute component={<FaseTwo />} />}
        />
        <Route 
          path='/YVNstGWeYY' 
          element={<PrivateRoute component={<FaseThree />} />}
        />
        <Route 
          path='/QQMaTLJGWV' 
          element={<PrivateRoute component={<FaseFour />} />}
        />
        <Route 
          path='/jkmejlnIfX' 
          element={<PrivateRoute component={<FaseFive />} />}
        />
        <Route 
          path='/XuJvBdsHsE' 
          element={<PrivateRoute component={<FaseSix />} />}
        />
        <Route 
          path='/xAmJhilvRC' 
          element={<PrivateRoute component={<FaseSeven />} />}
        />
        <Route 
          path='/wtRywNUnwP' 
          element={<PrivateRoute component={<FaseEight />} />}
        />
        <Route 
          path='/xEILtlOpgl' 
          element={<PrivateRoute component={<FaseNine />} />}
        />
        <Route 
          path='/OjHaXdGTir' 
          element={<PrivateRoute component={<FaseTen />} />}
        />
        <Route 
          path='/YBlAgDOjTu' 
          element={<PrivateRoute component={<Congrats />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;