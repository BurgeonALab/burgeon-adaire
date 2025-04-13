import React, { Fragment, Suspense, useState } from "react";
import { BurgeonNavbar, BurgeonJumbotron, BurgeonContact } from "../components";
import { BurgeonSEO } from "../components/BurgeonSEO";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  BurgeonAbout,
  BurgeonAbstract,
  BurgeonOperations,
  BurgeonOutro,
  BurgeonPartners,
} from "../components";

export default function HomePage({ currectSection, selectedSection }) {
  const [titlePage, setTitlePage] = useState(
    "PT. Burgeon Adaire International"
  );
  const [isDone, setIsDone] = useState(false);
  gsap.registerPlugin(useGSAP, ScrollToPlugin);

  console.log("Current section: " + currectSection);
  console.log("Selected section: " + selectedSection);

  const RenderProgress = () => {
    console.log(isDone);

    async function setLoad() {
      setTimeout(() => {
        setIsDone(true);
        if (isDone == true) {
          const getToPath = async () => {
            if (selectedSection === "Identity") {
              await gsap.to(window, {
                duration: 0.1,
                scrollTo: "#abstract",
              });
              setTitlePage("Identity | PT. Burgeon Adaire International");
            } else if (selectedSection === "Operations") {
              await gsap.to(window, {
                duration: 0.1,
                scrollTo: "#operations",
              });
              setTitlePage("Operations | PT. Burgeon Adaire International");
            } else if (selectedSection === "Acknowledgment") {
              await gsap.to(window, {
                duration: 0.1,
                scrollTo: "#acknowledgment",
              });
              setTitlePage("Acknowledgment | PT. Burgeon Adaire International");
            } else if (selectedSection === "Partners") {
              await gsap.to(window, {
                duration: 0.1,
                scrollTo: "#partners",
              });
              setTitlePage("Partners | PT. Burgeon Adaire International");
            } else {
              setTitlePage("PT. Burgeon Adaire International");
            }
          };
          getToPath();
        }
      }, 1000);
    }
    setLoad();
  };

  return (
    <Fragment>
      <BurgeonSEO
        title={titlePage}
        description="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
        canonical="https://burgeonadaire.com"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <BurgeonContact />
            <BurgeonNavbar />
            <BurgeonJumbotron />
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BurgeonAbout />
            </Suspense>
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BurgeonAbstract currectSection={currectSection} />
            </Suspense>
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BurgeonOperations />
            </Suspense>
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BurgeonOutro />
            </Suspense>
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BurgeonPartners />
            </Suspense>
          </div>
        </div>
      </div>
      <RenderProgress />
    </Fragment>
  );
}
