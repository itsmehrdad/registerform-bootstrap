
import'./ex_register1.css'
import './pic-city.jpg'
import Largetextbox from './componant/textbox/largetextbox'
import Smalltextbox from './componant/textbox/smalltextbox'
const Ex_register1 = () => {
      return(
            <div className=" fullpage w-100 h-100 d-flex justify-content-center align-items-center">
                  <div className="form">
                       <div className='img '>
                         <img className='w-100 h-100' src="src\ex_register1\pic-city.jpg" />
                         
                       </div>
                        
                        <div className=' all-camponant mt-3 p-4 d-flex justify-content-center '>
                            <div className='w-70 h-80 '>
                              <p className='p'>Registration Info</p> 
                              <Largetextbox lable='NAME' type='text'/>

                              <div className='d-flex gap-4'>
                              <Smalltextbox lable='BIRTHDATE' type='date'/>     
                              <Smalltextbox lable='GENDER' type='text' /> 
                              </div> 

                              <Largetextbox lable='CLASS' type='text'/>   
                              <Smalltextbox lable='REGISTRATION CODE' type='text' /> 
                              <input type="submit" className='mt-5 submit-input ' />
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default Ex_register1