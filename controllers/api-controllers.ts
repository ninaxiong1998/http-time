// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
// import * as moment from 'moment-timezone';
import moment from 'moment-timezone';

export let timezone: string = 'Etc/UTC';
let allZones: String[] = moment.tz.names();
// moment.tz.setDefault('Etc/UTC');

export class ApiControllers {
  getHomePage(request: Request, response: Response, next: NextFunction) {
    response.type('text/plain');
    response.send('Homepage');
  }

  getTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = <string>request.query.timezone; // ?timezone=時區
    if (timezoneNow === undefined) {
      response.send('Zone: ' + timezone + ', Time: ' + moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'));
    } else if (allZones.includes(timezoneNow)){
      response.send('Zone: ' + timezoneNow + ', Time: ' + moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
    } else {
      response.send('Unvalid Input! Zone: ' + timezone + ', Time: ' + moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'));
    }
  }

  postTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = <string>request.body?.timezone;
    if (timezoneNow === undefined) {
      response.send('Zone: ' + timezone + ', Time: ' + moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'));
    } else if (allZones.includes(timezoneNow)){
      response.send('Zone: ' + timezoneNow + ', Time: ' + moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
    } else {
      response.send('Unvalid Input! Zone: ' + timezone + ', Time: ' + moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'));
    }
  }

  putTimezonePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNew: string | undefined = <string>request.body?.timezone;
    if (timezoneNew === undefined || !allZones.includes(timezoneNew)){
      timezone = 'Etc/UTC';
      response.send('Unvalid zone! Reset as ' + timezone);
    } else {
      timezone = timezoneNew;
      response.send('Reset as ' + timezone);
    }
  }
  deleteTimezonePage(request: Request, response: Response, next: NextFunction) {
    timezone = 'Etc/UTC';
    response.send('Reset as ' + timezone);
  }

}