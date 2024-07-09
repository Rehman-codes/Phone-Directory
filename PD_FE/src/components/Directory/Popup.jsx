import React, { useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/updateNumber';


function Popup({ number, onClose, onUpdate }) {
    const [newNumber, setNewNumber] = useState(number.number);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${backendUrl}/${number._id}`, { number: newNumber });
            onUpdate(response.data);
            onClose();
        } catch (error) {
            console.error("Error updating number:", error);
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Update Phone Number</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        id="new-number"
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                        required
                        pattern="[0-9]{4}-[0-9]{7}"
                    />
                    <button id='popup-update' type="submit">Update</button>
                    <button id='popup-cancel' type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Popup;