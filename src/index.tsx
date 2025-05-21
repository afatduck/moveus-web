import React from 'react';
import ReactDOM from 'react-dom/client';
import '~/style/index.css';
import '~/style/reuseable.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './appolo/client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
