import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
export const AppContext=createContext();



export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY;
    const navigate=useNavigate();
    const [allCourses,setAllCourses]=useState([]);
    const [isEducator,setIsEducator]=useState(true);
    const [enrolledCourses,setEnrolledCourses]=useState([]);

    //fetch all courses

    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses);
    }


    //calculate rating

    const calculateRating =(course)=>{
        if(course.courseRatings.length===0){
            return 0;
        }
        let totalrating=0
        course.courseRatings.forEach(rating=>{
            totalrating+=rating.rating;
        })
        return totalrating / course.courseRatings.length;


    }

    // Function to Calculate Course Time

    const calculateChapterTime=(chapter)=>{
        let time=0;
        chapter.chapterContent.map((lecture)=>
            time+=lecture.lectureDuration)
        return humanizeDuration(time*60*1000,{units:['h','m']})
    }

    //course to Calculate Course Duration
    const calculateCourseDuration = (course) => {     
        let time = 0;     
        course.courseContent.forEach((chapter) => 
            chapter.chapterContent.forEach((lecture) => 
                time += lecture.lectureDuration
            )
        );    
    
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] }); 
    };
    

    // calculate no of function course

    const calculationNoOfLectures=(course)=>{
        let totalLecture=0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLecture+=chapter.chapterContent.length;
            }
        });

        return totalLecture;
    }


    //fetchUser enrolled courses
    const fetchUserEnrolledCourses=async()=>{
        setEnrolledCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses()
        fetchUserEnrolledCourses()
    },[])
    const value ={
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
        calculateChapterTime,
        calculateCourseDuration,
        calculationNoOfLectures,
        enrolledCourses,
        fetchUserEnrolledCourses
        
    }
       

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
    

}