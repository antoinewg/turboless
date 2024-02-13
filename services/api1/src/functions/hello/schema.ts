export const bodySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
  additionalProperties: false,
} as const;

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
