import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth, getOrder, getorder } from "./firebase";

export const AppContext = createContext({
});

export const AppProvider= ({children})=> {
    const [order,setOrder] =useState({});
    useEffect(()=>{
        getOrder().then((data)=>
        {
            setOrder(data);
        })
    },[])
    const updateOrder = ( ) =>
    {
        getOrder().then((data) =>
        {
            setOrder(data);
        })
    }
    return <AppContext.Provider value={{order,updateOrder}}>
        {children}
    </AppContext.Provider>
}