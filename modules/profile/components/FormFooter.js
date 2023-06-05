import { ButtonWithIcon } from "@/components";

import Link from "next/link";

export default function FormFooter(props) {
  return (
    <div className=" mt-auto d-flex align-items-center justify-content-between border-top pt-4 gap-4">
      <ButtonWithIcon
        type="submit"
        title="حفظ"
        icon="las la-check"
        style={{ minWidth: "150px" }}
        radius
        loading={props.loading}
      />
      {props.path && (
        <Link
          href={props.path}
          className="profile-form-footer d-flex align-items-center gap-3"
        >
          <span>{props.link}</span>
          <i className="las la-long-arrow-alt-left icon"></i>
        </Link>
      )}
    </div>
  );
}
