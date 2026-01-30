import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) =>
    //     resolvePageComponent(
    //         `./Pages/${name}.jsx`,
    //         import.meta.glob('./Pages/**/*.jsx'),
    //     ),
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

        // Convert 'User.Home' → 'User/Home'
        const path = `./Pages/${name.replace(/\./g, '/')}.jsx`

        const page = pages[path]

        if (!page) {
            throw new Error(`Page not found: ${path}`)
        }

        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
