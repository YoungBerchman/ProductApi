import { model, Schema } from "mongoose";

export interface iProps {
  title: string;
  price: number;
  category: string;
}

export interface iPropsData extends iProps, Document {}

const chairModel = new Schema(
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
export default model<iPropsData>("chair", chairModel);