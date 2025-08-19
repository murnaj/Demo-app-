
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Users from './Users.jsx'
import ReactForm from './ReactForm.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  
     <QueryClientProvider client={queryClient}>
      <App />
      <Users />
      <ReactForm />

    </QueryClientProvider>,
  
)
