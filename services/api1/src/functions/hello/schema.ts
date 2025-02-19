import bodySchema from "./schema.json";

export const schema = {
  type: "object",
  required: ["body"],
  properties: {
    body: bodySchema,
    // possible to add pathParameters and queryStringParameters validation
    // pathParameters: pathSchema,
    // queryStringParameters: queryStringSchema
  },
};
