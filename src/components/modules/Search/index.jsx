import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchText, setSearchText, getSearchResult }) => {
  return (
    <Form.Group>
      <form onSubmit={(e) => e.preventDefault()}>
        <Row className='justify-content-md-center mt-5'>
          <Col className='d-flex' md='8'>
            <Form.Control
              rows='3'
              placeholder='Search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type='text'
            />
            <Button
              className='mx-2'
              variant='primary'
              onClick={() => (searchText !== '' ? getSearchResult() : null)}
              type='submit'
              style={{ width: '150px' }}
            >
              <FaSearch style={{ marginTop: '-2px' }} />
            </Button>
          </Col>
        </Row>
      </form>
    </Form.Group>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
  getSearchResult: PropTypes.func,
};

export default Search;
