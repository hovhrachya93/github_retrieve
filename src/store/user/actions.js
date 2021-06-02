import { getUser, getRepositories, getOrganizations } from 'api';
import {
  GET_USER_LOADING,
  GET_USER_COMPLETED,
  GET_USER_FAILURE,
} from './types';

export const getUserInfo = (userName) => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_LOADING,
    });
    try {
      const user = await getUser(`${userName}`);
      const repos = await getRepositories(`${userName}`);
      const orgs = await getOrganizations(`${userName}`);

      const payload = {
        user: user.data,
        repos: repos.data,
        orgs: orgs.data,
      };

      dispatch({
        type: GET_USER_COMPLETED,
        payload,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
        payload: error,
      });
    }
  };
};
