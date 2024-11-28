import { SPOTIFY_TOKEN_NAME } from "./constants";

export const getToken = ()=>{
    const token = localStorage.getItem(SPOTIFY_TOKEN_NAME)
    return token?token:null
}

export const checkToken= ()=> getToken()? true:false;

export const setToken = (token)=>{
    localStorage.setItem(SPOTIFY_TOKEN_NAME, token)
}

export const removeToken = ()=>{
    localStorage.removeItem(SPOTIFY_TOKEN_NAME)
}