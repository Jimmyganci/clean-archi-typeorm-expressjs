import { ES_CONFIG } from "infrastructure/librairies/elasticsearch.config";

import {Client} from '@elastic/elasticsearch'
const elasticClient = new Client(ES_CONFIG.elasticsearch);

export default elasticClient