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
exports.handleInputs = void 0;
var core = __importStar(require("@serverless-devs/core"));
var lodash = core.lodash;
function handleInputs(args, props) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var comParse, data, isHelp, cluster, appId, image, replicas;
        return __generator(this, function (_d) {
            comParse = core.commandParse({ args: args });
            data = comParse === null || comParse === void 0 ? void 0 : comParse.data;
            isHelp = false;
            if (!lodash.isEmpty(data)) {
                isHelp = (data === null || data === void 0 ? void 0 : data.h) || (data === null || data === void 0 ? void 0 : data.help);
                cluster = (_a = data['cluster']) === null || _a === void 0 ? void 0 : _a.toString();
                appId = (_b = data['appId']) === null || _b === void 0 ? void 0 : _b.toString(); // 已知问题：给值为负数（如-100）时，得true
                image = (_c = data['image']) === null || _c === void 0 ? void 0 : _c.toString(); // 已知问题：给值为负数（如-100）时，得true
                replicas = data['replicas'];
            }
            if (lodash.isNil(cluster)) { // null or undefined
                cluster = props === null || props === void 0 ? void 0 : props.cluster;
            }
            if (lodash.isNil(appId)) { // null or undefined
                appId = props === null || props === void 0 ? void 0 : props.appId;
            }
            if (lodash.isNil(image)) { // null or undefined
                image = props === null || props === void 0 ? void 0 : props.image;
            }
            if (lodash.isNil(replicas)) { // null or undefined
                replicas = props === null || props === void 0 ? void 0 : props.replicas;
            }
            return [2 /*return*/, { isHelp: isHelp, cluster: cluster, appId: appId, image: image, replicas: replicas }];
        });
    });
}
exports.handleInputs = handleInputs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUE4QztBQUN0QyxJQUFBLE1BQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtBQUV4QixTQUFzQixZQUFZLENBQUMsSUFBWSxFQUFFLEtBQVc7Ozs7O1lBQ2xELFFBQVEsR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxDQUFBO1lBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFJbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sR0FBRyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxDQUFDLE1BQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksQ0FBQSxDQUFDO2dCQUMvQixPQUFPLEdBQUcsTUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLDBDQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxLQUFLLEdBQUcsTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLDBDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsMkJBQTJCO2dCQUM5RCxLQUFLLEdBQUcsTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLDBDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsMkJBQTJCO2dCQUM5RCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO2dCQUM3QyxPQUFPLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sQ0FBQzthQUM1QjtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLG9CQUFvQjtnQkFDM0MsS0FBSyxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLENBQUM7YUFDeEI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxvQkFBb0I7Z0JBQzNDLEtBQUssR0FBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO2dCQUM5QyxRQUFRLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsQ0FBQzthQUM5QjtZQUNELHNCQUFPLEVBQUMsTUFBTSxRQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsRUFBQzs7O0NBQ3BEO0FBM0JELG9DQTJCQyJ9