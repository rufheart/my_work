import { createContext } from "react";
import { useState, useEffect } from "react";    
import Main from "./Main";

let MyContext = createContext();

let Provider = ({children})=>{
    let [data, setData] = useState([])
    // console.log(data,'--')
    let deyer = [
        {
            id:2,
            username:'Rufat',
            surname:'Nuriyev',
            image:"",
            text:'standart'
        },
        {
            id:3,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:4,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:5,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:6,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:7,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:8,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:9,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:9,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:10,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:11,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },        {
            id:12,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        },
        {
            id:13,
            username:'Asif',
            surname:'Ehmedov',
            image:"",
            text:'standart-17'
        }
    ]
    // useEffect(() => {
    //     setData(data=deyer)
    // }, [])
    for(let i of data){
        console.log(i,'context')
    }
    return(
        <MyContext.Provider value={deyer}>
            {children}
        </MyContext.Provider>
    )
}


export {MyContext};
export default Provider;