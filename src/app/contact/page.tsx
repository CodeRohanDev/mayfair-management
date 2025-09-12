import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section with Background Image */}
            <section
                className="relative min-h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10, 27, 47, 0.95) 0%, rgba(10, 27, 47, 0.85) 50%, rgba(64, 128, 191, 0.3) 100%), url('/contact.jpg')`
                }}
            >

            </section>

            <main className="bg-white">
                <Container className="py-0">
                    {/* Contact Section */}
                    <section className="py-16">
                        <div className={`flex items-center justify-center mb-16 `}>
                             <div className="flex-1 h-0.5 animate-[slideInLeft_1s_ease-in-out]" style={{ backgroundColor: '#0a1b2f' }}></div>
                            <h2 className="text-5xl font-light text-center mx-8 tracking-wider" style={{ color: '#0a1b2f' }}>
                                CONTACT
                            </h2>
                            <div className="flex-1 h-0.5 animate-[slideInRight_1s_ease-in-out]" style={{ backgroundColor: '#0a1b2f' }}></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Contact Information */}
                            <div className="space-y-0">
                                {/* Address */}
                                <div>
                                    <p className="text-2xl text-gray-700 mb-2">404 Washington Avenue,</p>
                                    <p className="text-2xl text-gray-700 mb-2">Miami Beach, FL 33139</p>
                                    {/* <p className="text-2xl text-gray-700">FL 33139</p> */}
                                </div>

                                {/* Deal Opportunities */}
                                <div className="pt-8">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">FOR DEAL OPPORTUNITIES</h3>
                                    <p className="text-2xl font-medium text-gray-700 mb-1">Matt Nacier, <a href="mailto:info@myfair-management.com" className="underline hover:opacity-80 transition-opacity" style={{ color: '#4080bf' }}>info@myfair-management.com</a></p>
                                </div>

                                {/* Investor Relations */}
                                <div className="pt-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">FOR INVESTOR and MEDIA RELATIONS</h3>
                                    <p className="text-2xl font-medium text-gray-700 mb-1">Betsy Corbin, <a href="mailto:info@myfair-management.com" className="text-teal-600 hover:text-teal-800 underline">info@myfair-management.com</a></p>
                                </div>

                                {/* General Inquiries */}
                                <div className="pt-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">FOR GENERAL INQUIRIES</h3>
                                    <p className="text-2xl text-gray-700 mb-1"><a href="mailto:info@myfair-management.com" className="text-teal-600 hover:text-teal-800 underline">info@myfair-management.com</a></p>
                                </div>

                                {/* Social Media */}
                                {/* <div className="pt-8">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">FOLLOW US</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-2xl text-teal-600 hover:text-teal-800 underline">Twitter</a>
                                        <span className="text-2xl text-gray-400">|</span>
                                        <a href="#" className="text-2xl text-teal-600 hover:text-teal-800 underline">LinkedIn</a>
                                        <span className="text-2xl text-gray-400">|</span>
                                        <a href="#" className="text-2xl text-teal-600 hover:text-teal-800 underline">Instagram</a>
                                    </div>
                                </div> */}
                            </div>

                            {/* Map */}
                            <div className="lg:pl-8">
                                <div className="relative bg-slate-800 overflow-hidden shadow-lg h-96">
                                    {/* Map Background with Grid Pattern */}
                                    <div className="absolute inset-0 bg-slate-800">
                                        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="url(#grid)" />

                                            {/* Street lines */}
                                            <line x1="0" y1="150" x2="400" y2="150" stroke="#14b8a6" strokeWidth="2" opacity="0.6" />
                                            <line x1="200" y1="0" x2="200" y2="300" stroke="#14b8a6" strokeWidth="2" opacity="0.6" />
                                            <line x1="0" y1="100" x2="400" y2="100" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
                                            <line x1="0" y1="200" x2="400" y2="200" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
                                            <line x1="100" y1="0" x2="100" y2="300" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
                                            <line x1="300" y1="0" x2="300" y2="300" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
                                        </svg>
                                    </div>

                                    {/* Location Marker */}
                                    <div className="absolute inset-0">
                                        <img
                                            src="/map.jpg"
                                            alt="Map showing MayFair Management location"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="bg-white bg-opacity-95 px-4 py-3 shadow-lg border-2 border-teal-600">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                                                    <span className="text-sm font-bold text-gray-800">MayFair</span>
                                                </div>
                                                <p className="text-xs text-gray-600 font-medium">780 3rd AVE</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Labels */}
                                    <div className="absolute top-4 left-4 text-xs text-teal-400 font-mono">
                                        GRAND CENTRAL<br />TERMINAL
                                    </div>
                                    <div className="absolute top-4 right-4 text-xs text-teal-400 font-mono">
                                        E 42 ST TRANS
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-xs text-teal-400 font-mono">
                                        GRAND CENTRAL<br />TERMINAL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>

            <Footer />
        </div>
    );
}