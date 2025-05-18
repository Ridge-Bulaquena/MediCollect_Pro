
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-medicollect-blue flex items-center mb-4">
              <span className="text-medicollect-teal mr-1">Medi</span>
              Collect<span className="text-medicollect-blue ml-1 font-normal">Pro</span>
            </div>
            <p className="text-gray-600 mb-4">
              Turning unpaid balances into steady cash flow with empathy and automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-medicollect-blue">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-medicollect-blue">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195c-.897-.96-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045A13.984 13.984 0 011.64 3.162a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.938 4.938 0 01-2.224.084 4.943 4.943 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-medicollect-blue">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">HIPAA Compliance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Integration Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-medicollect-blue">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@medicollectpro.com</li>
              <li className="text-gray-600">Phone: (800) 123-4567</li>
              <li className="text-gray-600">123 Healthcare Avenue</li>
              <li className="text-gray-600">Suite 200</li>
              <li className="text-gray-600">San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025 MediCollect Pro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-medicollect-blue">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-medicollect-blue">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-medicollect-blue">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
