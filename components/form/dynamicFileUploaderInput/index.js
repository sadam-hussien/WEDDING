import React from "react";

import { ErrorMessage, useFormikContext } from "formik";

export default function DynamicFileUploaderInput({
  item,
  children,
  serverCallback,
}) {
  const { setFieldValue, values } = useFormikContext();

  function onChange(e) {
    if (item.multiple) {
      setFieldValue(item.name, [...values[item.name], ...e.target.files]);
    } else {
      // if there is server call back
      if (serverCallback) {
        const fd = new FormData();
        fd.append("image", e.target.files[0]);
        setFieldValue(item.name, e.target.files[0]);
        serverCallback(fd, {
          onSuccess: (data) => {
            setFieldValue(item.name, data.data.path);
          },
        });
      } else {
        setFieldValue(item.name, e.target.files[0]);
      }
    }
  }

  const deleteFile = (index) => {
    if (item.multiple) {
      const filterItems = values[item.name].filter(
        (item, idx) => idx !== index
      );
      setFieldValue(item.name, filterItems);
    } else {
      setFieldValue(item.name, "");
    }
  };

  const handleChildren = React.cloneElement(children, {
    files: values[item.name],
    deleteFile,
  });

  return (
    <>
      <div className="dynamic-file-uploader-input">
        <input
          {...item?.inputProps}
          type="file"
          id={item.id}
          name={item.name}
          className="d-none"
          onChange={onChange}
        />
        <label htmlFor={item.id} className="w-100">
          {handleChildren}
        </label>
      </div>

      <ErrorMessage
        name={item.name}
        component="div"
        className="input-error-msg"
      >
        {(msg) => <div className="input-error-msg">{msg}</div>}
      </ErrorMessage>
    </>
  );
}
