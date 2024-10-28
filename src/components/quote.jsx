import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Quote(e){
    // console.log(e)
    const[quote, setQuote] = useState()
    const[author, setAuthor] = useState()
    useEffect(() =>{
        const slugs = e.slug
        const importQuote = async () =>{
            try{
                const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${slugs}`,{
                    headers:{
                       'x-Api-Key': "bQQv3qWq5kHalNjh19VAPQ==OdFpPSD3HrbB6vz5",
                       'Content-Type': 'application/json'
                    }
                })
                console.log(response)
                const quotes = response.data[0].quote
                const writer = response.data[0].author
                setQuote(quotes)
                setAuthor(writer)

            }catch{

            }
        }
        importQuote()
    },[])
    return(
        <>
        <p className="motequote">"{quote}" -{author}</p>
        </>
    )
}

export default Quote