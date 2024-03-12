import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import { StrictMode } from "react"
import ChatSection from "./components/rightSection/ChatSection"
import ErrorPage from "./components/errorPage/errorPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:`/chatsection/:id`,
        element: <ChatSection/>
      }
    ]
  },
 
])

export default function App() {

  return (
    <StrictMode >
      <RouterProvider router={router} />
    </StrictMode>
  )
}