import {createContext, useContext, useState} from "react";

export const AuthContext = createContext(null)
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = () => {
        setUser({
            name:"Anida Bilalli",
            email:"ab32615@seeu.edu.mk"
        });
    };
    const logout = () => {
        setUser(null);
    };

    return <div>
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    </div>
}

export function useAuth() {
    return useContext(AuthContext)
}