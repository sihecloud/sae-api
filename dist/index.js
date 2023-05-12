"use strict";
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
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    /**
     * 列出应用列表
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.list = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.default.debug("input: ".concat(JSON.stringify(inputs.props)));
                logger_1.default.info('list test');
                return [2 /*return*/, { hello: 'world' }];
            });
        });
    };
    /**
     * 版本更新
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.upgrade = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.default.debug("input: ".concat(JSON.stringify(inputs.props)));
                logger_1.default.info('upgrade test');
                return [2 /*return*/, { hello: 'world' }];
            });
        });
    };
    /**
     * 扩容缩容
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.scale = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.default.debug("input: ".concat(JSON.stringify(inputs.props)));
                logger_1.default.info('scale test');
                return [2 /*return*/, { hello: 'world' }];
            });
        });
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFHckM7SUFBQTtJQWlDQSxDQUFDO0lBaENDOzs7O09BSUc7SUFDVSw0QkFBSSxHQUFqQixVQUFrQixNQUFrQjs7O2dCQUNsQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQ3ZELGdCQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixzQkFBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBQzs7O0tBQzNCO0lBRUQ7Ozs7T0FJRztJQUNVLCtCQUFPLEdBQXBCLFVBQXFCLE1BQWtCOzs7Z0JBQ3JDLGdCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQztnQkFDdkQsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLHNCQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFDOzs7S0FDM0I7SUFFRDs7OztPQUlHO0lBQ1UsNkJBQUssR0FBbEIsVUFBbUIsTUFBa0I7OztnQkFDbkMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQyxDQUFDO2dCQUN2RCxnQkFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsc0JBQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUM7OztLQUMzQjtJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQyJ9