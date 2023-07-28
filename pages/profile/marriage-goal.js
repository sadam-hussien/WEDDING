export default function marriageGoal() {
  return <div>marriage-goal</div>;
}
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
  const data = JSON.parse(req.cookies.data).package_type;

  if (!data) {
    return {
      redirect: {
        destination: "/#membership-section",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
