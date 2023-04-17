import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="h-[40vh] w-[100vw] mt-40">
      <div className="grid grid-cols-4 w-[80vw]  m-auto border-b border-gray-400 pb-5">
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Customer Service</h1>
          <p>Help Center</p>
          <p>Payment Methods</p>
          <p>Free Shipping</p>
          <p>Return & Refund</p>
          <p>Sun Guarantee</p>
          <p>OverSeas Products</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">About Sun</h1>
          <p>About Us</p>
          <p>Sun Blog</p>
          <p>Sun Careeres</p>
          <p>Sun policy</p>
          <p>Sun Mall</p>
          <p>Seller Center</p>
          <p>Flash Deals</p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Follow Us </h1>
          <p>
            <FacebookIcon />
            Facebook
          </p>
          <p>
            <InstagramIcon />
            Instagram
          </p>
          <p>
            <TwitterIcon />
            Twitter
          </p>
          <p>
            <LinkedInIcon />
            Linkedin
          </p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Sun App Download</h1>
          <p>Google play</p>
        </div>
      </div>
      <div>
        <div className="w-[80vw] m-auto pt-10">
          <h1> &#169; Sun Shopee.All Rights reserved 2023</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
