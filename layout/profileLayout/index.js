import Image from "next/image";

import { Container, Spinner } from "react-bootstrap";

import { profile_data } from "@/modules/profile/constants";

import Link from "next/link";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { Btn } from "@/components";

import { logout, savePhoto } from "@/modules/auth/store";

import Cookies from "js-cookie";
import { usePost } from "@/hooks";
import { useRef, useState } from "react";
import { api_upload_photo } from "@/modules/profile/server";

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

  const { mutate, isLoading } = usePost({
    queryFn: api_upload_photo,
  });

  function uploadPhoto(e) {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    mutate(formData, {
      onSuccess: (response) => {
        console.log("response", response);
        dispatch(savePhoto(response.data));
      },
    });
    console.log(e.target.files[0]);
  }

  const profileLayoutContentRef = useRef(null);

  const profileLayoutAsideRef = useRef(null);

  let asideIsOpen = false;

  function toggleSidebar() {
    const profileLayoutAsideRefStyles = getComputedStyle(
      profileLayoutAsideRef.current
    );

    const profileLayoutContentRefStyles = getComputedStyle(
      profileLayoutContentRef.current
    );

    if (asideIsOpen) {
      profileLayoutAsideRef.current.style.right = "-100%";
      profileLayoutContentRef.current.style.transform = `translateX(0)`;
    } else {
      profileLayoutAsideRef.current.style.right =
        profileLayoutContentRef.current.offsetLeft + "px";

      profileLayoutContentRef.current.style.transform = `translateX(-${
        parseInt(profileLayoutAsideRefStyles.width) + 20 + "px"
      })`;
    }

    asideIsOpen = !asideIsOpen;
  }

  return (
    <div className="profile-layout">
      <Container>
        <aside
          className="profile-layout-aside d-flex flex-column"
          ref={profileLayoutAsideRef}
        >
          {/* avatar  */}
          <div className="profile-layout-header border-bottom  d-flex mb-lg align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <Image
                src={
                  user?.data?.profile_photo_url ||
                  "/images/user-placeholder.png"
                }
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

            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              user?.data?.package_type && (
                <label className="cursor-pointer profile-layout-edit-avatar">
                  <input
                    type="file"
                    className="d-none"
                    onChange={uploadPhoto}
                  />
                  <i className="las la-edit"></i>
                </label>
              )
            )}
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

        <div className="profile-layout-content" ref={profileLayoutContentRef}>
          <button
            type="button"
            className="d-lg-none toggle-aside bg-transparent border-0 p-0 d-flex align-items-center gap-2"
            onClick={toggleSidebar}
          >
            <i className="las la-bars"></i>
            <span>القائمة</span>
          </button>
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
}
