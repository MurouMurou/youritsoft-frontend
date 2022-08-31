import { User } from '../../models/user.model'

export interface HeaderProps {
  setUsers(users: User[]): void
}
