const BillInvoice = document.getElementById('billInvoice');
const NumberPeople = document.getElementById('numOfPeople');
let TotalAmount = document.getElementById('totalAmount');
let TipXPerson = document.getElementById('tipXPerson');
const MessageBill = document.getElementById('messageBill');
const MessagePeople = document.getElementById('messagePeople');

var tipBill = 0;
var messageError = '';

tipSelected = (e) => {
  tipBill = parseInt(e.target.value);
  calculateTip();
};

validateMessages = () => {
  if (BillInvoice.value === '') {
    MessageBill.innerText = `Bill can't be 0`;
  }
  if (NumberPeople.value === '') {
    MessagePeople.innerText = `People can't be 0`;
  }
};

calculateTip = () => {
  const bill = parseFloat(BillInvoice.value);
  const numberP = parseFloat(NumberPeople.value);
  let tipMountTotal = 0;
  let tipMountXPerson = 0;

  if (bill > 0 && numberP > 0 && tipBill > 0) {
    tipMountTotal = bill * (tipBill / 100);
    tipMountXPerson = tipMountTotal / numberP;
    MessagePeople.innerText = '';
    MessageBill.innerText = '';
  } else {
    validateMessages();
  }
  TotalAmount.innerText = tipMountTotal;
  TipXPerson.innerText = tipMountXPerson;
};

resetValues = () => {
  MessageBill.value = '';
  MessagePeople.innerText = '';
  BillInvoice.innerText = '';
  NumberPeople.innerText = '';
  TotalAmount.innerText = '';
  TipXPerson.innerText = '';
};
