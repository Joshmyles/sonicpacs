import {
  FiShare2 as ShareIcon,
  FiMonitor as MonitorIcon,
} from 'react-icons/fi';
import { IoIosCheckmarkCircleOutline as ControlIcon } from 'react-icons/io';
import { MdDevices as DoubleIcon } from 'react-icons/md';
import { BsFileEarmarkPdf as PdfIcon } from 'react-icons/bs';
import { CgFileDocument as DocumentIcon } from 'react-icons/cg';

const KeyFeatures = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="font-semibold text-4xl pb-20 tracking-wider">
          Key Features
        </h1>
        <div className="flex flex-col justify-center items-center mx-auto px-20 space-y-16">
          <div className="flex justify-around items-center gap-20">
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <ShareIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Share Study</h4>
                <span className="text-gray-700 pt-4">
                  Expand your institutions capabilities with our web-based DICOM
                  viewer. Share specific studies or patient data securely via
                  URL, tailored to the unique needs of institutions, roles,
                  accounts, and guests. This feature ensures seamless
                  collaboration while maintaining strict data privacy standards.
                </span>
              </div>
            </div>
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <MonitorIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Control Viewing</h4>
                <span className="text-gray-700 pt-4">
                  Our platform provides unparalleled control over medical image
                  viewing permissions. Manage access rights with granularity,
                  determining which studies are available to each institution,
                  role, or individual account. Our user-friendly interface
                  allows for quick adjustments, ensuring the right people have
                  the right access.
                </span>
              </div>
            </div>
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <ControlIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Control Permissions</h4>
                <span className="text-gray-700 pt-4">
                  Elevate the security and functionality of your medical imaging
                  process. Control which features are utilized and which pages
                  are accessible based on user roles. Our intuitive permission
                  settings put you in the drivers seat, enhancing workflow
                  efficiency and protecting sensitive data.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center gap-20">
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <DoubleIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Multi-Monitor</h4>
                <span className="text-gray-700 pt-4">
                  Harness the full potential of your hardware with our
                  multi-monitor support, available exclusively for Windows
                  users. Automatically position and resize windows for the list,
                  viewer, and report pages across multiple screens, streamlining
                  the diagnostic process.
                </span>
              </div>
            </div>
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <PdfIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Support Non-DICOM</h4>
                <span className="text-gray-700 pt-4">
                  Harness the full potential of your hardware with our
                  multi-monitor support, available exclusively for Windows
                  users. Automatically position and resize windows for the list,
                  viewer, and report pages across multiple screens, streamlining
                  the diagnostic process.
                </span>
              </div>
            </div>
            <div className="flex items-start text-start justify-start space-x-4">
              <div className="text-4xl">
                <DocumentIcon />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-xl font-bold">Reporting Tools</h4>
                <span className="text-gray-700 pt-4">
                  Craft detailed reports with ease using our advanced reporting
                  tools. Quickly insert typical phrases and key images into your
                  reports with a single click. Customize and output your final
                  document in PDF format, ready for distribution and archiving.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
