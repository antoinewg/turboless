import type { APIGatewayProxyResult } from "aws-lambda";
import type { ValidatedAPIGatewayProxyEvent } from "helpers";
import { middyfy, formatJSONResponse } from "helpers";

import schema from "./schema";

const hello = async (
  event: ValidatedAPIGatewayProxyEvent<typeof schema>
): Promise<APIGatewayProxyResult> => {
  await new Promise((res) => setTimeout(res, 500));

  return formatJSONResponse({
    message: `Hello ${event.body.name} !`,
  });
};

export const main = middyfy(hello);
