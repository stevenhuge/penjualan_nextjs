import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side with logo and description */}
        <div className="flex items-center">
          <img
            src="path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <div>
            <p className="font-bold text-lg">Your Company Name</p>
            <p className="text-sm">Providing the best services for you</p>
          </div>
        </div>

        {/* Center content with categories and information */}
        <div className="mb-4 md:mb-0">
          <p className="font-bold mb-2">Category</p>
          <ul className="list-none p-0 m-0">
            <li>Concert</li>
            <li>Flight</li>
            <li>Train</li>
            <li>Ship</li>
            <li>Hotels</li>
            {/* Tambah kategori lainnya jika diperlukan */}
          </ul>
        </div>

        {/* Right content with information and contact */}
       
          <div className="mb-4 md:mb-0">
            <p className="font-bold mb-2">Information</p>
            <ul className="list-none p-0 m-0">
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy and Policy</li>
              {/* Tambah informasi lainnya jika diperlukan */}
            </ul>
          </div>

          <div >
            <p className="font-bold mb-2">Contact Us</p>
            <ul className="list-none p-0 m-0">
              <li>Whatsapp</li>
              <li>Instagram</li>
              <li>Twitter</li>
              {/* Tambah kontak lainnya jika diperlukan */}
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
