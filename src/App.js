import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CrmAppbar from './component/appBar';
import Admin from './pages/admin';
import BackOffice from './pages/backOffice';
import Quality from './pages/quality';
import Sav from './pages/sav';
import Support from './pages/support';
import Wc from './pages/wc';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Suspense>
      <CrmAppbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sav" element={<Sav />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/welcome-call" element={<Wc />} />
        <Route path="/back-office" element={<BackOffice />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Suspense>
  );
}

export default App;
