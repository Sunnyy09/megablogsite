import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: !authStatus,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 h-[95px] w-full sticky top-0 z-20 shadow bg-[#364037] text-[#fff]">
      <Container className={`h-full`}>
        <nav className="h-full mx-24 flex justify-center items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="lg:flex ml-auto sm:hidden">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block text-md font-thin text-gray-100 px-6 py-2 duration-200 hover:text-white/70 hover:underline transition-all font-sans ${
                      item.slug === "/login"
                        ? "bg-[#986c43] text-[#f4dec9] ml-2 mr-2 hover:bg-white/10 hover:no-underline rounded"
                        : ""
                    } ${
                      item.slug === "/signup"
                        ? "bg-[#986c43] text-[#f4dec9] hover:bg-white/10 hover:no-underline rounded"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
