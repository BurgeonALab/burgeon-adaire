import React, {
  Component,
  Fragment,
} from 'react';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Privacy Policy | PT. Burgeon Adaire International"
          description="Privacy Policy."
          sitename="PT. Burgeon Adaire International"
          canoncial="https://burgeonadaire.com"
        />
      </Fragment>
    );
  }
}