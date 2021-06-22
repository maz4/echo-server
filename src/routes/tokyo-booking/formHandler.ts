import { Request, Response } from 'express';

export function formHandler(req: Request, res: Response): void {
    const { body } = req;
    const transformedData = Object.entries(body);

    if (transformedData.length === 0) {
        res.send(body);
        return;
    }

    const dataObject: Record<string, unknown> = {};

    transformedData.forEach((elem: [string, unknown]): void => {
        dataObject[elem[0]] = elem[1];
    });

    res.send(dataObject);
}
