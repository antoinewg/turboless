import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import type { Handler } from "aws-lambda";

export const middyfy = <TEvent, TResult>(handler: Handler<TEvent, TResult>) => {
  return middy<TEvent, TResult>(handler).use(middyJsonBodyParser());
};
