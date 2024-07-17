import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import AppNavbar from '../components/Navbar';
import VideoList from '../components/VideoList';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <AppNavbar />
      <Banner />
      <Container>
        <h2>Popular</h2>
        <VideoList videos={videos} />
      </Container>
    </>
  );
};

export default HomePage;
