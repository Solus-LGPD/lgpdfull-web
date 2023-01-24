import React, { useEffect, useState } from 'react'
import { useNavigate } from  'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import useAPI from '../services/api'

const DefaultLayout = () => {
  const api = useAPI()
  const navigate = useNavigate();

  const [ loading, setLoading ] = useState(true);

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     if(api.gettoken()){
  //       setLoading(false);
  //     } else{
  //       navigate('/login');
  //     }
  //   }
  //   checkLogin();
  // }, [])
  
  return (
    <div>
      {/* {!loading && */}
        <>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-dark text-white">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
            <AppFooter />
          </div>
        </>
      {/* } */}
    </div>
  )
}

export default DefaultLayout
