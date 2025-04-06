import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useState } from 'react';
import Loading from '../../components/students/Loading';

const MyCourse = ()=>{

  const {currency,allCourses}=useContext(AppContext);
  const [courses,setCourses]=useState([]);

  const fetchEducatorCourse=async()=>{
    setCourses(allCourses);
  }

  useEffect(()=>{
    fetchEducatorCourse()
  },[]);
  
  return courses ?  (

    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
        <div className='w-full'>
          <h2 className='pb-4 text-lg font-medium'>My Course</h2>
          <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
          <table className='md:table-auto table-fixed w-full overflow-hidden'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
            <th className='px-4 py-3 font-semibold truncate'>All Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Earnings</th>
              <th className='px-4 py-3 font-semibold truncate'>Students</th>
              <th className='px-4 py-3 font-semibold truncate'>Published On</th>

            </tr>

            </thead>
            <tbody className='text-sm text-gray-500'>
              {
                courses.map((cor)=>(
                  <tr key={cor._id} className='border-b border-gray-500/20'>
                    <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate'>
                      <img src={cor.courseThumbnail} alt="image" srcset="" className='w-16' />
                      <span className='truncate hidden md:block'>
                        {cor.courseTitle}
                      </span>
                    </td>

                    <td className='px-4 py-3'>
                      {currency} {Math.floor(cor.enrolledStudents.length * (cor.coursePrice - cor.discount * cor.coursePrice/100))}
                    </td>

                    <td className='px-4 py-3'>
                      {cor.enrolledStudents.length}
                    </td>

                    <td className='px-4 py-3'>
                      {new Date(cor.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              }

            </tbody>
            
          </table>

          </div>
          
        </div>
      
    </div>
  ) : <Loading/>
}

export default MyCourse
