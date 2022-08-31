import { PostListContainerStyleComponent, PostListStyleComponent } from './postlist.styles'

import { Post } from '../post/post.component'
import { PostListProps } from './postlist.props'

export const PostList: React.FC<PostListProps> = ({
  posts,
}: PostListProps): JSX.Element => {
  return (
    <PostListStyleComponent>
      <PostListContainerStyleComponent>
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            body={post.body}
            isLast={index === posts.length - 1}
          />
        ))}
      </PostListContainerStyleComponent>
    </PostListStyleComponent>
  )
}
