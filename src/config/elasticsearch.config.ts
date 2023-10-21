import { ES_CONFIG } from "infrastructure/elasticsearch.config";

import {Client} from '@elastic/elasticsearch'
const elasticClient = new Client(ES_CONFIG.elasticsearch);

export default elasticClient