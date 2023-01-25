import type { AWS } from "@serverless/typescript";

import schema from "./ciao/schema";

export const functions: AWS["functions"] = {
  ciao: {
    handler: "src/functions/ciao/handler.main",
    description: "Lambda function to say ciao",
    memorySize: 256,
    events: [
      {
        http: {
          method: "post",
          path: "ciao",
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
