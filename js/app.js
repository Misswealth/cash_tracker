const xValues = ["Income", "Expenses"];
// const yValues = [55, 15];
let yValues =[];
newYvalues();
newYvalues1();

// let a = yValues[0];
// let b = yValues[1];
// let [a, b] = yValues;

// let newArr = [];
// yValues.splice(0, 2, [34, 16]);

// newArr.push(yValues);
// console.log(newArr);


const barColors = ["#1e7145", "#b91d47"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Your Cash Chart",
    },
  },
});

$("#addBtn").click(function () {
  let items = $(".items");
  if (items.val() === "1") {
    // let a = yValues[0];
    let inputTitle = $("#input-title").val();
    let inputAmount = $("#input-amount").val();
    let li = $("<li></li>");
    li.addClass("px-3 list-unstyled");
    let div = $("<div></div>");
    div.addClass("d-flex justify-content-between");
    let p1 = $("<p></p>");
    p1.append(inputTitle);
    p1.attr("id", "income-title");
    let p2 = $("<p></p>");
    p2.append(inputAmount);
    p2.attr("id", "income-amount");
    div.append(p1);
    div.append(p2);
    li.append(div);
    $(".all-income").prepend(li); 
    addition();
  } else {
    // let b = yValues[1];
    let inputTitle = $("#input-title").val();
    let inputAmount = $("#input-amount").val();
    let li = $("<li></li>");
    li.addClass("px-3 list-unstyled");
    let div = $("<div></div>");
    div.addClass("d-flex justify-content-between");
    let p1 = $("<p></p>");
    p1.append(inputTitle);
    p1.attr("id", "income-title");
    let p2 = $("<p></p>");
    p2.append(inputAmount);
    p2.attr("id", "income-amount");
    div.append(p1);
    div.append(p2);
    li.append(div);
    $(".all-expense").prepend(li);
    subtraction();
    // for (let b = 0; b <= li.length; b++);
    // yValues.push(b)
  }
});

let num = 0;

function addition() {
  let inputAmount = Number($("#input-amount").val());
  // let total = $("#income-total");
  num += inputAmount;

  // for (let a = 0; a <= inputAmount.length; a++);
  // yValues.push(a);
  // total.html(num);
  $("#dashboard-total").html(num);
}

function subtraction() {
  let inputAmount = Number($("#input-amount").val());
  // let expenseTotal = $("#expense-total");
  num -= inputAmount;

  // expenseTotal.html(num);
  $("#available-bal").html(num);
}

function newYvalues() {
  let myLi = $('.all-income').children.length;
  let incomeCount = 0;
  incomeCount >= myLi;
  incomeCount++;
  yValues.push(incomeCount);
  console.log(yValues);
}
function newYvalues1(){
  let myLi = $('.all-income').children.length;
  let expenseCount = 0;
  expenseCount >= myLi;
  expenseCount++;
  yValues.push(expenseCount);
  console.log(yValues);
} 