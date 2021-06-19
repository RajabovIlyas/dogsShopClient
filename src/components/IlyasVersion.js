import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'antd/dist/antd.css'
import '../App.css'
import { useDispatch } from 'react-redux'
import { deleteSizeThunk, getSizeNewVersionThunk } from '../store/Size/action'
import { Modal } from 'antd';
import { useSelector } from 'react-redux';


const Model=(props)=>{
    const size= useSelector(state => state.Size.sizeData)
    console.log('size',size);
 
   return (
     <>
       <Modal title="Размер" visible={props.isModalVisible} onOk={props.handleCancel} onCancel={props.handleCancel}>
       {size?.message?<p>{size?.message}</p>:<><p>Размер: {size?.name}</p>
       <p>Размер по таблице: {size?.sizeInTable}</p>
       <p>Парода: {size?.dogBreed.map(value=>value+', ')}</p></>}
       </Modal>
     </>
   );
 }

const IlyasVersion=()=>{

	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
		dispatch(deleteSizeThunk())
	}

	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		dispatch(getSizeNewVersionThunk(data))
		showModal()
	}

    return(
        <>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='number'
					className='sign-up-input'
					placeholder='Обхват шеи'
					{...register('l1', { min: 1, max: 200 })}
				/>
				<input
					type='number'
					className='sign-up-input'
					placeholder='Объем груди'
					{...register('l2', { min: 1, max: 200 })}
				/>
				<input
					type='number'
					className='sign-up-input'
					placeholder='Длина по спине'
					{...register('l3', { min: 1, max: 200 })}
				/>
				<input type='submit' value='Получить размер' class='sign-up-button' />
			</form>
			<Model
				isModalVisible={isModalVisible}
				handleCancel={handleCancel}
				showModal={showModal}
			/>
		</>
    )
}

export default IlyasVersion;