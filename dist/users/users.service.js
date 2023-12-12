"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_service_1 = require("../jwt/jwt.service");
const podcast_entity_1 = require("../podcast/entities/podcast.entity");
const episode_entity_1 = require("../podcast/entities/episode.entity");
let UsersService = class UsersService {
    constructor(users, podcasts, episodes, jwtService) {
        this.users = users;
        this.podcasts = podcasts;
        this.episodes = episodes;
        this.jwtService = jwtService;
        this.InternalServerErrorOutput = {
            ok: false,
            error: "Internal server error occurred."
        };
    }
    async createAccount({ email, password, role }) {
        try {
            const exists = await this.users.findOne({ email });
            if (exists) {
                return { ok: false, error: `There is a user with that email already` };
            }
            const user = this.users.create({
                email,
                password,
                role
            });
            await this.users.save(user);
            return {
                ok: true,
                error: null
            };
        }
        catch (_a) {
            return {
                ok: false,
                error: "Could not create account"
            };
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.users.findOne({ email }, { select: ["id", "password"] });
            if (!user) {
                return { ok: false, error: "User not found" };
            }
            const passwordCorrect = await user.checkPassword(password);
            if (!passwordCorrect) {
                return {
                    ok: false,
                    error: "Wrong password"
                };
            }
            const token = this.jwtService.sign(user.id);
            return {
                ok: true,
                token
            };
        }
        catch (error) {
            return {
                ok: false,
                error
            };
        }
    }
    async findById(id) {
        try {
            const user = await this.users.findOneOrFail({ id });
            return {
                ok: true,
                user
            };
        }
        catch (error) {
            return {
                ok: false,
                error: "User Not Found"
            };
        }
    }
    async editProfile(userId, { email, password }) {
        try {
            const user = await this.users.findOneOrFail(userId);
            if (email)
                user.email = email;
            if (password)
                user.password = password;
            await this.users.save(user);
            return {
                ok: true
            };
        }
        catch (error) {
            return {
                ok: false,
                error: "Could not update profile"
            };
        }
    }
    async toggleSubscribe(user, { podcastId }) {
        try {
            const podcast = await this.podcasts.findOne({ id: podcastId });
            if (!podcast) {
                return { ok: false, error: "Podcast not found" };
            }
            if (user.subsriptions.some((sub) => sub.id === podcast.id)) {
                user.subsriptions = user.subsriptions.filter((sub) => sub.id !== podcast.id);
            }
            else {
                console.log("foo");
                user.subsriptions = [...user.subsriptions, podcast];
            }
            await this.users.save(user);
            return { ok: true };
        }
        catch (_a) {
            return this.InternalServerErrorOutput;
        }
    }
    async markEpisodeAsPlayed(user, { id: episodeId }) {
        try {
            const episode = await this.episodes.findOne({ id: episodeId });
            if (!episode) {
                return { ok: false, error: "Episode not found" };
            }
            user.playedEpisodes = [...user.playedEpisodes, episode];
            await this.users.save(user);
            return { ok: true };
        }
        catch (_a) {
            return this.InternalServerErrorOutput;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(podcast_entity_1.Podcast)),
    __param(2, (0, typeorm_1.InjectRepository)(episode_entity_1.Episode)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_service_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map