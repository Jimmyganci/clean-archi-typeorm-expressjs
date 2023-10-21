import { SearchResponse, SearchResponseBody } from "@elastic/elasticsearch/lib/api/types";
import { IElasticsearchServices } from "@interfaces/services/IElasticsearch";
import { IElasticsearchLibrary } from "application/interfaces/librairies/IElasticsearchLibrairy";
import { IElasticsearchEvent } from "domain/indices/IElasticsearchEvent";
import { IElasticsearchPage } from "domain/indices/IElasticsearchPage";
import { IElasticsearchUser } from "domain/indices/IElasticsearchUser";

export class ElasticsearchServices
  implements IElasticsearchServices
{
 constructor(protected repository: IElasticsearchLibrary) {}

 async GetAllActivities(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>>  {
    const response = await this.repository.GetAllActivities(query)
    return response;
 }
 async GetAllEvents(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>>  {
    const response = await this.repository.GetAllActivities(query)
    return response;
 }
 async GetAllPages(query: any): Promise<SearchResponseBody<IElasticsearchPage[]>>  {
    const response = await this.repository.GetAllActivities(query)
    return response;
 }
 async GetAllUsers(query: any): Promise<SearchResponseBody<IElasticsearchUser[]>>  {
    const response = await this.repository.GetAllActivities(query)
    return response;
 }
  
}
