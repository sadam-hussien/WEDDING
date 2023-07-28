import HomeLayout from "@/layout/homeLayout";
import ProfileLayout from "@/layout/profileLayout";
import { layout_styles } from "@/modules/profile/constants";
import Link from "next/link";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="h-100 d-flex flex-column profile-form box">
      {!user?.data?.package_type && (
        <Alert variant={"danger"}>
          الرجاء الاشتراك فى العضوية المناسبة لك حتى يمكنك استكمال البيانات
          <Link
            href="/#membership-section"
            className="btn btn-light my-btn home__landing__btn bg-transparent border-0"
          >
            العضويات
            <span className="icon">
              <i className="las la-long-arrow-alt-left"></i>
            </span>
          </Link>
        </Alert>
      )}
    </div>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <HomeLayout
      containerProps={layout_styles.containerProps}
      headerProps={layout_styles.headerProps}
    >
      <ProfileLayout>{page}</ProfileLayout>
    </HomeLayout>
  );
};

// if user is logged in redirect to home page
export async function getServerSideProps({ req }) {
  const isAuth = req.cookies.access_token;
  if (!isAuth) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
