import type { Meta, StoryObj } from "@storybook/react";
import { Default as Navigation } from "./Navigation";

const meta = {
  title: "Tailwind/Navigation/Default",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    params: {
      styles: "basis-full h-48",
    },
  },
};
