import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

// initializing our context
const AuthContext = React.createContext();

// useContext react hook ??
export const useAuth = () => useContext(AuthContext);

// ??
// children ??
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] =useState(null);
    const history = useHistory();

    useEffect(() => {
        // grabbing user from firebase authentication
        auth.onAuthStateChanged(
            // callback function
            (user) => {
                setUser(user); //get user data
                setLoading(false);
                // if user confirmed re-navigate to chat application
                if (user) history.push('/chats'); 
            }
        )
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {/* ?? */}
            {!loading && children}
        </AuthContext.Provider>
    )
} 