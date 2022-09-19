
import './largetextbox.css'
const Largetextbox = (props) => {
      return(
            <div className='mt-3'>
            <lable className='lable'>{props.lable}</lable>
            <input  type={props.type}  className="l-textbox mt-1 area-large" />
            </div>
      )
}
export default Largetextbox