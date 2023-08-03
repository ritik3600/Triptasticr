import React from "react";
import styled ,{ keyframes } from "styled-components";
import TouristAttractions from "./Tourist";
import UserReviews from "./Userreview";
import data from "../Assets/cites";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/usercontext";
import { useContext } from "react";

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f6f6f6;
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #3e4f69;
  margin-bottom: 20px;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CityNames = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  color: #3e4f69;
  animation: ${fadeIn} 0.8s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #f6f6f6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CityName = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Wrapper2 = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f2f2f2;
  min-height: auto;
  overflow: auto;
  display: flex;
`;
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f2f2f2;
  min-height: 100vh;
`;
const PlanTripButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const CityNameGallery = () => {
  const { city, setCity } = useContext(UserContext);
  const city1 = data.cities;
  return (
    <GalleryContainer>
      {city1.map((city, index) => (
        <CityNames onClick={()=>{setCity(city.name)}}  key={index}>{city.name}</CityNames>
      ))}
    </GalleryContainer>
  );
};
const CityDetails = () => {
  const { city, setCity } = useContext(UserContext);
  console.log("data is ");
  const city1 = data.cities;
  const cities = city1.filter(checkAdult);
  const ln = parseInt(cities.length);
  console.log(ln);

  function checkAdult(age) {
    return age.name === city;
  }

  const history = useNavigate();
  const handleTrip = () => {
    history("Travel");
  };

  if (ln!= 0) {
    return cities.map((city) => {
      return (
        <Wrapper>
          <Container>
            <CityName>{city.name}</CityName>
            <Image
              src="https://img.freepik.com/free-photo/antique-medieval-town-with-old-gate-bridge_1398-4459.jpg?w=996&t=st=1690652930~exp=1690653530~hmac=686bc8c8e890eb2894e681568aedf7415dd67fe8ab5d8036998986ba7319e871" // Replace with the actual image URL
              alt="Wonderland City"
            />
            <Description>{city.description}</Description>
          </Container>
          <Wrapper2>
            <TouristAttractions data={city.attractions} />
            <UserReviews />
          </Wrapper2>
          <PlanTripButton onClick={handleTrip}>Go Here </PlanTripButton>
        </Wrapper>
      );
    });
  } else {
    return (
      <Wrapper>
        <GalleryContainer>
          <AppContainer>
            <Title>Please choose among these </Title>
            <CityNameGallery />
          </AppContainer>
        </GalleryContainer>
      </Wrapper>
    );
  }
};
// else{
//     return(
//       cities.map((city)=>{
//         <Wrapper>
//       <Container>
//         <CityName>{city.name}</CityName>
//         <Image
//           src="https://img.freepik.com/free-photo/antique-medieval-town-with-old-gate-bridge_1398-4459.jpg?w=996&t=st=1690652930~exp=1690653530~hmac=686bc8c8e890eb2894e681568aedf7415dd67fe8ab5d8036998986ba7319e871" // Replace with the actual image URL
//           alt="Wonderland City"
//         />
//         <Description>
//          {city.description}
//         </Description>
//       </Container>
//       <Wrapper2>
//       <TouristAttractions data={city.attractions} />
//       <UserReviews />
//       </Wrapper2>
//       <PlanTripButton  onClick={handleTrip}  >Go Here </PlanTripButton>
//     </Wrapper>
//      })
//      );
// }
// };

export default CityDetails;
