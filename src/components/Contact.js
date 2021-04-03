// React hooks using function model

import React,{ useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import Checkbox from './CheckBox'
import Firedb from '../Firebase'

const Contact = () => {

    const [ infoObjects,setInfoObjects ] = useState({});  // firebase input data  state management 

    const [ currentId,setCurrentId ] = useState({ });

    useEffect( () => { Firedb.child('info').on('value',snapshot => {
            if(snapshot.val() != null){
                setInfoObjects({
                    ...snapshot.val()
                })
            }
            // snap this call back function in invoked whenever the delete, insert or update function occurs
        })
    },[] ) // similar to component DiMount
 
    const addoredit = (obj1) => {
            Firedb.child('info').push(
                obj1,
                err => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Data inserted in Firebase')
                }
            )  // closing firedB function    
    }

    const updateFiredb = obj => {
        Firedb.child(`info/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err);
                else
                    console.log('Data updated in Firebase')
            }
        )  // closing firedB function
    }

    const onDelete = key => { 
        if(window.confirm("Are You Sure to Delete Firebase Record") ){
            Firedb.child(`info/${key}`).remove(
                err => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Data Deleted from Firebase')
                }
            )  // closing firedB function   
        } 
        else{
            alert('Request cancel for Delete')
        } 

    }

    return(

    <div className="form-section section-pad">
        <div className="container">
          <div className="row text-center">
            <div className="offset-1 col-10">
                <h1>Form Testing</h1>
                {/* <h4>Call Now &nbsp; <i class="fas fa-phone-volume"></i> </h4> */}
                <ContactForm {...({ addoredit, updateFiredb, currentId, infoObjects })} />
                {/* infoObjects --> state management of input date
                    currentId --> state management of id data  */}
                <Checkbox/>
            </div>
            <div className="col-12">
                <br/><br/>
                <div>Display List of Registered Students</div>
                <table className="table table-borderless table-stripped">
                    <thead className='thead-light'>
                        <tr>
                            <th>Student Name</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Address</th>
                            {/* <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Education</th>
                            <th>Hobby</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(infoObjects).map(id => {
                                return (
                                    <tr key={id}>
                                        <td>{infoObjects[id].name}</td>
                                        <td>{infoObjects[id].mobile}</td>
                                        <td>{infoObjects[id].email}</td>
                                        <td>{infoObjects[id].address}</td>
                                        <td>
                                            <a href='#' className='btn btn-warning ' onClick={() => { setCurrentId(id) } }>
                                                <i className='fas fa-pencil-alt'></i>
                                            </a> 
                                            <a href='#' className='btn btn-danger ml-2' onClick={() => { onDelete(id) } }>
                                                <i className='fas fa-trash text-white'></i>
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>

    );
}

export default Contact

