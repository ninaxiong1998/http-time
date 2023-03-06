"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiControllers = exports.timezone = void 0;
// import * as moment from 'moment-timezone';
const moment_timezone_1 = __importDefault(require("moment-timezone"));
exports.timezone = 'Etc/UTC';
// moment.tz.setDefault('Etc/UTC');
class ApiControllers {
    getHomePage(request, response, next) {
        response.type('text/plain');
        response.send('Homepage');
    }
    getTimePage(request, response, next) {
        let timezoneNow = request.query.timezone; // ?timezone=時區
        if (timezoneNow == undefined) {
            timezoneNow = exports.timezone;
        }
        response.send((0, moment_timezone_1.default)().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
    }
    postTimePage(request, response, next) {
        let timezoneNow = request.body.timezone;
        if (timezoneNow == undefined) {
            timezoneNow = exports.timezone;
        }
        response.send((0, moment_timezone_1.default)().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
    }
    putTimezonePage(request, response, next) {
        var _a;
        let timezoneNew = (_a = request.body) === null || _a === void 0 ? void 0 : _a.timezone;
        console.log(request.body);
        response.send(timezoneNew);
        if (timezoneNew == undefined) {
            timezoneNew = 'Etc/UTC';
        }
        exports.timezone = timezoneNew;
        // response.send(timezone);
    }
    deleteTimezonePage(request, response, next) {
        exports.timezone = 'Etc/UTC';
        response.send(exports.timezone);
    }
}
exports.ApiControllers = ApiControllers;
