import { createContext, useState } from "react"


export const CartContext = createContext({
    opened: false,
    setOpened: () => null
});

export const CartProvider = ({children}) => {
    const [opened, setOpened] = useState(false);
    const value = {opened, setOpened};

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
