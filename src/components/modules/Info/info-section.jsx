import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Nav, Row, Col } from 'react-bootstrap';
import User from 'components/modules/User';
import Organizations from 'components/modules/Organizations';
import Repositories from 'components/modules/Repositories';
import history from 'utils/browser-history';

const InfoSection = ({ user, orgs, repos }) => {
  const location = useLocation();

  return (
    <Row className='mt-5'>
      <Col lg={4} md={12} className='d-flex justify-content-center mb-5'>
        <User userInfo={user} />
      </Col>
      <Col lg={8} md={12}>
        <Nav className='mb-4 bg-light p-3'>
          <Nav.Link
            onClick={() =>
              history.push({ pathname: '/info/repo', search: location.search })
            }
            className={
              location.pathname !== '/info/orgs'
                ? 'text-primary'
                : 'text-secondary'
            }
          >
            Repositories
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              history.push({ pathname: '/info/orgs', search: location.search })
            }
            className={
              location.pathname === '/info/orgs'
                ? 'text-primary'
                : 'text-secondary'
            }
          >
            Organizations
          </Nav.Link>
        </Nav>
        <div>
          <Route exact path={['/info/repo', '/info']}>
            <Repositories repositoriesInfo={repos} />
          </Route>

          <Route path='/info/orgs'>
            <Organizations organizationsInfo={orgs} />
          </Route>
        </div>
      </Col>
    </Row>
  );
};

InfoSection.propTypes = {
  user: PropTypes.object,
  orgs: PropTypes.array,
  repos: PropTypes.array,
};

export default InfoSection;
