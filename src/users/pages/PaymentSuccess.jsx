import React from 'react';
import Header from '../components/Header';
import Footer from '@/component/Footer';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
   <div>
    <Header/>
        <div style={{ 
          backgroundColor: '#fff', 
          color: '#000', 
          minHeight: '100vh', 
          padding: '40px 20px', 
          fontFamily: 'serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Header Margin */}
          <div style={{ marginTop: '10vh' }} />
    
          {/* Confirmation Section */}
          <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '400', 
              letterSpacing: '-1px', 
              marginBottom: '8px',
              textTransform: 'uppercase' 
            }}>
              Confirmed
            </h1>
            
            <p style={{ 
              fontFamily: 'sans-serif', 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              color: '#666',
              marginBottom: '60px'
            }}>
              Order No. 92100482 // Thank you for your purchase
            </p>
    
            {/* Minimalist Divider Line */}
            <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '40px 0' }} />
    
            {/* Thrift Marketplace Messaging */}
            <div style={{ textAlign: 'left', padding: '0 10px' }}>
              <h3 style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '12px', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                marginBottom: '15px' 
              }}>
                Pre-loved Details
              </h3>
              <p style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '13px', 
                lineHeight: '1.8', 
                color: '#333' 
              }}>
                Your selection of curated items is being processed. Since these are thrifted finds, 
                each piece is being carefully checked and packed by the seller for its next life. 
                You will receive a shipping confirmation email shortly.
              </p>
            </div>
    
            <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '40px 0' }} />
    
            {/* Call to Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
                  <Link to={'/myorder'} style={{ 
                    backgroundColor: '#000', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '18px', 
                    fontSize: '11px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    cursor: 'pointer'
                  }}>
                    Order Status
                  </Link>
              
              <Link to={'/cloth'} style={{ 
                backgroundColor: 'transparent', 
                color: '#000', 
                border: '1px solid #000', 
                padding: '18px', 
                fontSize: '11px', 
                textTransform: 'uppercase', 
                letterSpacing: '1.5px',
                cursor: 'pointer'
              }}>
                Continue Shopping
              </Link>
            </div>
    
            {/* Sustainability Footer */}
            <footer style={{ marginTop: '80px', paddingBottom: '40px' }}>
              <p style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '10px', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                color: '#999' 
              }}>
                Join the movement. <br />
                Circular fashion is the future.
              </p>
            </footer>
          </div>
        </div>
        <Footer/>
   </div>
  );
};

export default PaymentSuccess;