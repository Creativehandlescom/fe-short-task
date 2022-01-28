import * as React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { DatePicker } from 'antd';

const { Option } = Select;

const onFinish = (values: any) => {
	console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

type ReservationFormProps = {};

const ReservationForm = (props: ReservationFormProps) => (
	<Form
		name="basic"
		labelCol={{ span: 8 }}
		wrapperCol={{ span: 16 }}
		initialValues={{ remember: true }}
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
		autoComplete="off"
	>
		<Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please set the reservation date!' }]}>
			<DatePicker />
		</Form.Item>
		<Form.Item
			label="Activity"
			name="activity"
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Select style={{ width: 120 }}>
				<Option value="pair_massage">Pair massage</Option>
			</Select>
		</Form.Item>

		<Form.Item
			label="Add customer"
			name="username"
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Input />
		</Form.Item>

		<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
	</Form>
);

export default ReservationForm;
