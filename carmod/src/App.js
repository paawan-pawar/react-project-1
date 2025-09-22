import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('demo@carmod.com');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  // Car customization states
  const [carColor, setCarColor] = useState('#ff0000');
  const [selectedSticker, setSelectedSticker] = useState('sticker-stripes');
  const [selectedWing, setSelectedWing] = useState('wing-small');
  const [selectedAlloy, setSelectedAlloy] = useState('alloy-standard');
  const [showBilling, setShowBilling] = useState(false);

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('demo@carmod.com');
    setPassword('password');
  };

  const resetCustomization = () => {
    setCarColor('#ff0000');
    setSelectedSticker('sticker-stripes');
    setSelectedWing('wing-small');
    setSelectedAlloy('alloy-standard');
  };

  // Calculate total price
  const calculateTotal = () => {
    let basePrice = 45000;
    // Add pricing logic for different customizations if needed
    return basePrice;
  };

  // Login Page Component
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="car-preview">
            <h2 className="car-title">Toyota Supra GT Customizer</h2>
            <svg className="car-image" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,180 C50,180 30,150 50,120 L150,120 C170,90 200,80 250,80 L350,80 C380,80 400,100 420,120 L450,120 C470,150 450,180 400,180 L100,180 Z" fill="#ff6b35" stroke="#000" strokeWidth="2"/>
              <path d="M150,120 L170,100 L330,100 L350,120 L300,120 C280,120 260,110 250,100 C240,110 220,120 200,120 L150,120 Z" fill="#87CEEB" opacity="0.7" stroke="#000" strokeWidth="1"/>
              <rect x="130" y="150" width="40" height="20" rx="5" fill="#333" />
              <rect x="330" y="150" width="40" height="20" rx="5" fill="#333" />
              <circle cx="150" cy="180" r="15" fill="#222" stroke="#555" strokeWidth="3" />
              <circle cx="350" cy="180" r="15" fill="#222" stroke="#555" strokeWidth="3" />
              <path d="M200,80 L220,60 L280,60 L300,80 L300,90 L200,90 Z" fill="#333" />
            </svg>
            <p className="car-subtitle">Customize your dream Supra GT with our advanced modification tools</p>
            <div className="car-features">
              <div className="feature"><i className="fas fa-paint-roller"></i> Custom Paint</div>
              <div className="feature"><i className="fas fa-cogs"></i> Engine Upgrades</div>
              <div className="feature"><i className="fas fa-tachometer-alt"></i> Performance Parts</div>
              <div className="feature"><i className="fas fa-star"></i> Premium Rims</div>
            </div>
          </div>
          
          <div className="login-section">
            <div className="login-header">
              <div className="logo">
                <i className="fas fa-car-side logo-icon"></i>
                <h1>CarMod Pro</h1>
              </div>
              <p>Sign in to customize your ride</p>
            </div>
            
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>
              
              <div className="remember-forgot">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#!" className="forgot-password">Forgot Password?</a>
              </div>
              
              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            
            <div className="divider">
              <span></span>
              <p>Or continue with</p>
              <span></span>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-btn google">
                <i className="fab fa-google"></i> Google
              </button>
              <button type="button" className="social-btn facebook">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
            </div>
            
            <p className="signup-link">
              Don't have an account? <a href="#!">Sign up now</a>
            </p>
            
            <div className="demo-note">
              <p>Demo: Use any email and password to login</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Car Customization Page (shown after login)
  return (
    <div className="App">
      <div className="App-header">
        <h1>CarMod Pro - Customizer</h1>
        <button onClick={handleLogout} className="logout-btn">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
      
      <div className="customization-container">
        <div className="car-display">
          <div className="car-visualization">
            <div className="car-base" style={{ backgroundColor: carColor }}>
              <div className="car-details">
                <div className="car-headlights"></div>
                <div className="car-headlights"></div>
                <div className="car-grille"></div>
                <div className="car-windows"></div>
                <div className={`car-sticker ${selectedSticker}`}></div>
                <div className={`car-wing ${selectedWing}`}></div>
              </div>
            </div>
            <div className="car-alloys">
              <div className={`alloy ${selectedAlloy}`}></div>
              <div className={`alloy ${selectedAlloy}`}></div>
            </div>
          </div>
          
          <div className="car-specs">
            <h2>Your Custom Toyota Supra GT</h2>
            <div className="price-preview">
              <h3>Total: ${calculateTotal().toLocaleString()}</h3>
              <button 
                className="customize-btn" 
                onClick={() => setShowBilling(true)}
                style={{marginTop: '10px'}}
              >
                View Billing Summary
              </button>
            </div>
          </div>
        </div>

        {showBilling && (
          <div className="billing-summary">
            <h2>Billing Summary</h2>
            <div className="bill-details">
              <div className="bill-row">
                <span>Base Vehicle:</span>
                <span>$45,000</span>
              </div>
              <div className="bill-row">
                <span>Custom Paint:</span>
                <span>Included</span>
              </div>
              <div className="bill-row">
                <span>Sticker Package:</span>
                <span>Included</span>
              </div>
              <div className="bill-row">
                <span>Spoiler:</span>
                <span>Included</span>
              </div>
              <div className="bill-row">
                <span>Alloy Wheels:</span>
                <span>Included</span>
              </div>
              <div className="bill-divider"></div>
              <div className="bill-row total">
                <span>Total Amount:</span>
                <span>${calculateTotal().toLocaleString()}</span>
              </div>
            </div>
            <button 
              className="close-bill-btn" 
              onClick={() => setShowBilling(false)}
            >
              Close Summary
            </button>
          </div>
        )}
        
        <div className="customization-options">
          <div className="option-category">
            <h3>Car Color</h3>
            <div className="options-row">
              {['#ff0000', '#0000ff', '#00ff00', '#ffff00', '#000000', '#ffffff'].map((color) => (
                <div 
                  key={color}
                  className={`option ${carColor === color ? 'selected' : ''}`}
                  onClick={() => setCarColor(color)}
                >
                  <div className="color-swatch" style={{backgroundColor: color}}></div>
                  <span>Color</span>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Sticker Design</h3>
            <div className="options-row">
              {['sticker-stripes', 'sticker-flames', 'sticker-tribal', 'sticker-custom'].map((sticker) => (
                <div 
                  key={sticker}
                  className={`option ${selectedSticker === sticker ? 'selected' : ''}`}
                  onClick={() => setSelectedSticker(sticker)}
                >
                  <div className={`sticker-preview ${sticker}`}></div>
                  <span>{sticker.replace('sticker-', '').charAt(0).toUpperCase() + sticker.replace('sticker-', '').slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Rear Wing</h3>
            <div className="options-row">
              {['wing-small', 'wing-gt', 'wing-drag', 'wing-carbon'].map((wing) => (
                <div 
                  key={wing}
                  className={`option ${selectedWing === wing ? 'selected' : ''}`}
                  onClick={() => setSelectedWing(wing)}
                >
                  <div className={`wing-preview ${wing}`}></div>
                  <span>{wing.replace('wing-', '').charAt(0).toUpperCase() + wing.replace('wing-', '').slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Alloy Wheels</h3>
            <div className="options-row">
              {['alloy-standard', 'alloy-sport', 'alloy-multi', 'alloy-dish', 'alloy-carbon'].map((alloy) => (
                <div 
                  key={alloy}
                  className={`option ${selectedAlloy === alloy ? 'selected' : ''}`}
                  onClick={() => setSelectedAlloy(alloy)}
                >
                  <div className={`alloy-preview ${alloy}`}></div>
                  <span>{alloy.replace('alloy-', '').charAt(0).toUpperCase() + alloy.replace('alloy-', '').slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="customize-btn" onClick={() => setShowBilling(true)}>
            Complete Customization
          </button>
          <button className="reset-btn" onClick={resetCustomization}>
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;