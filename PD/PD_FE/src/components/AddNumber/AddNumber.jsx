import './addnumber.css';
import { useState } from 'react';

function AddNumber() {

    const [number, setNumber] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submitted number:", number);
    }

    function handleChange(event){
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
