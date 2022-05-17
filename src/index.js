import { LangProvider } from './components/context/langContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClasificadosProvider } from 'components/context/clasificadosContext';
import { ErrorsProvider } from 'components/context/errorsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <ErrorsProvider>
        <ClasificadosProvider>
          <App />
        </ClasificadosProvider>
      </ErrorsProvider>
    </LangProvider>
  </React.StrictMode>
);
