import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-700 bg-gray-50">
      {/* Top Section */}
      <div className="grid grid-cols-1 gap-8 px-6 py-12 mx-auto max-w-7xl md:grid-cols-5">
        {/* Logo */}
        <div>
          <img className="w-12 h-12" src="https://i.postimg.cc/ZKdw0M9m/business-retail-sales-computer-icons-logo-png-favpng-r-M5-E7-Zv092f2-QRytdabf8-Udby-removebg-preview.png"></img>
          <p className="text-sm leading-6">
            Building modern web solutions with passion and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Product</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-600">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-600">Business</a></li>
            <li><a href="#" className="hover:text-blue-600">Technology</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 text-sm text-center text-gray-600 border-t border-gray-200">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
}
