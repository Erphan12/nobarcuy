import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <Jumbotron className="banner">
      <h1>Coming Soon</h1>
      <p>Get ready for the premiere of new movies</p>
      <Button variant="primary">More Movies</Button>
    </Jumbotron>
  );
};

export default Banner;
