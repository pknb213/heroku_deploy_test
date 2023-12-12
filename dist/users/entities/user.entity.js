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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const core_entity_1 = require("./core.entity");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const podcast_entity_1 = require("../../podcast/entities/podcast.entity");
const episode_entity_1 = require("../../podcast/entities/episode.entity");
const review_entity_1 = require("../../podcast/entities/review.entity");
var UserRole;
(function (UserRole) {
    UserRole["Host"] = "Host";
    UserRole["Listener"] = "Listener";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
(0, graphql_1.registerEnumType)(UserRole, { name: "UserRole" });
let User = class User extends core_entity_1.CoreEntity {
    async hashPassword() {
        if (!this.password) {
            return;
        }
        try {
            this.password = await bcrypt.hash(this.password, 10);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async checkPassword(aPassword) {
        try {
            const ok = await bcrypt.compare(aPassword, this.password);
            return ok;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-enum", enum: UserRole }),
    (0, graphql_1.Field)((type) => UserRole),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => podcast_entity_1.Podcast, (podcast) => podcast.creator, { eager: true }),
    (0, graphql_1.Field)((type) => [podcast_entity_1.Podcast]),
    __metadata("design:type", Array)
], User.prototype, "podcasts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.creator, { eager: true }),
    (0, graphql_1.Field)((type) => [review_entity_1.Review]),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => episode_entity_1.Episode, { eager: true }),
    (0, graphql_1.Field)((type) => [episode_entity_1.Episode]),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "playedEpisodes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => podcast_entity_1.Podcast, { eager: true }),
    (0, graphql_1.Field)(() => [podcast_entity_1.Podcast]),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "subsriptions", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, graphql_1.InputType)("UserInputType", { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map