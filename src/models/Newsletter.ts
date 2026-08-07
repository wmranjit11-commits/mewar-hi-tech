import mongoose, { Schema, Document, Model } from "mongoose";

export interface INewsletter extends Document {
  email: string;
  createdAt: Date;
}

const NewsletterSchema: Schema<INewsletter> = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", NewsletterSchema);

export default Newsletter;
