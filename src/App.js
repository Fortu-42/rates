import React, { useEffect } from 'react';
import { HTTP } from './helpers/http-common';
import './assets/css/App.css';

function App() {
  useEffect(() => {
    HTTP.get('dolar/periodo/2010/01/dias_i/04/2010/01/dias_f/05?').then((response) => {
      console.log(response);
    });
    return () => {};
  }, []);
  return <div className='App'></div>;
}

export default App;
