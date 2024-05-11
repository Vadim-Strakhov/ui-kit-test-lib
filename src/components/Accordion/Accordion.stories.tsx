import React from "react";
import { Accordion, AccordionProps } from "./Accordion";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "components/Accordion",
  component: Accordion,
  args: {
    isOpen: false,
    title: "My title",
    children: "Content",
  },
  parameters: {
    controls: {
      exclude: ["innerControl", "onToggle", "isOpen"],
    },
  },
} as Meta<AccordionStoryProps>;

type AccordionStoryProps = Pick<
  AccordionProps,
  "isOpen" | "title" | "children"
>;

export const AccordionStoryTemplate: StoryObj<AccordionStoryProps> = ({
  ...args
}) => <Accordion {...args} innerControl />;

AccordionStoryTemplate.storyName = "Accordion";
