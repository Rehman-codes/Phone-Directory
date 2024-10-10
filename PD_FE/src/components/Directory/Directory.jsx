import './directory.css';
import axios from 'axios';
import ContactsFalse from './ContactsFalse.jsx';
import ContactsTrue from './ContactsTrue.jsx';
import { useEffect, useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL + '/numbers';


function Directory() {

    const [usersExist, setUsersExists] = useState(false);
    const [numbers, setNumbers] = useState([]);

    useEffect(() =>{
        axios.get(backendUrl)
            .then(response => {
                setNumbers(response.data);
                setUsersExists(response.data.length > 0);
            })
            .catch(error => {
                console.error("Error fetching data from backend:", error);
            });

    }, [numbers]);
    

    return (
        <>
            <section>
                {usersExist ? <ContactsTrue numbers={numbers} setNumbers={setNumbers} /> : <ContactsFalse />}
            </section>
        </>
    )
}

export default Directory;
