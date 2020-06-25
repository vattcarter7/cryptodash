import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content';

const App = () => (
  <AppLayout>
    <AppProvider>
      <AppBar />
      <Content>
        <Settings />
        <Dashboard />
      </Content>
    </AppProvider>
  </AppLayout>
);

export default App;
