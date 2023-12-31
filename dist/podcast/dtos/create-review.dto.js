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
exports.CreateReviewOutput = exports.CreateReviewInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const review_entity_1 = require("../entities/review.entity");
const output_dto_1 = require("./output.dto");
const class_validator_1 = require("class-validator");
let CreateReviewInput = class CreateReviewInput extends (0, graphql_1.PickType)(review_entity_1.Review, ["title", "text"], graphql_1.InputType) {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReviewInput.prototype, "podcastId", void 0);
CreateReviewInput = __decorate([
    (0, graphql_1.InputType)()
], CreateReviewInput);
exports.CreateReviewInput = CreateReviewInput;
let CreateReviewOutput = class CreateReviewOutput extends output_dto_1.CoreOutput {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], CreateReviewOutput.prototype, "id", void 0);
CreateReviewOutput = __decorate([
    (0, graphql_1.ObjectType)()
], CreateReviewOutput);
exports.CreateReviewOutput = CreateReviewOutput;
//# sourceMappingURL=create-review.dto.js.map