var schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Burgeon Adaire International",
      "legalName": "PT. Burgeon Adaire International",
      "url": "https://burgeonadaire.com",
      "foundingDate": "2018",
      "founders": [
        {
          "@type": "Person",
          "name": "Gerald Zandisko",
        },
        {
          "@type": "Person",
          "name": "Nadine Huang",
        },
      ],
      "sponsor": {
        "@type": "Organization",
        "name": "Pepperstone",
        "url": "https://pepperstone.com",
      },
    },
    {
      "@type": "WebSite",
      "name": "PT. Burgeon Adaire International",
      "alternateName": "Burgeon Adaire International",
      "url": "https://burgeonadaire.com",
    },
  ],
};

var script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.querySelector("head").appendChild(script);
