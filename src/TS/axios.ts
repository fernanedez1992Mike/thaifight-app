import axios from 'axios'
    
const apiClient = axios.create({  
  baseURL: `https://jsonplaceholder.typicode.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
   return apiClient.get('/posts/');
  },
  getEvent(id: number){
    return apiClient.get('/posts/' +id)
  },

}

