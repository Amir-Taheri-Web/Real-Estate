import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    realEstate: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"],
      required: true,
    },

    constructionDate: {
      type: Date,
      required: true,
    },

    amenities: [String],

    rules: [String],

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
