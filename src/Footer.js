import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-neutral-950 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="copyright m-auto">
            <p>&copy; R@mi 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;