import React from 'react';
import { Button } from 'react-bootstrap';
import history from 'utils/browser-history';

const MainContainer = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='display-1 mb-2'>Welcome</h1>
      <Button variant='primary' onClick={() => history.push('/info')}>
        Go to Github Retrieve
      </Button>
    </div>
  );
};

export default MainContainer;
