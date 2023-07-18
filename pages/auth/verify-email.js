import { FormHeader, FormTitle, FormSubmit } from "@/modules/auth/components";

import AuthLayout from "@/layout/authLayout";

import OtpInput from "react-otp-input";

import { useState } from "react";

import { usePost } from "@/hooks";

import { api_resend_email, api_verify_email } from "@/modules/auth/server";

import { useRouter } from "next/router";
import { ButtonWithIcon } from "@/components";

export default function VerifyEmail() {
  const { query, replace } = useRouter();

  const [otp, setOtp] = useState("");

  const { mutate, isLoading } = usePost({
    queryFn: (d) => api_verify_email(d.token, d.otp),
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("otp", otp);

    mutate(
      { otp: formData, token: query.token },
      {
        onSuccess: (res) => {
          if (res.msg === "Your email has been verified") {
            replace("/auth/login");
          }
        },
      }
    );
  }

  const { mutate: mutateResendOpt, isLoading: isLoadingResend } = usePost({
    queryFn: api_resend_email,
  });

  function resendCode() {
    mutateResendOpt(query.token);
  }

  return (
    <section className="verify">
      <FormHeader
        title={"ليس لديك حساب؟"}
        link={"انشاء حساب"}
        path="/auth/register"
        // noBack
      />
      <FormTitle
        title={"تفعيل الحساب"}
        subtitle={"تم ارسال رمز التحقيق الى البريد الالكترونى الخاص بك"}
      />

      <form onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} className="input-code" />}
          containerStyle={{
            gap: "25px",
            justifyContent: "flex-start",
          }}
        />

        <div className="d-flex align-items-center gap-4 mt-5">
          <ButtonWithIcon type="submit" title="تحقق" loading={isLoading} />
          <ButtonWithIcon
            variant="secondary
          "
            type="button"
            title="اعادة ارسال رمز التحقق"
            loading={isLoadingResend}
            onClick={resendCode}
            style={{
              minWidth: "200px",
              backgroundColor: "transparent",
              height: "auto",
              padding: 0,
              border: "none",
              color: "var(--text)",
            }}
            classes="resend-code-btn"
            icon="las la-redo-alt"
          />
        </div>

        {/* <ButtonWithIcon
          type="button"
          title="اعادة ارسال رمز التحقق"
          loading={isLoadingResend}
          onClick={resendCode}
          style={{
            backgroundColor: "transparent",
            height: "auto",
            padding: 0,
            border: "none",
            color: "var(--text)",
            minWidth: "auto",
          }}
        /> */}
      </form>
    </section>
  );
}

VerifyEmail.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

// if user is logged in redirect to home page
export async function getServerSideProps({ req }) {
  const isAuth = req.cookies.access_token;
  if (isAuth) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
