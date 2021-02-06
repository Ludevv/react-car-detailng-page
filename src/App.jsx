import React from 'react';
import './App.scss';
import StoreProvider from './store/StoreProvider'

const App = () => ( 
    <StoreProvider>
        <div>Cześć!</div>
    </StoreProvider>
    
 );

 
export default App;