import { NextApiRequest, NextApiResponse } from 'next';
import { Error, services, Success } from './services';

type NewReservationData = {
	readonly serviceId: string;
	readonly customers?: ReadonlyArray<string>;
	readonly phone: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Error | Success>) {
	if (req.method === 'POST') {
		try {
			const data = JSON.parse(req.body);
			const service = services.find((s) => s.id === data.serviceId);
			if (service === undefined) {
				res.status(400).json({ error: 'Unknown service id' });
				return;
			}

			if (typeof data.phone !== 'string' || data.phone === '') {
				res.status(400).json({ error: 'Phone number is not valid.' });
				return;
			}

			if (service.capacity > 0) {
				if (Array.isArray(data.customers) === false || data.customers?.length !== service.capacity) {
					res.status(400).json({ error: 'Reservation has incorrect number of customers.' });
					return;
				}
			} else {
				if (data.customers !== undefined) {
					res.status(400).json({ error: 'This service does not expect any customers.' });
					return;
				}
			}

			res.status(200).json({ result: 'Ok.' });
			return;
		} catch (e) {
			console.error(e);
			res.status(400).json({ error: 'Invalid JSON data.' });
			return;
		}
	}

	res.status(400).json({ error: 'Unsupported request method.' });
}
