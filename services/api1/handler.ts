import { APIGatewayProxyEvent } from "aws-lambda";

type LambdaResponse = {
  headers: HeaderOption;
  statusCode: number;
  body: string;
};

interface HeaderOption {
  "Access-Control-Allow-Origin": string;
}

export const main = async (
  event: APIGatewayProxyEvent
): Promise<LambdaResponse> => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify("Lambda is alive!"),
  };
};
