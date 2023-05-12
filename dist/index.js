"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./common/logger"));
var core = __importStar(require("@serverless-devs/core"));
var lodash = core.lodash;
var HELP = __importStar(require("./lib/help"));
var client_1 = __importDefault(require("./lib/client"));
var inputHandler = __importStar(require("./lib/input-handler"));
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
        this.endpoint = "http://localhost:8000";
    }
    /**
     * 列出应用列表
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.list = function (inputs) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var args, application, isHelp, credentials, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.debug("input: ".concat(JSON.stringify(inputs)));
                        args = inputs.args, application = inputs.props.application;
                        return [4 /*yield*/, inputHandler.handleInputs(args, application)];
                    case 1:
                        isHelp = (_b.sent()).isHelp;
                        if (isHelp) {
                            core.help(HELP.LIST);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, core.getCredential((_a = inputs.project) === null || _a === void 0 ? void 0 : _a.access)];
                    case 2:
                        credentials = _b.sent();
                        return [4 /*yield*/, client_1.default.setSaeClient(this.endpoint, credentials)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, client_1.default.saeClient.listApplications()];
                    case 4:
                        data = _b.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 版本更新
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.upgrade = function (inputs) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var args, application, _b, isHelp, appId, image, credentials, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logger_1.default.debug("input: ".concat(JSON.stringify(inputs)));
                        args = inputs.args, application = inputs.props.application;
                        return [4 /*yield*/, inputHandler.handleInputs(args, application)];
                    case 1:
                        _b = _c.sent(), isHelp = _b.isHelp, appId = _b.appId, image = _b.image;
                        if (isHelp) {
                            core.help(HELP.LIST);
                            return [2 /*return*/];
                        }
                        if (lodash.isNil(appId)) {
                            throw new core.CatchableError('参数 appId 不能为空');
                        }
                        if (lodash.isEmpty(image)) {
                            throw new core.CatchableError('参数 image 不能为空');
                        }
                        return [4 /*yield*/, core.getCredential((_a = inputs.project) === null || _a === void 0 ? void 0 : _a.access)];
                    case 2:
                        credentials = _c.sent();
                        return [4 /*yield*/, client_1.default.setSaeClient(this.endpoint, credentials)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, client_1.default.saeClient.upgradeApplication(appId, image)];
                    case 4:
                        data = _c.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 扩容缩容
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.rescale = function (inputs) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var args, application, _b, isHelp, appId, replica, credentials, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logger_1.default.debug("input: ".concat(JSON.stringify(inputs)));
                        args = inputs.args, application = inputs.props.application;
                        return [4 /*yield*/, inputHandler.handleInputs(args, application)];
                    case 1:
                        _b = _c.sent(), isHelp = _b.isHelp, appId = _b.appId, replica = _b.replica;
                        if (isHelp) {
                            core.help(HELP.LIST);
                            return [2 /*return*/];
                        }
                        if (lodash.isNil(appId)) {
                            throw new core.CatchableError('参数 appId 不能为空');
                        }
                        if (lodash.isNil(replica)) {
                            throw new core.CatchableError('参数 replica 不能为空');
                        }
                        if (!lodash.isInteger(replica)) {
                            throw new core.CatchableError('参数 replica 需要为自然数');
                        }
                        return [4 /*yield*/, core.getCredential((_a = inputs.project) === null || _a === void 0 ? void 0 : _a.access)];
                    case 2:
                        credentials = _c.sent();
                        return [4 /*yield*/, client_1.default.setSaeClient(this.endpoint, credentials)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, client_1.default.saeClient.rescaleApplication(appId, replica)];
                    case 4:
                        data = _c.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFxQztBQUVyQywwREFBOEM7QUFDdEMsSUFBQSxNQUFNLEdBQUssSUFBSSxPQUFULENBQVU7QUFDeEIsK0NBQW1DO0FBQ25DLHdEQUFrQztBQUNsQyxnRUFBb0Q7QUFFcEQ7SUFBQTtRQUNFLGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQThFckMsQ0FBQztJQTdFQzs7OztPQUlHO0lBQ1UsNEJBQUksR0FBakIsVUFBa0IsTUFBa0I7Ozs7Ozs7d0JBQ2xDLGdCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQyxDQUFDO3dCQUV6QyxJQUFJLEdBQTZCLE1BQU0sS0FBbkMsRUFBVyxXQUFXLEdBQU8sTUFBTSxrQkFBYixDQUFjO3dCQUM3QixxQkFBTSxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBQTs7d0JBQTdELE1BQU0sR0FBSyxDQUFBLFNBQWtELENBQUEsT0FBdkQ7d0JBQ2QsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JCLHNCQUFPO3lCQUNSO3dCQUVtQixxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQUEsTUFBTSxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUE5RCxXQUFXLEdBQUcsU0FBZ0Q7d0JBQ3BFLHFCQUFNLGdCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUE7O3dCQUFyRCxTQUFxRCxDQUFDO3dCQUMzQyxxQkFBTSxnQkFBTSxDQUFD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