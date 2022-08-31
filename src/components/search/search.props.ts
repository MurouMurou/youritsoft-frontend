import { User } from '../../models/user.model'

export interface SearchProps {
  setUsers(users: User[]): void
}
