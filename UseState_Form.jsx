import {useState} from 'react'

function UseState_Form() {
    const [User,setUser]=useState({
        name:"sivnfudinb",
        age:25,
        gender:"Female",
        isMarried:false,
        country:"India",
    });
   function changeHandler(e)
   {
        const name=e.target.name;
        const value=e.target.type ==="checkbox" ? e.target.checked: e.target.value;
        setUser({...User,[name]:value});

   }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{User.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{User.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{User.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{User.isMarried ? "Married":"Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{User.country}</td>
            </tr>
        </tbody>
    </table>
    
    <form action="">
        <input type="text" value={User.name} onChange={changeHandler} placeholder='Full Name' name='name' />
        <input type="number"  value={User.age} onChange={changeHandler}  placeholder='Age' name='age'/>
        <div className='gender'>
            <label htmlFor="male">
                <input type="radio" onChange={changeHandler} value="Male" name='gender' checked={User.gender==="Male"} id='male'/>Male
            </label>
            <label htmlFor="female">
                <input type="radio" onChange={changeHandler} value="Female" name='gender' checked={User.gender==="Female"} id='female'/>Female
            </label>

        </div>
        <label htmlFor="male">
                <input type="checkbox" onChange={changeHandler} name="isMarried" id='isMarried' checked={User.isMarried}/>Is Married
        </label>
        <div>
            <label htmlFor="country">Select country</label>
            <select name="country" id="country" onChange={changeHandler} value={User.country}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Japan">Japan</option>
            </select>
        </div>
    </form>
    </>
  )
}

export default UseState_Form;