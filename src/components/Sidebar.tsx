"use client";

import { SideBareItems } from "@/types";
import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";
import { SideBarButton } from "./SideBarButton";
import { SidebarDesktop } from "./SidebarDesktop";

const sidebarItems: SideBareItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    { label: "Notifications", href: "/item/notifications", icon: Bell },
    { label: "Messages", href: "/item/messages", icon: Mail },
    {
      href: "/item/lists",
      icon: List,
      label: "Lists",
    },
    {
      href: "/item/bookmarks",
      icon: Bookmark,
      label: "Bookmarks",
    },
    {
      href: "/item/communities",
      icon: Users,
      label: "Communities",
    },
    {
      href: "/item/profile",
      icon: User,
      label: "Profile",
    },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SideBarButton icon={MoreHorizontal} className="w-full">
        More
      </SideBarButton>
      <SideBarButton
        className="w-full justify-center text-white"
        variant="default"
      >
        Tweet
      </SideBarButton>
    </div>
  ),
};
export function Sidebar() {
  return <SidebarDesktop sidebarItem={sidebarItems} />;
}
