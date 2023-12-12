import { CoreEntity } from "./core.entity";
import { Podcast } from "../../podcast/entities/podcast.entity";
import { Episode } from "../../podcast/entities/episode.entity";
import { Review } from "../../podcast/entities/review.entity";
export declare enum UserRole {
    Host = "Host",
    Listener = "Listener"
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
    podcasts: Podcast[];
    reviews: Review[];
    playedEpisodes: Episode[];
    subsriptions: Podcast[];
    hashPassword(): Promise<void>;
    checkPassword(aPassword: string): Promise<boolean>;
}
