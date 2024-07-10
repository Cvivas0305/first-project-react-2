/*import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles';
import Routes from './routes';*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';  /*desde aqui voy a iprtal los stylos glbales de margen desde la la carpet global*/


const root = ReactDOM.createRoot(document.getElementById('root'));  /*debajo en el reender se debe colocar la dire  deglobgal para poderi mportar los stylos glob*/
root.render(
<React.StrictMode>
  <Routes />
  <GlobalStyle />   

</React.StrictMode>
);




