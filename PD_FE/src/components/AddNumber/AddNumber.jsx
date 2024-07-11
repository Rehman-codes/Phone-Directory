import './addnumber.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/addNumber';

function AddNumber() {
    const [number, setNumber] = useState("");
    const navigate = useNavigate(); 

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post(backendUrl, { number })
        .then(response => {
            setNumber("");
            alert('Number added successfully ✅');
            navigate('/viewDirectory');
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
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="[0-9]{4}-[0-9]{7}" 
                        required 
                        placeholder='Format: xxxx-xxxxxxx' 
                        value={number}
                        onChange={handleChange} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default AddNumber;
