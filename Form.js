import React, { useEffect, useState } from 'react'
import './Form.css'


function Form() {
    const [year, setYear] = useState("")
    const [users, setUsers] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [click, setIsClick] = useState(false)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        if (year === "2022") {
            setIsValid(true);
        }
    }, [year, isValid])


    const saveUser=()=>{
        let data={title,body}
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log("result",result);
        })
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

   
    return (
        <div>
            <div className='header'>
                <div><img src='https://static.startuptalky.com/2021/08/image-62.png' alt='logo'></img> </div>
                <div className='headerin'>Home</div>
                <div className='headerin' onClick={working}>How it Works?</div>
                <div className='headerin'>About</div>
              
                <div className='headerin' ><a href="https://github.com/yadavOmprakash" target="_blank" rel="noreferrer" >Contact</a></div>
            </div>
            <div className='label'>
                <form >
                    <label  > Enter the year :<input placeholder="Current year is 2022" value={year} onChange={InputYear} required /></label>
                </form>
            </div>
            {isValid && <div >{users} </div>}
            {click &&
                <div >
                    <form>
                        <label> Title<input placeholder="Enter title here" required  id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/></label><br />
                        <label > Body<input placeholder="Enter body here" required id='body' value={body} onChange={(e)=>{setBody(e.target.value)}}/></label><br />
                        <button onClick={saveUser}  type="submit">Submit</button>
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
