"use client"
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
}

export function RootLayoutClient() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: `/loading/window-loading-icon`, href: `/loading/window-loading-icon`,
    },
  ]);

  return (
    <>
      <div className="w-full relative flex flex-wrap gap-2 p-4">
        <ul className="w-full relative flex flex-wrap gap-2">
          {
            menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="inline-flex flex-wrap relative">
                  <Link 
                    href={item.href}
                    className="inline-flex flex-wrap px-6 py-2 cursor-pointer box-border border border-slate-400 text-sm text-slate-800 hover:bg-slate-200">
                    { item.name }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}