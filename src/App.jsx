import { ConfigProvider } from 'antd'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Comp from './constants/Comp'
import General from './context/General'
import './style/App.scss'

function App() {
  function ProtectedRoutes({ children }) {
    let token = localStorage.getItem('token')
    if (!token) {
      return <Navigate to="/login" replace={true} />
    } else {
      return children;
    }
  }
  const root = createBrowserRouter([
    {
      path: '', element: <Comp.MainLayout />, children: [
        { index: true, element: <ProtectedRoutes><Comp.Home /></ProtectedRoutes> }, 
 
 
 
    
   
        {
          path: '*', element: <h1>Error</h1>
        }
      ],
    },
    {
      path: '/login', element: <Comp.Auth />, children: [
        { index: true, element: <Comp.Login /> },
      ]
    },
  ])
  const theme = {
    token: {
      colorPrimary: '#3BA12B',
      colorActiveText: 'red' 
    },
    components: {
      Button: { colorPrimary: '#3BA12B' },
      Input: { colorPrimary: '#3BA12B' },
      Tabs: { colorPrimary: '#3BA12B' },
      Checkbox: { colorPrimary: '#3BA12B' },
      SideBar: { colorPrimary: '#3BA12B' },
      Dropdown: { colorPrimary: '#3BA12B' },
       

    },
  };

  return (
    <>
      <ConfigProvider theme={theme} >
        <General>
          <RouterProvider router={root} />
        </General>
      </ConfigProvider>
    </>
  )
}

export default App
