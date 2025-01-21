import { createBrowserRouter } from 'react-router-dom';
import VetShops from '../pages/VetShops';

const router = createBrowserRouter([
  {
    path: '*',
    element: <VetShops />,
  },
]);

export default router;
