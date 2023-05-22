"use client";

import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className="
      px-4
      py-3
      hover:bg-neutral-100
      transition
      font-semibold
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
