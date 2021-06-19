import { Request, Response }  from 'express'
import data from '../data/propertyData';

export function getData(req: Request, res: Response):void {
  res.send(data);
}