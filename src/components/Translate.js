import React, {useState} from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert';

const options = [{
    label: "Italian",
    value: "it"
},
{
    label: "Spanish",
    value: "es"
},
{
    label: "German",
    value: "de"
},
{
    label: "English",
    value: "en"
},{
    label: "Japanese",
    value: "ja"
}];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')

    return(
        <div>
            <div className="ui form segment">
                <div className="field">
                    <label>Enter text to be translated</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                what="Language"
            />
            <h2>Output</h2>
            <Convert 
                language={language}
                text={text}
            />
        </div>
        )
}


export default Translate;