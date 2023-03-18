import React, { lazy, Suspense } from 'react';
import CrmAppbar from './component/appBar';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Suspense>
      <CrmAppbar />
      <Login />
    </Suspense>
  );
}

export default App;
