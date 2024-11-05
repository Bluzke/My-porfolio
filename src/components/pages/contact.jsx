import { useState } from 'react';
import '../../styles/pages.css'
function Contact() {
// setting two state variables for Name, Email< and Message
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [errorMessage, setErrorMessage] = useState('')

const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
        setUserName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
        setMessage(inputValue);
    }
};

const handleFormSubimt = (e) => {
        // preventing default
    e.preventDefault();
        // checking to see if fields are valid
    if (!userName || !email || !message) {
        setErrorMessage('One of the fields are invalid. please make sure all fields are valid before submit');
        return;
    }
    alert(`Thank you for submittion ${userName}, I will get back to you as soon as I can.`);
        // clear out the input after a successfull submit
    setUserName('');
    setEmail('');
    setMessage('');
};

return (
    <div className="container">
        <h1>Contact</h1>
        <form className="form" onSubmit={handleFormSubimt}>
            <div>
                <h2>Name:</h2>
                <input  
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="Type Name Here"
                />
            </div>
            <div>
            <h2>Email Address:</h2>
             <input  
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Type Email Here"
            />
            </div>
            <div>
            <h2>Message:</h2>
             <input  
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Type Your Message Here"
            />
            </div>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button type="submit" className="submit">Submit</button>
      </form>
    </div>
);
}

export default Contact;