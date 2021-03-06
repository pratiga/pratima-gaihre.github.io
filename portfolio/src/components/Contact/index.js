import Loader from 'react-loaders'
import './index.scss'
import {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm(
            'gmail',
            'template_YejhZkgb',
            form.current,
            'your-token'
        )
        .then(
            () => {
                alert('message succesfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    
    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['C','o','n','t','a','c','t','','m','e']}
        idx={15}
        />
        </h1>
        <p>
            i am insterested in freelance opportunities - especisally
            ambitious or large projects. However, if you have other request
            or question, don't hesitate to contact me using below from either.
        </p>
        <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
            <ul>
                <li className='halt'>
                <input type="text" name="name" placeholder="Name" required/>
                </li>
                <li className='half'>
                <input
                type="email"
                name="email"
                placeholder="Email"
                required
                />
                </li>
                <li>
                    <input placeholder="Subject"
                     type="text" 
                     name="subject"
                     required
                     />
                </li>
                <li>
                <textarea
                    placeholder='Message'
                    name='mesasge'
                    required
                    ></textarea>
                </li>
                <li>
                    <input type="submit" className="flat-button" value="send"/>
                </li>
            </ul>
        </form>
        </div>
        </div>
        <div className='info-map'>
         slobodan Gajic,
         <br />
         Serbia,
         <br/>
         Branka RadiCevica 19, 22000 <br />
         srem
        </div>
        
        <Loader type='pacman' />
        </div>
        </>
    )
}
export default Contact