import { useEffect } from "react";
import useAuth from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const CallbackPage = () => {
  const { setToken, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash && !isAuthenticated) {
      const urlParams = new URLSearchParams(hash.slice(1));
      const token = urlParams.get("access_token");
      setToken(token);
    }

    if (isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-variant-primary to-variant-secondary">
        <div className="flex flex-col gap-6">
          <p
            className="font-bold text-[1.4rem] text-white rounded px-12 py-3">
            Please wait while authenticating ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallbackPage;
