import { ErrorMessage, Field, useFormikContext } from "formik";

import { Form } from "react-bootstrap";

import { useDisabledField } from "@/hooks";

export default function CheckBox({ label, labelStyle, ...props }) {
  const { values, setFieldValue } = useFormikContext();

  const { isDisabled } = useDisabledField({ setFieldValue, props, values });

  return (
    <>
      <div className="check-input">
        {label && (
          <Form.Label className="check-input-label" style={labelStyle}>
            {label}
          </Form.Label>
        )}
        <div className="d-flex align-items-center flex-wrap gap-4">
          {props.options.map((item, index) => (
            <div key={index + props.id} className="check-input-box">
              <Field
                id={props.id + "option" + index}
                name={props.name}
                className="d-none"
                value={item}
                type="checkbox"
                disabled={isDisabled}
                {...props.inputProps}
              />
              <label
                {...props.labelProps}
                htmlFor={props.id + "option" + index}
              >
                <span className="check-input-circle"></span>
                <span className="check-input-text">{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <ErrorMessage
        name={props.name}
        component="div"
        className="input-error-msg"
      >
        {(msg) => <div className="input-error-msg">{msg}</div>}
      </ErrorMessage>
    </>
  );
}
