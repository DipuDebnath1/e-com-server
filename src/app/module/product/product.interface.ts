export type PVariants = {
  type: string;
  value: string;
};
export type PInventory = {
  quantity: number;
  inStock: boolean;
};
export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Array<PVariants>;
  inventory: PInventory;
};
