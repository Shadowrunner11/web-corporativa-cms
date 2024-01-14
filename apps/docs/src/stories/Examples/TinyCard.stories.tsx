import type { Meta, StoryObj } from "@storybook/react";
import { TinyCardExample} from "./TinyCard.example";

const meta = {
  title: "Examples/Tiny Card",
  component: TinyCardExample,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TinyCardExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentText: 'Hola',
    headerTitle: 'Hola',
    href: '/example',
    imgURL: 'https://www.pacifico.com.pe/documents/28730/90575262/vida+devolucio%E2%95%A0%C3%BCn.svg/ed44a14a-71f7-47cc-b24c-6d80b9720ed5?t=1689956266492',
    linkText: 'Hola'
  },
};
