import React from 'react';
import { connect } from 'react-redux';


class PartyWinLoss extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      currentCount: 0
    }
  }

  componentDidMount() {

  }

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });
  };

  render() {

    return (
      <div className='relative w-full h-full page_bg overflow-y-auto'>
        <div className='px-[12px] py-[4px] space-y-6' >

          <div className='flex justify-between' >
            <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Party Win Loss</h2>
            <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Party Win Loss </p>
          </div>
          <div>

            <div className=' bg-white xl:p-[1.25rem] p-[0.5rem] rounded-[.25rem]'>

              <div className='w-full bg-white flex items-end justify-between pb-4'>
                <div className='md:flex  md:space-x-4 md:space-y-0 space-y-4 w-full'>


                  <div className='space-y-1 md:w-auto w-full'>
                    <select name="cars" id="cars" className='px-[12px] py-[7.520px] text-[0.8125rem] bg-white bg-transparent  border border-[#ced4da] rounded-[0.25rem]  md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500 block'>
                      <option value="volvo">All</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className='flex items-stretch  space-x-2'>
                    <div className='flex items-center space-x-2 text-[0.8125rem]'>
                      <button className='p-2 px-3 bg-[#23292E] text-white rounded-md'> Load</button>
                      <button className='p-2 px-3 bg-[#eff2f7] text-gray-800 rounded-md hover:bg-[#d6ddea]'> Reset</button>
                    </div>
                    {/* <div className='flex space-x-2'>
                      <button className='p-2.5 bg-[#34c38f] text-white rounded-md hover:bg-[#34c38f] transition duration-150 focus:ring-2 ring-green-200'><AiFillFileExcel size={18} /></button>
                      <button className='p-2.5 bg-[#f46a6a] text-white rounded-md hover:bg-[#f46a6a] transition duration-150 focus:ring-2 ring-red-200'><AiFillFilePdf size={18} /></button>
                    </div> */}
                  </div>

                </div>

              </div>


              <div className="flex justify-between items-center  text-[0.8125rem] text-gray-600 font-medium py-2 space-x-2">
                <div className='flex space-x-2 items-center'>
                  <span>Show</span>
                  <button onClick={() => this.setCurrentCount(this.state.currentCount === 1 ? 0 : 1)} className='border flex items-center py-[4px] px-[8px] text-[.7109375rem] rounded-[0.25rem] focus:ring-2 ring-[#556ee6]/30 relative  '>
                    <p className='w-8 '>2500</p>
                    <img src='/images/dropshort.svg' alt="sort" className='w-[0.62rem] h-[1rem] p-[1px] ml-[5px]' />

                    <div className={this.state.currentCount === 1 ? 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px]  ' : 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px] hidden'}>
                      <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>25</span>
                      <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>50</span>
                      <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>100</span>
                      <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>125</span>
                      <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>150</span>
                    </div>
                  </button>
                  <span>entries</span>
                </div>
                <input className='border border-[#ced4da] px-[8px] py-[4px] rounded-[.2rem] md:w-52 w-full focus:outline-none text-[.7109375rem] text-[#495057] placeholder:text-gray-500 ' placeholder='Serach...' />
              </div>

              <div className="overflow-hidden ">
                <div className="max-w-full overflow-auto ">
                  <div className="inline-block min-w-full ">
                    <div className="overflow-hidden w-full ">

                      <table className="min-w-full capitalize border border-collapse ">
                        <thead className="">
                          <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t">
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize">No</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-left">User name</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-left">level</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-right">Casino pts</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-right  ">Sport pts</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-right ">Third party pts</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-right">Profit/Loss</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] border-r capitalize text-left">p Type</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y'>
                          <React.Fragment >
                            <tr className="text-[#495057] text-[12px] bg-white hover:bg-gray-100 transition duration-150 cursor-pointer">
                              <td colSpan={8} className="py-[4px] px-[6px] whitespace-nowrap text-center"> There are no records to show</td>
                            </tr>
                            <tr className="text-[#495057] text-[12px] bg-white">
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap"> 1</td>
                              <td className="py-[4px] px-[6px] border-r cursor-pointer whitespace-nowrap  text-center" > Demokoimoi</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-left"> Agent</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-right">300.00</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-right">0.00</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-right">0.00</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-right">300.00</td>
                              <td className="py-[4px] px-[6px] border-r whitespace-nowrap text-left">Partnership with No</td>
                            </tr>
                          </React.Fragment>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>


        </div>


      </div>

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

export default connect(mapStateToProps)(PartyWinLoss);

