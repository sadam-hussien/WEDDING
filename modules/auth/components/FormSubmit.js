import { ButtonWithIcon } from "@/components";

export default function FormSubmit({ title, loading }) {
  return (
    <div className="auth-submit mt-5">
      <ButtonWithIcon type="submit" title={title} loading={loading} />
    </div>
  );
}
