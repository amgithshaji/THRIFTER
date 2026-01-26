import React from 'react'
import Header from '../components/Header'
import Footer from '@/component/Footer'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <>
      <Header />
      <div style={{ 
        backgroundColor: '#fff', 
        color: '#000', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 20px',
        fontFamily: 'Helvetica, Arial, sans-serif'
      }}>
        
        {/* Error Identifier */}
        <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          
          {/* Minimalist Error Icon (Simple Cross) */}
          <div style={{ marginBottom: '40px' }}>
             <span style={{ fontSize: '40px', fontWeight: '100' }}>✕</span>
          </div>

          <h1 style={{ 
            fontFamily: 'serif', 
            fontSize: '42px', 
            textTransform: 'uppercase', 
            fontWeight: '400', 
            letterSpacing: '-1px',
            marginBottom: '15px'
          }}>
            Payment Declined
          </h1>

          <p style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            lineHeight: '2', 
            color: '#000',
            marginBottom: '40px'
          }}>
            We were unable to process your transaction. <br />
            Please check your card details or try an alternative payment method.
          </p>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000', marginBottom: '40px' }}></div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to={'/'} style={{ 
              backgroundColor: '#000', 
              color: '#fff', 
              border: 'none', 
              padding: '18px', 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Go to Home Page
            </Link>
            
            <Link to={'/cart'} style={{ 
              backgroundColor: 'transparent', 
              color: '#000', 
              border: '1px solid #e5e5e5', 
              padding: '18px', 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px',
              cursor: 'pointer'
            }}>
              Go to Shopping Bag
            </Link>
          </div>

          {/* Customer Support Link */}
          <p style={{ marginTop: '50px', fontSize: '11px', color: '#666' }}>
            Need help? <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000' }}>Contact Customer Service</span>
          </p>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentFailed