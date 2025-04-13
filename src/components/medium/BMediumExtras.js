import React, { Component, Fragment } from "react";

export default class BMediumExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: "PT. Burgeon Energyworks Industries",
          desc: "PT. Burgeon Energyworks Industries is an oil production company that manufactures and supplies oil barrels to businesses.",
          link: "https://shop.burgeonadaire.com",
        },
        {
          id: 1,
          name: "Organizations",
          desc: "Our impactful partnerships. Collaborating for positive change.",
          link: "https://org.burgeonadaire.com",
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="extras-container d-flex flex-row flex-grow-1">
          {this.state.items.map((data, index) =>
            data.name === "PT. Burgeon Energyworks Industries" ? (
              <div key={index} className="operation-child-container w-50">
                <div className="h-100 padding-twelve-r">
                  <div className="ecommerce-box rounded p-4">
                    <div className="d-flex h-100 flex-column justify-content-between">
                      <div>
                        <a
                          className="text-decoration-none"
                          href={data.link}
                          rel="noopener"
                          target="_blank"
                        >
                          <h5 className="text-light fw-bold">{data.name}</h5>
                        </a>
                        <p className="text-light mb-0 small-desktop-op-description">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="operation-child-container w-50">
                <div className="h-100 padding-twelve-l">
                  <div className="ecommerce-box rounded p-4 ecommerce-box-org">
                    <div className="d-flex h-100 flex-column justify-content-between">
                      <div>
                        <a
                          className="text-decoration-none"
                          href={data.link}
                          rel="noopener"
                          target="_blank"
                        >
                          <h5 className="text-light fw-bold">{data.name}</h5>
                        </a>
                        <p className="text-light mb-0 small-desktop-op-description">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Fragment>
    );
  }
}
