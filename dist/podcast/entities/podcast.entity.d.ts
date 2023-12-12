import { Episode } from "./episode.entity";
import { CoreEntity } from "./core.entity";
import { Review } from "./review.entity";
import { User } from "../../users/entities/user.entity";
export declare class Podcast extends CoreEntity {
    title: string;
    category: string;
    rating: number;
    creator: User;
    creatorId: number;
    episodes: Episode[];
    reviews: Review[];
}
