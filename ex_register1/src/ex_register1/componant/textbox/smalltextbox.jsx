import './smalltextbox.css'
const Smalltextbox = (props) => {
      return(
            <div className='full-componant '>
            <lable className='lable'>{props.lable}</lable>
            <input  type={props.type}  className=" mt-1 area-small" />
            </div>
      )
}
export default Smalltextbox