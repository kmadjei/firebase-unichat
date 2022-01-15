import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';

const Chats = () => {
    const history = useHistory();
    // getting user details from context into CHats.js component
    const { user } = useAuth();


    const handleLogout = async () => {
        await auth.signOut();

        history.push('/')
    }
    return ( 
        <div className='chats-page'>
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>

                <ChatEngine 
                    height="calc(100vh-66px)"
                    projectId='18953b06-8a97-4230-a7d2-c140e76a9ce5'
                    userName='.'
                    userSecret='.'
                />
            </div>
        </div>
     );
}
 
export default Chats;