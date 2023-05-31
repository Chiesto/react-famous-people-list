import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';

function FamousPersonList (){
    let [famousPeopleArray, setPeopleArray] = useState([]);
    useEffect(() =>{
        fetchPeople();
      }, [])

    const fetchPeople = () => {
        // TODO: fetch the list of people from the server
        axios.get('/people').then(response => {
          setPeopleArray(response.data);
          console.log(response.data);
        }).catch(error =>{
          console.log('error in GET', error)
        })
      }

    return (
        <>
            <FamousPersonForm addPerson={addPerson}/>
            <ul>
            {famousPeopleArray.map(person =>(
                <li key={person.id}> {person.name} is famous for "{person.role}".</li>
            ))}
            </ul>
        </>
    )
}

export default FamousPersonList