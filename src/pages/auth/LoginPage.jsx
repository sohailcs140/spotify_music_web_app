import { useNavigate } from "react-router"
import { checkToken } from "../../utils/authLocalStorage";


const LoginPage = () => {
    const navigate = useNavigate()
    const isAuthenticated = checkToken()

    if(isAuthenticated){
        return navigate("/")
    }

    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    
    const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token`
    
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-variant-primary to-variant-secondary">
            <div className="flex flex-col gap-6">
                <a href={authUrl} className="font-bold text-[1.4rem]
                bg-gradient-to-tr from-variant-primary to-variant-secondary
                text-white rounded px-12 py-3  opacity-[.7]
                 transition-all ease-in-out
                shadow-md
                 hover:opacity-[1]
                ">Login</a>
            </div>
        </div>
    );
}

export default LoginPage;
