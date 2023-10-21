
import { User } from "@entities/User";
import { IElasticsearchLibrary } from "application/interfaces/librairies/IElasticsearchLibrairy";
import { Client } from "@elastic/elasticsearch";
import { IElasticsearchEvent } from "domain/indices/IElasticsearchEvent";
import { SearchResponse, SearchResponseBody } from "@elastic/elasticsearch/lib/api/types";
import { IElasticsearchPage } from "domain/indices/IElasticsearchPage";
import { IElasticsearchUser } from "domain/indices/IElasticsearchUser";

export class ElasticsearchLibrary
  implements IElasticsearchLibrary
{
    constructor(protected client: Client) {}

  async GetAllActivities(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>> {
    return await this.client.search({
        index: 'bionbe-*', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }
  async GetAllEvents(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>> {
    return await this.client.search({
        index: 'bionbe-*', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }

  async GetAllPages(query: any): Promise<SearchResponseBody<IElasticsearchPage[]>> {
    return await this.client.search({
        index: 'bionbe-*', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }

  async GetAllUsers(query: any): Promise<SearchResponseBody<IElasticsearchUser[]>> {
    return await this.client.search({
        index: 'bionbe-*', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }

  
}
