import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = ()=>{
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    
    useEffect(()=> {
        const search = async () =>{
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        })//ends .get  
        setResults(data.query.search);     
        }//end of search function
        const timeoutId = setTimeout(()=>{
            if(term){
                search(); 
            } 
        }, 500);
        //clean up function. This reducing the number of times that we call wikipedi API
        //basically it waits 500 miliseconds if user types again
        return(()=>{
            clearTimeout(timeoutId);
        })
        
    }, [term])

    const renderResults = results.map((result)=>{
        if(term){
            return (
            <div key={result.pageid} className="item">
                <div className="right floated ui button">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
            )
        }else{
            return(
            <div></div>)
        }
    })

    return(
        <div className="ui form segment">
            <div className="field">
                <label>Enter Search Term</label>
                <input 
                    className="input"
                    onChange={(e)=> setTerm(e.target.value)}
                    value={term}
                    ></input>
            </div>
            <div className="ui celled list">{renderResults}</div>
        </div>
        )

}

export default Search;



