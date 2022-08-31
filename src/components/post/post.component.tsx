import {
  PostBodyStyleComponent,
  PostDividerBodyStyleComponent,
  PostStyleComponent,
  PostTitleStyleComponent,
} from './post.styles'
import { useState } from 'react'

import { PostProps } from './post.props'

export const Post: React.FC<PostProps> = ({
  title,
  body,
  isLast,
}: PostProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
    <PostStyleComponent onClick={() => setVisible(!isVisible)}>
      <PostTitleStyleComponent>{title}</PostTitleStyleComponent>
      {isVisible ? (
        <PostBodyStyleComponent>{body}</PostBodyStyleComponent>
      ) : null}
      {!isLast ? (
        <PostDividerBodyStyleComponent></PostDividerBodyStyleComponent>
      ) : null}
    </PostStyleComponent>
  )
}
