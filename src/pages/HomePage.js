import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
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
  const [titlePage, setTitlePage] = useState("");
  gsap.registerPlugin(useGSAP, ScrollToPlugin);

  console.log("Current section: " + currectSection);
  console.log("Selected section: " + selectedSection);

  function removeHash(name) {
    var urlPath = name.toString();
    var newURL = "/" + urlPath;
    var urlPathCap = urlPath.charAt(0).toUpperCase() + urlPath.slice(1);
    var newTitle = urlPathCap + " | PT. Burgeon Adaire International";
    var newState = {
      additionalInformation:
        urlPathCap + " section at PT. Burgeon Adaire International",
    };

    window.history.pushState(newState, newTitle, newURL);
  }

  useEffect(() => {
    if (selectedSection === "Identity") {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: "#abstract",
      });
      var name = $(".nav1").html().toLowerCase();
      removeHash(name);
      setTitlePage("Identity | PT. Burgeon Adaire International");
    } else if (selectedSection === "Operations") {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: "#operations",
      });
      var name = $(".nav2").html().toLowerCase();
      removeHash(name);
      setTitlePage("Operations | PT. Burgeon Adaire International");
    } else if (selectedSection === "Acknowledgment") {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: "#acknowledgment",
      });
      var name = $(".nav3").html().toLowerCase();
      removeHash(name);
      setTitlePage("Acknowledgment | PT. Burgeon Adaire International");
    } else if (selectedSection === "Partners") {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: "#partners",
      });
      var name = $(".nav4").html().toLowerCase();
      removeHash(name);
      setTitlePage("Partners | PT. Burgeon Adaire International");
    } else {
      setTitlePage("PT. Burgeon Adaire International");
    }
  });

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
    </Fragment>
  );
}
