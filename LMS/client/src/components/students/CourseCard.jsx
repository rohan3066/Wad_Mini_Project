// import React, { useContext } from 'react'
// import { assets } from '../../assets/assets'
// import { AppContext } from '../../context/AppContext'

// function CourseCard({course}) {
//   const {currency}=useContext(AppContext)
//   return (
//     <div>
//         <img src={course.courseThumbnail} alt="" />
//         <div>
//           <h3>{course.courseTitle}</h3>
//           <p>{course.educator.name}</p>
//           <div>
//             <p>4.5</p>
//             <div>
//               {[...Array(5)].map((_,i)=>(<img key={i} src={assets.star} alt='star'/>)
//             )}
//             </div>
//             <p>22</p>
//           </div>
//           <p>{currency}{(course.coursePrice-course.discount*course.coursePrice/100).toFixed(2)}</p>
//         </div>
      
//     </div>
//   )
// }

// export default CourseCard


import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const { currency, calculateRating } = useContext(AppContext);
  console.log(course);

  return (
    <Link to={'/course/'+course._id} onClick={()=>scrollTo(0,0)}
    className='border border-gray-500/30 pd-6 overflow-hidden rounded-lg'>
      <img src={course.courseThumbnail} alt={course.courseTitle} 
      className='w-full' />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>Rohan Chavan</p>

        <p className='text-base font-semibold text-gray-800'>
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default CourseCard;
