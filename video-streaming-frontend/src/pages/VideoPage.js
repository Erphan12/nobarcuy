import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/videos/${id}`);
        setVideo(response.data);
      } catch (error) {
        console.error('Error fetching video', error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppNavbar />
      <Container>
        <h1>{video.title}</h1>
        <video controls width="100%">
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{video.description}</p>
      </Container>
    </>
  );
};

export default VideoPage;
