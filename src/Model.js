
import { Modal } from 'antd';
import { useSelector } from 'react-redux';

const Model=(props)=>{
   const size= useSelector(state => state.Size.sizeData)
   console.log('size',size);

  return (
    <>
      <Modal title="Размер" visible={props.isModalVisible} onOk={props.handleCancel} onCancel={props.handleCancel}>
      {size?.message?<p>{size?.message}</p>:<p>Размер: {size?.name}</p>}
      </Modal>
    </>
  );
}

export default Model;