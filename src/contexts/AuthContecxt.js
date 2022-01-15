import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

// initializing our context
const AuthContext = React.createContext();

// useContext react hook ??
export const useAuth = () => useContext(AuthContext);