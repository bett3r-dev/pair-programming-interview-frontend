import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ProvideBackend} from '@contexts/useBackend';

function App() {

  return (
    <ProvideBackend>
      <div>
        <RouterProvider router={router} />
      </div>
    </ProvideBackend>
  );
}

export default App;
