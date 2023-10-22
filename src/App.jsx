import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { MenuIcon, SunIcon } from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    element: <h2>Dashboard</h2>,
  },
  { name: "Products", path: "/products", element: <h2>Products</h2> },
];

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu((isShow) => !isShow);
  };

  return (
    <div className="bg-zinc-200 relative w-full grid grid-cols-12">
      <header className="bg-zinc-100 shadow z-20 col-span-12 flex flex-row place-items-center justify-between p-2">
        <MenuIcon className="md:hidden" onClick={toggleMenu} />
        <h1 className="text-lg font-bold">React Router</h1>
        <SunIcon className="justify-self-end" />
      </header>
      {/* Sidebar */}
      <div className="hidden z-10 md:block md:col-span-3">
        <ul className="bg-zinc-100 flex flex-col gap-y-2 p-2">
          <li>
            <p>React Router</p>
          </li>
          {menus?.length > 0 &&
            menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className="bg-zinc-200 p-2 rounded hover:bg-zinc-50"
                >
                  <Link to={menu.path}>{menu.element}</Link>
                </li>
              );
            })}
        </ul>
      </div>

      {/* Outlet */}
      <div className="col-span-12 md:col-span-9">
        {isShowMenu && (
          <div
            className="z-30 absolute bg-black/20 w-full min-h-screen"
            onClick={toggleMenu}
          >
            <ul className="bg-zinc-100 flex flex-col gap-y-2 p-2 w-11/12">
              <li>
                <p>React Router</p>
              </li>
              {menus?.length > 0 &&
                menus.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-zinc-200 p-2 rounded hover:bg-zinc-50"
                    >
                      <Link to={menu.path}>{menu.element}</Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
        {<Outlet />}
      </div>
    </div>
  );
}

export default App;
