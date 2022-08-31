import { Post } from '../models/post.model'
import axios from 'axios'

export const getUserPosts = async (userId: number): Promise<Post[]> => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.data)
}
