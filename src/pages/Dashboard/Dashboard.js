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

    const metricsData = [
      {
        title: "Total Message",
        value: "9850.90",
      },
      {
        title: "Message Category",
        value: "7520.50",
      },
      {
        title: "Total Quotes",
        value: "9850.90",
      },
      {
        title: "Quotes Category",
        value: "7520.50",
      },
      {
        title: "Images",
        value: "9850.90",
      },
      {
        title: "Images Category",
        value: "7520.50",
      },

    ];

    return (

      <>

        <div className="z-0 overflow-hidden  overflow-x-auto focus:outline-none">
        <div className=" z-20 flex min-h-screen">
        <div className="mx-auto w-full">
        <div className="p-3 2xl:p-8 sm:p-5">
          {/* <div className='p-2 space-y-6' >
            <div className='flex justify-between' >
              <h2 className=' font-[16px] font-semibold text-gray-600 uppercase'>dashboard</h2>
              <p className='xl:text-sm text-xs text-gray-600'>  Home / Dashboard </p>
            </div>


          </div> */}
          <div className="flex items-center w-full">
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {metricsData.map((metrics, index) => (
                <div className="p-5  bg-white rounded shadow-sm" key={index}>
                  <div className="text-base text-gray-400 ">{metrics.title}</div>
                  <div className="flex items-center pt-1">
                    <div className="text-2xl font-bold text-gray-900 ">
                      {metrics.value}
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
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