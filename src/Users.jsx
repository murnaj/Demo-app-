import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//fetching API using tan stack query 

function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      return res.data
    }
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{error?.message}</p>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default Users