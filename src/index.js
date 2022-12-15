import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18n";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectProfileProvider } from './context/SelectProfileContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectProfileProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SelectProfileProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
