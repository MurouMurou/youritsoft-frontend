import './App.css'

import { useEffect, useState } from 'react'

import { Controls } from './components/controls/controls.component'
import { Header } from './components/header/header.component'
import { Post } from './models/post.model'
import { User } from './models/user.model'
import { Workflow } from './components/workflow/workflow.component'
import { getUsers } from './services/user.service'
import { skipTake } from './utils/array.util'

function App() {
  const [curUsers, setCurUsers] = useState<User[]>([])
  const [users, setUsersState] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [skip, setSkip] = useState<number>(0)

  useEffect(() => {
    getUsers().then((users: User[]): void => {
      setUsers(users)
    })
  }, [])

  const setUsers = (users: User[]) => {
    setSkip(0)
    setCurUsers(skipTake(users, 0, 4))
    setUsersState(users)
  }

  const sortByName = () => {
    let _users = users
    _users.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    setUsers(_users)
  }

  const next = () => {
    let tempSkip = skip + 4
    let tempUsers = skipTake(users, tempSkip, 4)
    if (tempUsers.length > 0) {
      setSkip(tempSkip)
      setCurUsers(tempUsers)
      setPosts([])
    }
  }

  const prev = () => {
    let tempSkip = skip - 4
    let tempUsers = skipTake(users, tempSkip, 4)
    if (tempUsers.length > 0) {
      setSkip(tempSkip)
      setCurUsers(tempUsers)
      setPosts([])
    }
  }

  return (
    <>
      <Header setUsers={setUsers}></Header>
      <Workflow users={curUsers} posts={posts} setPosts={setPosts} />
      <Controls next={next} prev={prev} sortByName={sortByName} />
    </>
  )
}

export default App
