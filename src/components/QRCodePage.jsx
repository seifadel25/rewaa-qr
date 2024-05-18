import React from "react";
import QRCode from "qrcode.react";

const QRCodePage = () => {
  const uniqueId = "12345678"; // This should be dynamically generated for each session or user
  const signupUrl = `http://192.168.1.31:3000/signup?uid=${uniqueId}`;

  return (
    <div className="flex flex-col justify-center items-center h-[100svh] gap-y-14">
      <QRCode value={signupUrl} size={256} />

      <h1 >Scan this QR Code to Sign Up</h1>
      <p className="text-2xl">Scan this code to begin your registration.</p>
    </div>
  );
};

export default QRCodePage;
