import Image from "next/image";

import { Container } from "react-bootstrap";

import { profile_data } from "@/modules/profile/constants";

import Link from "next/link";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { Btn } from "@/components";

import { logout } from "@/modules/auth/store";

import Cookies from "js-cookie";

const navItemClasses =
  "profile-layout-navbar-item d-flex align-items-center justify-content-between";

export default function ProfileLayout({ children }) {
  const { pathname, reload } = useRouter();

  function activeClass(href) {
    if (pathname === href) {
      return "active " + navItemClasses;
    }
    return navItemClasses;
  }

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function handleLogout() {
    Cookies.remove("access_token");
    dispatch(logout());
    reload();
  }

  return (
    <div className="profile-layout">
      <Container>
        <aside className="profile-layout-aside d-flex flex-column">
          {/* avatar  */}
          <div className="profile-layout-header border-bottom  d-flex mb-lg align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <Image
                src={user?.data?.avatar || "/images/user-placeholder.png"}
                alt=""
                className="img-fluid profile-layout-aside-avatar rounded-circle"
                width={60}
                height={60}
              />
              <div>
                <h5 className="profile-layout-aside-name m-0">
                  {user?.data?.first_name} {user?.data?.middle_name}
                </h5>
                <span>{user?.data?.package_type}</span>
              </div>
            </div>

            {/* <label className="cursor-pointer profile-layout-edit-avatar">
              <input type="file" className="d-none" />
              <i className="las la-edit"></i>
            </label> */}
          </div>

          {/* body  */}
          <nav className="profile-layout-navbar">
            {Object.values(profile_data).map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={activeClass(item.path)}
              >
                <span>{item.title}</span>
                <i className="las la-angle-left icon"></i>
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Btn
              type="button"
              variant="danger"
              style={{
                minWidth: "100%",
              }}
              title="تسجيل خروج"
              onClick={handleLogout}
            />
          </div>
        </aside>

        <div className="profile-layout-content">{children}</div>
      </Container>
    </div>
  );
}
