import { Tabs, Tab } from "@mantine/core";
import { useState } from "react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function MantineApp() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tab css="" label="First" icon={<ChatBubbleIcon />}>First tab content</Tab>
      <Tab css="" label="Second">Second tab content</Tab>
      <Tab css="" label="Third">Third tab content</Tab>
    </Tabs>
  )

}