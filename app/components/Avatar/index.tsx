"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full select-none"
      height={30}
      width={30}
      draggable="false"
      src="/images/placeholder.jpg"
      alt="avatar"
    />
  );
};

export default Avatar;
