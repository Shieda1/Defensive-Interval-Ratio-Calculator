// https://www.omnicalculator.com/finance/defensive-interval-ratio#how-to-calculate-the-defensive-interval-ratio-using-the-defensive-interval-ratio-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const defensiveintervalratioRadio = document.getElementById('defensiveintervalratioRadio');
const cashandcashequivalentsRadio = document.getElementById('cashandcashequivalentsRadio');
const marketablesecuritiesRadio = document.getElementById('marketablesecuritiesRadio');
const accountsreceivableRadio = document.getElementById('accountsreceivableRadio');
const annualoperatingexpensesRadio = document.getElementById('annualoperatingexpensesRadio');
const annualnoncashchargesRadio = document.getElementById('annualnoncashchargesRadio');

let defensiveintervalratio;
let cashandcashequivalents = v1;
let marketablesecurities = v2;
let accountsreceivable = v3;
let annualoperatingexpenses = v4;
let annualnoncashcharges = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

defensiveintervalratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash and cash equivalents';
  variable2.textContent = 'Marketable securities';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Annual operating expenses';
  variable5.textContent = 'Annual non-cash charges';
  cashandcashequivalents = v1;
  marketablesecurities = v2;
  accountsreceivable = v3;
  annualoperatingexpenses = v4;
  annualnoncashcharges = v5;
  result.textContent = '';
});

cashandcashequivalentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Defensive interval ratio';
  variable2.textContent = 'Marketable securities';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Annual operating expenses';
  variable5.textContent = 'Annual non-cash charges';
  defensiveintervalratio = v1;
  marketablesecurities = v2;
  accountsreceivable = v3;
  annualoperatingexpenses = v4;
  annualnoncashcharges = v5;
  result.textContent = '';
});

marketablesecuritiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Defensive interval ratio';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Annual operating expenses';
  variable5.textContent = 'Annual non-cash charges';
  defensiveintervalratio = v1;
  cashandcashequivalents = v2;
  accountsreceivable = v3;
  annualoperatingexpenses = v4;
  annualnoncashcharges = v5;
  result.textContent = '';
});

accountsreceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'Defensive interval ratio';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Marketable securities';
  variable4.textContent = 'Annual operating expenses';
  variable5.textContent = 'Annual non-cash charges';
  defensiveintervalratio = v1;
  cashandcashequivalents = v2;
  marketablesecurities = v3;
  annualoperatingexpenses = v4;
  annualnoncashcharges = v5;
  result.textContent = '';
});

annualoperatingexpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Defensive interval ratio';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Marketable securities';
  variable4.textContent = 'Accounts receivable';
  variable5.textContent = 'Annual non-cash charges';
  defensiveintervalratio = v1;
  cashandcashequivalents = v2;
  marketablesecurities = v3;
  accountsreceivable = v4;
  annualnoncashcharges = v5;
  result.textContent = '';
});

annualnoncashchargesRadio.addEventListener('click', function() {
  variable1.textContent = 'Defensive interval ratio';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Marketable securities';
  variable4.textContent = 'Accounts receivable';
  variable5.textContent = 'Annual operating expenses';
  defensiveintervalratio = v1;
  cashandcashequivalents = v2;
  marketablesecurities = v3;
  accountsreceivable = v4;
  annualoperatingexpenses = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(defensiveintervalratioRadio.checked)
    result.textContent = `Defensive interval ratio = ${computedefensiveintervalratio().toFixed(2)}`;

  else if(cashandcashequivalentsRadio.checked)
    result.textContent = `Cash and cash equivalents = ${computeCashandcashequivalents().toFixed(2)}`;

  else if(marketablesecuritiesRadio.checked)
    result.textContent = `Marketable securities = ${computemarketablesecurities().toFixed(2)}`;

  else if(accountsreceivableRadio.checked)
    result.textContent = `Accounts receivable = ${computeaccountsreceivable().toFixed(2)}`;

  else if(annualoperatingexpensesRadio.checked)
    result.textContent = `Annual operating expenses = ${computeannualoperatingexpenses().toFixed(2)}`;

  else if(annualnoncashchargesRadio.checked)
    result.textContent = `Annual non-cash charges = ${computeannualnoncashcharges().toFixed(2)}`;
})

// calculation

// defensive interval ratio = current assets / average daily expenditures

function computedefensiveintervalratio() {
  return (Number(cashandcashequivalents.value) + Number(marketablesecurities.value) + Number(accountsreceivable.value)) / ((Number(annualoperatingexpenses.value) - Number(annualnoncashcharges.value)) / 360);
}

function computeCashandcashequivalents() {
  return (Number(defensiveintervalratio.value) * ((Number(annualoperatingexpenses.value) - Number(annualnoncashcharges.value)) / 360)) - Number(marketablesecurities.value) - Number(accountsreceivable.value);
}

function computemarketablesecurities() {
  return (Number(defensiveintervalratio.value) * ((Number(annualoperatingexpenses.value) - Number(annualnoncashcharges.value)) / 360)) - Number(cashandcashequivalents.value) - Number(accountsreceivable.value);
}

function computeaccountsreceivable() {
  return (Number(defensiveintervalratio.value) * ((Number(annualoperatingexpenses.value) - Number(annualnoncashcharges.value)) / 360)) - Number(cashandcashequivalents.value) - Number(marketablesecurities.value);
}

function computeannualoperatingexpenses() {
  return (((Number(cashandcashequivalents.value) + Number(marketablesecurities.value) + Number(accountsreceivable.value)) / Number(defensiveintervalratio.value)) * 360) + Number(annualnoncashcharges.value);
}

function computeannualnoncashcharges() {
  return Number(annualoperatingexpenses.value) - (((Number(cashandcashequivalents.value) + Number(marketablesecurities.value) + Number(accountsreceivable.value)) / Number(defensiveintervalratio.value)) * 360);
}