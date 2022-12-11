import React, { useEffect, useState } from 'react'
import './Form.css'
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function Form() {
    const [year, setYear] = useState("")
    const [users, setUsers] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [click, setIsClick] = useState(false)
    const [sendData,setSendData]=useState({})

    const $ = require( "jquery" )( window );
    useEffect(() => {
        if (year === "2022") {
            setIsValid(true);
        }
    }, [year, isValid])

useEffect(()=>{

    var fomrA=document.getElementById("formA");
    fomrA.addEventListener('submit',function(e){
        e.preventDefault()
        var title=document.getElementById("title").value
        var body=document.getElementById("body").value
        $.post("https://jsonplaceholder.typicode.com/posts",{title:title,body:body},function(data){console.log(data)}) 
    })
},[])
const submitted=()=>{

}


    const InputYear = (e) => {
        setYear(e.target.value);

        if (e.target.value === "2022") {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((response) => {
                    var result = response.map(function (user) {
                        return (
                            <>
                                <div className='userData' onClick={hol} key={user.id}>{user.name}</div>
                            </>
                        )})
                    setUsers(result)
                }); 
            }}

    const hol = () => {
        setIsClick(true);
    }
    const working= ()=>{
        alert("Step 1- Enter 2022.")
        alert("Select user name")
        alert("Enter title and Body details to submit ")
    }

    const contactInfo=()=>{
        alert("Name - Ompraksh yadav")
        alert("Phone - 9871397577")
        alert("Email - op21yadav@gmail.com")
    }

    return (
        <div>
            <div className='header'>
                <div><img src='https://static.startuptalky.com/2021/08/image-62.png' alt='logo'></img> </div>
                <div className='headerin'>Home</div>
                <div className='headerin' onClick={working}>How it Works?</div>
                <div className='headerin'>About</div>
              
                <div className='headerin' ><a href="https://github.com/yadavOmprakash" target="_blank">Contact</a></div>
            </div>
            <div className='label'>
                <form >
                    <label  > Enter the year :<input placeholder="Current year is 2022" value={year} onChange={InputYear} required /></label>
                </form>
            </div>
            {isValid && <div >{users} </div>}
            {click &&
                <div >
                    <form id='formA'>
                        <label> Title<input placeholder="Enter title here" required  id='title'/></label><br />
                        <label > Body<input placeholder="Enter body here" required id='body' /></label><br />
                        <button  onSubmit={submitted} type="submit">Submit</button>
                    </form>
                </div>}
            <div className='footer'>
                © 2022 AdmyBrands, Inc. All rights reserved.
            </div>

        </div>
    )
}

export default Form


// AIzaSyAibzzaMkUlvtCdS-PT0EsAgddtjSZHR5k