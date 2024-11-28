import React, {
  Component,
  Fragment,
} from 'react';

export default class BMediumExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: 'eCommerce',
          desc: 'Shop our diverse merchandise. Find unique items and show your support.',
          link: 'https://shop.burgeonadaire.com',
        },
        {
          id: 1,
          name: 'Organizations',
          desc: 'Our impactful partnerships. Collaborating for positive change.',
          link: 'https://org.burgeonadaire.com',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className='extras-container d-flex flex-row flex-grow-1'>
          {
            this.state.items.map((data, index) => (
              data.name === 'eCommerce' ?
              <div key={index} className='operation-child-container w-50'>
                <div className='h-100 padding-twelve-r'>
                  <div className='ecommerce-box rounded p-4'>
                    <div className='d-flex h-100 flex-column justify-content-between'>
                      <div>
                        <a className='text-decoration-none' href={data.link} rel="noopener" target="_blank">
                          <h5 className='text-light'>{data.name}</h5>
                        </a>
                        <p className='text-light mb-0'>{data.desc}</p>
                      </div>
                      <div className='d-flex justify-content-end'>
                        <span className="badge text-bg-danger">WIP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div key={index} className='operation-child-container w-50'>
                <div className='h-100 padding-twelve-l'>
                  <div className='ecommerce-box rounded p-4'>
                    <div className='d-flex h-100 flex-column justify-content-between'>
                      <div>
                        <a className='text-decoration-none' href={data.link} rel="noopener" target="_blank">
                          <h5 className='text-light'>{data.name}</h5>
                        </a>
                        <p className='text-light mb-0'>{data.desc}</p>
                      </div>
                      <div className='d-flex justify-content-end'>
                        <span className="badge text-bg-danger">WIP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Fragment>
    );
  }
}