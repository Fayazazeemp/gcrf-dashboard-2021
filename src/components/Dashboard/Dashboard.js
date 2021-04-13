import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion'
import MessageBox from './MessageBox';
import StudentEmailForm from './StudentEmailForm';
import ProgressCard from './ProgressCard.js'
 
function Dashboard({studentsData,setIsLoading}) {
    let [userEmail,setUserEmail] = useState(null)
    let [showProgressCard,setShowProgressCard] = useState(false)
    let [message, setMessage] = useState(null)
    let [userStudentDetails,setUserStudentDetails] = useState(null)
    let handleUserEmailFormSubmit = (e) =>{
        setMessage(false)
        e.preventDefault()
        setIsLoading(true)
        if(studentsData?.data){
            console.log(studentsData.data);
            let foundStudent = studentsData.data.find( student => {
                return student["Student Email"] === userEmail
            })
            console.log(foundStudent);
            if(foundStudent){
                setUserStudentDetails(foundStudent)
                setIsLoading(false)
                setShowProgressCard(true)
            }else{
                setIsLoading(false)
                setMessage({
                    msg: "No Email address found. Please check your email. Use Email used in enrollment form.",
                    isError: true
                })
            }
        }else{
            setMessage({
                msg: "Some Error occured.",
                isError: true
            })
            setIsLoading(false)
        }
        // setShowProgressCard(true)
    }
    return (
        <StyledDash>
            <AnimatePresence>
                {
                    !showProgressCard && 
                    <StudentEmailForm 
                        handleUserEmailFormSubmit={handleUserEmailFormSubmit}
                        setUserEmail={setUserEmail}
                    /> 
                    
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                   showProgressCard && 
                   <ProgressCard userStudentDetails={userStudentDetails} /> 
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                   message && <MessageBox message={message} /> 
                }
            </AnimatePresence>
        </StyledDash>
    );
}

export default Dashboard;

let StyledDash = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-width: 400px;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    .student-email-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .student-email-input{
        background: #FFFFFF;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        font-size: 18px;
        padding: 10px 20px;
        outline: none;
        min-width: 300px;
        width: 30vw;
        text-align: center;   
        transition: all 0.2s ease-in-out;
        :focus{
            box-shadow: 0px 4px 20px -3px rgba(255, 0, 0, 0.296);
        }  
    }
    .student-form-submit-button{
        background: #4285F4;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        margin-top: 20px;
        font-size: 15px;
        padding: 8px 15px;
        font-weight: 500;
        color: white;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        :hover{
            box-shadow: 0px 4px 20px -3px rgb(0, 110, 255);
            transform: scale(0.95)
        }
    }
`