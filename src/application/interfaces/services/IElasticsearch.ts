import { SearchResponse, SearchResponseBody } from "@elastic/elasticsearch/lib/api/types";
import { IElasticsearchEvent } from "domain/indices/IElasticsearchEvent";
import { IElasticsearchPage } from "domain/indices/IElasticsearchPage";
import { IElasticsearchUser } from "domain/indices/IElasticsearchUser";
import { IQuery } from "../librairies/IQuery";

export interface IElasticsearchServices {
    GetAllEvents(query: IQuery): Promise<SearchResponseBody<IElasticsearchEvent[]>>
    GetAllActivities(query: IQuery): Promise<SearchResponseBody<IElasticsearchEvent[]>>
    GetAllPages(query: IQuery): Promise<SearchResponseBody<IElasticsearchPage[]>>
    GetAllUsers(query: IQuery): Promise<SearchResponseBody<IElasticsearchUser[]>>
}
