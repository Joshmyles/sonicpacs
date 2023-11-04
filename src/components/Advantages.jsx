import { IoMdCheckmark as TickIcon } from 'react-icons/io';

const Advantages = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12 px-10 w-full bg-gray-100">
        <h1 className="pt-4 pb-8 text-4xl">
          Advantages of web-based DICOM Viewer
        </h1>
        <div className="flex w-full gap-12">
          <img
            src="src/assets/images/OnlyDevice.png"
            alt=""
            className="flex w-1/2"
          />
          <div className="flex w-1/2 items-center">
            <ul className="text-gray-800 space-y-2">
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                Just access the URL and log in to view images
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                Secure access through HTTPS protocol
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                No additional software installation
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                No plugins/addons required
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                Available on various OSs (Windows, macOS, Linux, iOS, Android)
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                Works lightly even on low-spec devices
              </li>
              <li className="flex items-center">
                <TickIcon className="mr-2 text-purple-600 text-xl" />
                Easy integration with EMR, HIS and RIS via URL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
