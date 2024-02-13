import type { CustomHandler } from "helpers";
import { middyfy, formatJSONResponse } from "helpers";

import { bodySchema, schema } from "./schema";
import capitalize from "lodash.capitalize";

const ciao: CustomHandler<typeof bodySchema, null, null> = async (event) => {
  await new Promise((res) => setTimeout(res, 500));

  return formatJSONResponse({
    message: `Ciao ${capitalize(event.body.name)} !`,
  });
};

export const main = middyfy(ciao, schema);
