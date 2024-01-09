
import { createContext } from 'react';
import { useReducer } from 'react';


export const ThemeContext = createContext()

const ThemesReducer = (state,action) => {
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

    const [state,dispatch] = useReducer(ThemesReducer,{theme : 'light'})
    return (
        <ThemeContext.Provider  value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>

    )
}


