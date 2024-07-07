function ContactsTrue(props) {

    const { numbers } = props;

    const Numbers = numbers.map((number) => (
        <div className='PhoneCard' key={number._id}>
            <div id='the-number'>
                <h3>{number.number}</h3>
            </div>
            <div id='actions'>
                <button>Update</button>
                <button onClick={handleDelete}>Delete</button>
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
