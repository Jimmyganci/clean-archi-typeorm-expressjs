import { Router } from "express";
import { ElasticsearchController } from "@controllers/elasticsearch.controller";
import { ElasticsearchLibrary } from "infrastructure/librairies/ElasticsearchLibrary";
import elasticClient from "config/elasticsearch.config";
import { ElasticsearchServices } from "@services/ElasticsearchServices";

const elasticsearchRoute = Router();

const elasticsearchLibrairy = new ElasticsearchLibrary(elasticClient);

const elasticsearchServices = new ElasticsearchServices(elasticsearchLibrairy);

const elasticsearchController = new ElasticsearchController(elasticsearchServices);

// users
elasticsearchRoute.post("/events", elasticsearchController.getAllEvents);
elasticsearchRoute.post("/activities", elasticsearchController.getAllActivities);
elasticsearchRoute.post("/pages", elasticsearchController.getAllPages);
elasticsearchRoute.post("/users", elasticsearchController.getAllUsers);


export { elasticsearchRoute };
