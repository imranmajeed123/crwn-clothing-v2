import { createContext, useState, useEffect } from "react";
import {onAuthStateChangedListner, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
export const UserContext = createContext( {
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {

    useEffect(() => {
        const subscription = onAuthStateChangedListner((user) =>{
            setCurrentUser(user);
            if(user) {
                createUserDocumentFromAuth(user);
            }
        return   subscription;  
        });
    }, []);
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}


