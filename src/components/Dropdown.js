import React, {useState, useEffect, useRef} from 'react';
import "./DD.css";


const Dropdown = ({options, selected, onSelectedChange, what})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick = (event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener("click", (event)=>onBodyClick, {capture: true});

        //removes the event listener. Sometimes the ref will be null and cause an error
        //cannot read property 'containes' of null. From line 11
        //Event Bubbling concept
        return () =>{
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        }
        }
    ,[])

    const renderedOptions = options.map((option)=>{
        if(option.value===selected.value){
            return null;
        }
        return(
            <div key={option.value}
                 className="item"
                 onClick={()=> {onSelectedChange(option)}} >
                {option.label}
            </div>
            )
    })
    
    return(
        <div ref={ref} className="ui form test segment">
            <div className="field">
                <label className="label"> Select a {what} </label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active': ''} `}
                    onClick={()=>setOpen(!open)}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    
                    <div className={`menu ${open ? 'visible transition': ''}`}> {renderedOptions}</div>
                </div>
            </div>
        </div>)
}

export default Dropdown;

