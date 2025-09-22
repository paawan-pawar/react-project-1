// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // Modification options with prices
  const alloyOptions = [
    { id: 1, name: 'Standard Alloys', className: 'alloy-standard', price: 0 },
    { id: 2, name: 'Sport Rims', className: 'alloy-sport', price: 1200 },
    { id: 3, name: 'Multi-spoke', className: 'alloy-multi', price: 1800 },
    { id: 4, name: 'Deep Dish', className: 'alloy-dish', price: 2200 },
    { id: 5, name: 'Carbon Fiber', className: 'alloy-carbon', price: 3500 }
  ];

  const paintOptions = [
    { id: 1, name: 'Red', color: '#ff0000', price: 0 },
    { id: 2, name: 'Blue', color: '#0000ff', price: 800 },
    { id: 3, name: 'Green', color: '#00ff00', price: 800 },
    { id: 4, name: 'Matte Black', color: '#1a1a1a', price: 1500 },
    { id: 5, name: 'Pearl White', color: '#f0f0f0', price: 1200 }
  ];

  const stickerOptions = [
    { id: 1, name: 'No Sticker', className: 'sticker-none', price: 0 },
    { id: 2, name: 'Racing Stripes', className: 'sticker-stripes', price: 500 },
    { id: 3, name: 'Flames', className: 'sticker-flames', price: 750 },
    { id: 4, name: 'Tribal', className: 'sticker-tribal', price: 900 },
    { id: 5, name: 'Custom Design', className: 'sticker-custom', price: 1500 }
  ];

  const engineOptions = [
    { id: 1, name: 'Standard 3.0L', hp: 320, className: 'engine-standard', price: 0 },
    { id: 2, name: 'Turbocharged', hp: 450, className: 'engine-turbo', price: 5500 },
    { id: 3, name: 'Supercharged', hp: 520, className: 'engine-super', price: 7200 },
    { id: 4, name: 'V8 Swap', hp: 600, className: 'engine-v8', price: 12500 },
    { id: 5, name: 'Hybrid Turbo', hp: 800, className: 'engine-hybrid', price: 18000 }
  ];

  const wingOptions = [
    { id: 1, name: 'No Wing', className: 'wing-none', price: 0 },
    { id: 2, name: 'Small Spoiler', className: 'wing-small', price: 800 },
    { id: 3, name: 'GT Wing', className: 'wing-gt', price: 1200 },
    { id: 4, name: 'Drag Wing', className: 'wing-drag', price: 1800 },
    { id: 5, name: 'Carbon Wing', className: 'wing-carbon', price: 2500 }
  ];

  // Base car price
  const baseCarPrice = 65000;

  // State for selected modifications
  const [selectedAlloy, setSelectedAlloy] = useState(alloyOptions[0]);
  const [selectedPaint, setSelectedPaint] = useState(paintOptions[0]);
  const [selectedSticker, setSelectedSticker] = useState(stickerOptions[0]);
  const [selectedEngine, setSelectedEngine] = useState(engineOptions[0]);
  const [selectedWing, setSelectedWing] = useState(wingOptions[0]);
  const [showBill, setShowBill] = useState(false);

  // Calculate total price
  const calculateTotal = () => {
    return baseCarPrice + 
           selectedAlloy.price + 
           selectedPaint.price + 
           selectedSticker.price + 
           selectedEngine.price + 
           selectedWing.price;
  };

  // Format price with commas
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  // Handle customization completion
  const handleCustomize = () => {
    setShowBill(true);
  };

  // Reset customization
  const handleReset = () => {
    setSelectedAlloy(alloyOptions[0]);
    setSelectedPaint(paintOptions[0]);
    setSelectedSticker(stickerOptions[0]);
    setSelectedEngine(engineOptions[0]);
    setSelectedWing(wingOptions[0]);
    setShowBill(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toyota Supra GT Customizer</h1>
        <p>Customize your dream Supra GT</p>
      </header>

      <div className="customization-container">
        <div className="car-display">
          <div className="car-visualization">
            <div className="car-base" style={{ backgroundColor: selectedPaint.color }}>
              <div className={`car-sticker ${selectedSticker.className}`}></div>
              <div className={`car-wing ${selectedWing.className}`}></div>
              <div className="car-alloys">
                <div className={`alloy ${selectedAlloy.className}`}></div>
                <div className={`alloy ${selectedAlloy.className}`}></div>
              </div>
              <div className="car-details">
                <div className="car-headlights"></div>
                <div className="car-grille"></div>
                <div className="car-windows"></div>
              </div>
            </div>
          </div>
          
          <div className="car-specs">
            <h2>Current Specifications</h2>
            <p>Engine: {selectedEngine.name} ({selectedEngine.hp} HP) - {formatPrice(selectedEngine.price)}</p>
            <p>Paint: {selectedPaint.name} - {formatPrice(selectedPaint.price)}</p>
            <p>Wheels: {selectedAlloy.name} - {formatPrice(selectedAlloy.price)}</p>
            <p>Sticker: {selectedSticker.name} - {formatPrice(selectedSticker.price)}</p>
            <p>Wing: {selectedWing.name} - {formatPrice(selectedWing.price)}</p>
            <div className="price-preview">
              <strong>Total: {formatPrice(calculateTotal())}</strong>
            </div>
          </div>

          <div className="action-buttons">
            <button className="customize-btn" onClick={handleCustomize}>
              Complete Customization
            </button>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {showBill && (
          <div className="billing-summary">
            <h2>Customization Summary</h2>
            <div className="bill-details">
              <div className="bill-row">
                <span>Base Car Price:</span>
                <span>{formatPrice(baseCarPrice)}</span>
              </div>
              <div className="bill-row">
                <span>Engine: {selectedEngine.name}</span>
                <span>{formatPrice(selectedEngine.price)}</span>
              </div>
              <div className="bill-row">
                <span>Paint: {selectedPaint.name}</span>
                <span>{formatPrice(selectedPaint.price)}</span>
              </div>
              <div className="bill-row">
                <span>Wheels: {selectedAlloy.name}</span>
                <span>{formatPrice(selectedAlloy.price)}</span>
              </div>
              <div className="bill-row">
                <span>Sticker: {selectedSticker.name}</span>
                <span>{formatPrice(selectedSticker.price)}</span>
              </div>
              <div className="bill-row">
                <span>Wing: {selectedWing.name}</span>
                <span>{formatPrice(selectedWing.price)}</span>
              </div>
              <div className="bill-divider"></div>
              <div className="bill-row total">
                <span>Total Amount:</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>
            </div>
            <button className="close-bill-btn" onClick={() => setShowBill(false)}>
              Continue Customizing
            </button>
          </div>
        )}

        <div className="customization-options">
          <div className="option-category">
            <h3>Paint Color</h3>
            <div className="options-row">
              {paintOptions.map(paint => (
                <div 
                  key={paint.id}
                  className={`option ${selectedPaint.id === paint.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPaint(paint)}
                >
                  <div className="color-swatch" style={{ backgroundColor: paint.color }}></div>
                  <span>{paint.name}</span>
                  <div className="option-price">{formatPrice(paint.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Alloy Wheels</h3>
            <div className="options-row">
              {alloyOptions.map(alloy => (
                <div 
                  key={alloy.id}
                  className={`option ${selectedAlloy.id === alloy.id ? 'selected' : ''}`}
                  onClick={() => setSelectedAlloy(alloy)}
                >
                  <div className={`alloy-preview ${alloy.className}`}></div>
                  <span>{alloy.name}</span>
                  <div className="option-price">{formatPrice(alloy.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Stickers & Decals</h3>
            <div className="options-row">
              {stickerOptions.map(sticker => (
                <div 
                  key={sticker.id}
                  className={`option ${selectedSticker.id === sticker.id ? 'selected' : ''}`}
                  onClick={() => setSelectedSticker(sticker)}
                >
                  <div className={`sticker-preview ${sticker.className}`}></div>
                  <span>{sticker.name}</span>
                  <div className="option-price">{formatPrice(sticker.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Engine Upgrade</h3>
            <div className="options-row">
              {engineOptions.map(engine => (
                <div 
                  key={engine.id}
                  className={`option ${selectedEngine.id === engine.id ? 'selected' : ''}`}
                  onClick={() => setSelectedEngine(engine)}
                >
                  <div className="engine-icon">⚙️</div>
                  <span>{engine.name}</span>
                  <small>{engine.hp} HP</small>
                  <div className="option-price">{formatPrice(engine.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="option-category">
            <h3>Rear Wing</h3>
            <div className="options-row">
              {wingOptions.map(wing => (
                <div 
                  key={wing.id}
                  className={`option ${selectedWing.id === wing.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWing(wing)}
                >
                  <div className={`wing-preview ${wing.className}`}></div>
                  <span>{wing.name}</span>
                  <div className="option-price">{formatPrice(wing.price)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;