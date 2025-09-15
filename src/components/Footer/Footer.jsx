// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold">SettleFlow</h3>
//             <p className="text-gray-400 mt-2">
//               Revolutionizing financial reconciliation with AI-powered automation.
//             </p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Product</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Features</li>
//               <li>Pricing</li>
//               <li>API</li>
//               <li>Docs</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>About</li>
//               <li>Careers</li>
//               <li>Blog</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Support</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Help Center</li>
//               <li>Privacy Policy</li>
//               <li>Terms</li>
//               <li>Security</li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2025 SettleFlow. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12 w-full">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Responsive grid: stacks on mobile, 2 cols on tablet, 4 cols on desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
//           {/* Brand Section */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <h3 className="text-xl font-bold mb-4">SettleFlow</h3>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//               Revolutionizing financial reconciliation with AI-powered automation.
//             </p>
//           </div>
          
//           {/* Product */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   API
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Docs
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Company */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Support */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Terms
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
//                   Security
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-12 pt-8 text-center">
//           <p className="text-gray-400 text-sm">
//             &copy; 2025 SettleFlow. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 min-w-0">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Responsive grid: stacks on mobile, 2 cols on tablet, 4 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            
            {/* Brand Section */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold mb-4">SettleFlow</h3>
              <p className="text-gray-400 text-sm leading-relaxed break-words">
                Revolutionizing financial reconciliation with AI-powered automation.
              </p>
            </div>
            
            {/* Product */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center w-full">
            <p className="text-gray-400 text-sm">
              &copy; 2025 SettleFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;