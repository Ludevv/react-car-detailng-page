import React, { createContext, useEffect } from 'react';


export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
    const [items, setItems] = useState([]);

    return(
        <StoreContext.Provider value={
            items,
            setItems
        }>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;