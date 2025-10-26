import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

                {/* 🎬 Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">🎥 CineHub</h2>
                    <p className="text-sm text-gray-400">
                        Your local gateway to the world of movies — explore, rate, and enjoy cinema like never before.
                    </p>
                </div>

                {/* 🔗 Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* 📩 Contact & Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
                    <p className="text-sm">👤 <span className="font-medium">Shakib Hossen</span></p>
                    <p className="text-sm mb-4">📧 akibhossainsakib801@gmail.com</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        {/* Twitter */}
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195..."></path>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0..."></path>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667..."></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* 🔻 Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} CineHub. Designed & Developed by <span className="text-yellow-400 font-medium">Shakib Hossen</span>.
            </div>
        </footer>

    );
};

export default Footer;