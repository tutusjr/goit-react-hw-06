import React from 'react'
import styles from './ContactItem.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactSlice';
export default function ContactItem({contact}) {
    const dispatch = useDispatch();
  return (
    <div className={styles.contactContainer}>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button onClick={() => {dispatch(deleteContact(contact.id))}}>Delete</button>
    </div>
  )
}
