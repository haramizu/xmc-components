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
    fields: {
      Id: "a4f8f13e-c28a-404f-8549-15e7533b0b67",
      DisplayName: "Home",
      Title: "Home",
      NavigationTitle: "Home",
      Href: "/",
      Querystring: "sc_site=Tailwindcss",
      Styles: ["level0", "submenu", "item0", "odd", "first", "last", "active"],
      Children: [
        {
          Id: "3fafb154-4e4a-4b5c-9963-cf8b19e5205c",
          DisplayName: "Global Menu 1",
          Title: "Global Menu 1",
          NavigationTitle: "Global Menu 1",
          Querystring: "sc_site=Tailwindcss",
          Href: "/Global-Menu-1",
          Styles: ["level1", "submenu", "item0", "odd", "first"],
          Children: [
            {
              Id: "4b5d8ab8-4436-41bc-8c0d-90078e7c0bc2",
              DisplayName: "Sub Menu 1-1",
              Title: "Sub Menu 1-1",
              NavigationTitle: "Sub Menu 1-1",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-1/Sub-Menu-1-1",
              Styles: ["level1", "submenu", "item0", "odd", "first"],
              Children: [],
            },
            {
              Id: "12bbdbc9-8804-4d2a-85c5-ea7409f09613",
              DisplayName: "Sub Menu 1-2",
              Title: "Sub Menu 1-2",
              NavigationTitle: "Sub Menu 1-2",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-1/Sub-Menu-1-2",
              Styles: ["level1", "submenu", "item0", "odd", "first"],
              Children: [],
            },
            {
              Id: "cadb8860-def9-4576-83c7-80879e92a352",
              DisplayName: "Sub Menu 1-3",
              Title: "Sub Menu 1-3",
              NavigationTitle: "Sub Menu 1-3",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-1/Sub-Menu-1-3",
              Styles: ["level1", "submenu", "item0", "odd", "first"],
              Children: [],
            },
          ],
        },
        {
          Id: "49b7028c-40f4-45b0-ba44-19f49dc356d5",
          DisplayName: "Global Menu 2",
          Title: "Global Menu 2",
          NavigationTitle: "Global Menu 2",
          Querystring: "sc_site=Tailwindcss",
          Href: "/Global-Menu-2",
          Styles: ["level1", "submenu", "item1", "even"],
          Children: [
            {
              Id: "982557a4-a6d7-49a9-b1e6-d272885b1d6c",
              DisplayName: "Sub Menu 2-1",
              Title: "Sub Menu 2-1",
              NavigationTitle: "Sub Menu 2-2",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-1/Sub-Menu-1-1",
              Styles: ["level1", "submenu", "item1", "even"],
              Children: [],
            },
            {
              Id: "38f03998-d365-41b8-b044-677429c31511",
              DisplayName: "Sub Menu 2-2",
              Title: "Sub Menu 2-2",
              NavigationTitle: "Sub Menu 2-2",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-2/Sub-Menu-2-2",
              Styles: ["level1", "submenu", "item1", "even"],
              Children: [],
            },
          ],
        },
        {
          Id: "84289dc9-c0ac-403c-9c51-77939b2b9bcf",
          DisplayName: "Global Menu 3",
          Title: "Global Menu 3",
          NavigationTitle: "Global Menu 3",
          Querystring: "sc_site=Tailwindcss",
          Href: "/Global-Menu-3",
          Styles: ["level1", "submenu", "item2", "odd"],
          Children: [
            {
              Id: "72cb44b2-ddfd-4fb5-ada9-86f41f48941a",
              DisplayName: "Sub Menu 3-1",
              Title: "Sub Menu 3-1",
              NavigationTitle: "Sub Menu 3-1",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-3/Sub-Menu-3-1",
              Styles: ["level1", "submenu", "item2", "odd"],
              Children: [],
            },
            {
              Id: "657d2dba-719e-44cd-9af2-6b5b8eeb765b",
              DisplayName: "Sub Menu 3-2",
              Title: "Sub Menu 3-2",
              NavigationTitle: "Sub Menu 3-2",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-3/Sub-Menu-3-2",
              Styles: ["level1", "submenu", "item2", "odd"],
              Children: [],
            },
            {
              Id: "3661590d-b391-4581-b83a-7420574ec9d3",
              DisplayName: "Sub Menu 3-3",
              Title: "Sub Menu 3-3",
              NavigationTitle: "Sub Menu 3-3",
              Querystring: "sc_site=Tailwindcss",
              Href: "/Global-Menu-3/Sub-Menu-3-3",
              Styles: ["level1", "submenu", "item2", "odd"],
              Children: [],
            },
          ],
        },
        {
          Id: "5c300e08-2b26-4260-b101-73ceb0679ad5",
          DisplayName: "Global Menu 4",
          Title: "Global Menu 4",
          NavigationTitle: "Global Menu 4",
          Querystring: "sc_site=Tailwindcss",
          Href: "/Global-Menu-4",
          Styles: ["level1", "item3", "even", "last"],
          Children: [],
        },
      ],
    },
    params: {
      styles: "basis-full h-48",
    },
  },
};
