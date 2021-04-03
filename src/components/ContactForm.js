
import React,{ useState, useEffect } from 'react'

const ContactForm = (props) => {

    const [ values, setValues ] = useState({ });  // state hooks for input type : text

    const [ checkState, setCheckState ] = useState({ education: "BSc CS" }); // state hooks for select dropdown 

    const handleInputChange = event => {
        // console.log(event.target.value);
        // const selectvalue = event.target.type === 'select' ? event.target.selected : event.target.value;
        // console.log(selectvalue);
        let { name, value } = event.target;
      
        setValues({
            ...values,
            [name]: value,
          //  [chkname] : chkvalue,
        });

    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(values)
        props.addoredit(values);
        console.log(checkState);
    }

    const handleFormUpdate = e => {
        e.preventDefault();
        props.updateFiredb(values);
    }

    useEffect( () => { 
        if(props.currentId === ''){ 
            setValues({
                ...values,
            }) 
        }
        else{
            setValues({
                ...props.infoObjects[props.currentId],
            })
        }
    }, [props.currentId, props.infoObjects]  )


    // Checkbox data fetch
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


    return(
        <div>
            <h4>Contact Form of Students</h4>
            <form autoComplete='off' >
                <div className="nm form-group input-group mb-3 mt-5">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="First name" 
                name='name' value={values.name} onChange={handleInputChange} />
                </div>

                <div className="mob form-group input-group mb-4">
                <div className="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i className="fas fa-mobile-alt"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Mobile" 
                name='mobile' value={values.mobile} onChange={handleInputChange} />
                </div>

                <div className="mail form-group input-group mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
                <input type="email" className="form-control" placeholder="Email" 
                name='email' value={values.email} onChange={handleInputChange} />
                </div>

                <div className="pwd form-group input-group mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-key"></i>
                        </span>
                </div>
                <input type="password" className="form-control" placeholder="Password" 
                name='password' value={values.password} onChange={handleInputChange} />
                </div>

                <div className="adr form-group input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-home"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Address" 
                name='address' value={values.address} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>
                    Select your education degree : 
                    <select onChange={handleInputChange} name='education' >   
                        <option selected value="Select Education">Select Education</option>
                        <option value="BSc CS">BSc CS</option>
                        <option value="BSc IT">BSc IT</option>
                        <option value="BCA">BCA</option>
                    </select>
                    </label>
                </div>

                <div className="form-froup">
                    <label>Gender</label>
                    <input type="radio" value='Male' name='gender' onChange={handleInputChange} /> Male
                    <input type="radio" value='Female' name='gender' onChange={handleInputChange} /> Female 
                </div>

                <div className="form-group">
                    <label >Hobbies</label> <br/>
                    <input type="checkbox" name='Reading' value='Reading' 
                        onChange={handleCheckbox} /> Reading  &nbsp; &nbsp;
                    <input type="checkbox" name='Exploring' value='Exploring' 
                        onChange={handleCheckbox} /> Exploring  &nbsp; &nbsp;
                    <input type="checkbox" name='Cycling' value='Cycling' 
                        onChange={handleCheckbox} /> Cycling  &nbsp; &nbsp;
                    <br/>
                </div>

                <div class="form-group row mt-4">
                        <div class="col-md-6">
                            <button onClick={handleFormSubmit}  
                            class="mx-2 btn btn-primary" >Register info</button>
                        </div>
                        <div className="col-md-6">
                            <button onClick={handleFormUpdate}  
                            className='mx-2 btn btn-warning'>Update Info</button>
                        </div>
                </div>

            {/* <div className='form-files'>
                <div className="row">
                    <div className="custom-file col-md-5 ">
                        <input type="file" className="custom-file-input" 
                        id="pdfFile" onChange={ (e) => {this.} } />
                        <label className="custom-file-label" for="pdfFile">Upload Resume (.pdf or .doc) </label>
                    </div>
                    <div className="offset-2"></div>
                    <div className="custom-file col-md-5 ">
                        <input type="file" className="custom-file-input" 
                        id="imgFile" onChange={} />
                        <label className="custom-file-label" for="imgFile">Upload Image (.png, .jpg or .jpeg) </label>
                        <button onClick={}>Upload</button>
                        <img src="" alt="Upload image" id='new-img' />
                    </div>
                </div>
            </div> */}



                {/* <div className="wrap row mb-4">
                    <div className="col-md-6">
                        <div className="form-check d-flex ">
                            <div className='w-25'><h5>Gender :</h5></div>
                            <div className="radio1 w-25 float-left overflow-hidden">
                                <input className="form-check-input" type="radio" 
                                name="gender" value={values.gender} onChange={handleInputChange} />
                                <label className="form-check-label" for="exampleRadios1">Male</label>
                            </div>
                            <div className="radio2 w-25 float-right">
                                <input className="form-check-input" type="radio" name="gender" 
                                id="exampleRadios2" value={values.gender} onChange={handleInputChange} />
                                <label className="form-check-labe3" for="exampleRadios2">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                            </div>
                            <input type="date" className="form-control" onChange={handleInputChange} />
                        </div>
                    </div>
                </div> */}

                

                {/* <div className="comp-wrap row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select id="inputState" className="form-control">
                                <option selected>Select Education Qualification</option>
                                <option value='BSc IT'>BSc IT</option>
                                <option value='BSc CS'>BSc CS</option>
                                <option value='BCA'>BCA</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group d-flex pt-2">
                            <h5>Hobbies</h5> <br/>
                                <div className="form-check ml-4 d-flex">
                                    <div className="comp-box px-3">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" for="gridCheck1">Reading</label>
                                    </div>
                                    
                                    <div className="comp-box px-3">
                                    <input className="form-check-input" type="checkbox" id="gridCheck2" />
                                    <label className="form-check-label" for="gridCheck2">Cycling</label>
                                    </div>

                                    <div className="comp-box px-3">
                                    <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                    <label className="form-check-label" for="gridCheck3">Exploring</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div> */}


            </form>
        </div>
    );
}

export default ContactForm
