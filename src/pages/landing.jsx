import { Link } from "react-router-dom"
import Dungeon from "./dungeon"
import PromptGenerator from "./promptGenerator"
import TtsGenerator from "./ttsGenerator"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Quote from "../components/quote"

function Landing(){
    
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
       
        <h1><Quote slug="freedom"></Quote></h1>
        <p> this is the landing page for now</p>
        <Link to={"/Dungeon"}><button>hi </button></Link>
        <Link to={"/promptGenerator"}> <button>promptgenerator</button></Link>
        <Link to={"/ttsGenerator"}>ttsGenerator</Link>
        
        </>
    )
}

export default Landing