import React, { useState } from "react";

const AddComponents = (props) => {  // Đổi thành arrow function
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [arrJobs, setArrJobs] = useState([
        { id: 'job1', title: 'Developer', salary: '500' },
        { id: 'job2', title: 'Tester', salary: '400' },
        { id: 'job3', title: 'Project Manager', salary: '1000' }
    ]);

    const handleChangetitle = (e) => {
        console.log(">>> check value: ", e.target.value);
        setTitle(e.target.value);
    }

    const handleChangesalary = (e) => {
        console.log(">>> check value: ", e.target.value);
        setSalary(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(">>> check data:", {title, salary});
        if(!title || !salary || isNaN(Number(salary))) {
            alert('Missing required parameters!');
            return;
        }

        props.addNewJob({
            id: Math.floor(Math.random() * 1000), // Tạo ID ngẫu nhiên
            title: title,
            salary: salary
        });

        setTitle(''); // Reset input field
        setSalary(''); // Reset input field

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Jobs Description:</label><br />
                <input 
                    type="text" 
                    id="fname" 
                    value={title}
                    onChange={(e) => handleChangetitle(e)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input 
                    type="text" 
                    id="lname" 
                    value={salary}
                    onChange={(e) => handleChangesalary(e)}
                /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AddComponents;