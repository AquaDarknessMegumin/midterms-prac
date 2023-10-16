import { Link } from 'react-router-dom'
import pic from './pic.jpg'



function Card(){
    const person1 = "Jedd";
    const age = 20;


    return(
        <>
            <div className="card" style={{margin: '10%'}}>
                <img className="card-img" src = {pic}   alt="profile picture" />
                <h2 className='card-name'>Name: {person1}</h2>
                <p>Age: {age}</p>
                <p className='card-text'>Course: BS-IT</p>
            </div>        
            <Link to="/">
                    <button style={{position: 'absolute', top: '20%', right: '45%'}}>Home</button>  
            </Link>
        </>
    )
}

export default Card