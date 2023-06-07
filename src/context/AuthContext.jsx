import useStorage from "hooks/useStorage";
import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const AuthContext = createContext();

const getUser = () => {
   const stdata = useStorage;
   return stdata.get('loginUser');
  };

  const getCookie = () => {
    const cookies = new Cookies();
    return cookies.get("user");
  };

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState();

  const cookies = new Cookies();
  const stdata = useStorage;

  let auth = stdata.get('loginUser');
  let cookie = cookies.get("user");

  useEffect(() => {

    auth = getUser;
    cookie = getCookie;
  },[isAuthenticated]);
  
  const data = { auth, cookie, setIsAuthenticated };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
export default AuthContext;
