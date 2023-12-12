import { PodcastsService } from "./podcasts.service";
import { CreatePodcastInput, CreatePodcastOutput } from "./dtos/create-podcast.dto";
import { CoreOutput } from "./dtos/output.dto";
import { PodcastSearchInput, PodcastOutput, EpisodesOutput, EpisodesSearchInput, GetAllPodcastsOutput } from "./dtos/podcast.dto";
import { UpdatePodcastInput } from "./dtos/update-podcast.dto";
import { CreateEpisodeInput, CreateEpisodeOutput } from "./dtos/create-episode.dto";
import { UpdateEpisodeInput } from "./dtos/update-episode.dto";
import { SearchPodcastsInput, SearchPodcastsOutput } from "./dtos/search-podcasts.dto";
import { CreateReviewOutput, CreateReviewInput } from "./dtos/create-review.dto";
import { User } from "src/users/entities/user.entity";
export declare class PodcastsResolver {
    private readonly podcastsService;
    constructor(podcastsService: PodcastsService);
    getAllPodcasts(): Promise<GetAllPodcastsOutput>;
    createPodcast(user: User, createPodcastInput: CreatePodcastInput): Promise<CreatePodcastOutput>;
    getPodcast(podcastSearchInput: PodcastSearchInput): Promise<PodcastOutput>;
    deletePodcast(user: User, podcastSearchInput: PodcastSearchInput): Promise<CoreOutput>;
    updatePodcast(user: User, updatePodcastInput: UpdatePodcastInput): Promise<CoreOutput>;
    searchPodcasts(searchPodcastsInput: SearchPodcastsInput): Promise<SearchPodcastsOutput>;
}
export declare class EpisodeResolver {
    private readonly podcastService;
    constructor(podcastService: PodcastsService);
    getEpisodes(podcastSearchInput: PodcastSearchInput): Promise<EpisodesOutput>;
    createEpisode(user: User, createEpisodeInput: CreateEpisodeInput): Promise<CreateEpisodeOutput>;
    updateEpisode(user: User, updateEpisodeInput: UpdateEpisodeInput): Promise<CoreOutput>;
    deleteEpisode(user: User, episodesSearchInput: EpisodesSearchInput): Promise<CoreOutput>;
}
export declare class ReviewResolver {
    private readonly podcastService;
    constructor(podcastService: PodcastsService);
    createReview(creator: User, createReviewInput: CreateReviewInput): Promise<CreateReviewOutput>;
}
