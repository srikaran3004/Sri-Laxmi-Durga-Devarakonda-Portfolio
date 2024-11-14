import { FaLinkedin, FaSquareXTwitter, FaInstagram, FaBlogger } from "react-icons/fa6";
import logo from "../assets/sriLaxmiLogo1.jpg";
import { useState } from "react";

const Navbar = () => {
    // Inline styles for the icons
    const iconStyle = {
        transition: 'transform 0.3s ease-in-out',
    };

    const iconHoverStyle = {
        transform: 'scale(1.4)',
    };

    // You can manage hover state per icon if you want individual hover styles
    const [isHovered, setIsHovered] = useState({
        linkedin: false,
        instagram: false,
        twitter: false,
        blogger: false,
    });

    const handleMouseEnter = (icon) => {
        setIsHovered((prev) => ({ ...prev, [icon]: true }));
    };

    const handleMouseLeave = (icon) => {
        setIsHovered((prev) => ({ ...prev, [icon]: false }));
    };

    return (
        <nav className="flex items-center justify-between py-4">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={105} height={100} alt="Logo" />
                </a>
            </div>
            <div className="mx-5 flex items-center justify-center gap-4 text-3xl">
                <a href="https://www.linkedin.com/in/devarakonda-sri-laxmi-durga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={isHovered.linkedin ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={() => handleMouseLeave('linkedin')}
                >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/your-instagram-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={isHovered.instagram ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={() => handleMouseLeave('instagram')}
                >
                    <FaInstagram />
                </a>
                <a href="https://x.com/Srikaran3004"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    style={isHovered.twitter ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => handleMouseEnter('twitter')}
                    onMouseLeave={() => handleMouseLeave('twitter')}
                >
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.blogger.com/profile/your-blogger-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Blogger"
                    style={isHovered.blogger ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => handleMouseEnter('blogger')}
                    onMouseLeave={() => handleMouseLeave('blogger')}
                >
                    <FaBlogger />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
