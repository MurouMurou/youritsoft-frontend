import {
  WorkflowNoUsersStyleComponent,
  WorkflowStyleComponent,
  WorkflowUserCardListStyleComponent,
} from './workflow.styles'

import { PostList } from '../postlist/postlist.component'
import { User } from '../../models/user.model'
import { UserCard } from '../usercard/usercard.component'
import { WorkflowProps } from './workflow.props'
import { getUserPosts } from '../../services/post.service'

export const Workflow: React.FC<WorkflowProps> = ({
  users,
  posts,
  setPosts,
}: WorkflowProps): JSX.Element => {
  const showPosts = (userId: number) => {
    getUserPosts(userId).then((_posts) => {
      if (posts.length !== 0) {
        let _userId = posts[0].userId
        if (_userId === userId) {
          setPosts([])
          return
        }
      }
      setPosts(_posts)
    })
  }

  return (
    <WorkflowStyleComponent>
      <WorkflowUserCardListStyleComponent
        style={posts.length > 0 ? { width: '570px', height: '560px' } : {}}
      >
        {users.length > 0 ? (
          users.map((item: User, index: number) => (
            <UserCard
              key={index}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              phone={item.phone}
              isSmall={posts.length > 0}
              showPosts={showPosts}
            />
          ))
        ) : (
          <WorkflowNoUsersStyleComponent>
            No users
          </WorkflowNoUsersStyleComponent>
        )}
      </WorkflowUserCardListStyleComponent>
      {posts.length > 0 ? <PostList posts={posts} /> : null}
    </WorkflowStyleComponent>
  )
}
