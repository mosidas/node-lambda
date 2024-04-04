import { APIGatewayProxyEvent, Handler } from "aws-lambda";

const hello: Handler<APIGatewayProxyEvent> = async (event): Promise<Response> => {
  const response: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  return Promise.resolve(response);
};
module.exports = {
  hello,
};

type Response = {
  statusCode: number;
  body: string;
};
