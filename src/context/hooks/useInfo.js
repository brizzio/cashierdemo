import React, {useState, useEffect, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';

import api from "../../api";

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

export default function useInfo() {



    const [config, setConfig] = useState(initConfig())
    const [isLoading , setIsLoading] = useState(true)
    const [user, setUser] = useState(initUser())
    const [company, setCompany] = useState(initCompany())
    const [store, setStore] = useState(initStore())
    const [session, setSession]= useState(initSession())
    const [newClient, setNewClient] = useState({})

    

    const [, forceUpdate] = useReducer(x => x + 1, 0);
    

    function initUser(){
        return (
            {
            id: 16,
            username: 'f3ce5426-1157-458b-9446-59706dee8ca8',
            created_at: '2022-11-30T14:29:10.911Z',
            updated_at: '2022-11-30T14:29:10.911Z',
            deleted_at: null,
            email: 'antimo@gmail.com',
            first_name: 'Antimo',
            last_name: null,
            role:'admin',
            permissions:['r','w','u','d'],
            fk_company_id:1,
            employee_code:'15246',
            active:true,
            user_group:[],
            last_access_at:'2022-12-06',
            image:'base64'
            }
          )
    }

    function initCompany(){
        return (
            {
            id: 1,
            fiscal_code:'partitaiva',
            name:'Supermercati Marel',
            corporate_name: 'Marel Distribuizione Srl',
            company: 'f3ce5426-1157-458b-9446-59706dee8ca8',
            created_at: '2022-11-30T14:29:10.911Z',
            updated_at: '2022-11-30T14:29:10.911Z',
            deleted_at: null,
            email: 'antimo@gmail.com',
            first_name: 'Antimo',
            last_name: null,
            active: null,
            last_access_at: null,
            role:'admin',
            permissions:['r','w','u','d'],
            employee_code:'15246',
            logo:'image logo'
            }
          )
    }

    function initStore(){
        return (
            {
                id:1,
                retail_banner:'Marel',
                store_code:'001',
                name: 'Punto di Vendita Roma',
                address:'Corso Tintori 18/24, 50122 Firenze (FI)',
                telephone:' 055 2466580',
                image:'base64'
            }
        )
    }


    function initConfig() {
        // 2. Use a template string to set the URL:
        //const res = await fetch(
        //  `https://www.reddit.com/r/${subreddit}.json`
        //);
    
        //const json = await res.json();
        //setPosts(json.data.children.map(c => c.data));

        return {
            cashier_code:'465',
            swap:false
        }

        

        //localStorage.setItem('config', JSON.stringify(c))

        }

    function initSession(){

        const token = localStorage.getItem('token');
        return (
            {
                id:uuidv4(),
                token:JSON.stringify(token),
                login_at:new Date().toISOString(),
                logout_at:null
            }
        )
    }

    function toggleSwap(){

        //setConfig((prev)=>({swap: !prev.swap}))
        
        setConfig({
            ...config,
            swap:!config.swap
        })
        

        //localStorage.setItem('swap', JSON.stringify(config.swap))
    }

    const  addNewClient = (newCli)=>{
        console.log('info addNewClient', newCli)
        setNewClient({...newCli})
        
        let newClients = []

        if(localStorage.newClients){ 
            let arr = Array.from(JSON.parse(localStorage.getItem('newClients')))
            //console.log('Array.isArray(arr)', Array.isArray(arr), arr)
            newClients = Array.isArray(arr)?arr.concat(newCli):[newCli]
            
        }else{
            localStorage.setItem('newClients', JSON.stringify(newClients));
        }
        
        console.log('newClients', JSON.parse(localStorage.getItem('newClients')))
        
    }
       
    
    const useRenderer = (ref, txt) => {
        
        
        useEffect(() => {
            console.log('useInfo use renderer', ref.current)
            const div = ref.current;
            if(div) div.innerHTML = txt;
        },[txt])
      };
   

    
    /* useEffect(() => {
        //console.log('config', config)
        localStorage.setItem('config', JSON.stringify(config));
    }, [config]);

    useEffect(() => {
        localStorage.setItem('config', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('config', JSON.stringify(company));
    }, [company]);

    useEffect(() => {
        localStorage.setItem('config', JSON.stringify(store));
    }, [store]);

    useEffect(() => {
        localStorage.setItem('config', JSON.stringify(session));
    }, [session]);

    useEffect(() => {
        console.log('ueff-newClient', newClient, (Object.keys(newClient).length !== 0))
        const gotNewClient = Object.keys(newClient).length !== 0
        if(gotNewClient){
                
            let newClients = []

            if(localStorage.newClients){ //if (localStorage.getItem("infiniteScrollEnabled") === null)
                let arr = Array.from(JSON.parse(localStorage.getItem('newClients')))
                //console.log('Array.isArray(arr)', Array.isArray(arr), arr)
                newClients = Array.isArray(arr)?arr.concat(newClient):[newClient]
                forceUpdate()
                
            }else{
                console.log('caiu no else')
                newClients = [newClient]
            }
            console.log('newClients', newClients)
           
            if(gotNewClient) localStorage.setItem('newClients', JSON.stringify(newClients));
        }
        
        
    }, [newClient]); */
    


    return {isLoading, 
            config, 
            user,
            company,
            store,
            session,
            newClient,
            addNewClient, 
            toggleSwap,
            useRenderer}






}