import axios from 'axios';
window.axios = axios;


export function getAllRepos(login) {
  return axios.get(`https://api.github.com/users/${login}/repos`).then((resp) => {
    return {
      login: resp.data.login
    }
  });
}

export function getUserInfo() {
  return axios.get('https://api.github.com/user').then((resp) => { 
    return resp.data;
  });
}

export function getIssuesByRepo(login, repoName) {
  return axios.get(`https://api.github.com/repos/${login}/${repoName}/issues`).then((resp) => {
    return resp.data;
  });
}
export function initializeAxio(token) {
  axios.defaults.headers.common['Authorization'] = `token ${token}`;
}