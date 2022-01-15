import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    // getting user details from context into CHats.js component
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();


        history.push('/')
    }

    // function to handle images
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'user.Photo.jpg', { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "18953b06-8a97-4230-a7d2-c140e76a9ce5",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false);
        })
        . catch(() => { // callback function if no user
            
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)

            getFile(user.photoURL).then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https:api.chatengine.io/users', 
                    formdata, 
                    { headers: {'private-key': '3c610008-71ba-4400-9c21-494552c304ad'} }
                )
                .then(() => setLoading(false) )
                .catch((error) => console.log(error))
            })
        })
    }, [user, history]);

    if (!user || loading) return 'Loading...';

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
                    projectID='18953b06-8a97-4230-a7d2-c140e76a9ce5'
                    userName={user.email}
                    userSecret={user.uid}
                />
            </div>
        </div>
     );
}
 
export default Chats;