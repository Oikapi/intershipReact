import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'
import "./index.css"
import store from './store';
import { Provider } from 'react-redux';
// import MainPage from './pages/MainPage';
// import { Provider } from 'react-redux';
// import store from './store';

const root = createRoot(document.getElementById('root')!);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
