import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import  App  from 'components/App/App';
// import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

