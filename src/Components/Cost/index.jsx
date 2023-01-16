import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import DataModal from '../Modal';

const Cost = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState('');
	const columns = [
		{
			title: 'Consumed Quantity',
			dataIndex: 'ConsumedQuantity',
		},
		{
			title: 'Cost',
			dataIndex: 'Cost',
			sorter: (a, b) => a.Cost - b.Cost,
		},
		{
			title: 'Date',
			dataIndex: 'Date',
		},
		{
			title: 'Category',
			dataIndex: 'MeterCategory',
		},
		{
			title: 'Resource Group',
			dataIndex: 'ResourceGroup',
		},
		{
			title: 'Unit Of Measure',
			dataIndex: 'UnitOfMeasure',
		},
		{
			title: 'Location',
			dataIndex: 'Location',
		},
		{
			title: 'Service Name',
			dataIndex: 'ServiceName',
		},
		{
			title: 'Show',
			dataIndex: 'id',
			key: 'id',
			render: (index, record) => (
				<Button
					type='primary'
					onClick={() => showModal(record)}>
					Show
				</Button>
			),
		},
	];
	const showModal = (record) => {
		setIsModalOpen(true);
		setModalData(record);
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	useEffect(() => {
		(async function () {
			try {
				const response = await fetch(
					`https://engineering-task.elancoapps.com/api/raw`
				);
				const responseJson = await response.json();
				setData(responseJson);
			} catch (error) {
				setError(true);
			}
		})();
	}, []);
	return (
		<>
			<Table
				columns={columns}
				dataSource={data}
			/>
			<DataModal
				isModalOpen={isModalOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
				record={modalData}
			/>
		</>
	);
};
export default Cost;
