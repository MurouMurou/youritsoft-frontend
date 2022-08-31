import { SearchProps } from './search.props'
import { SearchStyleComponent } from './search.styles'
import { User } from '../../models/user.model'
import { getUsers } from '../../services/user.service'
import { useState } from 'react'

export const Search: React.FC<SearchProps> = ({
  setUsers,
}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('')
  const handle = (value: string): void => {
    setSearch(value)
    getUsers().then((users: User[]): void => {
      users = users.filter(
        (user) => user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
      setUsers(users)
    })
  }

  return (
    <SearchStyleComponent
      type='text'
      placeholder='Search'
      value={search}
      onChange={(e) => handle(e.target.value)}
    />
  )
}
