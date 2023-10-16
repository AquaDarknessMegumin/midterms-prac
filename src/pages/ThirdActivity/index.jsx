import { Link } from "react-router-dom";
import { useState } from "react"
import './components/api.css'

function UseApi(){
    const [title, setTitle] = useState("");
        
    function getData(){
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response=> response.json())
        .then(json=> {
            console.log(json);
            setTitle(json.message)
        })
    }


    return(
        <>
            <div className="image">
                <img src={title}/>
            </div>
            <button onClick={getData} >Click Me </button>
        </>
    )

}

export default UseApi