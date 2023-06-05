import React from "react";

import { Button, Spinner } from "react-bootstrap";

export default function Btn({
  variant = "primary",
  type = "submit",
  loading,
  title,
  style,
  radius,
  onClick,
  disabled,
  as,
  classes,
}) {
  return (
    <Button
      as={as}
      variant={variant}
      className={`text-capitalize ${classes} ${
        !radius ? "rounded-pill" : ""
      } normal-btn position-relative d-flex align-items-center justify-content-center`}
      type={type}
      disabled={disabled || loading}
      style={style}
      onClick={onClick}
    >
      {!loading ? (
        title
      ) : (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
    </Button>
  );
}
