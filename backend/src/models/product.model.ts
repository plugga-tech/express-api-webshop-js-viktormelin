import { InferSchemaType, Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  lager: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export type Product = InferSchemaType<typeof productSchema>;

const Product = model('Product', productSchema);

export default Product;
