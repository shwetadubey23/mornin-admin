import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  componentDidMount() {

  }
 


  render() {



    return (

      <>

        <div className='relative w-full h-full page_bg overflow-y-auto'>

          <div className='p-2 space-y-6' >
            <div className='flex justify-between' >
              <h2 className=' font-[16px] font-semibold text-gray-600 uppercase'>dashboard</h2>
              <p className='xl:text-sm text-xs text-gray-600'>  Home / Dashboard </p>
            </div>

 
          </div>


        </div>

      </>


    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users
  };
}

export default connect(mapStateToProps)(Dashboard);

// export default AdminList;