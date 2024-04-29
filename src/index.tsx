import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'
import "./index.css"
// import MainPage from './pages/MainPage';
// import { Provider } from 'react-redux';
// import store from './store';

const root = createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);
