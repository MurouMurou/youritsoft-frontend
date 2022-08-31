import { Post } from '../../models/post.model'
import { User } from '../../models/user.model'

export interface WorkflowProps {
  users: User[]
  posts: Post[]
  setPosts(posts: Post[]): void
}
