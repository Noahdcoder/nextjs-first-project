import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SingleEvent({ data }) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validRegex)) {
      setMessage('Please fill in a correct email address');
    }

    try {
      // POST-fetch-request
      // In body we want to send the emailValue and the eventID
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId })
      })

      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  return (
    <div className='event_single_page'>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={handleSubmit} className="email_registration">
              <label>Get registered for this event!</label>
              <input 
              ref={inputEmail}  
              id="email" 
              placeholder="Please insert your email here" 
              /> 
              <button type='submit'>Submit</button>
              <p>{message}</p>
            </form>            
    </div>
  )
}
