/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";

const ImageIcon = ({ src, alt, size} : {
  src: string,
  alt: string,
  size: number
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default ImageIcon;