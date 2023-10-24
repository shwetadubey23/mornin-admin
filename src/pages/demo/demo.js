import React from 'react';
import { connect } from 'react-redux';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiFillFileExcel, AiFillFilePdf } from 'react-icons/ai';
import { creditWithdrawActions } from '../../_actions';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      declareMatchModal: false,
      setFmatchId: false,
      rowData: {},
      fieldsBank: {},
      errorsBank: {}
    }
  }

  componentDidMount() {
    let data2 = { "id": "", "index": 0, "noOfRecords": 20 }
    this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));
  }

  handleCurrentIndex = (index, data) => {
    this.setState({ currentIndex: index, fieldsBank: {}, rowData: data });
    console.log('index::::  ', index);
  }

  handleChange(event, index, id) {

    // console.log("event:", event);
    console.log("index:", index);
    console.log("id:", id);

    this.setState((state) => {
      const newObject = { ...state.fieldsBank };
      console.log("newObject:BEFORE:", newObject);

      newObject[`${index}`] = { amount: event.target.value, userId: id }

      console.log("newObject:AFTER:", newObject);

      return { fieldsBank: newObject }
    });
  }

  inputChangeCode = (e) => {
    e.preventDefault();
    let { value } = e.target;
    let fieldsBank = this.state.fieldsBank;
    let errorsBank = this.state.errorsBank;
    fieldsBank["lupassword"] = value;
    errorsBank["lupassword"] = "";
    this.setState({ fieldsBank, errorsBank });
  }

  // inputChange = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let fieldsBank = this.state.fieldsBank;
  //   let errorsBank = this.state.errorsBank;
  //   fieldsBank[name] = value;
  //   errorsBank[name] = "";
  //   console.log(name, value);
  //   this.setState({ fieldsBank, errorsBank });
  // }


  // inputChange = (e) => {

  //   console.log("!!!!!!!!!!!!!!!!!:::", e);

  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   console.log("$$$$$^^===>", this.state.currentIndex, name, value);
  //   let fieldsBank = this.state.fieldsBank;
  //   fieldsBank[this.state.currentIndex][name] = value;
  //   // console.log(name, value);
  //   this.setState({ fieldsBank });
  // }



  render() {

    let { creditWithdraw } = this.props;
    let { childListActiveItems } = creditWithdraw;

    console.log("RENDER___this.state.fieldsBank:", this.state.fieldsBank);
    console.log("RENDER___this.state.rowData:", this.state.rowData);

    return (
      <div className='relative w-full h-full page_bg overflow-y-auto'>
        <div className='p-6 space-y-6' >
          <div className='flex justify-between' >
            <h2 className='text-lg font-semibold text-gray-600 uppercase'>Demo</h2>
            <p className='text-sm text-gray-600 capitalize'>  Home / bank </p>
          </div>
          <div>
            <div className='pb-4 bg-white'>

              <div className='w-full bg-white p-6 flex items-center justify-between'>

                <div className='flex items-stretch  space-x-6'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <input className="p-2 text-sm bg-white bg-transparent  border border-gray-300 rounded-md  md:w-60 focus:outline-none"
                      placeholder='Search User' id="exampleSearch2" type="amount" required />
                    <button className='p-2 px-3 bg-[#23292E] text-white rounded-md'> Load</button>
                    <button className='p-2 px-3 bg-[#eff2f7] text-gray-800 rounded-md hover:bg-[#d6ddea]'> Reset</button>
                  </div>
                </div>

                <div className='flex space-x-6'>
                  <div className='flex space-x-2'>
                    <button className='p-2.5 bg-[#34c38f] text-white rounded-md hover:bg-[#34c38f] transition duration-150 focus:ring-2 ring-green-200'><AiFillFileExcel size={18} /></button>
                    <button className='p-2.5 bg-[#f46a6a] text-white rounded-md hover:bg-[#f46a6a] transition duration-150 focus:ring-2 ring-red-200'><AiFillFilePdf size={18} /></button>
                  </div>
                  <div className='flex items-center space-x-2 text-sm'>
                    <input className="p-2 text-sm bg-white bg-transparent  border border-gray-300 rounded-md  md:w-60 focus:outline-none"
                      placeholder='Transaction code' id="exampleSearch2" type="amount" name='lupassword' value={this.state.fieldsBank && this.state.fieldsBank["lupassword"] ? this.state.fieldsBank["lupassword"] : ""} onChange={this.inputChangeCode} required />
                    <button className='p-2 px-3 bg-[#23292E] text-white rounded-md capitalize'> transfer all</button>

                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center capitalize px-6 text-sm text-gray-600 font-medium py-2 ">
                <div className='flex space-x-2 items-center'>
                  <span>Show</span> <input type="number" value="25" className="w-20 px-2 py-1 border rounded-md focus:ring-2 ring-blue-200 focus:outline-none" />
                  <span>entries</span>
                </div>
                {/* <input className='border p-2 py-1.5 rounded-md w-52 focus:outline-none  ' placeholder='Serach...' /> */}
              </div>


              <div className="px-6 pb-2 overflow-hidden rounded-lg">
                <div className="max-w-full overflow-auto ">
                  <div className="inline-block min-w-full ">
                    <div className="overflow-hidden w-full ">

                      <table className="min-w-full capitalize ">
                        <thead className="">
                          <tr className="text-left text-sm font-medium text-gray-600 bg-white border-b border-t">
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize">username</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-right">CR</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-right">pts</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-right">client(P/L)</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-right  ">exposure</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-right ">availabe Pts</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-left">Account type</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-left ">Action</th>
                            <th scope="col" className="whitespace-nowrap p-4 py-2 font-semibold capitalize text-center">Status</th>

                          </tr>
                        </thead>
                        <tbody className='divide-y '>

                          {
                            childListActiveItems && childListActiveItems.dataList && childListActiveItems.dataList.length > 0 ?
                              childListActiveItems.dataList.map((element, index) => (
                                <React.Fragment >

                                  <tr className="text-gray-800 text-sm bg-white" onClick={() => this.handleCurrentIndex(index, element)} >
                                    <td className="p-4 whitespace-nowrap">{element && element.username ? element.username : "-"}</td>
                                    <td className="p-4 cursor-pointer whitespace-nowrap  text-right" > 1000</td>
                                    <td className="p-4 whitespace-nowrap text-right">{element && element.pts ? element.pts : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-right">{element && element.clientPl ? element.clientPl : 0}</td>
                                    <td className="p-4 whitespace-nowrap text-right">{element && element.exposure ? element.exposure : 0}</td>
                                    <td className="p-4 whitespace-nowrap text-right">{element && element.availabePts ? element.availabePts : 0}</td>
                                    <td className="p-4 whitespace-nowrap text-left">{element && element.accountType ? element.accountType : 0}</td>
                                    <td className="p-4 whitespace-nowrap">
                                      <div className='flex items-stretch space-x-2 justify-start '>
                                        <span className='flex items-center text-green-500'>All <BiRightArrowAlt /></span>
                                        {/* <input className='p-2 py-1 border rounded-md focus:outline-none w-32 text-slate-800' placeholder='0' name='amount' value={this.state.fieldsBank && this.state.fieldsBank['amount'] ? this.state.fieldsBank['amount'] : ""} onChange={this.inputChange}
                                        disabled={this.state.currentIndex == index ? false : true}
                                        /> */}

                                        <input className='p-2 py-1 border rounded-md focus:outline-none w-32 text-slate-800'
                                          key={element.userId}
                                          value={this.state.fieldsBank[`${index}`]?.amount || ''}
                                          onChange={(event) => this.handleChange(event, index, element.userId)}

                                          disabled={this.state.currentIndex == index ? false : true}

                                        // disabled={this.state.fieldsBank && this.state.fieldsBank.key && this.state.fieldsBank.key
                                        //   == element.id ? false : true}

                                        />



                                        <button className='px-4 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-150'>Submit</button>
                                      </div>
                                    </td>
                                    <td className="px-2 whitespace-nowrap">
                                      <div className='flex items-center justify-center p-1 '>
                                        Done
                                      </div>
                                    </td>
                                  </tr>

                                </React.Fragment>))
                              : (<tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white " >
                                <td className="px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap" colSpan="7">Record Not Found</td>
                              </tr>)
                          }

                          {/* <React.Fragment >
                            <tr className="text-gray-800 text-sm bg-white">
                              <td className="p-4 whitespace-nowrap"> Demokoimoi</td>
                              <td className="p-4 cursor-pointer whitespace-nowrap  text-right" > 1000</td>
                              <td className="p-4 whitespace-nowrap text-right"> 1000</td>
                              <td className="p-4 whitespace-nowrap text-right">0</td>
                              <td className="p-4 whitespace-nowrap text-right">0</td>
                              <td className="p-4 whitespace-nowrap text-right">1000</td>
                              <td className="p-4 whitespace-nowrap text-left">User</td>
                              <td className="p-4 whitespace-nowrap">
                                <div className='flex items-stretch space-x-2 justify-start '>
                                  <span className='flex items-center text-green-500'>All <BiRightArrowAlt /></span>
                                  <input className='p-2 py-1 border rounded-md focus:outline-none w-32 text-slate-800' placeholder='0' />
                                  <button className='px-4 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-150'>Submit</button>
                                </div>
                              </td>
                              <td className="px-2 whitespace-nowrap">
                                <div className='flex items-center justify-center p-1 '>
                                  Done
                                </div>
                              </td>
                            </tr>


                          </React.Fragment> */}

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
  const { users, creditWithdraw } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users,
    creditWithdraw
  };
}

export default connect(mapStateToProps)(Demo);

// export default AdminList;