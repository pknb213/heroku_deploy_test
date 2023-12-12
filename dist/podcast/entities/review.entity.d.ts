import { CoreEntity } from "./core.entity";
import { Podcast } from "./podcast.entity";
import { User } from "../../users/entities/user.entity";
export declare class Review extends CoreEntity {
    title: string;
    text: string;
    podcast: Podcast;
    creator: User;
}
