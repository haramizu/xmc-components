import type { Meta, StoryObj } from "@storybook/react";
import { Default as Image } from "./Image";

const meta = {
  title: "SXAStarter/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    fields: { control: "object" },
    params: { control: "object" },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    fields: {
      TargetUrl: {
        value: {
          text: "",
          anchor: "",
          linktype: "internal",
          class: "",
          title: "",
          target: "|Custom",
          querystring: "sc_site=Tailwindcss",
          id: "{013E21CB-52B9-4260-A521-FB10ECE27315}",
          href: "/Link",
        },
      },
      Image: {
        value: {
          src: "/styling.png",
          alt: "Lock",
          width: "4032",
          height: "3024",
        },
      },
      ImageCaption: { value: "Smartphone Lock" },
    },
    params: {
      styles: "basis-full ",
    },
  },
};
