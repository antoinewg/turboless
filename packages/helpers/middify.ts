import middy, { MiddyfiedHandler } from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import cors from "@middy/http-cors";
import validator from "@middy/validator";
import { transpileSchema } from "@middy/validator/transpile";
import httpErrorHandler from "@middy/http-error-handler";
import httpEventNormalizer from "@middy/http-event-normalizer";

import type {
  APIGatewayProxyEvent as ProxyEvent,
  APIGatewayProxyResult,
  Context,
  Handler as AWSHandler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

// Taken from https://github.com/middyjs/middy/issues/316#issuecomment-1013351805
// Event is an APIGatewayProxyEvent with a typed body, pathParameters and queryStringParameters which depends on http-json-body-parser & json-schema-to-ts
// queryStringParameters and multiValueQueryStringParameters is non-nullable as we use http-event-normalizer
export interface Event<
  TBody extends Record<string, unknown> | null,
  TPathParameters extends Record<string, unknown> | null,
  TQueryStringParameters extends Record<string, unknown> | null
> extends Omit<
    ProxyEvent,
    "body" | "pathParameters" | "queryStringParameters"
  > {
  body: TBody extends Record<string, unknown> ? FromSchema<TBody> : null;
  pathParameters: TPathParameters extends Record<string, unknown>
    ? FromSchema<TPathParameters>
    : null;
  queryStringParameters: TQueryStringParameters extends Record<string, unknown>
    ? FromSchema<TQueryStringParameters>
    : null;
  multiValueQueryStringParameters: NonNullable<
    ProxyEvent["multiValueQueryStringParameters"]
  >;
}

// We are making use of http-response-serializer
interface Result extends Omit<APIGatewayProxyResult, "body"> {
  body: string | Record<string, unknown>;
}

// Handler type which gives us proper types on our event based on TBody and TPathParameters which are JSON schemas
export type CustomHandler<
  TBody extends Record<string, unknown> | null = null,
  TPathParameters extends Record<string, unknown> | null = null,
  TQueryStringParameters extends Record<string, unknown> | null = null
> = AWSHandler<Event<TBody, TPathParameters, TQueryStringParameters>, Result>;

// TODO: find a way to remove the couple of `any` here. Validation and typing are still working though
export const middyfy = (
  handler: any,
  schema: Record<string, unknown> | null = null
): MiddyfiedHandler<Event<never, never, never>, Result, Error, Context> => {
  const wrapper: any = middy(handler)
    .use(middyJsonBodyParser())
    .use(httpEventNormalizer());

  if (schema) {
    wrapper.use(validator({ eventSchema: transpileSchema(schema) }));
  }

  return wrapper.use(cors()).use(httpErrorHandler({}));
};
