
import { createContext } from 'react';
import { useReducer } from 'react';


export const ThemeContext = createContext()

const ThemeReducer = (state,action) => {
    switch (action.type) {
        case 'LIGHT':
            return {...state,theme:'light'}
        case 'DARK':
            return {...state,theme:'dark'}
        default:
            return state
    }
}


export const ThemeContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(ThemeReducer,{theme : 'light'})
    return (
        <ThemeContext.Provider  value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>

    )
}

