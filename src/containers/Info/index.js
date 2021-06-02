import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import Info from 'views/Info';

const InfoContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [searchText, setSearchText] = useState(params.get('search') || '');
  const { getUserInfo } = useActions();

  useEffect(() => {
    if (searchText) {
      getUserInfo(searchText);
    }
  }, []);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchText) {
      params.append('search', searchText);
    } else {
      params.delete('search');
    }
    history.push({ search: params.toString() });
  }, [history, searchText]);

  const getSearchResult = () => {
    getUserInfo(searchText);
  };

  return (
    <Info
      user={user}
      searchText={searchText}
      setSearchText={setSearchText}
      getSearchResult={getSearchResult}
    />
  );
};

export default InfoContainer;
