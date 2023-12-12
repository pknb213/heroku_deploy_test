import { PaginationInput, PaginationOutput } from "./pagination.dto";
import { Podcast } from "../entities/podcast.entity";
export declare class SearchPodcastsInput extends PaginationInput {
    titleQuery: string;
}
export declare class SearchPodcastsOutput extends PaginationOutput {
    podcasts?: Podcast[];
}
