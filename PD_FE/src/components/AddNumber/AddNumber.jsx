import './addnumber.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/numbers';

function AddNumber() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate(); 

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post(backendUrl, { number, name })
        .then(response => {
            setNumber("");
            setName("");
            navigate('/viewDirectory');
        })
        .catch(error => {
            console.error("Error sending data to backend:", error);
        });
    }

    function handleNumberChange(event) {
        setNumber(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <section>
                <form id="add-number-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        maxLength="20" 
                        required 
                        placeholder='Enter name (max 20 characters)' 
                        value={name}
                        onChange={handleNameChange} 
                    />
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="[0-9]{4}-[0-9]{7}" 
                        required 
                        placeholder='Format: xxxx-xxxxxxx' 
                        value={number}
                        onChange={handleNumberChange} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default AddNumber;
