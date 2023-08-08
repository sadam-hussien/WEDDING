import HomeLayout from "@/layout/homeLayout";

import {
  Landing,
  Services,
  Membership,
  About,
} from "@/modules/home/components";

import { api_get_packages } from "@/modules/home/server";

export default function Home() {
  return (
    <section className="home-page">
      <Landing />
      <Services />
      <About />
      <Membership />
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
