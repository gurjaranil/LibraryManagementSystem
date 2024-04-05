import { createContext, useContext, useEffect, useState } from "react";
import { LoginCall, LogoutCall, } from "./apicall";

export const AuthContext = createContext()

export const useAuth =
    () => useContext(AuthContext)

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [token, setToken] = useState({})
    const [Role, setRole] = useState({})

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loginErr, setLoginErr] = useState("")

    function Login(email, password) {
        return (LoginCall(email, password).then(function (response) {
            setIsAuthenticated(true)
            setUser(response.data.User)
            setRole(response.data.User.role)
            setToken(response.data.Token)
            setLoginErr("")
            localStorage.setItem('isLogin', true)
            localStorage.setItem('Token', response.data.Token);
            localStorage.setItem('User', JSON.stringify(response.data.User));
            localStorage.setItem('Role', response.data.User.role);

            return true

        }).catch(function (err) {
            setIsAuthenticated(false)
            setUser(null)
            setToken(null)
            setRole(null)

            setLoginErr(err.response.data)
            console.log(err?.response?.data)
            throw new Error(err.response.data)
        })
        )
    }

    useEffect(() => {
        const isAuth =Boolean(localStorage.getItem("isLogin"))
        const user = localStorage.getItem("User")
        const Token = localStorage.getItem("Token")
        const Role = localStorage.getItem("Role")

        setIsAuthenticated(isAuth)
        setUser(user)
        setToken(Token)
        setRole(Role)

    }, [])

   


    function Logout() {
      

        return(LogoutCall().then((res)=>{
            setIsAuthenticated(false);
            setUser(null)
            setToken(null)
            localStorage.removeItem("isLogin");
            localStorage.removeItem("User");
            localStorage.removeItem("Token");
            localStorage.removeItem("Role");

        }))

    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, Login, Logout, user,token,Role, loginErr }}>
            {children}
        </AuthContext.Provider>
    )
}

export default  AuthProvider;