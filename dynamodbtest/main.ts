import {
  DynamoDBClient,
  CreateTableCommand,
  CreateTableCommandInput,
} from "@aws-sdk/client-dynamodb";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "testadmin",
  database: "test",
  connectionLimit: 3, // 接続を張り続けるコネクション数を指定
  namedPlaceholders: true, // 設定必須
});

const query = async (sql: string, params: any) => {
  const [rows] = await pool.query(sql, params);
  return rows;
};

const client = new DynamoDBClient({
  endpoint: "http://localhost:8000",
  region: "local", // ローカルでの実行のため
  credentials: {
    accessKeyId: "fakeMyKeyId", // ダミーの認証情報
    secretAccessKey: "fakeSecretAccessKey",
  },
});

const main = async () => {
  // mysql
  const rows = await query("SELECT * FROM example_table WHERE id = :id", {
    id: 1,
  });
  console.log(rows);
  pool.end();
  // dynamodb create table
  const params: CreateTableCommandInput = {
    TableName: "example_table",
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "N",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };

  try {
    const data = await client.send(new CreateTableCommand(params));
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  // dynamodb select

  // dynamodb insert
  // dynamodb update
  // dynamodb delete
};

main();
