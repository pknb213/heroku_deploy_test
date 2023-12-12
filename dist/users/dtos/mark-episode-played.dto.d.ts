import { CoreOutput } from "./output.dto";
import { Episode } from "src/podcast/entities/episode.entity";
declare const MarkEpisodeAsPlayedInput_base: import("@nestjs/common").Type<Pick<Episode, "id">>;
export declare class MarkEpisodeAsPlayedInput extends MarkEpisodeAsPlayedInput_base {
}
export declare class MarkEpisodeAsPlayedOutput extends CoreOutput {
}
export {};
