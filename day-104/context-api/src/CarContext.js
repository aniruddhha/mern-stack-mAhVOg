import { createContext } from "react";

export const CarContext = createContext({
    state :{ 
        isIgnited: false,
        isLightOn: true,
        color: 'dark'
    },
    setState: () => {}
})