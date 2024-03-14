import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">Nothing to see here!</h2>
        <p>
          <Link to="/">
            <b className="mt-8 w-[250px] m-auto">
              <button className="outline-none w-full text-white border-none bg-darkBlue hover:bg-darkBlue/80  py-3 px-5 rounded-lg">
                Go to Home
              </button>
            </b>
          </Link>
        </p>
      </div>
    </div>
  );
}
