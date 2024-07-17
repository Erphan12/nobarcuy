import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/VideoList.css';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  return (
    <Row className="video-list">
      {videos.map((video) => (
        <Col xs={12} sm={6} md={4} lg={3} key={video.id}>
          <VideoCard video={video} />
        </Col>
      ))}
    </Row>
  );
};

export default VideoList;
