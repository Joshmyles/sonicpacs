import { LuMonitorCheck as MonitorIcon } from 'react-icons/lu';
import { BsLightningFill as LightningIcon } from 'react-icons/bs';
import { FaRegThumbsUp as ThumbIcon } from 'react-icons/fa';

const Specifications = () => {
  return (
    <>
      <div className="flex items-center py-28 px-16 space-x-16 justify-around">
        <div className="flex flex-col items-center justify-center space-y-4 max-w-[250px]">
          <MonitorIcon className="text-[100px] text-blue-800" />
          <h3 className="text-xl text-gray-900 font-bold">Simplicity</h3>
          <span className="text-center text-gray-700">
            We value simplicity above all else. That brings the remarkable
            ease-of-use, speed and flexibility.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 max-w-[250px]">
          <ThumbIcon className="text-[100px] text-purple-600" />
          <h3 className="text-xl text-gray-900 font-bold">Ease of Use</h3>
          <span className="text-center text-gray-700">
            We value simplicity above all else. That brings the remarkable
            ease-of-use, speed and flexibility.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 max-w-[250px]">
          <LightningIcon className="text-[100px] text-yellow-400" />
          <h3 className="text-xl text-gray-900 font-bold">Soncic Speed</h3>
          <span className="text-center text-gray-700">
            We value simplicity above all else. That brings the remarkable
            ease-of-use, speed and flexibility.
          </span>
        </div>
      </div>
    </>
  );
};

export default Specifications;
