import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Search from 'components/modules/Search';
import InitalState from 'components/modules/Info/initial-state';
import LoadingState from 'components/modules/Info/loading-state';
import ErrorState from 'components/modules/Info/error-state';
import InfoSection from 'components/modules/Info/info-section';

const Info = (props) => {
  const {
    user: { loading, error, repos, user, orgs },
    searchText,
    setSearchText,
    getSearchResult,
  } = props;
  return (
    <Container>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        getSearchResult={getSearchResult}
      />

      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : Object.keys(user)?.length > 0 ? (
        <InfoSection user={user} repos={repos} orgs={orgs} />
      ) : (
        <InitalState />
      )}
    </Container>
  );
};

Info.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
  getSearchResult: PropTypes.func,
};

export default Info;
