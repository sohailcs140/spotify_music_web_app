import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { checkToken } from '../../utils/authLocalStorage';



const LoginPage2 = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const isAuthenticated = checkToken()

    if(isAuthenticated){
        return navigate("/")
    }


    
    async function login() {
        try{
        setIsLoading(true)
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=a77073181b7d48eb90003e3bb94ff88a&client_secret=68790982a0554d1a83427e061e371507",
          });

        const data = await response.json()

        // setToken(data.access_token)
        
        }catch(error){

        }finally{
            setIsLoading(false)
        }

    }

    return (
       <div className="h-screen flex justify-center items-center bg-gradient-to-r from-variant-primary to-variant-secondary">
            <div className="flex flex-col gap-6">
                <button className="font-bold text-[1.4rem]
                bg-gradient-to-tr from-variant-primary to-variant-secondary
                text-white rounded px-12 py-3  opacity-[.7]
                 transition-all ease-in-out
                shadow-md
                 hover:opacity-[1]
                "
                onClick={login}
                >Login</button>
            </div>
        </div>
    );
}

export default LoginPage2;
