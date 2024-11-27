import { createContext, useContext, useState, useEffect } from "react";
import { SPOTIFY_TOKEN_NAME } from "../utils/constants";

const AuthContext = createContext({
    token:"", setToken:()=>{}, isAuthenticated:false,
    getToken:()=>{}
})





export const AuthContextProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const getToken = ()=>{
        const token = localStorage.getItem(SPOTIFY_TOKEN_NAME)
        return token?token:null
    }

    const checkToken= ()=> getToken()? true:false;
    
    const setToken = (token)=>{
        localStorage.setItem(SPOTIFY_TOKEN_NAME, token)
        setIsAuthenticated(checkToken())
    }
    
    const removeToken = ()=>{
        localStorage.removeItem(SPOTIFY_TOKEN_NAME)
        setIsAuthenticated(checkToken())
    }
    


    return <AuthContext.Provider value={{setToken, getToken,removeToken,isAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
}


const useAuth = ()=> {
    const {setToken, getToken,removeToken,isAuthenticated, setIsAuthenticated} = useContext(AuthContext)


    return {setToken, getToken,removeToken,isAuthenticated, setIsAuthenticated} 
}

export default useAuth