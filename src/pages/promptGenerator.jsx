import { useState } from "react"

function PromptGenerator(){
    const[prompts, setPrompts] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const promtObj = {
            title: e.target.job_title.value,
            name: e.target.company_name.value,
            desc: e.target.job_desc.value,
            resume: e.target.resume.value
        }
        
        const prompt = `Personalize my resume for this ${promtObj.title} role at ${promtObj.name}. Here is the JD: ${promtObj.desc}. And here is my resume: ${promtObj.resume}`

        console.log(prompt)
        
        setPrompts(prompt)
    }

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <textarea name="job_title" id="" placeholder="job_title"></textarea>
            <textarea name="company_name" id="" placeholder="company_name"></textarea>
            <textarea name="job_desc" id="" placeholder="job_desc"></textarea>
            <textarea name="resume" id="" placeholder="resume"></textarea>
            <button>submit</button>
        </form>
        {prompts && <p> {prompts}</p>}
        </>
    )
}

export default PromptGenerator