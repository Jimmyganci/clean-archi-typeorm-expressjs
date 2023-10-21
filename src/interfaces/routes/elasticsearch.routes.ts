import { Router } from "express";
import { ElasticsearchController } from "@controllers/elasticsearch.controller";

const elasticsearchRoute = Router();
const elasticsearchController = new ElasticsearchController()

// users
elasticsearchRoute.get("/events", elasticsearchController.getAllEvents);
elasticsearchRoute.get("/activities", elasticsearchController.getAllActivities);
elasticsearchRoute.get("/pages", elasticsearchController.getAllPages);
elasticsearchRoute.get("/users", elasticsearchController.getAllUsers);


export { elasticsearchRoute };
