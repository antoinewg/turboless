import type { CustomHandler } from "helpers";
import { middyfy, formatJSONResponse } from "helpers";

import { bodySchema, schema } from "./schema";

const hello: CustomHandler<typeof bodySchema> = async (event) => {
  await new Promise((res) => setTimeout(res, 500));

  return formatJSONResponse({
    message: `Hello ${event.body.name} !`,
  });
};

export const main = middyfy(hello, schema);
