
import { createContext} from "react";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const serverUrl = import.meta.env.VITE_API_URL

    const allInfo={
        serverUrl
    }

    return (
       <AuthContext.Provider value={allInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;