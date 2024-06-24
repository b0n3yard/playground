import { Link } from "react-router-dom"
import Dungeon from "./dungeon"
import PromptGenerator from "./promptGenerator"
import TtsGenerator from "./ttsGenerator"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

function Landing(){
    const[quote, setQuote] = useState()
    useEffect(() =>{
        const importQuote = async () =>{
            try{
                const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=freedom`,{
                    headers:{
                       'x-Api-Key': "bQQv3qWq5kHalNjh19VAPQ==OdFpPSD3HrbB6vz5",
                       'Content-Type': 'appliocation/json'
                    }
                })
                console.log(response.data[0].quote)
                const quotes = response.data[0].quote
                setQuote(quotes)

            }catch{

            }
        }
        importQuote()
    },[])
    const key = localStorage.getItem('dungeon')
    useEffect(()=> {
        const checkkey= () =>{
                if(key === 'true'){
                console.log(key)
                window.location.href = "/dungeon"
            }
        }
        checkkey()
    },[])
    return(
        <>
        <p><h1 className="motequote">"{quote}"</h1></p>
        <p> this is the landing page for now</p>
        <Link to={"/Dungeon"}><button>hi </button></Link>
        <Link to={"/promptGenerator"}> <button>promptgenerator</button></Link>
        <Link to={"/ttsGenerator"}>ttsGenerator</Link>
        
        </>
    )
}

export default Landing