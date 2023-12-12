import { Review } from "../entities/review.entity";
import { CoreOutput } from "./output.dto";
declare const CreateReviewInput_base: import("@nestjs/common").Type<Pick<Review, "text" | "title">>;
export declare class CreateReviewInput extends CreateReviewInput_base {
    podcastId: number;
}
export declare class CreateReviewOutput extends CoreOutput {
    id?: number;
}
export {};
