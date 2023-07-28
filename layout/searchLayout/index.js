import { useMemo, useState, useEffect, cloneElement, useRef } from "react";

import { Accordion, Container } from "react-bootstrap";

import { filters_fields } from "@/modules/members/constants";

import { Formik, Form, useFormikContext, Field } from "formik";

import { useRouter } from "next/router";

import RangeSlider from "react-range-slider-input";

import "react-range-slider-input/dist/style.css";

export default function SearchLayout({ children }) {
  const router = useRouter();
  const [queryIsEnabled, setQueryIsEnabled] = useState(false);
  function handleSubmit(values) {
    let query = {};
    for (const value in values) {
      if (values[value]) {
        query[value] = values[value];
      }
    }

    if (Object.keys(query).length) {
      setQueryIsEnabled(true);
      router.push({
        pathname: router.pathname,
        query,
      });
    }
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
          className="profile-layout-aside search-layout"
          ref={profileLayoutAsideRef}
        >
          <Formik
            enableReinitialize
            initialValues={{
              height: router.query.height || 0,
              weight: router.query.weight || 0,
              skin_color: router.query.skin_color || "",
              hair_color: router.query.hair_color || "",
              eye_color: router.query.eye_color || "",
              hair_type: router.query.hair_type || "",
              body_shape: router.query.body_shape || "",
              marital_status: router.query.marital_status || "",
              general_health: router.query.general_health || "",
              hearing: router.query.hearing || "",
              vision: router.query.vision || "",
              speech: router.query.speech || "",
              sign_language: router.query.sign_language || "",
              chronic_diseases: router.query.chronic_diseases || "",
              housing_type: router.query.housing_type || "",
              housing_contract_type: router.query.housing_contract_type || "",
              financial_level: router.query.financial_level || "",
              gift: router.query.gift || "",
              mahr: router.query.mahr || "",
              witnesses: router.query.witnesses || "",
              marital_home: router.query.marital_home || "",
              celebration: router.query.celebration || "",
              furniture: router.query.furniture || "",
            }}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => {
              return (
                <Form>
                  <div className="d-flex align-items-center justify-content-between filter-head border-bottom">
                    <h5 className="filter-head-title m-0">تصفية</h5>
                    <button type="submit" className="filter-head-submit">
                      تصفية
                    </button>
                  </div>
                  <div className="filter-body">
                    {filters_fields.map((field) =>
                      field.type === "slider" ? (
                        <div className="mb-3" key={field.id}>
                          <label
                            htmlFor={field.id}
                            className="filter-label d-block"
                          >
                            {field.label}
                          </label>
                          <div className="d-flex align-items-center gap-3">
                            <span className="range-value-box">
                              <sub>{field?.symobl}</sub>
                              {values[field.name] || 300}
                            </span>
                            <RangeSlider
                              className="single-thumb"
                              defaultValue={[0, values[field.name] || 300]}
                              max={300}
                              thumbsDisabled={[true, false]}
                              rangeSlideDisabled={true}
                              onInput={(v) => {
                                setFieldValue(field.name, v[1]);
                              }}
                            />
                          </div>
                        </div>
                      ) : field.type === "radiobox" ? (
                        <div className="mb-3" key={field.id}>
                          <label
                            htmlFor={field.id}
                            className="filter-label d-block"
                          >
                            {field.label}
                          </label>
                          <div className="d-flex align-items-center flex-wrap gap-3">
                            {field.options.map((item, index) => (
                              <div
                                key={index + field.id}
                                className="radio-input-box"
                              >
                                <Field
                                  id={field.id + "option" + index}
                                  name={field.name}
                                  className="d-none"
                                  value={item}
                                  type="radio"
                                />
                                <label htmlFor={field.id + "option" + index}>
                                  <span className="radio-input-circle"></span>
                                  <span className="radio-input-text">
                                    {item}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mb-3" key={field.id}></div>
                      )
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
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
          <div>
            {cloneElement(children, {
              queryIsEnabled,
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
