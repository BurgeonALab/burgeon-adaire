import React, {
  Fragment,
  Component,
  Suspense,
  lazy,
} from 'react';

const BMediumAboutLeftBox = lazy(() => import('../components/medium/BMediumAboutLeftBox'));
const BMediumAboutRightBox = lazy(() => import('../components/medium/BMediumAboutRightBox'));

export default class BurgeonAbout extends Component {
  render() {
    return (
      <Fragment>
        <div className='about-container d-flex flex-row'>
          <Suspense fallback={<p className='d-none'>Loading...</p>}>
            <BMediumAboutLeftBox />
          </Suspense>
          <Suspense fallback={<p className='d-none'>Loading...</p>}>
            <BMediumAboutRightBox />
          </Suspense>
        </div>
      </Fragment>
    );
  }
}
