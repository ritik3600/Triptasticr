import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from "../Context/usercontext";
const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .review::-webkit-scrollbar {
  display: none;
}
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const Review = styled.div`
  margin-bottom: 10px;
  color: #666;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ReviewForm = styled.form`
  margin-top: 20px;
`;

const ReviewInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ReviewTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Allreviews=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
flex-direction: column;
max-height: 70px;
overflow:auto;
webkit-scrollbar {
  display: none;
}
`
const UserReviews = () => {
  const {user,setUser} = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userReview, setUserReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState([]);
  const { city, setCity } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:5000/fetchReview') // This will make a request to the backend endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  
      const rv=data.filter((item)=>{
        return  item.city===city;
      })
       setReviews(rv);
  }, [data]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if ( userReview.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }
    const data={
        name:user,
        review:userReview,
        city:city,
    };
    var flag = insert_data(data);
   
    if (flag === 1) {
      console.log("data is inserted");
    }

    const newReview = { name: userName, review: userReview };
    setReviews([...reviews, newReview]);
    setUserName('');
    setUserReview('');
  };
  const insert_data = async (data) => {
    const response = await fetch("http://localhost:5000/insertReview",{
      method: "post",
      body: JSON.stringify(data),
      headers:
      {
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
      <Title>User Reviews</Title>
      <Allreviews  className='review'>
      {reviews.map((review, index) => (
        <Review key={index}>
          <UserName>{review.name}:</UserName> {review.review}
        </Review>
      ))}
      </Allreviews>
      <ReviewForm >
        <ReviewTextarea
          placeholder="Your Review"
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
        />
        <SubmitButton onClick={handleFormSubmit} type="submit">Submit Review</SubmitButton>
      </ReviewForm>
    </Container>
  );
};

export default UserReviews;