import { Link } from "react-router-dom"
import Dungeon from "./dungeon"
import PromptGenerator from "./promptGenerator"
import { useEffect } from "react"

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
        <p>this is the landing page for now</p>
        <Link to={"/Dungeon"}><button>hi </button></Link>
        <Link to={"/promptGenerator"}> <button>promptgenerator</button></Link>
        
        </>
    )
}

export default Landing