import Link from "next/link";

import { useSelector } from "react-redux";

export default function Landing() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="home__landing d-flex align-items-center">
      <div className="container">
        <h1 className="home__landing__title">اعثر على شريك حياتك بسهولة</h1>
        <h3 className="home__landing__subtitle">
          موقع يثق به أكثر من ٧،٥ مليون من حول العالم
        </h3>
        {user ? (
          <Link
            href="/members"
            className="btn btn-light my-btn home__landing__btn"
          >
            اعثر على اعضاء الان
            <span className="icon">
              <i className="las la-long-arrow-alt-left"></i>
            </span>
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className="btn btn-light my-btn home__landing__btn"
          >
            ابدأ الان
            <span className="icon">
              <i className="las la-long-arrow-alt-left"></i>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
