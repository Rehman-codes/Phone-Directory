import React, { useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/numbers';

function Popup({ number, onClose, onUpdate }) {
    const [newNumber, setNewNumber] = useState(number.number);
    const [newName, setNewName] = useState(number.name);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${backendUrl}/${number._id}`, { number: newNumber, name: newName });
            onUpdate(response.data);
            onClose();
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="new-name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                        placeholder='Enter new name'
                        maxLength={20}
                    />
                    <input
                        type="tel"
                        id="new-number"
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                        required
                        pattern="[0-9]{4}-[0-9]{7}"
                        placeholder='Enter new number'
                    />
                    <button id='popup-update' type="submit">Update</button>
                    <button id='popup-cancel' type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Popup;
