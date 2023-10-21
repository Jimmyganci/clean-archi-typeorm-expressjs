import { SearchResponseBody } from "@elastic/elasticsearch/lib/api/types";
import { IElasticsearchEvent } from "domain/indices/IElasticsearchEvent";
import { IElasticsearchPage } from "domain/indices/IElasticsearchPage";
import { IElasticsearchUser } from "domain/indices/IElasticsearchUser";

export interface IElasticsearchLibrary {
    GetAllEvents(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>>
    GetAllActivities(query: any): Promise<SearchResponseBody<IElasticsearchEvent[]>>
    GetAllPages(query: any): Promise<SearchResponseBody<IElasticsearchPage[]>>
    GetAllUsers(query: any): Promise<SearchResponseBody<IElasticsearchUser[]>>
}
