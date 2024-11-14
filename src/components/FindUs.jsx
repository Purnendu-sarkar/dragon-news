import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-3 mt-5">
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-gray-50">
        <button className="btn join-item justify-start"><FaFacebookF /> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter /> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
