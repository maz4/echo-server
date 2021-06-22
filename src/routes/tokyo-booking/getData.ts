import { Request, Response } from 'express';
import propertiesData from '../../../data/propertiesData';

export function getData(req: Request, res: Response): void {
    res.send(propertiesData);
}
