import type { Meta, StoryObj } from "@storybook/react";
import { Default as RichText } from "./RichText";

const meta = {
  title: "SXAStarter/RichText",
  component: RichText,
  tags: ["autodocs"],
  argTypes: {
    fields: { control: 'object' },
    params: { control: 'object' },
  },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    fields: {
      Text: {
        value: '<h1>Heading 1</h1>\n<p>Paragraph</p>\n<h2>Heading 2</h2>\n<p>Paragraph</p>',
      },
    },
    params: {
      styles: 'basis-full'
    },
  },
};
