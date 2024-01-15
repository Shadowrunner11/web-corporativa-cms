import type { Meta, StoryObj } from "@storybook/react";
import { CategoryHero } from "ui-material";

const meta = {
  title: "Molecules/Category Hero",
  component: CategoryHero,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CategoryHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ctaText: "Cotiza aqui",
    subTitleText: "Este <strong>verano</strong> te asistimos <br/> nueva linea",
    title: 'Seguro vehicular <br/> Hasta 15% de descuento',
  },
  decorators:[Story=>(<div style={{width: '90vw'}}>
    <Story />
  </div>)]
};
