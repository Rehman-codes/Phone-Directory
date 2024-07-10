import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup'; 
import './popup.css';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/deleteNumber';


function ContactsTrue(props) {
    const { numbers, setNumbers } = props;
    const [selectedNumber, setSelectedNumber] = useState(null);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/${id}`);
            setNumbers(prevNumbers => prevNumbers.filter(number => number._id !== id));
            console.log("Delete successful");
        } catch (error) {
            console.error("Error deleting number:", error);
        }
    };

    const handleUpdate = (number) => {
        setSelectedNumber(number); 
    };

    const handleClosePopup = () => {
        setSelectedNumber(null);
    };

    const handleUpdateNumber = (updatedNumber) => {
        setNumbers(prevNumbers => prevNumbers.map(number => number._id === updatedNumber._id ? updatedNumber : number));
    };

    const Numbers = numbers.map((number) => (
        <div className='PhoneCard' key={number._id}>
            <div id='the-number'>
                <h3>{number.number}</h3>
            </div>
            <div id='actions'>
                <button onClick={() => handleUpdate(number)}>Update</button>
                <button id='delete-button' onClick={() => handleDelete(number._id)}>Delete</button>
            </div>
        </div>
    ));

    return (
        <>
            <div id="contacts-true">
                {Numbers}
            </div>
            {selectedNumber && (
                <Popup
                    number={selectedNumber}
                    onClose={handleClosePopup}
                    onUpdate={handleUpdateNumber}
                />
            )}
        </>
    );
}

export default ContactsTrue;