import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@shared/store';
import RegistrationPage from '@pages/registration/ui/Registration';
import { LoginPage } from '@pages/login/ui/LoginPage';
import { HomePage } from '@pages/HomePage/HomePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);