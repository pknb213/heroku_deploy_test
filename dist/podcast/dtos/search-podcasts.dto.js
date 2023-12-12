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
exports.SearchPodcastsOutput = exports.SearchPodcastsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const pagination_dto_1 = require("./pagination.dto");
const class_validator_1 = require("class-validator");
const podcast_entity_1 = require("../entities/podcast.entity");
let SearchPodcastsInput = class SearchPodcastsInput extends pagination_dto_1.PaginationInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchPodcastsInput.prototype, "titleQuery", void 0);
SearchPodcastsInput = __decorate([
    (0, graphql_1.InputType)()
], SearchPodcastsInput);
exports.SearchPodcastsInput = SearchPodcastsInput;
let SearchPodcastsOutput = class SearchPodcastsOutput extends pagination_dto_1.PaginationOutput {
};
__decorate([
    (0, graphql_1.Field)(() => [podcast_entity_1.Podcast], { nullable: true }),
    __metadata("design:type", Array)
], SearchPodcastsOutput.prototype, "podcasts", void 0);
SearchPodcastsOutput = __decorate([
    (0, graphql_1.ObjectType)()
], SearchPodcastsOutput);
exports.SearchPodcastsOutput = SearchPodcastsOutput;
//# sourceMappingURL=search-podcasts.dto.js.map