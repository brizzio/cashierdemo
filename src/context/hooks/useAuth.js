import React, {useState, useEffect} from "react";
import api from "../../api";
import { redirect } from "react-router-dom";

export default function useAuth() {


    const [authenticated, setAuthenticated] = useState(false)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const token = verifyToken()

        if(token){
            api.defaults.headers.common['X-Auth-Token'] = JSON.parse(token);
            setAuthenticated(true)
        }
    },[])

    function verifyToken(){
        setLoading(true)
        const token = localStorage.getItem('token');
        console.log('verifyToken', !!token)
        setLoading(false)
        return token

    }

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

    async function handleLogindemo(payload){

    
        /* const payload = {
            "email":"antimo@gmail.com",
            "password":"123456"
        } */
        

        console.log('auth')
        console.log('login as : ', payload)

        localStorage.setItem('token', JSON.stringify(payload.type))

        api.defaults.headers.common['X-Auth-Token'] = payload.type;

        setAuthenticated(true)

        return true;

        //window.location.replace("http://localhost:3000");

    }





    async function handleLogout(){

        localStorage.removeItem('token')

        api.defaults.headers.common['X-Auth-Token'] = undefined;

        setAuthenticated(false)

        return redirect("/");
        
        

    }


    return {loading, authenticated,setAuthenticated , verifyToken, handleLogin, handleLogindemo, handleLogout}






}