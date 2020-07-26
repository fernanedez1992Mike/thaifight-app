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
  getPosts() {
   return apiClient.get('/posts/');
  },

  getPostId(id: any) {
    return apiClient.get('/posts/' + id)
  },

  getAlbums(){
    return apiClient.get('/albums/');
  }
}

