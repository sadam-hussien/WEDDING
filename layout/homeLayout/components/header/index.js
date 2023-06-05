import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header(props) {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="main-header d-flex align-items-center" {...props}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="main-header__logo">
          WE<span>logo</span>
        </Link>

        <div className="d-flex align-items-center gap-5">
          <ul className="main-header__nav list-unstyled m-0 p-0 d-flex align-items-center gap-4">
            <li className="main-header__nav-item" data-link="about">
              من نحن
            </li>
            <li className="main-header__nav-item" data-link="about">
              الخدمات
            </li>
            <li className="main-header__nav-item" data-link="subscriptions">
              الاشتراكات
            </li>
            <Link href="/members" className="main-header__nav-item">
              تصفح الاعضاء
            </Link>
          </ul>

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
        </div>
      </div>
    </header>
  );
}
