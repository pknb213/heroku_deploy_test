"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkEpisodeAsPlayedOutput = exports.MarkEpisodeAsPlayedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("./output.dto");
const episode_entity_1 = require("../../podcast/entities/episode.entity");
let MarkEpisodeAsPlayedInput = class MarkEpisodeAsPlayedInput extends (0, graphql_1.PickType)(episode_entity_1.Episode, ["id"], graphql_1.InputType) {
};
MarkEpisodeAsPlayedInput = __decorate([
    (0, graphql_1.InputType)()
], MarkEpisodeAsPlayedInput);
exports.MarkEpisodeAsPlayedInput = MarkEpisodeAsPlayedInput;
let MarkEpisodeAsPlayedOutput = class MarkEpisodeAsPlayedOutput extends output_dto_1.CoreOutput {
};
MarkEpisodeAsPlayedOutput = __decorate([
    (0, graphql_1.ObjectType)()
], MarkEpisodeAsPlayedOutput);
exports.MarkEpisodeAsPlayedOutput = MarkEpisodeAsPlayedOutput;
//# sourceMappingURL=mark-episode-played.dto.js.map