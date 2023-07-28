import HomeLayout from "@/layout/homeLayout";

import SearchLayout from "@/layout/searchLayout";

import { layout_styles } from "@/modules/profile/constants";

import { api_get_profiles } from "@/modules/members/server";

import { MemberCard } from "@/modules/members/components";

import { useRouter } from "next/router";

import { useFetch } from "@/hooks";

import { Alert, Col, Row, Spinner } from "react-bootstrap";

export default function Members({ queryIsEnabled }) {
  const { query } = useRouter();

  const { data, isLoading: isLoadingProfileData } = useFetch({
    queryFn: () => api_get_profiles(query),
    queryKey: ["profile-get-data", query],
  });

  if (isLoadingProfileData) {
    return (
      <Spinner
        as="span"
        animation="border"
        size="md"
        role="status"
        aria-hidden="true"
      />
    );
  }

  return (
    <div>
      <Row className="g-4">
        {data?.users?.data.length ? (
          data.users.data.map((member) => (
            <Col lg={6} key={member.id}>
              <MemberCard data={member} />
            </Col>
          ))
        ) : (
          <Alert variant={"primary"}>لا يوجد اعضاء بهذه الخصائص</Alert>
        )}
      </Row>
    </div>
  );
}

Members.getLayout = function getLayout(page) {
  return (
    <HomeLayout
      containerProps={layout_styles.containerProps}
      headerProps={layout_styles.headerProps}
    >
      <SearchLayout>{page}</SearchLayout>
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
