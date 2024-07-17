import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../styles/VideoCard.css';

const VideoCard = ({ video }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/videos/${video.id}`);
  };

  return (
    <Card style={{ width: '18rem' }} onClick={handleClick}>
      <Card.Img variant="top" src={video.image} />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>{video.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
