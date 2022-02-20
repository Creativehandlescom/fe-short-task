import type { NextApiRequest, NextApiResponse } from 'next';

export type Service = {
	readonly id: string;
	readonly name: string;
	readonly capacity: number;
};

export const services: ReadonlyArray<Service> = [
	{
		id: 'a3x',
		name: 'Pair massage',
		capacity: 2,
	},
	{
		id: 'i12',
		name: 'Haircut',
		capacity: 1,
	},
	{
		id: 'mm7',
		name: 'Bird watching',
		capacity: 0,
	},
	{
		id: 'u2a',
		name: 'Bowling',
		capacity: 4,
	},
	{
		id: 'd23',
		name: 'Haircut with beard trim',
		capacity: 1,
	},
];

export type Error = {
	error: string;
};

export type Success = {
	result: 'Ok.';
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ReadonlyArray<Service> | Error>) {
	if (req.method === 'GET') {
		res.status(200).json(services);
		return;
	}

	res.status(400).json({ error: 'Unsupported request method.' });
}
