// viet hooks kien tra thong tin dang nhap 
import { useLocalStorate } from "./useLocalStorate";
import { createContext, useContext, useState, useMemo } from "react";
import { LoginUser } from "../services/login";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();
export const AuthProvider = ({children, userData}) =>{
    const [user, setUser] = useLocalStorate("reactjs2302-movie", userData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate() //dieu huong trang

    // dc goi tu form login
    //dataLoginUser la data nguoi dung nhap
    const login =  async (dataLoginUser) => {
        // call api
        setLoading(true);
        setError(null);
        await LoginUser(dataLoginUser)
            .then(res => {
                setLoading(false);
                setUser(res);
                // dieu huonn den trang mac dinh
                navigate("/")
            })
            .catch(err => {
                setLoading(false);
                setError({
                    code: 500, mess: err
                });
                setUser(null);
            })
    }
    const logout = () => {
        //remove data user o local storate
        setUser(null);
        navigate("/login")
    }
    const value = useMemo(() => ({
         user, loading, error, login, logout
    }),[user, loading, error])
        
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
// lay gia tri tu provider useAuth
export const useAuth = () => {
    return useContext(AuthContext);
    // return ve :
    // user, loading, error, login, logout
}
