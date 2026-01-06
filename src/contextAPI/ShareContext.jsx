import { createContext, useState } from 'react'

export const searchContext = createContext()

function ShareContext({ children }) {

  const [searchKey, setSearchkey] = useState("")

  return (
    <searchContext.Provider value={{ searchKey, setSearchkey }}>
      {children}
    </searchContext.Provider>
  )
}

export default ShareContext



































