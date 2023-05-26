import React from 'react';
import {useState} from 'react';
import ContactForm from './components/ContactForm';
import MessageCard from './components/MessageCard';

export default function App() {
  const [showModal, setShowModal]  = useState(false);
  const [name, setName]  = useState("");

  function submitData (data) {
    console.log(data);
    setName(data.firstName);
    setShowModal(true);
  }

  return (
    <>
      <div className='container mt-3'>
        <ContactForm submitData={submitData}/>
        <MessageCard name={name} showModal={showModal} setShowModal={setShowModal}/>
      </div>
    </>
  )
}
