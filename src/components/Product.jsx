import React from 'react';
import '../components/Product.css';
import phoneImage1 from '../assets/images/phone3.webp'; 
import phoneImage2 from '../assets/images/phone5.jpg';
import phoneImage3 from '../assets/images/phone6.jpg';

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-details">
        <h1 className="product-title">TechTrek X Smartphone</h1>
        <h2>Overview</h2>
        <p>The TechTrek X is the latest innovation in smartphone technology, offering unparalleled performance and cutting-edge features. Designed for the tech-savvy user, it combines style, power, and convenience in one sleek package.</p>
        <h2>Key Features</h2>
        <ul className="product-specs">
          <li><strong>Display:</strong> 6.7-inch OLED, 3200x1440 pixels</li>
          <li><strong>Processor:</strong> Octa-core 2.8 GHz</li>
          <li><strong>RAM:</strong> 12GB</li>
          <li><strong>Storage:</strong> 256GB / 512GB</li>
          <li><strong>Battery:</strong> 5000mAh with fast charging</li>
          <li><strong>Camera:</strong> Quad rear camera (108MP + 16MP + 12MP + 8MP), 32MP front camera</li>
          <li><strong>Operating System:</strong> Android 12</li>
          <li><strong>Connectivity:</strong> 5G, Wi-Fi 6, Bluetooth 5.2</li>
          <li><strong>Other Features:</strong> In-display fingerprint sensor, Face unlock, IP68 water and dust resistance</li>
        </ul>
      </div>
      <div className="product-images">
        <img src={phoneImage1} alt="TechTrek X Front View" />
        <img src={phoneImage2} alt="TechTrek X Side View" />
        <img src={phoneImage3} alt="TechTrek X Back View" />
      </div>
    </div>
  );
};

export default Product;
