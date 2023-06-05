export default function FormTitle({ title, subtitle }) {
  return (
    <div className="auth-title">
      <h1 className="auth-title-text fw-bold text-capitalize">{title}</h1>
      <h6 className="auth-subtitle-text m-0">{subtitle}</h6>
    </div>
  );
}
