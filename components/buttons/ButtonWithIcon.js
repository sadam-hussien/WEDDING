import React from "react";

import { Button, Spinner } from "react-bootstrap";

export default function ButtonWithIcon({
  variant = "primary",
  type = "submit",
  loading,
  title,
  icon,
  style,
  iconStyle,
  radius,
  onClick,
  disabled,
  classes,
}) {
  return (
    <Button
      variant={variant}
      className={`text-capitalize ${
        !radius ? "rounded-pill" : ""
      } ${classes} btn-with-icon position-relative d-flex align-items-center justify-content-center`}
      type={type}
      disabled={disabled || loading}
      style={style}
      onClick={onClick}
    >
      {title}
      <span
        className={`btn-with-icon-icon d-inline-flex align-items-center justify-content-center`}
        style={{ ...iconStyle, borderRadius: radius ? "inherit" : "" }}
      >
        {loading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <i className={`${icon ? icon : `las la-long-arrow-alt-left`}`}></i>
        )}
      </span>
    </Button>
  );
}
