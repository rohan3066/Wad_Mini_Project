import React, { useEffect, useRef, useState } from 'react'
import uniqid from 'uniqid';
import Quill from 'quill';

function AddCourse() {
  const quillRef=useRef(null);
  const editRef=useRef(null);

  const [courseTitle,setCourseTitle]=useState('');
  const [coursePrice,setCoursePrice]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [image,setImage]=useState(null);
  const [chapters,setChapters]=useState([]);
  const [showPopup,setShowPopup]=useState(false);
  const [currentChapterId,setCurrentChapterId]=useState(null);
  const [lectureDetails,setLectureDetails]=useState({
    lectureTitle:'',
    lectureDuration:'',
    lectureUrl:'',
    isPreviewFree:false,
  });

  useEffect(()=>{
    if(!quillRef.current && editRef.current){
      quillRef.current=new Quill(editRef.current,{
        theme:'snow',
      })
    }
  },[]);




  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>  

    <form action="" className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
      <div className='flex flex-col gap-1'>
        <p>Course Tilte</p>
        <input onChange={e=>setCourseTitle(e.target.value)} value={courseTitle} type="text" placeholder='Type Here' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500 ' required />

        <div className='flex flex-col gap-1'>
          <p>Course Description</p>
          <div ref={editRef}></div>


        </div>
        <div className='flex items-center justify-between flex-wrap'>

          <div className='flex flex-col gap-1'>
            <p>Course Price</p>
            <input onChange={e=>setCoursePrice(e.target.value)} value={coursePrice} type="number" placeholder='0' className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500 ' required />

          </div>

        </div>
      </div>

    </form>
    </div>
  )
}

export default AddCourse
