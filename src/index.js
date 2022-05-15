import { LangProvider } from './components/context/langContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClasificadosProvider } from 'components/context/clasificadosContext';
import { ErrorsProvider } from 'components/context/errorsContext';
import { CuartosProvider } from 'components/context/cuartosContext';
import { SemisProvider } from 'components/context/semisContext';
import { FinalProvider } from 'components/context/finalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <ErrorsProvider>
        <ClasificadosProvider>
          <CuartosProvider>
            <SemisProvider>
              <FinalProvider>
                <App />
              </FinalProvider>
            </SemisProvider>
          </CuartosProvider>
        </ClasificadosProvider>
      </ErrorsProvider>
    </LangProvider>
  </React.StrictMode>
);
