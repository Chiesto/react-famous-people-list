import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';
import FamousPersonForm from './FamousPersonForm/FamousPersonForm';
import FamousPersonList from './FamousPersonList/FamousPersonList';

function FamousSection() {
  // let [famousPersonName, setPersonName] = useState('');
  // let [famousPersonRole, setPersonRole] = useState('');
  // let [famousPeopleArray, setPeopleArray] = useState([]);

  // // TODO: on load, call the fetchPeople() function
  

  // const fetchPeople = () => {
  //   // TODO: fetch the list of people from the server
  //   axios.get('/people').then(response => {
  //     setPeopleArray(response.data);
  //     console.log(response.data);
  //   }).catch(error =>{
  //     console.log('error in GET', error)
  //   })
  // }

  // const addPerson = (evt) => {
  //   evt.preventDefault();
  //   console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
  //   // TODO: create POST request to add this new person to the database
  //   axios.post('/people', {
  //     name: famousPersonName,
  //     role: famousPersonRole
  //   }).then(response =>{
  //     fetchPeople();
  //     setPersonName('');
  //     setPersonRole('');
  //   }).catch(err =>{
  //     console.log('error in POST', err);
  //   })
  //   // HINT: the server is expecting a person object 
  //   //       with a `name` and a `role` property
  
  // }

    return (
      <section className="new-person-section">
        <FamousPersonList />
      </section>
    );
}

export default FamousSection;
