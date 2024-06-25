import type { Meta, StoryObj } from "@storybook/react";
import { Default as LinkList } from "./LinkList";

const meta = {
  title: "SXAStarter/LinkList",
  component: LinkList,
  tags: ["autodocs"],
  argTypes: {
    fields: { control: "object" },
    params: { control: "object" },
  },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    fields: {
      data: {
        datasource: {
          children: {
            results: [
              {
                field: {
                  link: {
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
              },
              {
                field: {
                  link: {
                    value: {
                      text: "",
                      anchor: "",
                      linktype: "internal",
                      class: "",
                      title: "",
                      target: "|Custom",
                      querystring: "sc_site=Tailwindcss",
                      id: "{8E9261F9-95A3-4B40-8B2D-B62133998F07}",
                      href: "/Link-2",
                    },
                  },
                },
              },
            ],
          },
          field: { title: { value: "Sample Link" } },
        },
      },
    },
    params: {
      styles: "basis-full ",
    },
  },
};
