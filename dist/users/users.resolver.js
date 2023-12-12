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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./entities/user.entity");
const users_service_1 = require("./users.service");
const create_account_dto_1 = require("./dtos/create-account.dto");
const login_dto_1 = require("./dtos/login.dto");
const auth_user_decorator_1 = require("../auth/auth-user.decorator");
const user_profile_dto_1 = require("./dtos/user-profile.dto");
const edit_profile_dto_1 = require("./dtos/edit-profile.dto");
const role_decorator_1 = require("../auth/role.decorator");
const subscribe_dto_1 = require("./dtos/subscribe.dto");
const podcast_entity_1 = require("../podcast/entities/podcast.entity");
const mark_episode_played_dto_1 = require("./dtos/mark-episode-played.dto");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createAccount(createAccountInput) {
        return this.usersService.createAccount(createAccountInput);
    }
    login(loginInpt) {
        return this.usersService.login(loginInpt);
    }
    me(authUser) {
        return authUser;
    }
    seeProfile(userProfileInput) {
        return this.usersService.findById(userProfileInput.userId);
    }
    editProfile(authUser, editProfileInput) {
        return this.usersService.editProfile(authUser.id, editProfileInput);
    }
    toggleSubscribe(user, toggleSubscribeInput) {
        return this.usersService.toggleSubscribe(user, toggleSubscribeInput);
    }
    subscriptions(user) {
        return user.subsriptions;
    }
    markEpisodeAsPlayed(user, markEpisodeAsPlayedInput) {
        return this.usersService.markEpisodeAsPlayed(user, markEpisodeAsPlayedInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => create_account_dto_1.CreateAccountOutput),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => login_dto_1.LoginOutput),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
__decorate([
    (0, role_decorator_1.Role)(["Any"]),
    (0, graphql_1.Query)((returns) => user_entity_1.User),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", user_entity_1.User)
], UsersResolver.prototype, "me", null);
__decorate([
    (0, role_decorator_1.Role)(["Any"]),
    (0, graphql_1.Query)((returns) => user_profile_dto_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_profile_dto_1.UserProfileInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "seeProfile", null);
__decorate([
    (0, role_decorator_1.Role)(["Any"]),
    (0, graphql_1.Mutation)((returns) => edit_profile_dto_1.EditProfileOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        edit_profile_dto_1.EditProfileInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editProfile", null);
__decorate([
    (0, role_decorator_1.Role)(["Listener"]),
    (0, graphql_1.Mutation)(() => subscribe_dto_1.ToggleSubscribeOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        subscribe_dto_1.ToggleSubscribeInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "toggleSubscribe", null);
__decorate([
    (0, role_decorator_1.Role)(["Listener"]),
    (0, graphql_1.Query)(() => [podcast_entity_1.Podcast]),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Array)
], UsersResolver.prototype, "subscriptions", null);
__decorate([
    (0, role_decorator_1.Role)(["Listener"]),
    (0, graphql_1.Mutation)(() => mark_episode_played_dto_1.MarkEpisodeAsPlayedOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        mark_episode_played_dto_1.MarkEpisodeAsPlayedInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "markEpisodeAsPlayed", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map