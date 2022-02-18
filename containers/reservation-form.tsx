import * as React from 'react';
import { FlashMessageContext } from './flash-message-provider';

const ReservationForm = () => {
	// Usage: showFlashMessage( { message: text, type: 'success' | 'error' } | null )
	const { setMessage: showFlashMessage } = React.useContext(FlashMessageContext);

	return (
		<form>
			<div className="row mb-3">
				<label htmlFor="inputPhone" className="col-sm-2 col-form-label">
					Contact phone:
				</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="inputPhone" />
				</div>
			</div>
			<div className="row mb-3">
				<label htmlFor="inputService" className="col-sm-2 col-form-label">
					Service:
				</label>
				<div className="col-sm-10">
					<select
						className="form-select"
						aria-label="Please select the service"
						id="inputService"
						defaultValue={'default'}
					>
						<option value={'default'} disabled>
							Please select the service
						</option>
						<option value="1">Pair massage (2)</option>
						<option value="2">Haircut (1)</option>
					</select>
				</div>
			</div>
			<fieldset className="row mb-3">
				<legend className="col-form-label col-sm-2 pt-0">Customers:</legend>
				<div className="col-sm-10">
					<p className="d-flex align-items-center">
						Albus Dumbledore
						<button type="button" className="btn btn-sm btn-outline-danger ms-3">
							<i className="bi bi-trash"></i>
						</button>
					</p>
					<p className="d-flex align-items-center">
						John Mayer
						<button type="button" className="btn btn-sm btn-outline-danger ms-3">
							<i className="bi bi-trash"></i>
						</button>
					</p>
					<div className="col-6">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Customer's full name"
								aria-label="Customer's full name"
								aria-describedby="button-addon-customer"
							/>
							<button className="btn btn-primary" type="button" id="button-addon-customer">
								Add customer
							</button>
						</div>
					</div>
				</div>
			</fieldset>
			<button type="submit" className="btn btn-primary offset-sm-2">
				Create reservation
			</button>
		</form>
	);
};

export default ReservationForm;
