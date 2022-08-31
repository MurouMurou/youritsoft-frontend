import {
  UserCardButtonSmallStyleComponent,
  UserCardButtonStyleComponent,
  UserCardSmallStyleComponent,
  UserCardStyleComponent,
  UserCardTextSmallStyleComponent,
  UserCardTextStyleComponent,
} from './usercard.styles'

import { UserCardProps } from './usercard.props'

export const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  username,
  email,
  phone,
  isSmall,
  showPosts,
}: UserCardProps): JSX.Element => {
  const userCardComponent = () => (
    <UserCardStyleComponent>
      <UserCardTextStyleComponent>{name}</UserCardTextStyleComponent>
      <UserCardTextStyleComponent>{username}</UserCardTextStyleComponent>
      <UserCardTextStyleComponent>{email}</UserCardTextStyleComponent>
      <UserCardTextStyleComponent>{phone}</UserCardTextStyleComponent>
      <UserCardButtonStyleComponent onClick={() => showPosts(id)}>
        <UserCardTextStyleComponent>Show all posts</UserCardTextStyleComponent>
      </UserCardButtonStyleComponent>
    </UserCardStyleComponent>
  )

  const smallUserCardComponent = () => (
    <UserCardSmallStyleComponent>
      <UserCardTextSmallStyleComponent>{name}</UserCardTextSmallStyleComponent>
      <UserCardTextSmallStyleComponent>
        {username}
      </UserCardTextSmallStyleComponent>
      <UserCardTextSmallStyleComponent>{email}</UserCardTextSmallStyleComponent>
      <UserCardTextSmallStyleComponent>{phone}</UserCardTextSmallStyleComponent>
      <UserCardButtonSmallStyleComponent onClick={() => showPosts(id)}>
        <UserCardTextSmallStyleComponent>
          Show all posts
        </UserCardTextSmallStyleComponent>
      </UserCardButtonSmallStyleComponent>
    </UserCardSmallStyleComponent>
  )

  return isSmall ? smallUserCardComponent() : userCardComponent()
}
