import { Row, Spinner as Loader } from 'react-bootstrap';

const LoadingState = () => {
  return (
    <Row className='justify-content-center mt-5'>
      <Loader animation='border' role='status' variant='primary'></Loader>
      <span className='text-center mt-1'>Loading</span>
    </Row>
  );
};

export default LoadingState;
