import { Request, Response } from 'express';

export function formHandler(req: Request, res: Response): void {
    const data = req.body;
    const transformedData = Object.entries(data);

    if (transformedData.length === 0) {
        res.send(data);
        return;
    }

    const dataObject: Record<string, unknown> = {};

    transformedData.forEach((elem: [string, unknown]): void => {
        dataObject[elem[0]] = elem[1];
    });

    res.send(dataObject);
}
