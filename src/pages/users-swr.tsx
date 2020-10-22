import useSWR from 'swr'
import { UserModel } from '../api/User'
import Layout from '../components/layout'

interface UserProps {
  users: UserModel[]
}

export const User = (): JSX.Element => {
  // loding the api after the page is loaded
  const { data } = (useSWR(
    'https://jsonplaceholder.typicode.com/users'
  ) as unknown) as { data: UserModel[] }

  return (
    <Layout>
      <h2>HERE</h2>
      {data ? (
        data.map((f) => (
          <div key={f.id}>
            <ul>
              <li>{f.name}</li>
              <li>{f.email}</li>
              <li>{f.username}</li>
            </ul>
          </div>
        ))
      ) : (
        <div>loding...</div>
      )}
    </Layout>
  )
}

export default User
