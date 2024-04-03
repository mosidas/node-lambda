import { APIGatewayProxyEvent } from "aws-lambda";

module.exports.hello = (event: APIGatewayProxyEvent): Response => {
  const responce: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  return responce;
};

type Response = {
  statusCode: number;
  body: string;
};
