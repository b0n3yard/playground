function TtsGenerator(){
    const charecters = {}
    const handleSubmit = (e) =>{
        e.preventDefault()
        const doc = e.target.content.value
        const quotedWords = /"([^"]*)"|'([^']*)`|“([^”]*)”|‘([^’]*)’/g
        const firstname = /(?<!\. )\b(?!It|Of|The|She|That|I)(?:[A-Z][a-z]*|\([^)]*\))\b(?![^"]*"(?:[^"]*"[^"]*")*[^"]*$)/g;

        const regex = new RegExp(firstname)
        const dialogues = doc.match(quotedWords)
        const allNames = []
        const quotes = []
        let currentChar = ''

        for(let dialogue of dialogues){
            const charNamesMatch = dialogue.match(firstname)
            if(charNamesMatch){
                currentChar =  charNamesMatch [0]
                // const charNames = charNamesMatch[0]
                if(!charecters[currentChar]){
                    charecters[currentChar] = []
                }
                charecters[currentChar].push(dialogue)
            }
            // let foundChar = false
    }
    console.log(charecters)
    for(let character  in charecters){
        console.log(`${character}'s dialogues:`);
        console.log(charecters[character]);
    }
        let match 
        while((match = regex.exec(doc))!== null){
            allNames.push(match[0])
        }
        const regexQuoted = new RegExp(quotedWords)
        console.log('hi')
        while((match = regexQuoted.exec(doc))!== null){
            const quotedText = match[1] || match[2] || match[3] || match[4]
            if(quotedText){
                quotes.push(quotedText)
            }
        }

        // console.log(allNames)
        // console.log(quotes)
    }
    return(
        <>
        <section>
            <form action="" onSubmit={handleSubmit}>
                <textarea name="content" id=""></textarea>
                <button>Submit</button>
            </form>
        </section>
        </>
    )
}

export default TtsGenerator