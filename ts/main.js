var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __classPrivateFieldGet =
    (this && this.__classPrivateFieldGet) ||
    function (receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
            );
        return kind === "m"
            ? f
            : kind === "a"
            ? f.call(receiver)
            : f
            ? f.value
            : state.get(receiver);
    };
var FifteenthTitle = /** @class */ (function () {
    function FifteenthTitle() {}
    FifteenthTitle.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonData, title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        return [
                            4 /*yield*/,
                            __classPrivateFieldGet(
                                FifteenthTitle,
                                _a,
                                "m",
                                _FifteenthTitle_get
                            ).call(FifteenthTitle),
                        ];
                    case 1:
                        jsonData = _b.sent();
                        title = __classPrivateFieldGet(
                            FifteenthTitle,
                            _a,
                            "m",
                            _FifteenthTitle_getTitleFromJson
                        ).call(FifteenthTitle, jsonData);
                        title
                            ? console.log(title)
                            : console.log(
                                  "Post with id ".concat(
                                      __classPrivateFieldGet(
                                          FifteenthTitle,
                                          _a,
                                          "f",
                                          _FifteenthTitle_ID
                                      ),
                                      " not found."
                                  )
                              );
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a,
        _FifteenthTitle_URL,
        _FifteenthTitle_ID,
        _FifteenthTitle_get,
        _FifteenthTitle_getTitleFromJson;
    (_a = FifteenthTitle),
        (_FifteenthTitle_get = function _FifteenthTitle_get() {
            return fetch(__classPrivateFieldGet(this, _a, "f", _FifteenthTitle_URL)).then(function (
                response
            ) {
                return response.json();
            });
        }),
        (_FifteenthTitle_getTitleFromJson = function _FifteenthTitle_getTitleFromJson(data) {
            var _this = this;
            console.log(data);
            var post = data.find(function (post) {
                return post.id === __classPrivateFieldGet(_this, _a, "f", _FifteenthTitle_ID);
            });
            var title = post === null || post === void 0 ? void 0 : post.title;
            return title;
        });
    _FifteenthTitle_URL = { value: "https://jsonplaceholder.typicode.com/posts" };
    _FifteenthTitle_ID = { value: 15 };
    return FifteenthTitle;
})();
var titleOfTheFifteenthPost = new FifteenthTitle();
titleOfTheFifteenthPost.run();
