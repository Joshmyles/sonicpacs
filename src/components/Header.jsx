import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div
        id="header"
        className="sticky top-0 z-50 flex flex-col w-full pt-5 border-b bg-white"
      >
        <Link to="/home" className="flex justify-center items-center px-4 pb-5">
          <img src="" alt="" />
          <h1 className="text-3xl font-bold tracking-wide">
            <span className="text-purple-600">K</span>
            <span className="text-purple-600">e</span>
            <span className="text-purple-600">r</span>
            <span className="text-purple-600">n</span>
            <span className="text-purple-600">e</span>
            <span className="text-purple-500">l</span>
            <span className="text-purple-600">b</span>
            <span className="text-purple-600">y</span>
            <span className="text-purple-600">t</span>
            <span className="text-purple-600">e</span>
          </h1>
        </Link>
        <div className="flex w-full h-[2px] bg-gradient-to-r from-purple-700 to-sky-500" />
      </div>
    </>
  );
};

export default Header;
