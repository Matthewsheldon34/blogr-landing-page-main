import { useState } from "react";
import IconArrowLights from "../images/IconArrowLight.svg";
import logo from "../images/logo.svg";
import Bgpatternintrodesktop from "../images/Bgpatternintrodesktop.svg";
import Bgpatternintromobile from "../images/Bgpatternntromobile.svg";
import Illustrationeditor from "../images/IllustrationEditorMobile.svg";
import IllustatePhone from "../images/IllustrationPhones.svg";
import IllustrateLaptop from "../images/IllustrationLaptopDesktop.svg";
import IconClose from "../images/IconClose.svg";
import IconHamburger from "../images/IconHamburger.svg";
import Illustratelaptop from "../images/IllustrationLaptopMobile.svg";
import IllustrationEditorMobile from "../images/IllustrationEditorMobile.svg";
import Bgpatterncircles from "../images/Bgpatterncircles.svg";
import Iconarrowdark from "../images/Iconarrowdark.svg";

function LandingPage() {
  const showProduct = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations"
  ];
  const showConnect = [
    "Contact",
    "Newsletter",
    "LinkedIn"
  ];
  const showCompany = [
    "About",
    "Team",
    "Blog",
    "Careers"
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenDropdown(null);
  }

  return (
    <>
      <div>
        <div className="">
          <div className="relative active overflow-hidden justify-center p-5 rounded-bl-4xl w-full bg-[hsl(356,100%,66%)] lg:h-[50vh]">
            <img src={Bgpatterncircles} alt="" className="absolute inset-0 w-full h-100 object-cover opacity-10 right-auto" />
            <img 
              src={Bgpatternintrodesktop} 
              alt="Background pattern" 
              className="absolute inset-0 w-full h-100 object-cover opacity-50 hidden lg:block"
            />
            <img 
              src={Bgpatternintromobile} 
              alt="Background pattern" 
              className="absolute inset-0 w-full h-100 object-cover opacity-50 lg:hidden" 
            />
            
            <nav className="relative gap-5 flex ml-auto w-auto items-center justify-center p-5 z-50">
              <h1><a href=""><img src={logo} alt="Logo" className="w-auto h-auto block"/></a></h1>
              
              {/* Desktop Navigation - Hidden on mobile */}
              <ul className="hidden md:flex z-50 relative gap-4 items-center p-1">
                {/* Product Dropdown - Desktop */}
                <div className="relative ">
                  <li 
                    className="text-xl text-white hover:underline gap-2 font-bold flex items-center justify-center cursor-pointer"
                    onClick={() => toggleDropdown('product')}
                  >
                    <a href="#product">Product</a>
                    <img 
                      src={IconArrowLights} 
                      alt="Icon arrow" 
                      className={`transition-transform duration-300 ${openDropdown === 'product' ? 'rotate-180' : ''}`} 
                    />
                  </li>
                  {openDropdown === 'product' && (
                    <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-48 z-100">
                      {showProduct.map((item, index) => (
                        <li key={index} className="text-gray-800 hover:bg-gray-200 p-2 rounded">
                          <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Company Dropdown - Desktop */}
                <div className="relative ">
                  <li 
                    className="text-xl text-white hover:underline gap-2 font-bold flex items-center justify-center cursor-pointer"
                    onClick={() => toggleDropdown('company')}
                  >
                    <a href="#company">Company</a>
                    <img 
                      src={IconArrowLights} 
                      alt="Icon arrow" 
                      className={`transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180' : ''}`} 
                    />
                  </li>
                  {openDropdown === 'company' && (
                    <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-48 z-100">
                      {showCompany.map((item, index) => (
                        <li key={index} className="text-gray-800 hover:bg-gray-200 p-2 rounded">
                          <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Connect Dropdown - Desktop */}
                <div className="relative ">
                  <li 
                    className="text-xl text-white hover:underline gap-2 font-bold flex items-center justify-center cursor-pointer"
                    onClick={() => toggleDropdown('connect')}
                  >
                    <a href="#connect">Connect</a>
                    <img 
                      src={IconArrowLights} 
                      alt="Icon arrow" 
                      className={`transition-transform duration-300 ${openDropdown === 'connect' ? 'rotate-180' : ''}`} 
                    />
                  </li>
                  {openDropdown === 'connect' && (
                    <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-48 z-100">
                      {showConnect.map((item, index) => (
                        <li key={index} className="text-gray-800 hover:bg-gray-200 p-2 rounded">
                          <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Desktop Login and Signup */}
                <div className="relative gap-4 items-center rounded-full p-2 w-auto flex ml-auto">
                  <button className="text-xl text-white font-bold w-auto">Login</button> 
                  <button className="items-center rounded-full p-2 justify-center w-30 text-sm cursor-pointer hover:bg-[hsla(0,0%,100%,0.55)] text-white font-bold bg-[hsla(0,0%,100%,0.42)]">Sign up</button> 
                </div>
              </ul>

              {/* Mobile Hamburger Button - Visible only on mobile */}
              <button 
                onClick={toggleMenu}
                className="text-white text-2xl md:hidden ml-auto z-50 relative"
                aria-label={isMenuOpen ? "close menu" : "open menu"}
              >
                {isMenuOpen ? (
                  <img src={IconClose} alt="close menu" className="w-8 h-8 cursor-pointer"/>
                ) : (
                  <img src={IconHamburger} alt="open menu" className="w-8 h-8 cursor-pointer"/>
                )}
              </button>
            </nav>
<div>

</div>
            {/* Mobile Menu - Shows when isMenuOpen is true */}
            {isMenuOpen && (
              <div className="relative top-5 left-25 mt-2 w-64 bg-[hsl(208,49%,24%)] h-100 items-center justify-center rounded-lg shadow-xl p-4 cursor-pointer md:hidden z-50">
                <ul className="space-y-3 ">
                  {/* Product Section - Mobile */}
                  <li>
                    <button 
                      className="relative w-full flex items-center justify-between text-white font-bold text-lg p-2 hover:bg-gray-700 rounded" 
                      onClick={() => toggleDropdown('product')}
                    >
                      <span>Product</span>
                      <img 
                        src={Iconarrowdark} 
                        alt="Arrow" 
                        className={`w-2 h-2 transition-transform duration-300 ${
                          openDropdown === 'product' ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openDropdown === 'product' && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300 pl-4">
                        {showProduct.map((item, index) => (
                          <li key={index}>
                            <a 
                              href={`#${item.toLowerCase()}`} 
                              className="block px-4 py-2 text-white hover:bg-gray-700 rounded" 
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Company Section - Mobile */}
                  <li>
                    <button 
                      className="w-full flex items-center justify-between text-white font-bold text-lg p-2 hover:bg-gray-700 rounded" 
                      onClick={() => toggleDropdown('company')}
                    >
                      <span>Company</span>
                      <img 
                        src={Iconarrowdark} 
                        alt="Arrow" 
                        className={`w-2 h-2 transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openDropdown === 'company' && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300 pl-4">
                        {showCompany.map((item, index) => (
                          <li key={index}>
                            <a 
                              href={`#${item.toLowerCase()}`} 
                              className="block px-4 py-2 text-white hover:bg-gray-700 rounded" 
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Connect Section - Mobile */}
                  <li>
                    <button 
                      className="w-full flex items-center justify-between text-white font-bold text-lg p-2 hover:bg-gray-700 rounded" 
                      onClick={() => toggleDropdown('connect')}
                    >
                      <span>Connect</span>
                      <img 
                        src={Iconarrowdark} 
                        alt="Arrow" 
                        className={`w-2 h-2 transition-transform duration-300 ${openDropdown === 'connect' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openDropdown === 'connect' && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300 pl-4">
                        {showConnect.map((item, index) => (
                          <li key={index}>
                            <a 
                              href={`#${item.toLowerCase()}`} 
                              className="block px-4 py-2 text-white hover:bg-gray-700 rounded" 
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Divider */}
                  <li className="border-t border-gray-600 my-2"></li>

                  {/* Mobile Login and Signup - Below Connect */}
                  <li>
                    <button className="w-full text-center text-white font-bold text-lg p-2 hover:bg-gray-700 rounded">
                      Login
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center text-white font-bold text-lg p-2 bg-[hsl(356,100%,66%)] hover:bg-[hsl(355,100%,74%)] rounded">
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="relative items-center justify-center p-3 w-auto z-10">
              <h1 className="text-4xl font-bold text-white text-center p-1">A modern publishing platform</h1> 
              <p className="text-[hsl(140,9%,94%)] text-sm text-center">Grow your audience and build your online brand</p>
              <div className="flex gap-4 justify-center p-5 w-auto items-center">
                <button className="items-center rounded-full p-2 justify-center w-auto text-sm cursor-pointer hover:text-[hsl(355,100%,74%)] text-white font-bold bg-[hsla(0,0%,100%,0.42)] hover:bg-[hsl(0,100%,100%)]">Start for Free</button>
                <button className="items-center rounded-full p-2 justify-center w-auto text-sm cursor-pointer hover:text-[hsl(355,100%,74%)] text-[hsl(0,0%,95%)] border border-white font-bold hover:bg-[hsl(0,100%,100%)]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center p-5 w-auto items-center">
          <h1 className="text-3xl font-bold text-[hsl(208,49%,24%)] text-center p-5">Designed for the future</h1>
          <img src={IllustrationEditorMobile} alt="" className="w-auto block md:block lg:hidden"/>
          <div className="relative lg:flex  md:grid justify-center p-5 w-auto items-center">
            <div className="gap-4 p-1 w-auto">
              <div className="relative justify-center items-center w-auto text-center lg:text-left md:text-left lg:auto md:auto">
                <h1 className="text-xl font-bold p-3 text-[hsl(208,49%,24%)] items-center justify-center">Introducing an extensible editor</h1>
                <div className="text-[hsl(208,49%,24%)] p-6 w-auto justify-center items-center md:w-127.5 lg:127.5">
                  <p className="text-[hsl(207,13%,34%)]">  
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.
                  </p>
                </div>
              </div>
              <div className="mb-30 text-[hsl(208,49%,24%)] p-1 relative justify-center items-center w-auto text-center lg:text-left md:text-left lg:auto md:auto">
                <h1 className="text-xl font-bold p-3">Robust content management</h1>
                <div className="text-[hsl(208,49%,24%)] p-5 w-127.5 md:w-127.5 lg:127.5">
                  <p className="text-[hsl(207,13%,34%)]">
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative p-5 w-auto -top-20 ">
              <img src={Illustrationeditor} alt="Description of the image" className="w-auto h-auto block lg:block "/>
            </div>
          </div>
        </div>

        <div className="relative rounded-bl-4xl h-140 md:h-170 lg:h-120 lg:w-auto rounded-tr-4xl bg-[hsl(237,31%,13%)] justify-center p-5 w-auto">
          <div className="grid lg:flex md:grid ">
            <img src={IllustatePhone} alt="Background pattern" className="relative w-auto -top-40  md:auto lg:auto h-auto z-50 md:top-auto lg:top-auto"/>
            <img src={Bgpatterncircles} alt="" className="absolute inset-0 w-full h-100 object-cover opacity-80 right-auto block lg:hidden"/>
            <div className="relative text-center  justify-center p-2 w-auto md:text-left lg:text-left -top-50 md:-top-20 lg:top-50 items-center md:w-auto lg:w-auto">
              <div className="gap-4 p-1 w-auto items-center">
                <h1 className="text-xl font-bold p-3 text-white md:text-center lg:text-left">State of the Art Infrastructure</h1>
                <p className="text-[hsl(207,13%,34%)] p-1 md:text-center lg:text-left">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-5 justify-center w-auto top-10 md:w-auto lg:w-auto">
          <div className="relative grid lg:flex md:grid gap-4 p-1 md:w-auto lg:w-auto">
            <img src={IllustrateLaptop} alt="Description of the image" className="w-125 h-auto hidden md:block md:h-auto md:w-auto lg:w-125 lg:block"/>
            <img src={Illustratelaptop} alt="Description of the image" className="w-125 h-auto md:hidden  md:w-auto block lg:hidden"/>
            <div className="relative  p-1 w-auto md:w-auto lg:w-auto ">
              <div className="relative justify-center items-center w-auto text-center lg:text-left md:text-left lg:auto md:w-auto p-5">
                <h1 className="text-xl font-bold p-3 text-[hsl(208,49%,24%)]">Free, open, simple</h1>
                <div className="relative text-[hsl(207,13%,34%)] p-1 w-auto justify-center items-center md:w-auto lg:w-127.5">
                  <p className="text-[hsl(207,13%,34%)] justify-center p-1">
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                  </p>
                </div>
              </div>
              <div className="p-5 relative justify-center items-center w-auto text-center lg:text-left md:text-left lg:auto md:auto">
                <h1 className="text-xl font-bold p-3 text-[hsl(208,49%,24%)]">Powerful tooling</h1>
                <div className="text-[hsl(207,13%,34%)] p-1 w-auto justify-center items-center md:w-auto lg:w-127.5">
                  <p className="text-[hsl(207,13%,34%)] p-1">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="relative md:hidden lg:hidden text-center rounded-bl-4xl h-auto md:h-120 lg:w-auto rounded-tr-4xl bg-[hsl(237,31%,13%)] justify-center p-5 w-auto">
<h1 className="text-xl font-bold p-3 text-[hsl(200,43%,99%)]">Blogr</h1>
  <div>
  <h2 className="text-xl font-bold p-1  text-[hsl(200,20%,82%)]">Product</h2>
<div>
    
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Overview</h2>
    <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Pricing</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Marketplace</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Features</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Integrations</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Product</h2>
</div>
  </div>

    <div>
<h2 className="text-xl font-bold p-3  text-[hsl(200,20%,82%)]">Company</h2>
<div>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Contact</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Newsletter</h2>                                                
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">LinkedIn</h2>

</div>
  </div>

    <div>
<h2 className="text-xl font-bold p-3  text-[hsl(200,20%,82%)]">Connect</h2>
<div>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">About</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Team</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Blog</h2>
  <h2 className="text-xl font-bold p-1 text-[hsl(204,4%,53%)]">Careers</h2>

</div>
  </div>
</div>

      </div>
    </>
  )
}

export default LandingPage;