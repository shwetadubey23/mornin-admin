import React from 'react';
import { connect } from 'react-redux';
import {  creditWithdrawActions } from '../../_actions';
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import CreditActivityModal from './Components/CreditActivityModal/CreditActivityModal';
import CreditWithdrawModal from './Components/CreditWithdrawModal/CreditWithdrawModal';
import DepositCreditModal from './Components/DepositCreditModal/DepositCreditModal';
import MoreDetailsModal from './Components/MoreDetailsModal/MoreDetailsModal';
import CreditHistoryModal from './Components/CreditHistoryModal/CreditHistoryModal';
import { MdAdd } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';


class AdminList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      betLock: false,
      accountLock: false,
      isactive: false,
      liveCasinoLock: false,
      virtualCasinoLock: false,
      creditActivityOpenModal: false,
      moreDetails: false,
      creditWithdrawOpenModal: false,
      depositCredit: false,
      fieldsCreditActivity: {},
      errorsCreditActivity: {},
      fieldsCreditWithdraw: {},
      errorsCreditWithdraw: {},
      fieldsUpdateDepositCredit: {},
      errorsUpdateDepositCredit: {},
      rowDataDetails: {},
      creditType: 'DEPOSIT',
      moreDetailsType: 'PROFILE',
      fieldsMoreDetails: {},
      errorsMoreDetails: {},
      fieldsUserLock: {},
      errorsUserLock: {},
      dPRowData: {},
      wHRowData: {},
      creditDepositRowData: {},
      creditWithdrawRowData: {},
      noOfRecords: 3,
      index: 0,
      keyWord: '',
      currentCount: 0,
      showEntries: "25",
      // sort: 0
    }
  }

  componentDidMount() {
    // let data2 = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
    // this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));

    let dataUser = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
    this.props.dispatch(creditWithdrawActions.childListUser(dataUser));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    // console.log("STATIC___status::", nextProps.creditWithdraw.creditDataSuccess);
    // console.log("STATIC___data_:::", nextProps.creditWithdraw.creditdataItems);

    if (nextProps.creditWithdraw.profileDataSuccess) {
      return {
        ...nextProps,
        fieldsMoreDetails: nextProps.creditWithdraw && nextProps.creditWithdraw.childProfileItems ? nextProps.creditWithdraw.childProfileItems : {},
        fieldsUserLock: nextProps.creditWithdraw && nextProps.creditWithdraw.childProfileItems ? nextProps.creditWithdraw.childProfileItems : {},
        // errorsCreditWithdraw: {},
        // creditWithdrawOpenModal: false,
      }
    }

    if (nextProps.creditWithdraw.creditDataSuccess) {
      return {
        ...nextProps,
        // wHRowData: nextProps.creditWithdraw && nextProps.creditWithdraw.creditdataItems ? nextProps.creditWithdraw.creditdataItems : {},
        creditDepositRowData: nextProps.creditWithdraw && nextProps.creditWithdraw.creditdataItems ? nextProps.creditWithdraw.creditdataItems : {},
        creditWithdrawRowData: nextProps.creditWithdraw && nextProps.creditWithdraw.creditdataItems ? nextProps.creditWithdraw.creditdataItems : {},
      }
    }

    if (nextProps.creditWithdraw.dWRowDataSuccess) {
      return {
        ...nextProps,
        dPRowData: nextProps.creditWithdraw && nextProps.creditWithdraw.depositwithdrawItems ? nextProps.creditWithdraw.depositwithdrawItems : {},
        wHRowData: nextProps.creditWithdraw && nextProps.creditWithdraw.depositwithdrawItems ? nextProps.creditWithdraw.depositwithdrawItems : {},
      }
    }

    if (nextProps.creditWithdraw.addUserSuccess) {
      return {
        ...nextProps,
        fieldsCreditWithdraw: {},
        errorsCreditWithdraw: {},
        creditWithdrawOpenModal: false,
      }
    }

    if (nextProps.creditWithdraw.updateActivitySuccess) {
      return {
        ...nextProps,
        fieldsUpdateDepositCredit: {},
        errorsUpdateDepositCredit: {},
        fieldsCreditWithdraw: {},
        errorsCreditWithdraw: {},
        fieldsCreditActivity: {},
        errorsCreditActivity: {},
        creditActivityOpenModal: false,
        creditWithdrawOpenModal: false,
        depositCredit: false,
      }
    }

    if (nextProps.creditWithdraw.changePassSuccess) {
      return {
        ...nextProps,
        fieldsMoreDetails: {},
        errorsMoreDetails: {},
        moreDetails: false,
      }
    }

    if (nextProps.creditWithdraw.userLockSuccess) {
      return {
        ...nextProps,
        fieldsMoreDetails: {},
        errorsMoreDetails: {},
        moreDetails: false,
      }
    }

    if (nextProps.creditWithdraw.editProfileSuccess) {
      return {
        ...nextProps,
        fieldsMoreDetails: {},
        errorsMoreDetails: {},
        moreDetails: false,
      }
    }

    else {
      return {
        ...nextProps,

      }
    }

  }

  inputChangeWithdraw = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsCreditWithdraw = this.state.fieldsCreditWithdraw;
    let errorsCreditWithdraw = this.state.errorsCreditWithdraw;
    fieldsCreditWithdraw[name] = value;
    errorsCreditWithdraw[name] = "";
    console.log(name, value);
    this.setState({ fieldsCreditWithdraw, errorsCreditWithdraw });
  }

  inputChangeCreditActivity = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsCreditActivity = this.state.fieldsCreditActivity;
    let errorsCreditActivity = this.state.errorsCreditActivity;
    fieldsCreditActivity[name] = value;
    errorsCreditActivity[name] = "";
    console.log(name, value);
    this.setState({ fieldsCreditActivity, errorsCreditActivity });
  }

  inputChangeMoreDetails = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsMoreDetails = this.state.fieldsMoreDetails;
    let errorsMoreDetails = this.state.errorsMoreDetails;
    fieldsMoreDetails[name] = value;
    errorsMoreDetails[name] = "";
    // console.log(fieldsMoreDetails[name], "!!!!!!");

    this.setState({ fieldsMoreDetails, errorsMoreDetails });
  }

  inputChangeMoreUserLock = (e) => {
    // e.preventDefault();
    let { name, value } = e.target;
    let fieldsUserLock = this.state.fieldsUserLock;
    let errorsUserLock = this.state.errorsUserLock;
    fieldsUserLock[name] = !fieldsUserLock[name];
    errorsUserLock[name] = "";
    console.log(fieldsUserLock[name], "!!!!!!");
    this.setState({ fieldsUserLock, errorsUserLock });
  }

  handleCreditType = (data) => {
    if (data === 'HISTORY') {
      let data = {
        "noOfRecords": 25,
        "index": 0,
        "toDate": "00:00:0000",
        "fromDate": "00:00:0000",
        "userid": this.state.rowDataDetails.userId,
        "type": 5
      }
      this.props.dispatch(creditWithdrawActions.accountHistory(data));
    }
    this.setState({ creditType: data, fieldsCreditActivity: {}, errorsCreditActivity: {} });
  }

  handleMoreDetailsType = (data) => {
    let { fieldsMoreDetails, errorsMoreDetails } = this.state;
    fieldsMoreDetails['lupassword'] = ''
    fieldsMoreDetails['newPassword'] = ''

    this.setState({ fieldsMoreDetails: fieldsMoreDetails, errorsMoreDetails: {}, fieldsUserLock: {}, errorsUserLock: {}, moreDetailsType: data });
    // console.log('llllllllllllllllllllllll',this.state.fieldsMoreDetails);

    if (data === 'ACCOUNT_HISTORY') {
      let data = {
        "noOfRecords": 25,
        "index": 0,
        "toDate": "00:00:0000",
        "fromDate": "00:00:0000",
        "userid": this.state.rowDataDetails.userId,
        "type": 5
      }

      console.log("!@#$1234::", data);

      this.props.dispatch(creditWithdrawActions.accountHistory(data));
    }

    console.log("QQQQQQ::", data);


  }

  inputChangeDeposit = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsUpdateDepositCredit = this.state.fieldsUpdateDepositCredit;
    let errorsUpdateDepositCredit = this.state.errorsUpdateDepositCredit;
    fieldsUpdateDepositCredit[name] = value;
    errorsUpdateDepositCredit[name] = "";
    console.log(name, value);
    this.setState({ fieldsUpdateDepositCredit, errorsUpdateDepositCredit });

  }

  // inputChangeDepositAmt = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let dPRowData = this.state.dPRowData;

  //   dPRowData["crntParentAmount"] = (Number(dPRowData["parentAmount"]) - Number(value));
  //   dPRowData["crntChildAmount"] = (Number(dPRowData["childAmount"]) + Number(value));
  //   dPRowData["crntChildUplineAmount"] = (Number(dPRowData["childUplineAmount"]) + Number(value));


  //   let fieldsUpdateDepositCredit = this.state.fieldsUpdateDepositCredit;
  //   let errorsUpdateDepositCredit = this.state.errorsUpdateDepositCredit;
  //   fieldsUpdateDepositCredit[name] = value;
  //   errorsUpdateDepositCredit[name] = "";
  //   console.log(name, value);

  //   this.setState({ dPRowData, fieldsUpdateDepositCredit, errorsUpdateDepositCredit });

  // }

  inputChangeDepositAmt = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("name????", name);

    let dPRowData = this.state.dPRowData;
    let fieldsUpdateDepositCredit = this.state.fieldsUpdateDepositCredit;
    let errorsUpdateDepositCredit = this.state.errorsUpdateDepositCredit;

    if (name && name === "amount") {

      dPRowData["crntParentAmount"] = (Number(dPRowData["parentAmount"]) - Number(value));
      dPRowData["crntChildAmount"] = (Number(dPRowData["childAmount"]) + Number(value));
      dPRowData["crntChildUplineAmount"] = (Number(dPRowData["childUplineAmount"]) + Number(value));

      fieldsUpdateDepositCredit[name] = value;
      errorsUpdateDepositCredit[name] = "";
      console.log(name, value);

      this.setState({ dPRowData, fieldsUpdateDepositCredit, errorsUpdateDepositCredit });

    } else {
      fieldsUpdateDepositCredit[name] = value;
      errorsUpdateDepositCredit[name] = "";
      console.log(name, value);

      this.setState({ fieldsUpdateDepositCredit, errorsUpdateDepositCredit });
    }
  }



  // inputChangeCreditAmt = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let wHRowData = this.state.wHRowData;

  //   wHRowData["crntParentAmount"] = (Number(wHRowData["parentAmount"]) + Number(value));
  //   wHRowData["crntChildAmount"] = (Number(wHRowData["childAmount"]) - Number(value));
  //   wHRowData["crntChildUplineAmount"] = (Number(wHRowData["childUplineAmount"]) - Number(value));

  //   let fieldsCreditWithdraw = this.state.fieldsCreditWithdraw;
  //   let errorsCreditWithdraw = this.state.errorsCreditWithdraw;
  //   fieldsCreditWithdraw[name] = value;
  //   errorsCreditWithdraw[name] = "";
  //   console.log(name, value);

  //   this.setState({ wHRowData, fieldsCreditWithdraw, errorsCreditWithdraw });

  // }

  inputChangeCreditAmt = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("name????", name);

    let wHRowData = this.state.wHRowData;
    let fieldsCreditWithdraw = this.state.fieldsCreditWithdraw;
    let errorsCreditWithdraw = this.state.errorsCreditWithdraw;

    if (name && name === "amount") {

      wHRowData["crntParentAmount"] = (Number(wHRowData["parentAmount"]) + Number(value));
      wHRowData["crntChildAmount"] = (Number(wHRowData["childAmount"]) - Number(value));
      wHRowData["crntChildUplineAmount"] = (Number(wHRowData["childUplineAmount"]) - Number(value));

      fieldsCreditWithdraw[name] = value;
      errorsCreditWithdraw[name] = "";
      console.log(name, value);

      this.setState({ wHRowData, fieldsCreditWithdraw, errorsCreditWithdraw });

    } else {
      fieldsCreditWithdraw[name] = value;
      errorsCreditWithdraw[name] = "";
      console.log(name, value);

      this.setState({ fieldsCreditWithdraw, errorsCreditWithdraw });
    }
  }




  handleCreditWithdrawOpenModal = (data) => {
    // this.props.dispatch(creditWithdrawActions.creditdata({ "userId": data.userId }));
    this.props.dispatch(creditWithdrawActions.depositwithdrawdata({ "userId": data.userId }));
    this.setState({ creditWithdrawOpenModal: true, rowDataDetails: data })
  }

  handleCreditWithdrawHideModal = () => {
    this.setState({ creditWithdrawOpenModal: false, errorsCreditWithdraw: {}, fieldsCreditWithdraw: {} })
  }

  handleDepositCreditOpenModal = (data) => {
    // this.props.dispatch(creditWithdrawActions.creditdata({ "userId": data.userId }));
    this.props.dispatch(creditWithdrawActions.depositwithdrawdata({ "userId": data.userId }));
    this.setState({ depositCredit: true, rowDataDetails: data })
  }

  handleDepositCreditHideModal = () => {
    console.log("hide Modal && Blank :");

    this.setState({ depositCredit: false, fieldsUpdateDepositCredit: {}, errorsUpdateDepositCredit: {}, dPRowData: {} })
  }

  handleMoreDetailsOpenModal = (data) => {
    // let reqData = { "noOfRecords": 25, "index": 0, "toDate": "00:00:0000", "fromDate": "00:00:0000", "userid": "b137e7a95", "type": 4 }
    // this.props.dispatch(creditWithdrawActions.accountHistory(reqData));
    if (this.state.moreDetailsType === 'PROFILE') {
      this.props.dispatch(creditWithdrawActions.childProfile({ "userId": data.userId }));
    }



    this.setState({ moreDetails: true, rowDataDetails: data })
  }

  handleMoreDetailsHideModal = () => {
    this.setState({ moreDetails: false, moreDetailsType: 'PROFILE', fieldsMoreDetails: {}, errorsMoreDetails: {} })
  }

  creditWithdrawSubmit = () => {
    if (this.handleCreditWithdraw()) {
      let reqData = {
        "userId": this.state.rowDataDetails.userId,
        "amount": parseInt(this.state.fieldsCreditWithdraw.amount),
        "lupassword": this.state.fieldsCreditWithdraw.lupassword,
        "remark": this.state.fieldsCreditWithdraw.remark,
      }

      console.log("reqData____::", reqData);
      let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
      this.props.dispatch(creditWithdrawActions.withdrawChipsPnl(reqData, eventData));
    }
  }

  handleCreditWithdraw = () => {
    let fieldsCreditWithdraw = this.state.fieldsCreditWithdraw;
    let errorsCreditWithdraw = {};
    let formIsValid = true;

    //amount
    if (!fieldsCreditWithdraw["amount"] || fieldsCreditWithdraw["amount"] === "") {
      formIsValid = false;
      errorsCreditWithdraw["amount"] = "Amount cannot be empty";
    }

    //lupassword
    if (!fieldsCreditWithdraw["lupassword"] || fieldsCreditWithdraw["lupassword"] === "") {
      formIsValid = false;
      errorsCreditWithdraw["lupassword"] = "Transaction code cannot be empty";
    }

    //remark
    if (!fieldsCreditWithdraw["remark"] || fieldsCreditWithdraw["remark"] === "") {
      formIsValid = false;
      errorsCreditWithdraw["remark"] = "Remark cannot be empty";
    }

    console.log("errorsCreditWithdraw_errorsCreditWithdraw_::::", errorsCreditWithdraw);

    this.setState({ errorsCreditWithdraw: errorsCreditWithdraw });
    return formIsValid;
  }


  depositCreditSubmit = () => {
    if (this.handleCreditWithdrawUpdate()) {

      let reqData = {
        "userId": this.state.rowDataDetails.userId,
        "amount": parseInt(this.state.fieldsUpdateDepositCredit.amount),
        "lupassword": this.state.fieldsUpdateDepositCredit.lupassword,
        "remark": this.state.fieldsUpdateDepositCredit.remark,
      }

      let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }

      console.log("RENDER_____reqData__depositCreditSubmit::", reqData);
      this.props.dispatch(creditWithdrawActions.depositChipsPnl(reqData, eventData));
    }
  }

  handleCreditWithdrawUpdate = () => {
    let fieldsUpdateDepositCredit = this.state.fieldsUpdateDepositCredit;
    let errorsUpdateDepositCredit = {};
    let formIsValid = true;

    //amount
    if (!fieldsUpdateDepositCredit["amount"] || fieldsUpdateDepositCredit["amount"] === "") {
      formIsValid = false;
      errorsUpdateDepositCredit["amount"] = "Amount cannot be empty";
    }

    //lupassword
    if (!fieldsUpdateDepositCredit["lupassword"] || fieldsUpdateDepositCredit["lupassword"] === "") {
      formIsValid = false;
      errorsUpdateDepositCredit["lupassword"] = "Transaction Code cannot be empty";
    }

    //remark
    if (!fieldsUpdateDepositCredit["remark"] || fieldsUpdateDepositCredit["remark"] === "") {
      formIsValid = false;
      errorsUpdateDepositCredit["remark"] = "Remark cannot be empty";
    }

    console.log("errorsUpdateDepositCredit_errorsUpdateDepositCredit_::::", errorsUpdateDepositCredit);

    this.setState({ errorsUpdateDepositCredit: errorsUpdateDepositCredit });
    return formIsValid;
  }

  navigate = (url) => {
    this.props.history.push(url)
  }

  handleBetLock = () => {

    let fieldsMoreDetails = this.state.fieldsMoreDetails;
    fieldsMoreDetails["betLock"] = !fieldsMoreDetails.betLock;
    this.setState({ fieldsMoreDetails });
  }

  handleAccountLock = () => {
    this.setState({ accountLock: !this.state.accountLock })
  }

  handleIsActive = () => {
    this.setState({ isactive: !this.state.isactive })
  }

  handleLiveCasinoLock = () => {
    this.setState({ liveCasinoLock: !this.state.liveCasinoLock })
  }

  handleVirtualCasinoLock = () => {
    this.setState({ virtualCasinoLock: !this.state.virtualCasinoLock })
  }


  handleCreditActivityOpenModal = (data) => {

    console.log("datatatattatata", data);

    this.props.dispatch(creditWithdrawActions.creditdata({ "userId": data.userId }));

    this.setState({ creditActivityOpenModal: true, rowDataDetails: data })
  }

  handleCreditActivityHideModal = () => {
    this.setState({ creditActivityOpenModal: false })
  }

  creditActivitySubmit = () => {
    if (this.handleCreditActivityValidation()) {
      let reqData = {
        "userId": this.state.rowDataDetails.userId,
        "amount": parseInt(this.state.fieldsCreditActivity.amount),
        "lupassword": this.state.fieldsCreditActivity.lupassword,
        "remark": this.state.fieldsCreditActivity.remark,
      }

      let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }

      // console.log("RENDER_____reqData:", reqData);
      // console.log("RENDER_____this.state.creditType:", this.state.creditType);

      if (this.state.creditType === 'DEPOSIT') {
        this.props.dispatch(creditWithdrawActions.depositCredit(reqData, eventData));
      } else {
        this.props.dispatch(creditWithdrawActions.createCreditWithdraw(reqData, eventData));
      }

    }
  }

  handleCreditActivityValidation = () => {
    let fieldsCreditActivity = this.state.fieldsCreditActivity;
    let errorsCreditActivity = {};
    let formIsValid = true;

    //amount
    if (!fieldsCreditActivity["amount"] || fieldsCreditActivity["amount"] === "") {
      formIsValid = false;
      errorsCreditActivity["amount"] = "Amount cannot be empty";
    }

    //lupassword
    if (!fieldsCreditActivity["lupassword"] || fieldsCreditActivity["lupassword"] === "") {
      formIsValid = false;
      errorsCreditActivity["lupassword"] = "Transaction code cannot be empty";
    }

    //remark
    if (!fieldsCreditActivity["remark"] || fieldsCreditActivity["remark"] === "") {
      formIsValid = false;
      errorsCreditActivity["remark"] = "Remark cannot be empty";
    }

    console.log("errorsUpdateDepositCredit_errorsUpdateDepositCredit_::::", errorsCreditActivity);

    this.setState({ errorsCreditActivity: errorsCreditActivity });
    return formIsValid;
  }

  moreDetailsSubmit = () => {

    if (this.state.moreDetailsType === "CHANGE_PASSWORD") {
      console.log("tfw44444444444444444?");
      if (this.handleChangePassValidation()) {

        console.log("1111111111111111111111?");

        let reqData = {
          "userId": this.state.rowDataDetails.userId,
          // "password": this.state.fieldsMoreDetails.password,
          "newPassword": this.state.fieldsMoreDetails.newPassword,
          "lupassword": this.state.fieldsMoreDetails.lupassword,
        }

        let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
        // this.props.dispatch(creditWithdrawActions.childListActiveUserCredit(data2));

        this.props.dispatch(creditWithdrawActions.changePassword(reqData, eventData));
      }
    }

    if (this.state.moreDetailsType === "USER_LOCK") {

      // {"userId": "b76246c","betLock":"true","accountLock":"false","isactive":true
      // ,"liveCasinoLock":true,"virtualCasinoLock":false,"lupassword":"1111111"}

      if (this.handleUserLockValidation()) {
        let reqData = {
          "userId": this.state.rowDataDetails.userId,
          "betLock": this.state.fieldsUserLock.betLock.toString(),
          "accountLock": this.state.fieldsUserLock.accountLock.toString(),
          "isactive": this.state.isactive,
          "liveCasinoLock": this.state.liveCasinoLock,
          "virtualCasinoLock": this.state.virtualCasinoLock,
          "lupassword": this.state.fieldsMoreDetails.lupassword,
        }

        let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
        this.props.dispatch(creditWithdrawActions.updateBetAccountStatus(reqData, eventData));
      }
    }

    if (this.state.moreDetailsType === "EDIT_PROFILE") {
      // {"userId":"b76246c","username":"aaqq","mobile":"","city":"","lupassword":"1111111","favMaster":false}

      if (this.handleEditProfileValidation()) {
        let updateUser = {
          "userId": this.state.rowDataDetails.userId,
          "username": this.state.fieldsMoreDetails.username,
          "mobile": this.state.fieldsMoreDetails.mobile,
          "city": this.state.fieldsMoreDetails.city,
          "favMaster": false,
          "lupassword": this.state.fieldsMoreDetails.lupassword,
        }
        console.log("updateUser______:::", updateUser);
        let eventData = { "id": "", "index": this.state.index, "noOfRecords": this.state.noOfRecords }
        this.props.dispatch(creditWithdrawActions.updateUserInfo(updateUser, eventData));
      }
    }

  }

  handleEditProfileValidation = () => {
    let fieldsMoreDetails = this.state.fieldsMoreDetails;
    let errorsMoreDetails = {};
    let formIsValid = true;

    //username
    if (!fieldsMoreDetails["username"] || fieldsMoreDetails["username"] === "") {
      formIsValid = false;
      errorsMoreDetails["username"] = "Full Name cannot be empty";
    }

    //mobile
    if (!fieldsMoreDetails["mobile"] || fieldsMoreDetails["mobile"] === "") {
      formIsValid = false;
      errorsMoreDetails["mobile"] = "Mobile cannot be empty";
    }

    //city
    if (!fieldsMoreDetails["city"] || fieldsMoreDetails["city"] === "") {
      formIsValid = false;
      errorsMoreDetails["city"] = "City cannot be empty";
    }

    //lupassword
    if (!fieldsMoreDetails["lupassword"] || fieldsMoreDetails["lupassword"] === "") {
      formIsValid = false;
      errorsMoreDetails["lupassword"] = "Transaction code cannot be empty";
    }

    console.log("errorsUpdateDepositCredit_errorsUpdateDepositCredit_::::", errorsMoreDetails);
    this.setState({ errorsMoreDetails: errorsMoreDetails });
    return formIsValid;
  }

  handleUserLockValidation = () => {
    let fieldsMoreDetails = this.state.fieldsMoreDetails;
    let errorsMoreDetails = {};
    let formIsValid = true;

    //lupassword
    if (!fieldsMoreDetails["lupassword"] || fieldsMoreDetails["lupassword"] === "") {
      formIsValid = false;
      errorsMoreDetails["lupassword"] = "Transaction code cannot be empty";
    }

    console.log("errorsUpdateDepositCredit_errorsUpdateDepositCredit_::::", errorsMoreDetails);
    this.setState({ errorsMoreDetails: errorsMoreDetails });
    return formIsValid;
  }

  handleChangePassValidation = () => {
    let fieldsMoreDetails = this.state.fieldsMoreDetails;
    let errorsMoreDetails = {};
    let formIsValid = true;

    //password
    // if (!fieldsMoreDetails["password"] || fieldsMoreDetails["password"] === "") {
    //   formIsValid = false;
    //   errorsMoreDetails["password"] = "Cannot be empty";
    // }

    //newPassword
    if (!fieldsMoreDetails["newPassword"] || fieldsMoreDetails["newPassword"] === "") {
      formIsValid = false;
      errorsMoreDetails["newPassword"] = "Password cannot be empty";
    }

    //lupassword
    if (!fieldsMoreDetails["lupassword"] || fieldsMoreDetails["lupassword"] === "") {
      formIsValid = false;
      errorsMoreDetails["lupassword"] = "Transaction code cannot be empty";
    }

    console.log("errorsUpdateDepositCredit_errorsUpdateDepositCredit_::::", errorsMoreDetails);
    this.setState({ errorsMoreDetails: errorsMoreDetails });
    return formIsValid;
  }



  // inputCreditDepositAmt = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let creditDepositRowData = this.state.creditDepositRowData;

  //   creditDepositRowData["crntParentAmount"] = (Number(creditDepositRowData["parentAmount"]) - Number(value));
  //   creditDepositRowData["crntChildAmount"] = (Number(creditDepositRowData["childAmount"]) + Number(value));
  //   creditDepositRowData["crntChildUplineAmount"] = (Number(creditDepositRowData["childUplineAmount"]) + Number(value));


  //   let fieldsCreditActivity = this.state.fieldsCreditActivity;
  //   let errorsCreditActivity = this.state.errorsCreditActivity;
  //   fieldsCreditActivity[name] = value;
  //   errorsCreditActivity[name] = "";
  //   console.log(name, value);

  //   this.setState({ creditDepositRowData, fieldsCreditActivity, errorsCreditActivity });

  // }

  inputCreditDepositAmt = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("name????", name);

    let creditDepositRowData = this.state.creditDepositRowData;
    let fieldsCreditActivity = this.state.fieldsCreditActivity;
    let errorsCreditActivity = this.state.errorsCreditActivity;

    if (name && name === "amount") {

      creditDepositRowData["crntParentAmount"] = (Number(creditDepositRowData["parentAmount"]) - Number(value));
      creditDepositRowData["crntChildAmount"] = (Number(creditDepositRowData["childAmount"]) + Number(value));
      creditDepositRowData["crntChildUplineAmount"] = (Number(creditDepositRowData["childUplineAmount"]) + Number(value));

      fieldsCreditActivity[name] = value;
      errorsCreditActivity[name] = "";
      console.log(name, value);

      this.setState({ creditDepositRowData, fieldsCreditActivity, errorsCreditActivity });

    } else {
      fieldsCreditActivity[name] = value;
      errorsCreditActivity[name] = "";
      console.log(name, value);

      this.setState({ fieldsCreditActivity, errorsCreditActivity });
    }
  }


  // inputCreditWithdrawAmt = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let creditWithdrawRowData = this.state.creditWithdrawRowData;

  //   creditWithdrawRowData["crntParentAmount"] = (Number(creditWithdrawRowData["parentAmount"]) + Number(value));
  //   creditWithdrawRowData["crntChildAmount"] = (Number(creditWithdrawRowData["childAmount"]) - Number(value));
  //   creditWithdrawRowData["crntChildUplineAmount"] = (Number(creditWithdrawRowData["childUplineAmount"]) - Number(value));

  //   let fieldsCreditActivity = this.state.fieldsCreditActivity;
  //   let errorsCreditActivity = this.state.errorsCreditActivity;
  //   fieldsCreditActivity[name] = value;
  //   errorsCreditActivity[name] = "";
  //   console.log(name, value);

  //   this.setState({ creditWithdrawRowData, fieldsCreditActivity, errorsCreditActivity });

  // }

  inputCreditWithdrawAmt = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("name????", name);

    let creditWithdrawRowData = this.state.creditWithdrawRowData;
    let fieldsCreditActivity = this.state.fieldsCreditActivity;
    let errorsCreditActivity = this.state.errorsCreditActivity;

    if (name && name === "amount") {

      creditWithdrawRowData["crntParentAmount"] = (Number(creditWithdrawRowData["parentAmount"]) + Number(value));
      creditWithdrawRowData["crntChildAmount"] = (Number(creditWithdrawRowData["childAmount"]) - Number(value));
      creditWithdrawRowData["crntChildUplineAmount"] = (Number(creditWithdrawRowData["childUplineAmount"]) - Number(value));

      fieldsCreditActivity[name] = value;
      errorsCreditActivity[name] = "";
      console.log(name, value);

      this.setState({ creditWithdrawRowData, fieldsCreditActivity, errorsCreditActivity });

    } else {
      fieldsCreditActivity[name] = value;
      errorsCreditActivity[name] = "";
      console.log(name, value);

      this.setState({ fieldsCreditActivity, errorsCreditActivity });
    }
  }

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });
  };


  handleShowEnties = (data) => {
    console.log("entries??", data);

    let data2 = { "id": "", "index": 0, "noOfRecords": data }
    this.props.dispatch(creditWithdrawActions.childListUser(data2));
    this.setState({ showEntries: data, noOfRecords: data });
  };


  handlePageClick = (data) => {
    console.log("data  ", data);
    this.setState({ index: data.selected });
    let data2 = { "id": "", "index": data.selected, "noOfRecords": this.state.noOfRecords }
    this.props.dispatch(creditWithdrawActions.childListUser(data2));
  }

  render() {

    let { creditWithdraw, users } = this.props;
    // let { childListUserItems } = users;
    let { creditdataItems, accountHistoryItems, childProfileItems, childListUserItems, depositwithdrawItems, loading } = creditWithdraw;

    let { totalPages } = childListUserItems ? childListUserItems : {};
    let { dataList } = accountHistoryItems ? accountHistoryItems : {};

    // console.log("RENDER__2222__totalPages:::", totalPages);
    // console.log("RENDER__this.state.fieldsUpdateDepositCredit%%%%%:::", this.state.fieldsUpdateDepositCredit);
    // console.log("RENDER__dPRowData%%%%:::", this.state.dPRowData);
    // console.log("RENDER__fieldsCreditActivity%%%%:::", this.state.fieldsCreditActivity);
    // console.log("RENDER__this.state.creditWithdrawRowData%%%%%:::", this.state.creditWithdrawRowData);

    console.log("RENDER__this.state.fieldsUserLock%%%%%:::", this.state.fieldsUserLock);
    // console.log("RENDER__this.state.errorsMoreDetails%%%%%:::", this.state.errorsMoreDetails);


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
              <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Account list</h2>
              <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Account list </p>
            </div>

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

                <div className='flex justify-end space-x-6'>
                  {/* <div className='flex space-x-2'>
                    <button className='p-2.5 bg-[#34c38f] text-white rounded-md hover:bg-[#34c38f] transition duration-150 focus:ring-2 ring-green-200'><AiFillFileExcel size={18} /></button>
                    <button className='p-2.5 bg-[#f46a6a] text-white rounded-md hover:bg-[#f46a6a] transition duration-150 focus:ring-2 ring-red-200'><AiFillFilePdf size={18} /></button>
                  </div> */}
                  <button className='text-[0.8125rem] font-[400] uppercase text-white flex items-center py-[7.520px] px-[12px] rounded-md focus:ring-2 ring-green-200 bg-[#34c38f] hover:bg-[#2ca579]'
                    onClick={() => this.navigate('/app/createaccount')}>
                    <MdAdd className='mr-0.5' size={20} /> Create Account</button>
                </div>
              </div>

              <div className="flex justify-between items-center  text-[0.8125rem] text-gray-600 font-medium py-2 space-x-2">
                <div className='flex space-x-2 items-center'>
                  <span>Show</span>
                  <button onClick={() => this.setCurrentCount(this.state.currentCount === 1 ? 0 : 1)} className='border flex items-center py-[4px] px-[8px] text-[.7109375rem] rounded-[0.25rem] focus:ring-2 ring-[#556ee6]/30 relative  '>
                    <p className='w-8 '>{this.state.showEntries ? this.state.showEntries : "-"}</p>
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

                      <table className="min-w-full  ">
                        <thead className="">
                          <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t">
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">
                              <div className='flex justify-between items-center'>
                                <p> username</p>
                                <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                              </div>
                            </th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-right">
                              <div className='flex justify-end items-center'>
                                <p> CR</p>
                                <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                              </div>
                            </th>

                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">B st</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">U st</th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">P Name</th>

                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize">
                              <div className='flex justify-between items-center'>
                                <p>accountType</p>
                                <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                              </div>
                            </th>
                            <th scope="col" className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize text-left">Action </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y'>

                          {
                            childListUserItems && childListUserItems.dataList && childListUserItems.dataList.length > 0 ?
                              childListUserItems.dataList.map((element, index) => (
                                <React.Fragment >
                                  <tr className="text-[#495057] text-[12px] bg-white">

                                    <td className="py-[4px] px-[6px] whitespace-nowrap " >{element && element.username ? element.username : "-"}</td>
                                    <td className="py-[4px] px-[6px] whitespace-nowrap text-right text-yellow-500 cursor-pointer" onClick={() => this.handleCreditActivityOpenModal(element)} >10,000</td>

                                    {
                                      element && element.betLock && element.betLock ?
                                        <>
                                          <td className="py-[4px] px-[6px] whitespace-nowrap">
                                            <div className="relative inline-block w-[1.8rem]  align-middle select-none transition duration-200 ease-in">
                                              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white  appearance-none cursor-pointer m-0.5 right-0 " />
                                              <label for="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-[#556ee6]/40 border border-[#556ee6] cursor-pointer"></label>
                                            </div>
                                          </td>
                                        </>
                                        :
                                        <>
                                          <td className="py-[4px] px-[6px] whitespace-nowrap">
                                            <div className="relative inline-block w-[1.8rem]  align-middle select-none transition duration-200 ease-in">
                                              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-gray-400  appearance-none cursor-pointer m-0.5 " />
                                              <label for="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-white border border-gray-400 cursor-pointer"></label>
                                            </div>
                                          </td>
                                        </>
                                    }

                                    {
                                      element && element.accountLock && element.accountLock ?
                                        <>
                                          <td className="py-[4px] px-[6px] whitespace-nowrap">
                                            <div className="relative inline-block w-[1.8rem]  align-middle select-none transition duration-200 ease-in">
                                              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white  appearance-none cursor-pointer m-0.5 right-0 " />
                                              <label for="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-[#556ee6]/40 border border-[#556ee6] cursor-pointer"></label>
                                            </div>
                                          </td>
                                        </>
                                        :
                                        <>
                                          <td className="py-[4px] px-[6px] whitespace-nowrap">
                                            <div className="relative inline-block w-[1.8rem]  align-middle select-none transition duration-200 ease-in">
                                              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-gray-400  appearance-none cursor-pointer m-0.5 " />
                                              <label for="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-white border border-gray-400 cursor-pointer"></label>
                                            </div>
                                          </td>
                                        </>
                                    }


                                    <td className="py-[4px] px-[6px] whitespace-nowrap">{element && element.pname ? element.pname : "-"}</td>

                                    <td className="py-[4px] px-[6px] whitespace-nowrap">{element && element.accountType ? element.accountType : "-"}</td>


                                    <td className="px-2 whitespace-nowrap">
                                      <div className='flex items-center justify-left p-1 '>

                                        <div className='flex rounded overflow-hidden'>
                                          <button className=' text-white text-sm px-[12px] py-[7.520px] bg-[#34c38f] hover:bg-[#2ca579]'
                                            onClick={() => this.handleDepositCreditOpenModal(element)}
                                          >D  </button>
                                          <button className=' text-white text-sm px-[12px] py-[7.520px] bg-[#f46a6a] hover:bg-[#f14646]'
                                            onClick={() => this.handleCreditWithdrawOpenModal(element)}
                                          >  W</button>
                                          <button className=' text-white text-sm px-[12px] py-[7.520px] bg-[#50a5f1] hover:bg-[#2d93ee]'
                                            onClick={() => this.handleMoreDetailsOpenModal(element)}
                                          >  More</button>
                                        </div>
                                      </div>
                                    </td>
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

        <CreditActivityModal
          handleCreditActivityHideModal={this.handleCreditActivityHideModal}
          inputChangeCreditActivity={this.inputChangeCreditActivity}
          creditActivityOpenModal={this.state.creditActivityOpenModal}
          fieldsCreditActivity={this.state.fieldsCreditActivity}
          errorsCreditActivity={this.state.errorsCreditActivity}
          creditType={this.state.creditType}
          handleCreditType={this.handleCreditType}
          creditActivitySubmit={this.creditActivitySubmit}
          dataList={dataList}
          // creditdataItems={creditdataItems}
          creditDepositRowData={this.state.creditDepositRowData}
          creditWithdrawRowData={this.state.creditWithdrawRowData}
          inputCreditDepositAmt={this.inputCreditDepositAmt}
          inputCreditWithdrawAmt={this.inputCreditWithdrawAmt}
        />

        <DepositCreditModal
          handleDepositCreditHideModal={this.handleDepositCreditHideModal}
          inputChangeDeposit={this.inputChangeDeposit}
          inputChangeDepositAmt={this.inputChangeDepositAmt}
          depositCredit={this.state.depositCredit}
          fieldsUpdateDepositCredit={this.state.fieldsUpdateDepositCredit}
          errorsUpdateDepositCredit={this.state.errorsUpdateDepositCredit}
          depositCreditSubmit={this.depositCreditSubmit}
          // creditdataItems={creditdataItems}
          dPRowData={this.state.dPRowData}
          depositwithdrawItems={depositwithdrawItems}

        />

        <CreditWithdrawModal
          handleCreditWithdrawHideModal={this.handleCreditWithdrawHideModal}
          inputChangeWithdraw={this.inputChangeWithdraw}
          inputChangeCreditAmt={this.inputChangeCreditAmt}
          creditWithdrawOpenModal={this.state.creditWithdrawOpenModal}
          fieldsCreditWithdraw={this.state.fieldsCreditWithdraw}
          errorsCreditWithdraw={this.state.errorsCreditWithdraw}
          creditWithdrawSubmit={this.creditWithdrawSubmit}
          creditdataItems={creditdataItems}
          wHRowData={this.state.wHRowData}
        />

        <MoreDetailsModal
          handleMoreDetailsHideModal={this.handleMoreDetailsHideModal}
          inputChangeMoreDetails={this.inputChangeMoreDetails}
          moreDetails={this.state.moreDetails}
          fieldsUserLock={this.state.fieldsUserLock}
          fieldsMoreDetails={this.state.fieldsMoreDetails}
          errorsMoreDetails={this.state.errorsMoreDetails}
          moreDetailsType={this.state.moreDetailsType}
          handleMoreDetailsType={this.handleMoreDetailsType}
          moreDetailsSubmit={this.moreDetailsSubmit}
          handleBetLock={this.handleBetLock}
          handleAccountLock={this.handleAccountLock}
          childProfileItems={childProfileItems}
          dataList={dataList}
          handleIsActive={this.handleIsActive}
          handleLiveCasinoLock={this.handleLiveCasinoLock}
          handleVirtualCasinoLock={this.handleVirtualCasinoLock}
          inputChangeMoreUserLock={this.inputChangeMoreUserLock}
        // creditdataItems={creditdataItems}
        />

        <CreditHistoryModal
          handleCreditHistoryHideModal={this.handleCreditHistoryHideModal}
          creditHistory={this.state.creditHistory}
          dataList={dataList}
        />

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

export default connect(mapStateToProps)(AdminList);

// export default AdminList;