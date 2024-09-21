import React, {
  Component,
  Fragment,
} from 'react';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class CookiePolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Cookie Policy • PT. Burgeon Adaire International"
          description="Cookie Policy."
          sitename="PT. Burgeon Adaire International"
          canoncial="https://burgeonadaire.com"
        />
      </Fragment>
    );
  }
}