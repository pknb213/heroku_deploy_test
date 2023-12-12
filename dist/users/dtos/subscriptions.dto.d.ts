import { CoreOutput } from "./output.dto";
import { Podcast } from "src/podcast/entities/podcast.entity";
export declare class SubscriptionsOutput extends CoreOutput {
    subscriptions?: Podcast[];
}
