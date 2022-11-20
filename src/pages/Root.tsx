import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <nav className=" p-2 w-full flex font-bold sm:text-sm lg:text-2xl max-w-3xl justify-center items-center gap-4">
        <NavLink to="/">home</NavLink>
        <NavLink to="about">about</NavLink>
        <NavLink to="login">login</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
