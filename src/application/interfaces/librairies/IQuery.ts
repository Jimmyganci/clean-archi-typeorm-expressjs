import { float } from "@elastic/elasticsearch/lib/api/types";

export interface IQuery {
    localisation: {
      address: string;
      id: string;
      lat: float;
      lng: float;
      locationTypes: string[];
      location_name: string;
    };
    radius: number,
    date: string,
    time: string,
    dateEnd: string,
    timeEnd: string,
    activitiesType: string[],
    experiences: string[],
    ageRange: [number, number],
    gender: string,
    handicap: string,
    languages: string[],
    contentsType: string[],
    weekdays: string[],
}