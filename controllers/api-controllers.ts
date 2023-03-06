// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
// import * as moment from 'moment-timezone';
import moment from 'moment-timezone';

export let timezone: string = 'Etc/UTC';
// moment.tz.setDefault('Etc/UTC');

export class ApiControllers {
  getHomePage(request: Request, response: Response, next: NextFunction) {
    response.type('text/plain');
    response.send('Homepage');
  }

  getTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = <string>request.query.timezone; // ?timezone=時區
    if (timezoneNow == undefined) {
      timezoneNow = timezone;
    }
    response.send(moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
  }

  postTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = <string>request.body.timezone;
    if (timezoneNow == undefined) {
      timezoneNow = timezone;
    }
    response.send(moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss'));
  }

  putTimezonePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNew: string | undefined = <string>request.body?.timezone;
    console.log(request.body)
    response.send(timezoneNew);
    if (timezoneNew == undefined) {
      timezoneNew = 'Etc/UTC';
    }
    timezone = timezoneNew;
    // response.send(timezone);
  }

  deleteTimezonePage(request: Request, response: Response, next: NextFunction) {
    timezone = 'Etc/UTC';
    response.send(timezone);
  }

}