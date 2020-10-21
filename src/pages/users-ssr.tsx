import { GetServerSideProps } from 'next'
import { UserModel } from '../api/User'
import { getUsers } from '../lib/api'

interface UserProps {
  users: UserModel[]
}

export const User = ({ users }: UserProps): JSX.Element => {
  return (
    <div className="center">
      {users.map((f) => (
        <div key={f.id}>
          <ul>
            <li>{f.name}</li>
            <li>{f.email}</li>
            <li>{f.username}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
export default User

export const getServerSideProps: GetServerSideProps<UserProps> = async () => {
  // call the server each request pre render and it block the page until it gets load
  const users = ((await getUsers()) as UserModel[]) || []
  return { props: { users } }
}
