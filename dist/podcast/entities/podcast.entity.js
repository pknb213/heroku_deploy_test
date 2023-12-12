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
exports.Podcast = void 0;
const episode_entity_1 = require("./episode.entity");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const core_entity_1 = require("./core.entity");
const review_entity_1 = require("./review.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Podcast = class Podcast extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Podcast.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Podcast.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, graphql_1.Field)((type) => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], Podcast.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.podcasts, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", user_entity_1.User)
], Podcast.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.RelationId)((podcast) => podcast.creator),
    __metadata("design:type", Number)
], Podcast.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => episode_entity_1.Episode, (episode) => episode.podcast),
    (0, graphql_1.Field)((type) => [episode_entity_1.Episode]),
    __metadata("design:type", Array)
], Podcast.prototype, "episodes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.podcast),
    (0, graphql_1.Field)((type) => [review_entity_1.Review]),
    __metadata("design:type", Array)
], Podcast.prototype, "reviews", void 0);
Podcast = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Podcast);
exports.Podcast = Podcast;
//# sourceMappingURL=podcast.entity.js.map