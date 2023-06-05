import { Header } from "./components";

export default function HomeLayout({ children, headerProps, containerProps }) {
  return (
    <section className="home-layout" {...containerProps}>
      <Header {...headerProps} />
      {children}
    </section>
  );
}
