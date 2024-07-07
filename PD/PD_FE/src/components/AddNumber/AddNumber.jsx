import './addnumber.css';
import { useState } from 'react';
import axios from 'axios';

const backendUrl = `http://localhost:3000/addNumber`;

function AddNumber() {
    const [number, setNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post(backendUrl, { number })
        .then(response => {
            console.log("Backend response:", response.data);
        })
        .catch(error => {
            console.error("Error sending data to backend:", error);
        });
    }

    function handleChange(event) {
        setNumber(event.target.value);
    }

    return (
        <>
            <section>
                <form id="add-number-form" onSubmit={handleSubmit}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{7}" required placeholder='Format: xxxx-xxxxxxx' onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default AddNumber;
