import Link from "next/link";

export default function FormHeader({ title, link, path, noBack }) {
  return (
    <div className="auth-header d-flex justify-content-between align-items-center">
      {!noBack ? (
        <Link
          href="/auth"
          className="back-btn d-inline-flex align-items-center justify-content-center"
        >
          <i className={`las la-long-arrow-alt-right`}></i>
        </Link>
      ) : (
        <div></div>
      )}
      <span className="account-option">
        {title}
        <Link href={path} className="account-option-link">
          {link}
        </Link>
      </span>
    </div>
  );
}
