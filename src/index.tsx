import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Components/PhaserGame';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);
