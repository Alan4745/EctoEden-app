import { View, Text } from 'react-native'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type ContextProviderProps = {
    children?: ReactNode;
};

interface StateContextType {
    UserLoggedIn: boolean,
    login: (name: string, password: string) => void; // Agregar la función al tipo
    logout: () => void;
    setUserLoggedIn: any
    Identidad: object,
    setIdentidad: any
}


export const AuthContext = createContext<StateContextType>({
    UserLoggedIn: false,
    login: (_name, _password) => { }, // Proporcionar una función vacía como valor predeterminado
    logout: () => { },
    setUserLoggedIn: false,
    Identidad: {},
    setIdentidad: {}
})


export function AuthProvider({ children }: ContextProviderProps) {
    const [UserLoggedIn, setUserLoggedIn] = useState(false);

    const [Identidad, setIdentidad] = useState({});


    function login(name: string, password: string) {
        console.log("Username", name) // values entered from the inputs
        console.log("password", password) //values entered from the inputs

        AsyncStorage.setItem('UserLoggedIn', JSON.stringify(true));
        setUserLoggedIn(true)
    }

    useEffect(() => {
        AsyncStorage.getItem('UserLoggedIn', (_err, result) => {
            if (result !== null && result !== undefined && result !== '') {
                setUserLoggedIn(JSON.parse(result));
            }
        });
    }, [UserLoggedIn]);

    useEffect(() => {
        AsyncStorage.getItem('Identidad', (_err, result) => {
            if (result !== null && result !== undefined && result !== '') {
                setIdentidad(JSON.parse(result));
            }
        });
    }, [Identidad]);


    async function clearAll() {
        try {
            setUserLoggedIn(false);
            await AsyncStorage.clear();
        } catch (error) {
            console.log('error en la peticion', error);
        }
    }

    function logout() {
        clearAll();
    }

    return (
        <AuthContext.Provider value={{ login, logout, setUserLoggedIn, UserLoggedIn, Identidad, setIdentidad }}>
            {children}
        </AuthContext.Provider>
    )

}