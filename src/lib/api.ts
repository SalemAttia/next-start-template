import { UserModel } from '../api/User'

async function fetchAPI(url: string) {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json
}

export async function getUsers() {
  const data = await fetchAPI('https://jsonplaceholder.typicode.com/users')
  return data
}

export async function getUser(id: number): Promise<UserModel> {
  const data = await fetchAPI(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return data
}
