
import { IElasticsearchLibrary } from "application/interfaces/librairies/IElasticsearchLibrairy";
import { Client } from "@elastic/elasticsearch";
import { IElasticsearchEvent } from "domain/indices/IElasticsearchEvent";
import { SearchResponseBody } from "@elastic/elasticsearch/lib/api/types";
import { IElasticsearchPage } from "domain/indices/IElasticsearchPage";
import { IElasticsearchUser } from "domain/indices/IElasticsearchUser";
import { IQuery } from "application/interfaces/librairies/IQuery";
import { IDocument } from "application/interfaces/librairies/IDocument";

export class ElasticsearchLibrary
  implements IElasticsearchLibrary
{
    constructor(protected client: Client) {}

  async GetAllActivities(query: IQuery): Promise<SearchResponseBody<IElasticsearchEvent[]>> {
    
    return await this.client.search({
        index: 'bionbe-events', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            bool: {
              must_not: {
                term: {
                  "is_repeat.keyword": "-1"
                }
              }
            }
          }
        }
      })
  }
  async GetAllEvents(query: IQuery): Promise<SearchResponseBody<IElasticsearchEvent[]>> {
    console.log(query);
    
    return await this.client.search({
        index: 'bionbe-events', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            bool: {
              must: {
                term: {
                  "is_repeat.keyword": "-1"
                }
              }
            }
          }
        }
      })
  }

  async GetAllPages(query: IQuery): Promise<SearchResponseBody<IElasticsearchPage[]>> {
    console.log(query);
    
    return await this.client.search({
        index: 'bionbe-pages', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }

  async GetAllUsers(query: IQuery): Promise<SearchResponseBody<IElasticsearchUser[]>> {
    console.log(query);
    
    return await this.client.search({
        index: 'bionbe-users', // Remplacez par le nom de votre index
        body: {
          size: 50,
          query: {
            match_all: {}
          }
        }
      })
  }

  
}
