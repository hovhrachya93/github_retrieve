import API from './api'

export const getUser = async (userName) => await API.get(`/users/${userName}`)
export const getRepositories = async (userName) => await API.get(`/users/${userName}/repos`)
export const getOrganizations = async (userName) => await API.get(`/users/${userName}/orgs`)
