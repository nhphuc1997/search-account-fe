"use client";
import Block from "@/components/Block";
import EventsAndNews from "@/components/EventsAndNews";
import TopNews from "@/components/TopNews";
import { Divider } from "antd";

export default function IndexHomePage() {
  return (
    <div className="w-full">
      <TopNews />
      <Divider className="!my-3" />
      <Block />
      <EventsAndNews />
    </div>
  );
}
