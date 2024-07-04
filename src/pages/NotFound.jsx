import { Link } from "react-router-dom";

const NotFound = () => {
  const recortado = location.pathname.substring(0, 10) + "..";
  return (
    <>
      <Link to="/" className="text-4xl grid h-screen place-items-center">
        <div className="inline-flex">
          😒 <div className="font-bold mx-2"> {recortado} </div>?
        </div>
      </Link>
    </>
  );
};

export default NotFound;
