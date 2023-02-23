import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class FormaService {
  getProjects(userId: string) {
    return axios.get(API_URL + `projects?user=${userId}`, 
    { 
      headers: authHeader() 
    });
  }

  getVisuals(projectId: string) {
    return axios.get(API_URL + `visuals?project=${projectId}`, 
    { 
      headers: authHeader() 
    });
  }

  pushNewDatas() {
    return axios.post(API_URL + 'push', 
    {
      // datas
    },  
    { 
      headers: authHeader() 
    });
  }
}

export default new FormaService();
