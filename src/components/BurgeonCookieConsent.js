import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

const BurgeonCookieConsent = () => {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We Use Cookies",
              description:
                "We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking <strong>Accept All</strong>, you agree to this, as outlined in our <a href='https://burgeonadaire.com/legal/cookie-policy'>Cookie Policy</a>.",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              showPreferencesBtn: "Manage Individual Preferences",
            },
            preferencesModal: {
              title: "Cookies Settings",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Accept Current Selection",
              closeIconLabel: "Close Cookies Settings",
              sections: [
                {
                  title: "Manage Cookie Preferences",
                  description:
                    "By clicking <strong>Accept All</strong>, you agree to the storing of cookies on your device for various purposes, such as ensuring the proper functioning of the website. You can change your cookie settings from the page at any time.",
                },
                {
                  title: "Strictly Necessary Cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to our policy on cookies and your choices, please <a href="mailto:geraldzandisko@burgeonadaire.com?subject=Cookie Policy">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);
};

export default BurgeonCookieConsent;
