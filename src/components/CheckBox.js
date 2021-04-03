import React,{ useState, useEffect } from 'react'

const CheckBox = () => {

    const hobby = [];
    const [isChecked,setIsChecked] = useState(hobby);
    const handleCheckbox = (event) => { 
        let chkval = event.target.checked;
        if(chkval){
            isChecked.push(event.target.value)
        }
        else{
           let index = isChecked.indexOf(event.target.value); 
           //  delete isChecked[index];
            isChecked.splice(index);
        }
       console.log(isChecked);
    }

    const handleSubmit = (event) => {
        console.log(hobby);
        event.preventDefault();
     
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Hobbies</label> <br/>
                <input type="checkbox" name='Reading' value='Reading' onChange={handleCheckbox} /> Reading  &nbsp; &nbsp;
                <input type="checkbox" name='Exploring' value='Exploring' onChange={handleCheckbox} /> Exploring  &nbsp; &nbsp;
                <input type="checkbox" name='Cycling' value='Cycling' onChange={handleCheckbox} /> Cycling  &nbsp; &nbsp;
                <br/>
                <div>Display checkbox Selected value : <span id='chkval'></span> </div>
                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}

export default CheckBox
