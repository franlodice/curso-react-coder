import { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            email,
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <div className='contactContainer'>
          <h3>Datos de Contacto</h3>
          <form className='contactForm' onSubmit={handleContactForm}>
            <label className='labelContact'>Nombre:
              <input
                className='inputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label className='labelContact'>Telefono:
              <input
                className='inputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='labelContact'>Correo Electrónico:
              <input
                className='inputContact'
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button className='alternativeButton' type='submit'>Guardar Datos</button>
          </form>
        </div>
      )
}

export default ContactForm