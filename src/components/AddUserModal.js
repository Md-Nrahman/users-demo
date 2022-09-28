import React from 'react'
import Modal from "react-modal";
import InputElement from './InputElement';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddUserModal = ({isOpen, toggleModal,setuser}) => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

    const onSubmit = (data)=>{
        console.log(data);
        setuser((prev)=>[...prev,data]);
        swal({
          title: "Congrats!",
          text: "User Added Successfully!",
          icon: "success",
        }).then(()=>{
       reset();
            toggleModal(false)
        });
    }


  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={()=>toggleModal(false)}
    contentLabel="My dialog"
    ariaHideApp={false}
  >
    <div className='form-center'>
       <div className='bg-white py-5 px-4'>
       <h5 className='text-center'>Add New member</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputElement type='text' label='Name' name='name' placeholder='Enter Name' register={register} errors={errors}/>
        <InputElement type='email' label='Email' name='email' placeholder='Enter Email' register={register} errors={errors}/>
            <InputElement type='text' label='Phone No' name='phone' placeholder='Enter Phone No' register={register} errors={errors}/>

        </form>
            <div className='d-flex justify-content-end'>
            <button className='btn btn-outline-danger mr-1' onClick={()=>toggleModal(false)}>Cancel</button>
            <button className='btn btn-primary' onClick={handleSubmit(onSubmit)}>Submit</button>
            </div>
       </div>
    </div>
  </Modal>
  )
}

export default AddUserModal