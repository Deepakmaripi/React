import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<"
var bottom_arrow = ">"
var Emstatus = {
  1: 'in-progress',
  2: 'finished',
  3: 'rejected'
}
var appointment_details = {
  'customer_info': {
    'name': 'Neeraj',
    'appointment_date': new Date().toLocaleDateString(),
    'employeeid': 632020,
    'email': 'maripideepak16@gmail.com',
    'phone': 6281975933,
  },

  'order_info': {
    'status': Emstatus[1],
    'door': 'Mark',
    'time': new Date().toLocaleTimeString()
  },
  'product_list': {
    'img': 'https://www.w3schools.com/howto/img_avatar.png',
    'project': 'projectname:Lorem Ipsum',
    'proj_detail': 'About-project:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
  }

}
function App() {
  return (
    <div className="site-container">

      <div className='head-container'>
        <div className='arrow-content'><a href='#'>{arrow}</a></div>
        <div className='name-id'>
          <div className='name-id-child'>
            <strong>{appointment_details.customer_info.name}</strong><br />
            <span>{appointment_details.customer_info.employeeid}</span>
          </div>

        </div>
        <div className='print-content'>
          <button>print</button>
        </div>
      </div>

      <div className='info-container'>
        <div className='top-container'>
          <div className='top-content-appointement'>
            <strong><span>Appointement: </span></strong>
            <span>{appointment_details.customer_info.appointment_date}</span>
          </div>
          <div className='top-content-email'>
            <strong><span>Email:</span></strong>
            <span>{appointment_details.customer_info.email}</span>
          </div>
          <div className='top-content-phone'>
            <strong><span>Phone: +91 </span></strong>
            <span>{appointment_details.customer_info.phone}</span>
          </div>
        </div>


        <div className='middle-container'>
          <div className='middle-content-status'>
            <strong>Status</strong><br />
            <span><ul><li>{appointment_details.order_info.status}</li></ul></span>
          </div>
          <div className='middle-content-door'>
            <strong>Door</strong><br />
            <span>{appointment_details.order_info.door}</span>
          </div>
          <div className='middle-content-time'>
            <strong>Time</strong><br />
            <span>{appointment_details.order_info.time}</span>
          </div>
        </div>

        <div className='bottom-container'>
          <div className='bottom-container-checkbox'>
            <input type='checkbox'></input>
          </div>
          <div className='bottom-container-img'>
            <img src={appointment_details.product_list.img} alt="" />
          </div>
          <div className='bottom-container-project'>
            <strong>{appointment_details.product_list.project}</strong><br />
            <span>{appointment_details.product_list.proj_detail}</span>
          </div>
          <div className='bottom-container-arrow'><a href='#'>{bottom_arrow}</a></div>
        </div>
      </div>

    </div>
  );
}

export default App;
