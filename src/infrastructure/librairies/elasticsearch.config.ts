import { config } from "dotenv";

config({ path: "src/.env", debug: true });

console.log(process.env);


export const ES_CONFIG = {
    elasticsearch: {
        node: process.env.ELASTICSEARCH_HOST, // Elasticsearch endpoint
        auth: {
          username: process.env.ELASTICSEARCH_USER,
          password: process.env.ELASTICSEARCH_PASSWORD
        },
      }
}
