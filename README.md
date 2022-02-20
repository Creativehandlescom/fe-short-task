## Feelo - new customer reservation test task

### Instalation

1. Install all dependencies:

```bash
yarn install
```

2. Run development server

```bash
yarn run dev
```

3. The application will be running at [http://localhost:3010](http://localhost:3010)

### The task

This is a simple mock of a reservation form for our business partners on [Feelo](https://feelo.lk). As a owner of a hair
saloon/restaurant/etc., customers will call you to make reservations. In this simplified form you just need to add a
contact phone, select the correct service and add the names for all customers (some services require more customers).

1. Get all services from backend and fill the select. API: `GET http://localhost:3010/services`, result is a JSON array
   of services:
   `[{ id: string, name: string, capacity: number }]`. Capacity is the exact number of customers required for this
   service. The label of select will be `service_name (service_capacity)` , so for example `Bowling (4)`.
2. Allow adding customers to the form. You shouldn't be able to add more customers than current selected service
   capacity.
3. Don't allow submitting the form when it's not valid. It's enough just to enable/disable submit button, no input error
   messages are required. Valid form means:
    1. Phone number is not empty (you don't have to validate the number, any non-empty string is ok)
    2. Service is selected
    3. The number of added customers equals to selected service's capacity.
4. Submit the form using this API: `POST http://localhost:3010/reservations`. The POST body is a JSON object:
   `{ serviceId: string, customers?: [string], phone: string }`. You'll get `serviceId` from the previous `services` API
   call. Example of possible request: `{ "serviceId": "i12", "customers": ["John Doe"], "phone": "123" }`
