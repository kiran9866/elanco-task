import { Modal } from 'antd';
const DataModal = (props) => {
	const { isModalOpen, handleOk, handleCancel, record } = props;
	console.log('record', record);
	return (
		<>
			<Modal
				title='Cost Data'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}>
				<p>Consumed Quantity: {record.ConsumedQuantity}</p>
				<p>Cost: {record.Cost}</p>
				<p>Date: {record.Date}</p>
				<p>Location: {record.Location}</p>
				<p>Unit Of Measure: {record.UnitOfMeasure}</p>
			</Modal>
		</>
	);
};
export default DataModal;
