// require('./bootstrap');

import React from 'react'
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react'
import Layout from './layouts/Layout';

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props }) {
    const container = createRoot(el);

    container.render(<App {...props} />)
  },
})
