import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="app">
      <img className="app-image" alt="image" src={employee.profileImg} width="100" height="100"/>
      <h1 style={{color:'blue'}}>{employee.name}</h1>
      <div className="info">
        <p className='p_info'>location<br /><strong>{employee.location}</strong></p>
        <p className='p_info'>bloodGroup<br /><strong>{employee.bloodGroup}</strong></p>
        <p className='p_info'>age<br /><strong>{employee.age}</strong></p>
      </div>
    </div>
)
}



export default App;
