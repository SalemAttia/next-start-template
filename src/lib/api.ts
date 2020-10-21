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
