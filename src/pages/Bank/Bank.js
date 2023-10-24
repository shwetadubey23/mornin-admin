import React from 'react';
import { connect } from 'react-redux';
import { BiRightArrowAlt } from 'react-icons/bi';
import { creditWithdrawActions, bankActions } from '../../_actions';
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import Loader from '../../components/Loader/Loader';
import { BiX } from 'react-icons/bi';

class Bank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      rowdata: {},
      fieldsBank: [],
      errorsBank: {},
      currentRow: {},
      currentCount: 0,
      noOfRecords: 5,
      index: 0,

    }
  }

  componentDidMount() {
    let data2 = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
    this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.creditWithdraw.bankDataSuccess) {
      return {
        ...nextProps,
        fieldsBank: nextProps.creditWithdraw && nextProps.creditWithdraw.childListActiveItems && nextProps.creditWithdraw.childListActiveItems.dataList ? nextProps.creditWithdraw.childListActiveItems.dataList : {}
      }
    }

    else {
      return {
        ...nextProps,

      }
    }

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
  //   // console.log("!!!!!!!!!!!!!!!!!:::", e);
  //   e.preventDefault();
  //   let { name, value, id } = e.target;
  //   console.log("$$$$$^^===>", name, value, id);
  //   let fieldsBank = this.state.fieldsBank;
  //   fieldsBank[id][name] = value;
  //   this.setState({ fieldsBank });
  // }

  inputChangeRowData = (e) => {
    // console.log("!!!!!!!!!!!!!!!!!:::", e);

    e.preventDefault();
    let { name, value, id } = e.target;
    console.log("$$$$$^^===>", name, value, id);
    let rowdata = this.state.rowdata;
    rowdata[name] = value;
    // console.log(name, value);
    this.setState({ rowdata });
  }

  handleCurrentIndex = (data, event) => {
    this.setState({ currentIndex: data, rowdata: JSON.parse(JSON.stringify(event)) });
  }

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });
  };

  handlePageClick = (data) => {
    console.log("data  ", data);
    this.setState({ index: data.selected });
    let data2 = { "id": "", "index": data.selected, "noOfRecords": this.state.noOfRecords }
    this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));
  }

  handleShowEnties = (data) => {

    console.log("entries??", data);

    let data2 = { "id": "", "index": 0, "noOfRecords": data }
    this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));
    this.setState({ showEntries: data, noOfRecords: data });
  };

  handleBankDWSubmit = () => {

    if (this.handleBankDWValidation()) {

      let data = {
        "userid": this.state.rowdata.userId,
        "amount": this.state.rowdata.amount,
        "lupassword": this.state.rowdata.lupassword ? this.state.rowdata.lupassword : null
      }
      console.log("datadatadatadata1230", data);

      this.props.dispatch(bankActions.bankDepositWithdraw(data))

    }

  };

  handleBankDWValidation = () => {
    let rowdata = this.state.rowdata;
    let errorsBank = {};
    let formIsValid = true;

    //amount
    if (!rowdata["amount"] || rowdata["amount"] === "") {
      formIsValid = false;
      errorsBank["amount"] = "Amount cannot be empty";
    }

    //lupassword
    if (!rowdata["lupassword"] || rowdata["lupassword"] === "") {
      formIsValid = false;
      errorsBank["lupassword"] = "Transaction code cannot be empty";
    }

    console.log("errorsCreditWithdraw_errorsCreditWithdraw_::::", errorsBank);

    this.setState({ errorsBank: errorsBank });
    return formIsValid;
  }


  render() {

    let { creditWithdraw } = this.props;
    let { childListActiveItems, loading } = creditWithdraw;

    let { totalPages } = childListActiveItems ? childListActiveItems : {};


    // console.log("RENDER___this.state.fieldsBank:", this.state.fieldsBank);
    // console.log("RENDER___this.state.currentIndex:", this.state.currentIndex);


    console.log("RENDER___this.state.rowdata:", this.state.rowdata);


    const custom = "flex items-center  text-white space-x-4 text-slate-400 text-[.8125rem]";
    const active = "bg-[#23292E] rounded-full w-8 h-8 flex items-center justify-center text-[.8125rem] text-white ";

    return (
      <>
        <div>
          <Loader
            active={loading}
          />
        </div>

        <div className='relative w-full h-full page_bg overflow-y-auto'>
          <div className='px-[12px] py-[4px] space-y-6' >
            <div className='flex justify-between' >
              <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Bank</h2>
              <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Bank </p>
            </div>

            <div>

              <div className=' bg-white xl:p-[1.25rem] p-[0.5rem] rounded-[.25rem]'>

                <div className='w-full bg-white md:flex md:space-y-0 space-y-4 items-center justify-between pb-4 '>

                  <div className='flex items-stretch  space-x-6'>
                    <div className='flex items-center space-x-2 text-[0.8125rem]'>
                      <input className="px-[12px] py-[7.520px] text-[0.8125rem] bg-white bg-transparent  border border-[#ced4da] rounded-[0.25rem]  md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500"
                        placeholder='Search User' id="exampleSearch2" type="amount" required />
                      <button className='p-2 px-3 bg-[#23292E] text-white rounded-md'> Load</button>
                      <button className='p-2 px-3 bg-[#eff2f7] text-gray-800 rounded-md hover:bg-[#d6ddea]'> Reset</button>
                    </div>
                  </div>

                  <div className='flex space-x-2'>
                    {/* <div className='flex space-x-2'>
                    <button className='p-2.5 bg-[#34c38f] text-white rounded-md hover:bg-[#34c38f] transition duration-150 focus:ring-2 ring-green-200'><AiFillFileExcel size={18} /></button>
                    <button className='p-2.5 bg-[#f46a6a] text-white rounded-md hover:bg-[#f46a6a] transition duration-150 focus:ring-2 ring-red-200'><AiFillFilePdf size={18} /></button>
                  </div> */}
                    <div className='flex items-center space-x-2 text-sm'>

                      <div className='flex items-center space-x-2 text-[0.8125rem]'>
                        <div className='relative'>
                          <input className={this.state.errorsBank && this.state.errorsBank["lupassword"] ? "px-[12px] py-[7.520px] text-[0.8125rem] bg-white bg-transparent  border border-red-400  mt-1 text-sm focus:ring-2 ring-red-200 rounded-[0.25rem]  md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500" : "px-[12px] py-[7.520px] text-[0.8125rem] bg-white bg-transparent  border border-gray-400  mt-1 text-sm   rounded-[0.25rem]  md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500"}
                            placeholder='Transtion Code' id="lupassword" type="text" name='lupassword' value={this.state.rowdata && this.state.rowdata['lupassword'] ? this.state.rowdata['lupassword'] : ""} onChange={this.inputChangeRowData} required />
                          {this.state.errorsBank && this.state.errorsBank["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}

                        </div>
                        {/* {this.state.errorsBank && this.state.errorsBank["lupassword"] ?
                          <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                            {this.state.errorsBank["lupassword"]}
                          </div> : null
                        } */}

                        <button className='p-2 px-3 bg-[#23292E] text-white rounded-md whitespace-nowrap capitalize'> Transfer all</button>

                      </div>
                      {/* <input className="p-2 text-sm bg-white bg-transparent  border border-gray-300 rounded-md  md:w-60 w-full focus:outline-none"
                      placeholder='Transaction code' id="exampleSearch2" type="amount" required />
                    <button className='p-2 px-3 bg-[#23292E] text-white rounded-md capitalize whitespace-nowrap'> transfer all</button> */}

                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center  text-[0.8125rem] text-gray-600 font-medium py-2 space-x-2">
                  <div className='flex space-x-2 items-center'>
                    <span>Show</span>
                    <button onClick={() => this.setCurrentCount(this.state.currentCount === 1 ? 0 : 1)} className='border flex items-center py-[4px] px-[8px] text-[.7109375rem] rounded-[0.25rem] focus:ring-2 ring-[#556ee6]/30 relative  '>
                      <p className='w-8 '>{this.state.noOfRecords}</p>
                      <img src='/images/dropshort.svg' alt="sort" className='w-[0.62rem] h-[1rem] p-[1px] ml-[5px]' />

                      <div className={this.state.currentCount === 1 ? 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px]  ' : 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px] hidden'}>
                        <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => this.handleShowEnties(25)} >25</span>
                        <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => this.handleShowEnties(50)} >50</span>
                        <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => this.handleShowEnties(100)} >100</span>
                        <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => this.handleShowEnties(125)} >125</span>
                        <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => this.handleShowEnties(150)} >150</span>
                      </div>
                    </button>
                    <span>entries</span>
                  </div>
                  {/* <input className='border p-2 py-1.5 rounded-md w-52 focus:outline-none  ' placeholder='Serach...' /> */}
                </div>


                <div className="overflow-hidden rounded-lg">
                  <div className="max-w-full overflow-auto ">
                    <div className="inline-block min-w-full ">
                      <div className="overflow-hidden w-full ">

                        <table className="min-w-full capitalize ">
                          <thead className="">
                            <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t">
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">username</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right">CR</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right">pts</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right">client(P/L)</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right  ">exposure</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right ">availabe Pts</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-left">Account type</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-left ">Action</th>
                              <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-left">Status</th>

                            </tr>
                          </thead>
                          <tbody className='divide-y '>

                            {
                              this.state.fieldsBank && this.state.fieldsBank.length > 0 ?
                                this.state.fieldsBank.map((element, index) => (
                                  <React.Fragment >

                                    <tr className="text-[#495057] text-[12px] bg-white" onClick={() => this.handleCurrentIndex(index, element)}>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap">{element && element.username ? element.username : "-"}</td>
                                      <td className="py-[4px] px-[6px] cursor-pointer whitespace-nowrap  text-right" > 1000</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap text-right">{element && element.pts ? element.pts : "-"}</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap text-right">{element && element.clientPl ? element.clientPl : 0}</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap text-right">{element && element.exposure ? element.exposure : 0}</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap text-right">{element && element.availabePts ? element.availabePts : 0}</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap text-left">{element && element.accountType ? element.accountType : 0}</td>
                                      <td className="py-[4px] px-[6px] whitespace-nowrap">
                                        <div className='flex items-center space-x-2 justify-start '>
                                          <span className='flex items-center text-[#128412]'>All <BiRightArrowAlt size={16} /></span>
                                          {
                                            this.state.rowdata && this.state.rowdata.id === element.id ?
                                              <div>
                                                <input className={this.state.errorsBank && this.state.errorsBank["amount"] ? 'w-[150px] py-[0.3rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-[150px] py-[0.3rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='0' name='amount' type='num' id={index}
                                                  value={this.state.rowdata && this.state.rowdata['amount'] ? this.state.rowdata['amount'] : ""}
                                                  onChange={this.inputChangeRowData} />

                                                {/* {this.state.errorsBank && this.state.errorsBank["amount"] ?
                                                  <span className="invalid-feedback text-red-400 pt-1 text-xs">
                                                    {this.state.errorsBank["amount"]}
                                                  </span> : null
                                                } */}

                                              </div>
                                              :
                                              <span>
                                                <input className='w-[150px] py-[0.3rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]' placeholder='0' name='amount' type='text' id={index}
                                                  value={this.state.fieldsBank && this.state.fieldsBank[index] && this.state.fieldsBank[index]['amount'] ? this.state.fieldsBank[index]['amount'] : ""}
                                                  onChange={this.inputChangeRowData}
                                                />
                                              </span>

                                          }
                                          <button onClick={this.handleBankDWSubmit} type='button' className='px-[0.5rem] py-[0.3rem] rounded-[.2rem] text-[.7109375rem] text-white bg-[#50a5f1] hover:bg-[#2d93ee] transition duration-150'>Submit</button>
                                        </div>
                                      </td>

                                      {
                                        this.state.rowdata && this.state.rowdata.id === element.id ?
                                          <td className="px-2 whitespace-nowrap">
                                            <div className='flex items-center justify-start p-1 '>
                                              {this.state.errorsBank && this.state.errorsBank["amount"] ?
                                                <span className="invalid-feedback text-red-400 pt-1 text-xs">
                                                  {this.state.errorsBank["amount"]}
                                                </span> : null
                                              }
                                            </div>
                                          </td>
                                          :
                                          null

                                      }

                                    </tr>

                                  </React.Fragment>))
                                : (<tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white " >
                                  <td className="px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap" colSpan="7">Record Not Found</td>
                                </tr>)
                            }

                          </tbody>
                        </table>




                      </div>
                    </div>
                  </div>




                  {
                    isMobile ?
                      <nav className="relative z-0 flex justify-end mt-5 w-76">
                        {
                          totalPages && totalPages > 1 ?
                            <ReactPaginate
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={totalPages}
                              marginPagesDisplayed={1}
                              pageRangeDisplayed={1}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={'active'}
                            />
                            : null}
                      </nav> :
                      <nav className="relative z-0 flex justify-end mt-5 w-76">
                        {
                          totalPages && totalPages > 1 ?
                            <ReactPaginate
                              previousLabel={'<<'}
                              nextLabel={'>>'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={totalPages}
                              marginPagesDisplayed={3}
                              pageRangeDisplayed={3}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={active}
                              className={custom}
                            />
                            : null}
                      </nav>
                  }



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
  const { users, creditWithdraw } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users,
    creditWithdraw
  };
}

export default connect(mapStateToProps)(Bank);

// export default AdminList;