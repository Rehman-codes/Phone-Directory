import './directory.css';

function Directory() {
    return (
        <>
            <section>
                <div id="contacts-false">
                    <h3>No contacts added yet!</h3>
                </div>

                <div id="contacts-true">
                    <div className='PhoneCard'>
                        <div id='the-number'>
                            <h3>xxxx-xxxxxxx</h3>
                        </div>
                        <div id='actions'>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Directory;
