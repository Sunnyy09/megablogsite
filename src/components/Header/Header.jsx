import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isSideBarShow, setIsShowSideBar] = useState(false);

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
      active: true,
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

  function showSideBar() {
    setIsShowSideBar((prev) => !prev);
  }

  return (
    <header className="h-[95px] w-full sticky top-0 z-20 shadow bg-[#364037] text-[#fff]">
      <Container className={`h-full`}>
        <nav className="h-full lg:mx-16 flex justify-between items-center">
          <div className="mr-4">
            <Link to="/" className="decoration-transparent">
              <h1 className="font-pacifico text-white">QuillQuest</h1>
            </Link>
          </div>
          <ul
            className={`ml-auto pt-1 md:flex ${
              isSideBarShow
                ? "absolute top-[95px] left-0 h-[52vh] pt-4 w-full md:w-[80%] l bg-transparent/80 flex flex-col gap-4 items-center"
                : "hidden"
            }`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsShowSideBar(false);
                    }}
                    className={`inline-block text-lg font-normal text-white px-6 py-2 duration-200 hover:text-white/70 hover:underline transition-all font-fredoka ${
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
          <div className="md:hidden flex justify-center">
            <button onClick={showSideBar}>
              {!isSideBarShow ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="34px"
                  fill="#ffffff"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="34px"
                  fill="#ffffff"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
