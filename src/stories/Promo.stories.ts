import type { Meta, StoryObj } from "@storybook/react";
import { Default as Promo } from "./Promo";

const meta = {
  title: "SXAStarter/Promo",
  component: Promo,
  tags: ["autodocs"],
  argTypes: {
    fields: { control: "object" },
    params: { control: "object" },
  },
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    fields: {
      PromoText: {
        value:
          "<h1>Heading 1</h1>\n<p>Paragraph</p>\n<h2>Heading 2</h2>\n<p>Paragraph</p>",
      },
      PromoText2: {
        value:
          "<h1>Heading 1</h1>\n<p>Paragraph</p>\n<h2>Heading 2</h2>\n<p>Paragraph</p>",
      },
      PromoIcon: {
        value: {
          src: "/styling.png",
          alt: "Lock",
          width: "4032",
          height: "3024",
        },
      },
      PromoLink: {
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
    },
    params: {
      styles: "basis-full",
    },
  },
};
