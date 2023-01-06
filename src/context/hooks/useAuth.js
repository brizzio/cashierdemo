import React, {useState, useEffect} from "react";
import api from "../../api";

export default function useAuth() {


    const [authenticated, setAuthenticated] = useState(false)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem('token');
        console.log('has token', !!token)
        if(token){
            api.defaults.headers.common['X-Auth-Token'] = JSON.parse(token);
            setAuthenticated(true)
        }

        setLoading(false)
    },[])


    async function handleLogin(payload){

    
        /* const payload = {
            "email":"antimo@gmail.com",
            "password":"123456"
        } */
        const {data} = await api.post('/auth/login', payload)

        console.log('auth')
        console.log(data.token)

        localStorage.setItem('token', JSON.stringify(data.token))

        api.defaults.headers.common['X-Auth-Token'] = data.token;

        setAuthenticated(true)

        window.location.replace("http://localhost:3000");

    }

    async function handleLogout(){

        localStorage.removeItem('token')

        api.defaults.headers.common['X-Auth-Token'] = undefined;

        setAuthenticated(false)

        

    }


    return {loading, authenticated, handleLogin, handleLogout}






}