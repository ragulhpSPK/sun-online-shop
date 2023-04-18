import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function Footer() {
  return (
    <div className="h-[40vh] w-[100vw] mt-40">
      <div className="grid grid-cols-4 gap-x-48 w-[80vw]  m-auto border-b border-gray-400 pb-5">
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Customer Service</h1>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Help Center
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Payment Methods
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Free Shipping
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Return & Refund
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Sun Guarantee
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            OverSeas Products
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">About Sun</h1>
          <Link href="/footers/About">
            <p className="hover:text-[--third-color] hover:font-semibold">
              About Us
            </p>
          </Link>

          <p className="hover:text-[--third-color] hover:font-semibold">
            Sun Blog
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Sun Careeres
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Sun policy
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Sun Mall
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Seller Center
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Flash Deals
          </p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Follow Us </h1>
          <p className="hover:text-[--third-color] hover:font-semibold">
            <FacebookIcon />
            Facebook
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            <InstagramIcon />
            Instagram
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            <TwitterIcon />
            Twitter
          </p>
          <p className="hover:text-[--third-color] hover:font-semibold">
            <LinkedInIcon />
            Linkedin
          </p>
        </div>
        <div className="flex flex-col gap-2 text-md font-medium">
          <h1 className="text-2xl font-semibold pb-2">Sun App Download</h1>
          <p className="hover:text-[--third-color] hover:font-semibold">
            Google play
          </p>
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
