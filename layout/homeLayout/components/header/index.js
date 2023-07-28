import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header(props) {
  const { user } = useSelector((state) => state.auth);

  const [menuIsActive, setMenuIsActive] = useState(false);

  function toggleMenu() {
    setMenuIsActive((prev) => !prev);
  }

  return (
    <header className="main-header d-flex align-items-center" {...props}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="main-header__logo">
          WE<span>logo</span>
        </Link>

        <div className="d-flex align-items-center gap-3 gap-lg-5">
          <nav
            className={`main-header__nav list-unstyled m-0 p-0 d-flex flex-column flex-lg-row align-items-lg-center gap-4 ${
              menuIsActive ? "main-header__nav-isactive" : ""
            }`}
          >
            <div
              className="main-header__nav-overlay d-lg-none"
              onClick={toggleMenu}
            ></div>
            <Link
              href="/#about-section"
              className="main-header__nav-item"
              data-link="about"
              onClick={toggleMenu}
            >
              من نحن
            </Link>
            <Link
              href="/#service-section"
              className="main-header__nav-item"
              data-link="about"
              onClick={toggleMenu}
            >
              الخدمات
            </Link>
            <Link
              href="/#membership-section"
              className="main-header__nav-item"
              data-link="subscriptions"
              onClick={toggleMenu}
            >
              الاشتراكات
            </Link>
            <Link
              href="/members"
              className="main-header__nav-item"
              onClick={toggleMenu}
            >
              تصفح الاعضاء
            </Link>
          </nav>

          {user ? (
            <Link
              href="/profile"
              className="main-header__login main-header__profile position-relative   d-flex align-items-center justify-content-center text-center btn-primary btn"
            >
              <span className="d-flex align-items-center justify-content-center">
                <i className="las la-user"></i>
              </span>
              الملف الشخصى
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="main-header__login d-flex align-items-center justify-content-center text-center btn-primary btn"
            >
              انشاء حساب
            </Link>
          )}

          <button
            type="button"
            className="d-lg-none border-0 bg-transparent p-0 m-0 main-header__nav-toggle"
            onClick={toggleMenu}
          >
            <i className="las la-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
