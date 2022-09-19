import { createContext,useState } from 'react';

export const ReadContext = createContext();

export const ReadContextProvider = ({children}) => {

    const [isRead,setIsRead] = useState();

    const value = {isRead,setIsRead}

    return (
        <ReadContext.Provider value={value}>{children}</ReadContext.Provider>
    )
}