import mongoose, { Schema, models, model } from "mongoose";

const RegistrationSchema = new Schema(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {          // ✅ NEW FIELD
      type: String,
      required: false,      // make true if mandatory
    },
  },
  { timestamps: true }
);

const Registration =
  models.Registration || model("Registration", RegistrationSchema);

export default Registration;