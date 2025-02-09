import './polyfill';

import ReactDOM from 'react-dom/client';

import { Root } from '@/components/Root.tsx';

import '@/assets/styles/globals.scss';

import './mockEnv.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
