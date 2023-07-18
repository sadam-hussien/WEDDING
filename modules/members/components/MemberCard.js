import Link from "next/link";

export default function MemberCard({ data }) {
  return (
    <div className="d-flex gap-4 member-card box">
      <img
        src="/images/avatar.jpg"
        alt=""
        className="img-fluid member-card-img rounded-circle"
      />
      <div className="flex-fill">
        <h5 className="mb-3">
          {data.first_name} {data.middle_name}
        </h5>
        <h6 className="d-flex align-items-center gap-2 mb-2">
          <span>تاريخ الميلاد:</span>
          <span>{data.dob}</span>
        </h6>

        <div className="d-flex justify-content-end">
          <Link
            href={{ pathname: "/chat", query: { id: data.id } }}
            className="my-btn btn member-card-btn"
          >
            <span> تواصل الان</span>
            <span>
              <i className="las la-reply"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
