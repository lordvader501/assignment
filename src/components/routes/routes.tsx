import { createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import HomeLayout from '../HomeSection';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/search',
    element: <HomeLayout />
  },
]);

export default routes;