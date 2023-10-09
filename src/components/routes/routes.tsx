import { createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import SearchPage from '../searchpage/SearchPage';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
]);

export default routes;