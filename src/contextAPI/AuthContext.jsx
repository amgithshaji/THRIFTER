import React, { createContext, useEffect, useState } from 'react'

export const routeGuardContext = createContext('')

function AuthContext({children}) {
    
    const [role,setRole] = useState('')
    const [authorized,setAuthorized] = useState(false)

      useEffect(()=>{
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAuthorized(true)
      setRole(user.role)
      
    }

  },[authorized,role])
    
  return (
    <routeGuardContext.Provider value={{role,authorized,setAuthorized}}>
    {children}
    </routeGuardContext.Provider>
  )
}

export default AuthContext