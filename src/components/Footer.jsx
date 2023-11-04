import { RiTwitterXFill as XIcon } from 'react-icons/ri';
import { FiInstagram as InstagramIcon } from 'react-icons/fi';
import { BiCopyright as CopyIcon } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 bg-gray-800 py-24 text-white">
        <div className="flex space-x-6">
          <span className="p-4 rounded-full bg-purple-600 hover:bg-blue-700 cursor-pointer">
            <XIcon />
          </span>
          <span className="p-4 rounded-full bg-purple-600 hover:bg-blue-700 cursor-pointer">
            <InstagramIcon />
          </span>
        </div>
        <div className="flex uppercase text-xs space-x-4">
          <span className="hover:underline cursor-pointer tracking-wider">
            Privacy Policy
          </span>
          <span className="hover:underline cursor-pointer tracking-wider">
            Terms and Conditions
          </span>
          <span className="hover:underline cursor-pointer tracking-wider">
            Contact Us
          </span>
        </div>
        <div>
          <span className="text-xs flex items-center">
            <CopyIcon className="mr-1" /> 2023 Kernelbyte ltd
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
