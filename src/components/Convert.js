import React, {useState, useEffect} from "react";
import axios from 'axios';


const Convert =({language, text})=>{
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebounced] = useState(text);

    // this useEffect reduces the number of calls made to the API
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounced(text);
        }, 500);

        return ()=>{
            clearTimeout(timer);
        }
    },[text]);

    useEffect(()=>{
        console.log("New Language or Text");
        //the first{} would be the body of the request. the second is params
        //this api uses params
        const translate = async ()=>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},{
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
            })
            setTranslated(data.data.translations[0].translatedText);
        }

        translate();
    }, [language, debouncedText]);
    return(
        <div>
            <h1 className="ui header" >{translated}</h1>
        </div>
        )
}

export default  Convert;
