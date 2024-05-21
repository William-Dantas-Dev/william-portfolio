/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";

const ImageIcon = ({ src, alt} : {
  src: string,
  alt: string
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={25}
      height={25}
    />
  );
};

export default ImageIcon;