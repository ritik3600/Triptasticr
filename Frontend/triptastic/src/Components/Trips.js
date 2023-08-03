import React from "react";
import styled from "styled-components";
import { useEffect,useState } from "react";
import { useContext } from 'react';
import { UserContext } from "../Context/usercontext";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, TelegramShareButton, InstapaperShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';
// Dummy data for trips (replace this with your actual data)
const tripsData = [
  {
    id: 1,
    name: "Trip 1",
    description: "This is the description of Trip 1.",
    image: "https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/MEESAPULIMALA.jpg", // Replace this with the actual image URL
  },
  {
    id: 2,
    name: "Trip 2",
    description: "This is the description of Trip 2.",
    image: "https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/Kerala-peaks-1.jpg", // Replace this with the actual image URL
  },
  {
    id: 3,
    name: "Trip 3",
    description: "This is the description of Trip 3.",
    image: "https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/AGASTHYAKOODAM.jpg", // Replace this with the actual image URL
  },
];

const AllTripsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const TripImage = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
`;

const TripName = styled.h3`
  margin-bottom: 8px;
  color: #2196f3;
`;

const TripDescription = styled.p`
  color: #666;
`;
const TripContainer=styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;

`
const ShareButtons = ({ url, title }) => {
  return (
    <div>
     <FacebookShareButton url={url} quote={title}>
        <FaFacebook  />
      </FacebookShareButton>

      {/* Twitter */}
      <TwitterShareButton url={url} title={title}>
        <FaTwitter />
      </TwitterShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton url={url} title={title}>
        <FaLinkedin />
      </LinkedinShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp />
      </WhatsappShareButton>

      {/* Telegram */}
      <TelegramShareButton url={url} title={title}>
        <FaTelegram />
      </TelegramShareButton>

      {/* Instagram */}
      <InstapaperShareButton url={url} title={title}>
        <FaInstagram />
      </InstapaperShareButton>
      
    </div>
  );
};
const Trips = () =>
{
  const {user,setUser} = useContext(UserContext);
  const [data, setData] = useState([]);
  const { city, setCity } = useContext(UserContext);
  const contentUrl = 'https://www.example.com/my-content';
  const contentTitle = 'Check out this amazing content!';

  useEffect(() => {
    fetch('http://localhost:5000/fetchtrip') // This will make a request to the backend endpoint
      .then((response) => response.json())
      .then((data) => {     
      const rv=data.filter((item)=>{
        return  item.userName===user;
      })
       setData(rv);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [data]);



  return (
    <AllTripsWrapper>
      <h2 style={{ color: "#2196f3", marginBottom: "20px" }}>All Trips</h2>
      <TripContainer>
        {data.map((trip) => (
          <TripCard key={trip.id}>
            <TripImage src='https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/MEESAPULIMALA.jpg' alt={trip.name} />
            <TripName>{trip.tripName}</TripName>
            <TripDescription> From : {trip.source}</TripDescription>
            <TripDescription> To :{trip.destination}</TripDescription>
            <TripDescription> Number of days :{trip.numDays}</TripDescription>
            <ShareButtons url={contentUrl} title={trip.tripName +  " from "+ trip.source  + " to "+ trip.destination + " for "+ trip.numDays +" number of days  "} />
          </TripCard>
        ))}
      </TripContainer>
    </AllTripsWrapper>
  );
};

export default Trips;
