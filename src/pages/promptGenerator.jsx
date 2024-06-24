import { useState } from "react"

function PromptGenerator(){
    const[prompts, setPrompts] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const promtObj = {
            title: e.target.job_title.value,
            name: e.target.company_name.value,
            desc: e.target.job_desc.value,
            resume: e.target.resume.value,
            content: e.target.content.value
        }
        console.log(promtObj)
        const prompt = `Personalize my resume for this ${promtObj.title} role at ${promtObj.name}. Here is the JD: ${promtObj.desc}. And here is my resume: ${promtObj.resume}`

        console.log(prompt)
        
        setPrompts(prompt)
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
        const promptObj2 = {
            name: document.querySelector('textarea[name="company_name"]').value,
            content: document.querySelector('textarea[name="content"]').value
        }
        console.log(promptObj2)
        const today = new Date()
        const month = String(today.getMonth() + 1).padStart(2,'0')
        const day = String(today.getDate()).padStart(2,'0')
        const year = today.getFullYear()
        const formattedDate = `${month}/${day}/${year}`

        
        const formattedContent = `
Michael Klein
Bergenfield, NJ
201-562-3558
michaellklein305@gmail.com
        
${formattedDate}
Hiring Manager
${promptObj2.name}


Dear Hiring Manager,
${promptObj2.content}

Warm regards,
Michael Klein       
        ` 

        console.log(formattedContent)

    }

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <textarea name="job_title" id="" placeholder="job_title"></textarea>
            <textarea name="company_name" id="" placeholder="company_name"></textarea>
            <textarea name="job_desc" id="" placeholder="job_desc"></textarea>
            <textarea name="resume" id="" placeholder="resume"></textarea>
            <textarea name="content" id="" placeholder="content"></textarea>
            <button>submit</button>
            <button onClick={handleSubmit2}> generate cover</button>
        </form>
        {prompts && <p> {prompts}</p>}
        </>
    )
}

export default PromptGenerator