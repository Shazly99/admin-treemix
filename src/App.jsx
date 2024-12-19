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
        { path: '/profile', element: <ProtectedRoutes><Comp.Profile /></ProtectedRoutes> },
 
        {
          path: '/about', children: [
            { index: true, element: <ProtectedRoutes><Comp.AboutData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditAbout /></ProtectedRoutes> }
          ]
        },
        {
          path: '/blogs', children: [
            { index: true, element: <ProtectedRoutes><Comp.BlogData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditBlog /></ProtectedRoutes> },
            { path: 'list/:id', element: <ProtectedRoutes><Comp.BlogsDetailsData /></ProtectedRoutes> },
            { path: 'update-list/:id', element: <ProtectedRoutes><Comp.EditBlogsDetails /></ProtectedRoutes> }
          ]
        },
        {
          path: '/services', children: [
            { index: true, element: <ProtectedRoutes><Comp.ServicesData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditServices /></ProtectedRoutes> }
          ]
        },
        {
          path: '/gallery', children: [
            { index: true, element: <ProtectedRoutes><Comp.GalleriesList /></ProtectedRoutes> },  
           ]
        },

        {
          path: '/projects', children: [
            { index: true, element: <ProtectedRoutes><Comp.ProjectsData /></ProtectedRoutes> },  
            { path: 'add', element: <ProtectedRoutes><Comp.AddProjects /></ProtectedRoutes> },
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditProject /></ProtectedRoutes> }
          ]
        },
        {
          path: '/sub-services', children: [
            { index: true, element: <ProtectedRoutes><Comp.SubServicesData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditSubServices /></ProtectedRoutes> }
          ]
        },

        {
          path: '/values', children: [
            { index: true, element: <ProtectedRoutes><Comp.ValuesData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditValues /></ProtectedRoutes> }
          ]
        },
   
        {
          path: '/success', children: [
            { index: true, element: <ProtectedRoutes><Comp.SuccessData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditSuccess /></ProtectedRoutes> }
          ]
        },
   
        {
          path: '/slider', children: [
            { index: true, element: <ProtectedRoutes><Comp.SliderData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditSlider /></ProtectedRoutes> }
          ]
        },
        {
          path: '/contact-us', children: [
            { index: true, element: <ProtectedRoutes><Comp.ContactUs /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditSlider /></ProtectedRoutes> }
          ]
        },
     
        {
          path: '/clients', children: [
            { index: true, element: <ProtectedRoutes><Comp.GalleriesPagesData /></ProtectedRoutes> },  
            { path: 'edit/:id', element: <ProtectedRoutes><Comp.EditGalleriesPages /></ProtectedRoutes> }
          ]
        },
        {
          path: '/settings', children: [   
            { path: ':page', element: <ProtectedRoutes><Comp.Settings /></ProtectedRoutes> }
          ]
        },
  
        {
          path: '/statistics', children: [
            { index: true, element: <ProtectedRoutes><Comp.Statistics /></ProtectedRoutes> },  
           ]
        },
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
