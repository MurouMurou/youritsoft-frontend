export interface UserCardProps {
  id: number
  name: string
  username: string
  email: string
  phone: string
  isSmall: boolean
  showPosts(userId: number): void
}
