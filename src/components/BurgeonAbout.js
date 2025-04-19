import React, { Component, Suspense } from "react";
import BMediumAboutLeftBox from "../components/medium/BMediumAboutLeftBox";
import BMediumAboutRightBox from "../components/medium/BMediumAboutRightBox";

export default class BurgeonAbout extends Component {
  render() {
    return (
      <section>
        <div className="about-container d-flex flex-row">
          <Suspense fallback={<p className="d-none">Loading...</p>}>
            <BMediumAboutLeftBox />
          </Suspense>
          <Suspense fallback={<p className="d-none">Loading...</p>}>
            <BMediumAboutRightBox />
          </Suspense>
        </div>
      </section>
    );
  }
}
