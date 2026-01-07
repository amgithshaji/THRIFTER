import { createContext, useEffect, useState } from "react"
import { addWishlistAPI, removeWishlistAPI, getWishlistAPI } from "@/services/allAPI"

export const wishlistContext = createContext()

function WishlistContextProvider({ children }) {

  const [wishlist, setWishlist] = useState([])

  const fetchWishlist = async () => {
    const token = sessionStorage.getItem("token")
    if (!token) return

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      const res = await getWishlistAPI(reqHeader)
      if (res.status === 200) {
        setWishlist(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // ❤️ ADD
  const addToWishlist = async (clothId) => {
    const token = sessionStorage.getItem("token")
    if (!token) return

    const alreadyAdded = wishlist.some(item => item.clothId?._id === clothId)
    if (alreadyAdded) return

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      await addWishlistAPI(reqHeader, clothId)
      await fetchWishlist() // 🔥 IMPORTANT
    } catch (err) {
      console.log(err)
    }
  }

  const removeFromWishlist = async (clothId) => {
  const token = sessionStorage.getItem("token")
  if (!token) return

  const reqHeader = {
    "Authorization": `Bearer ${token}`
  }

  try {
    // 1️⃣ DELETE FROM DB
    await removeWishlistAPI(reqHeader, clothId)

    // 2️⃣ REMOVE FROM UI STATE
    setWishlist(prev =>
      prev.filter(item => item.clothId?._id !== clothId)
    )
  } catch (err) {
    console.log(err)
  }
}

  useEffect(() => {
    fetchWishlist()
  }, [])

  return (
    <wishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </wishlistContext.Provider>
  )
}

export default WishlistContextProvider
