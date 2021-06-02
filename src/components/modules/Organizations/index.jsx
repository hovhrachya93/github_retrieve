import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardGroup } from 'react-bootstrap';

const Organizations = ({ organizationsInfo }) => {
  return (
    <div style={{ height: '600px', overflow: 'auto' }}>
      {organizationsInfo.length === 0 ? (
        <h1 className='text-info'>User has not public organizations</h1>
      ) : (
        <CardGroup>
          {organizationsInfo.map((org, index) => {
            return (
              <div
                style={{ minWidth: '200px', maxWidth: '200px' }}
                className='p-2'
                key={index}
              >
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img variant='top' src={org.avatar_url} />
                  <Card.Body>
                    <Card.Title>{org.login}</Card.Title>
                    <Card.Text>{org.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      )}
    </div>
  );
};

Organizations.propTypes = {
  organizationsInfo: PropTypes.array,
};

export default Organizations;
