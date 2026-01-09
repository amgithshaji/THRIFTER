import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext'
import WishlistContextProvider from './contextAPI/WishlistContext'
import CartContextProvider from './contextAPI/CartContext'
// import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
     <GoogleOAuthProvider clientId='647163233176-gi0ba464gea2m340eb1qshcpc6mk3ahk.apps.googleusercontent.com' >
     <ShareContext>
     <WishlistContextProvider>
     <CartContextProvider>
             <App/>
     </CartContextProvider>  
   </WishlistContextProvider>    
    </ShareContext>    
    </GoogleOAuthProvider>
     
      </BrowserRouter>
    </StrictMode>
)
