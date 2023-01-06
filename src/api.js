import axios from 'axios';

const devUrl = 'http://localhost:3333/api/v1'

export default axios.create({
  baseURL: devUrl,
});