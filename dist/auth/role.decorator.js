"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const user_entity_1 = require("../users/entities/user.entity");
const common_1 = require("@nestjs/common");
const Role = (roles) => (0, common_1.SetMetadata)("roles", roles);
exports.Role = Role;
//# sourceMappingURL=role.decorator.js.map