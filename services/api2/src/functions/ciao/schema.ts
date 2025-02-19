import bodySchema from "./schema.json";

export const schema = {
  type: "object",
  required: ["body"],
  properties: {
    body: bodySchema,
  },
};
