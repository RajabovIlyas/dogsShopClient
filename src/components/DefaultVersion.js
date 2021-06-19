import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'antd/dist/antd.css'
import '../App.css'
import { useDispatch } from 'react-redux'
import { deleteSizeThunk, getSizeThunk } from '../store/Size/action'
import Model from '../Model'

const DefaultVersion = () => {
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
		dispatch(getSizeThunk(data))
		showModal()
	}

	return (
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
				<input
					type='number'
					className='sign-up-input'
					placeholder='Длина от пола до шеи'
					{...register('l4', { min: 1, max: 200 })}
				/>
				<input
					type='number'
					className='sign-up-input'
					placeholder='Расстояние между лап'
					{...register('l5', { min: 1, max: 200 })}
				/>
				<input
					type='number'
					className='sign-up-input'
					placeholder='Объем таза'
					{...register('l6', { min: 1, max: 200 })}
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

export default DefaultVersion
