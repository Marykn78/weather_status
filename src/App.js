import './App.css';
import Homepage from './pages/Home/Homepage';
import { Provider } from 'react';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import {router}  from './Routes/router'
function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>
      {/* </Provider> */}
    </div>
  );
}

export default App;
