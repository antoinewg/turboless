import type { AWS } from "@serverless/typescript";

import schema from "./hello/schema";

export const functions: AWS["functions"] = {
  hello: {
    handler: "src/functions/hello/handler.main",
    description: "Lambda function to say hello",
    memorySize: 256,
    events: [
      {
        http: {
          method: "post",
          path: "hello",
          cors: true,
          request: {
            schemas: {
              "application/json": schema,
            },
          },
        },
      },
    ],
  },
};
