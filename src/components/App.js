import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Wiki';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: "Who Killed John F. Kennedy",
        content: "Probably the CIA. Definitely not a lone gunman"
    },{
        title: "What is React",
        content: "React is a front-end javascript framework"
    },{
        title: "Why use react",
        content: "React is a favorite JS library among developers"
    }
]
const options = [
    {
        label: "Green",
        value: 'green'
    },
    {
        label: "Blue",
        value: 'blue'
    },
    {
        label: "Red",
        value: 'red'
    }
]

function App () {
    const [selected, setSelected] = useState(options[0]);
    
        return(
            <div>
            <Header />
                <Route path="/" >
                    <Accordion items={items}/>
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/translate">
                    <Translate  />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    what="color"  />
                </Route>
            </div>
            )
    
}

export default App;
