import { User } from "./entities/user.entity";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";
import { ToggleSubscribeInput, ToggleSubscribeOutput } from "./dtos/subscribe.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
import { Repository } from "typeorm";
import { JwtService } from "../jwt/jwt.service";
import { UserProfileOutput } from "./dtos/user-profile.dto";
import { EditProfileInput, EditProfileOutput } from "./dtos/edit-profile.dto";
import { Podcast } from "../podcast/entities/podcast.entity";
import { MarkEpisodeAsPlayedInput, MarkEpisodeAsPlayedOutput } from "./dtos/mark-episode-played.dto";
import { Episode } from "src/podcast/entities/episode.entity";
export declare class UsersService {
    private readonly users;
    private readonly podcasts;
    private readonly episodes;
    private readonly jwtService;
    constructor(users: Repository<User>, podcasts: Repository<Podcast>, episodes: Repository<Episode>, jwtService: JwtService);
    private readonly InternalServerErrorOutput;
    createAccount({ email, password, role }: CreateAccountInput): Promise<CreateAccountOutput>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
    findById(id: number): Promise<UserProfileOutput>;
    editProfile(userId: number, { email, password }: EditProfileInput): Promise<EditProfileOutput>;
    toggleSubscribe(user: User, { podcastId }: ToggleSubscribeInput): Promise<ToggleSubscribeOutput>;
    markEpisodeAsPlayed(user: User, { id: episodeId }: MarkEpisodeAsPlayedInput): Promise<MarkEpisodeAsPlayedOutput>;
}
