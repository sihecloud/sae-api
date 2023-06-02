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
Object.defineProperty(exports, "__esModule", { value: true });
var core = __importStar(require("@serverless-devs/core"));
var lodash = core.lodash;
// import logger from './common/logger';
// @ts-ignore
var ROAClient = core.popCore.ROAClient;
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.setSaeClient = function (cluster, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, saeClient, queries, headers, requestOption, ListApplicationsUri, RescaleApplicationUri, UpgradeApplicationUri;
            return __generator(this, function (_a) {
                endpoint = "https://mono-backend.sihe.cloud";
                if (cluster == "staging") {
                    endpoint = "https://mono-backend.staging.sihe6.com";
                }
                else if (cluster == "qa") {
                    endpoint = "http://mono-backend-0.qa.sihe6.com";
                }
                else if (cluster == "dev" || cluster == "local") {
                    endpoint = "http://localhost:8080";
                }
                else if ((cluster === null || cluster === void 0 ? void 0 : cluster.length) > 0) {
                    endpoint = cluster;
                }
                saeClient = new ROAClient({
                    accessKeyId: credentials === null || credentials === void 0 ? void 0 : credentials.AccessKeyID,
                    accessKeySecret: credentials === null || credentials === void 0 ? void 0 : credentials.AccessKeySecret,
                    endpoint: endpoint,
                    apiVersion: "v1",
                });
                queries = {};
                headers = {
                    "Content-Type": "application/json",
                };
                requestOption = {
                    timeout: 30000,
                };
                ListApplicationsUri = '/api/container/v1/sdev/list';
                RescaleApplicationUri = '/api/container/v1/sdev/replica';
                UpgradeApplicationUri = '/api/container/v1/sdev/image';
                /**
                 * 获取应用列表
                 * @returns 应用列表
                 */
                saeClient.listApplications = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, saeClient.request("GET", ListApplicationsUri, queries, "", headers, requestOption)];
                                case 1:
                                    data = _a.sent();
                                    return [2 /*return*/, data];
                            }
                        });
                    });
                };
                /**
                 * 扩缩容
                 * @param appId 应用ID
                 * @param replicas 目标副本数
                 * @returns 操作结果
                 */
                saeClient.rescaleApplication = function (appId, replicas) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = JSON.stringify({
                                        "app_id": appId,
                                        "replicas": replicas,
                                    });
                                    return [4 /*yield*/, saeClient.request("POST", RescaleApplicationUri, queries, body, headers, requestOption)];
                                case 1:
                                    data = _a.sent();
                                    if (lodash.isEmpty(data))
                                        data = "操作成功";
                                    return [2 /*return*/, data];
                            }
                        });
                    });
                };
                /**
                 * 版本更新
                 * @param appId 应用ID
                 * @param image 镜像Uri
                 * @returns 操作结果
                 */
                saeClient.upgradeApplication = function (appId, image) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = JSON.stringify({
                                        "app_id": appId,
                                        "image_url": image,
                                    });
                                    return [4 /*yield*/, saeClient.request("POST", UpgradeApplicationUri, queries, body, headers, requestOption)];
                                case 1:
                                    data = _a.sent();
                                    if (lodash.isEmpty(data))
                                        data = "操作成功";
                                    return [2 /*return*/, data];
                            }
                        });
                    });
                };
                this.saeClient = saeClient;
                return [2 /*return*/, saeClient];
            });
        });
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUE4QztBQUN0QyxJQUFBLE1BQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtBQUN4Qix3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBRXpDO0lBQUE7SUErRUEsQ0FBQztJQTVFZ0IsbUJBQVksR0FBekIsVUFBMEIsT0FBTyxFQUFFLFdBQVc7Ozs7Z0JBQ3RDLFFBQVEsR0FBRyxpQ0FBaUMsQ0FBQztnQkFDakQsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO29CQUN0QixRQUFRLEdBQUcsd0NBQXdDLENBQUM7aUJBQ3ZEO3FCQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDdkIsUUFBUSxHQUFHLG9DQUFvQyxDQUFDO2lCQUNuRDtxQkFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTtvQkFDL0MsUUFBUSxHQUFHLHVCQUF1QixDQUFDO2lCQUN0QztxQkFBTSxJQUFJLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUU7b0JBQzVCLFFBQVEsR0FBRyxPQUFPLENBQUM7aUJBQ3RCO2dCQUVLLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztvQkFDNUIsV0FBVyxFQUFFLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXO29CQUNyQyxlQUFlLEVBQUUsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGVBQWU7b0JBQzdDLFFBQVEsRUFBRSxRQUFRO29CQUNsQixVQUFVLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUVHLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxHQUFHO29CQUNaLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDLENBQUM7Z0JBQ0ksYUFBYSxHQUFHO29CQUNsQixPQUFPLEVBQUUsS0FBSztpQkFDakIsQ0FBQztnQkFDSSxtQkFBbUIsR0FBSyw2QkFBNkIsQ0FBQztnQkFDdEQscUJBQXFCLEdBQUcsZ0NBQWdDLENBQUM7Z0JBQ3pELHFCQUFxQixHQUFHLDhCQUE4QixDQUFDO2dCQUU3RDs7O21CQUdHO2dCQUNILFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRzs7Ozs7d0NBQ1oscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLEVBQUE7O29DQUEvRixJQUFJLEdBQUcsU0FBd0Y7b0NBQ3JHLHNCQUFPLElBQUksRUFBQzs7OztpQkFDZixDQUFBO2dCQUVEOzs7OzttQkFLRztnQkFDSCxTQUFTLENBQUMsa0JBQWtCLEdBQUcsVUFBZ0IsS0FBYSxFQUFFLFFBQWdCOzs7Ozs7b0NBQ3BFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dDQUN4QixRQUFRLEVBQUUsS0FBSzt3Q0FDZixVQUFVLEVBQUUsUUFBUTtxQ0FDdkIsQ0FBQyxDQUFDO29DQUNRLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxFQUFBOztvQ0FBcEcsSUFBSSxHQUFHLFNBQTZGO29DQUN4RyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dDQUNwQixJQUFJLEdBQUcsTUFBTSxDQUFDO29DQUNsQixzQkFBTyxJQUFJLEVBQUM7Ozs7aUJBQ2YsQ0FBQTtnQkFFRDs7Ozs7bUJBS0c7Z0JBQ0gsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFVBQWdCLEtBQWEsRUFBRSxLQUFhOzs7Ozs7b0NBQ2pFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dDQUN4QixRQUFRLEVBQUUsS0FBSzt3Q0FDZixXQUFXLEVBQUUsS0FBSztxQ0FDckIsQ0FBQyxDQUFDO29DQUNRLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxFQUFBOztvQ0FBcEcsSUFBSSxHQUFHLFNBQTZGO29DQUN4RyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dDQUNwQixJQUFJLEdBQUcsTUFBTSxDQUFDO29DQUNsQixzQkFBTyxJQUFJLEVBQUM7Ozs7aUJBQ2YsQ0FBQTtnQkFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDM0Isc0JBQU8sU0FBUyxFQUFDOzs7S0FDcEI7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQS9FRCxJQStFQyJ9