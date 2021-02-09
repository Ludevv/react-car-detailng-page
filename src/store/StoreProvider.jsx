import React, { createContext, useEffect, useState } from 'react';
import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
    const [cars, setCars] = useState([]);
    const [user, setUser] = useState(null);

    

    const fetchData = async () => {
        const {data} = await request.get('/cars'); //EDIT NA CARS
        setCars(data.cars);
    };

    useEffect(()=> {
        fetchData();
    }, []);

    return(
        <StoreContext.Provider value={{
            cars,
            setCars,
            user,
            setUser
        }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;