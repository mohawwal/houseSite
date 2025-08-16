import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="zigzag-curved">
      <svg width="0" height="0">
        <defs>
          <clipPath id="curved-zigzag" clipPathUnits="objectBoundingBox">
            <path d="M0,0.2 Q0.125,0 0.25,0.1 Q0.375,0.2 0.5,0.1 Q0.625,0 0.75,0.1 Q0.875,0.2 1,0.1 L1,1 L0,1 Z"/>
          </clipPath>
        </defs>
      </svg>
      
      <div className="w-full max-w-7xl mx-auto px-6 py-12 pt-20">
        <div className="mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">BLIND</h2>
          <p className="text-sm leading-relaxed opacity-90 max-w-2xl">
            Smart TRAVEL delivery solutions across Lagos. From doorstep delivery to secure smart Portals, 
            we make shipping simple, safe, and convenient.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 text-white mb-8">
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">TRAVEL Delivery</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Smart Portals</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Business Integration</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Scheduled Delivery</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Vendor Support</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">API Services</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Track Package</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Find Portals</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Pricing</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Help Center</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-white">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 mt-1 opacity-80" />
              <div>
                <p className="opacity-90">+234 901 234 5678</p>
                <p className="opacity-90">+234 812 345 6789</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 mt-1 opacity-80" />
              <div>
                <p className="opacity-90">hello@BLIND.ng</p>
                <p className="opacity-90">support@BLIND.ng</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 mt-1 opacity-80" />
              <p className="opacity-90">Lagos, Nigeria<br />Serving all areas</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 mt-1 opacity-80" />
              <p className="opacity-90">24/7 Delivery Service<br />Support: 8AM - 8PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 BLIND. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Terms of Service</a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;