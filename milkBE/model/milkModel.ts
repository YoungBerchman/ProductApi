import { model, Schema } from "mongoose";

export interface iProps {
  title: string;
  price: number;
  category: string;
}

export interface ipropsData extends iProps, Document {}

const milkModel = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<ipropsData>("milk", milkModel);
