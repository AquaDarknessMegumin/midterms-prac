import './display.css'

function DisplayStudent({ students }) {
    return (
        <div className="DisplayStudent">
            {students.map(({ id, name, age, course}, index) => (
                <p key={index}>
                    {`ID: ${id}
                    name: ${name}
                    age: ${age}
                    course: ${course}`}
                </p>
            ))}
        </div>
    )
}

export default DisplayStudent