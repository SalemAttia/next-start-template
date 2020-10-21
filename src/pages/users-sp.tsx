import { GetStaticProps } from 'next'
import { UserModel } from '../api/User'
import { getUsers } from '../lib/api'

interface UserProps {
  users: UserModel[]
}

export default function User({ users }: UserProps) {
  return (
    <div>
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

export const getStaticProps: GetStaticProps<UserProps> = async () => {
  // build time render only
  const users = ((await getUsers()) as UserModel[]) || []
  return { props: { users } }
}
