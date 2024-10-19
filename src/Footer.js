import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-neutral-950 text-white p-8 mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="copyright m-auto">
            <p>&copy; <span className="text-sm font-extrabold logo  text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-gray-400 hover:from-gray-400 hover:via-teal-500 hover:to-blue-400 transition duration-300">
  R<span className="text-yellow-500">@</span>mi
</span> 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;