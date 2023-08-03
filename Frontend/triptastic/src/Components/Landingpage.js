import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SearchBar from './search';
import { UserContext } from "../Context/usercontext";
import { useNavigate } from 'react-router-dom';
// Background image URL
const backgroundImageURL = 'https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=996&t=st=1690620649~exp=1690621249~hmac=81b29c8a231abdd150b610c58427fee86149d470a429b31bbf5808653ebdd315';

const Header = styled.header`
  background-color: rgba(33, 150, 243, 0.9);
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-image: url(${backgroundImageURL});
  background-size: cover;
  color: Black;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;
const Button = styled.a`

  display: inline-block;
  background-color: #2196f3;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d8ddb;
  }
  .link{
    color: #fff;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #f0f0f0;
  }
  }
`;
const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Landingpage = () => {
  const {user,setUser} = useContext(UserContext);
  const history=useNavigate();
  const logoutme=()=>{
     setUser("");
     history("/")
  }
  if(user)
  {

    return (
      <>
      <Header>
     
        <Navbar>
          {/* <Button><Link className='link' to="Login" >Login</Link></Button> */}
          {/* <Button><Link className='link' to="Signup" >Signup</Link></Button> */}
          <Button><Link className='link' to="Trips" >Trips</Link></Button>
          <Button  onClick={logoutme}  >Logout</Button>
          <p> Hi {user?user:""}</p>
        </Navbar>
      </Header>
      <MainContent>
        <Container>
          <SearchBar/>
          <Title>Welcome to Triptastic</Title>
          <Subtitle>Explore the world with us!</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, nisi in
            luctus vestibulum, lacus augue dapibus erat, eget varius neque felis at ex.
          </Description>
        </Container>
      </MainContent>
    </>
  );
}
else{
  return (
    <>
    <Header>
   
      <Navbar>
        <Button><Link className='link' to="Login" >Login</Link></Button>
        <Button><Link className='link' to="Signup" >Signup</Link></Button>
        {/* <Button><Link className='link' to="Trips" >Trips</Link></Button> */}
        <p> Hi {user?user:""}</p>
      </Navbar>
    </Header>
    <MainContent>
      <Container>
        {/* <SearchBar/> */}
        <Title>Welcome to Triptastic</Title>
        <Subtitle>Explore the world with us!</Subtitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, nisi in
          luctus vestibulum, lacus augue dapibus erat, eget varius neque felis at ex.
        </Description>
      </Container>
    </MainContent>
  </>
);
}
};

export default Landingpage;