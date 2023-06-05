import Link from "next/link";

export default function FormFooter({ forget }) {
  return (
    <div className="auth-footer mt-5 d-flex justify-content-between align-items-center">
      {forget ? (
        <Link href="/auth/forget-password" className="forget-passowrd">
          forget_passowrd
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
