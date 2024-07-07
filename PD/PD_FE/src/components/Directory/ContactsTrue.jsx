import axios from 'axios';

const backendUrl = `http://localhost:3000/deleteNumber`;

function ContactsTrue(props) {

    const { numbers, setNumbers } = props;

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/${id}`);
            setNumbers(prevNumbers => prevNumbers.filter(number => number._id !== id));
            console.log("Delete successful");
        } catch (error) {
            console.error("Error deleting number:", error);
        }
    };
    

    const Numbers = numbers.map((number) => (
        <div className='PhoneCard' key={number._id}>
            <div id='the-number'>
                <h3>{number.number}</h3>
            </div>
            <div id='actions'>
                <button>Update</button>
                <button onClick={() => handleDelete(number._id)}>Delete</button>
            </div>
        </div>

    ));


    return (
        <>
            <div id="contacts-true" >
                {Numbers}
            </div>
        </>
    )
}

export default ContactsTrue;
