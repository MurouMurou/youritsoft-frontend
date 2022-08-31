import { User } from '../models/user.model'
import axios from 'axios'

export const getUsers = async (): Promise<User[]> => {
  return await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
}
