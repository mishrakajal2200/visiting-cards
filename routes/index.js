const express = require("express");
const router = express.Router();

// Define the route to render the visiting card
router.get("/", (req, res) => {
  const data = {
    companyLogo:"/images/logo-inndia-png.png",
    companyName: "Indi Agro Harvest pvt ltd",
    userName: "Indi Agro",
    location: "Mumbai,Maharashtra",
    email: "shivenagrofarms@gmail.com",
    website: "https://farm2kitchen.co.in",
    contacts: "+9922083899",
    Watsapps: "+9922083899",
    googleMap: "https://goo.gl/maps/example",
    products: [
      {
        productName: "Dal",
        productPrice: "$100",
        productType: "Pulses",
        productImages: [
          "/images/Urad.jpg",
          "/images/white.jpg",
        ],
      },
      {
        productName: "Dal",
        productPrice: "$50",
        productType: "pulses",
        productImages: ["/images/black.jpg"],
      },
    ],
    socialMediaLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtubeChannel: "https://youtube.com",
      googleBusiness: "https://business.google.com",
    },
  };

  // Render the EJS template with dynamic data
  res.render("visitingCard", data);
});

module.exports = router;
