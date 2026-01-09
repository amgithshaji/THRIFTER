import { createContext, useEffect, useState } from "react"
import { getCartAPI } from "@/services/allAPI"

export const cartContext = createContext()

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const fetchCart = async () => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await getCartAPI(reqHeader)
        setCartItems(result.data || [])
      } catch (err) {
        console.log(err)
      }
    } else {
      setCartItems([])
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, fetchCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
