// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Service = {
	readonly id: string;
	readonly name: string;
	readonly capacity: number;
};

const services = [
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
		id: 'u2a',
		name: 'Bird watching',
		capacity: 0,
	},
	{
		id: 'u2a',
		name: 'Bowling',
		capacity: 4,
	},
	{
		id: 'a3x',
		name: 'Haircut',
		capacity: 1,
	},
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<Service>>) {
	res.status(200).json(services);
}
