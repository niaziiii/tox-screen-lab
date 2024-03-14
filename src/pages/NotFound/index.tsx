import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">Nothing to see here!</h2>
        <p className="mt-6">
          <Link to="/">
            <b className="mt-8 w-[200px] max-w-[200px] m-auto flex items-center justify-center">
              <button className="outline-none text-white border-none bg-darkBlue hover:bg-darkBlue/80  py-3 px-5 rounded-lg">
                Go to Home
              </button>
            </b>
          </Link>
        </p>
      </div>
    </div>
  );
}
