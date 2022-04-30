import { APIGatewayProxyEvent } from "aws-lambda";

type LambdaResponse = {
  headers: HeaderOption;
  statusCode: number;
  body: string;
};

interface HeaderOption {
  "Access-Control-Allow-Origin": string;
}

export const handler = async (_event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
  await new Promise((res) => setTimeout(res, 500))

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify("Lambda is alive!"),
  };
};
