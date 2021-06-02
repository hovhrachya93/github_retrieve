import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';

const User = ({ userInfo }) => {
  const date = moment(userInfo.created_at).format('DD/MMMM/YYYY');
  return (
    <Card>
      <Card.Img className='rounded-circle' src={userInfo.avatar_url} />
      <Card.Body>
        <div className='d-flex'>
          <Card.Title>Name:</Card.Title>
          <p>&nbsp; {userInfo.name}</p>
        </div>
        <div className='d-flex'>
          <Card.Title>Location:</Card.Title>
          <p>&nbsp; {userInfo.location}</p>
        </div>
        {userInfo.email && (
          <div className='d-flex'>
            <Card.Title>Email:</Card.Title>
            <p>&nbsp; {userInfo.email}</p>
          </div>
        )}
        <div className='d-flex'>
          <Card.Title>Public_repos:</Card.Title>
          <p>&nbsp; {userInfo.public_repos}</p>
        </div>
        {userInfo.company && (
          <div className='d-flex'>
            <Card.Title>company:</Card.Title>
            <p>&nbsp; {userInfo.company}</p>
          </div>
        )}
        <div className='d-flex'>
          <Card.Title>Created at:</Card.Title>
          <p>&nbsp; {date}</p>
        </div>
        <Button
          variant='primary'
          onClick={() => {
            window.open(userInfo.html_url, '_blank');
          }}
        >
          Go to user GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

User.propTypes = {
  userInfo: PropTypes.object,
};

export default User;
