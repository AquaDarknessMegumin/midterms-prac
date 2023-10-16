import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayStudent from "./components/Display";


function Search(){
    const [idInput, SetIdInput] = useState('')


    const students = [
        {id: 22102538, name: "Jedd", age: 20, course: 'BS-IT'},
        {id: 22102539, name: "Christian", age: 19, course: 'BS-CS'},
        {id: 22102540, name: "Thomas", age: 22, course: 'BS-IS'},
        {id: 22102541, name: "Hiroshi", age: 20, course: 'BS-CpE'},
        {id: 22102542, name: "Garb", age: 19, course: 'BS-HRM'},

    ]

    const filterStudents = idInput
    ? students.filter(( { id }) => id.toString().includes(idInput))
    : students 


    return(
        <>
            <div className="app">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <h1>Search ID</h1>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        onChange={({ target: { value } }) => SetIdInput(value)}
                    />
                <DisplayStudent students={filterStudents}/>
            </div>
        </>

    )
}
export default Search
