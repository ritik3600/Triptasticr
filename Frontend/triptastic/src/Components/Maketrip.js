import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from "../Context/usercontext";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80') center/cover no-repeat;
  background-color: rgba(0, 0, 0, 0.5); /* Background color with 0.5 opacity */
`;


const FormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #555;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  background-color: rgba(255, 127, 80, 0.5);
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7f50;
  }
`;

const TravelForm = () => {
  const navigate=useNavigate();
  const {user,setUser} = useContext(UserContext);
  const [tripData, setTripData] = useState({
    tripName: '',
    userName: user,
    source: '',
    destination: '',
    numDays: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleTrip= async ()=>{
     const data = tripData;
     console.log(data);
    // validate Email;
     var flag = insert_data(data);
     navigate('/Trips');
    if (flag === 1) {
      console.log("data is inserted");
      
    } 
  }
  const insert_data = async (data) => {
    const response = await fetch("http://localhost:5000/inserttrip", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res)
    if (res.status === 200) {
      return 1;
    }
    return 0;
  };
  return (
    <Container>
      <FormContainer>
        <Title>Add Your Trip Details</Title>
        <Form >
          <Label>Trip Name:</Label>
          <Input
            type="text"
            name="tripName"
            value={tripData.tripName}
            onChange={handleInputChange}
            required
          />
          <Label>Source:</Label>
          <Input
            type="text"
            name="source"
            value={tripData.source}
            onChange={handleInputChange}
            required
          />
          <Label>Destination:</Label>
          <Input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleInputChange}
            required
          />

          <Label>Number of Days:</Label>
          <Input
            type="number"
            name="numDays"
            min="1"
            value={tripData.numDays}
            onChange={handleInputChange}
            required
          />

          <SubmitButton onClick={handleTrip}  value="Add Trip" />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default TravelForm;
