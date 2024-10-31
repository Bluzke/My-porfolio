import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import About from './components/pages/about.jsx';
import Porfolio from './components/pages/portfolio.jsx';
// import NavTabs from './components/NavTabs'
// import Header from './components/header';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume.jsx';
import Error from './components/pages/error.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/Portfolio',
                element: <Porfolio />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Resume',
                element: <Resume />
            },

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );