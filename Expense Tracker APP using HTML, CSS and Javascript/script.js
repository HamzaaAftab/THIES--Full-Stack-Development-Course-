let totalIncome = 0;
let balance = 0;
let expenseItems = [];

function setTotalIncome() {
    const incomeInput = document.getElementById('totalIncomeInput').value;
    if (incomeInput > 0) {
        totalIncome = parseFloat(incomeInput);
        balance = totalIncome;
        document.getElementById('totalIncomeDisplay').innerText = `Total Income: $${totalIncome}`;
        document.getElementById('balance').innerText = `Balance: $${balance}`;
    } else {
        alert("Please enter a valid income amount");
    }
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense details");
        return;
    }

    if (expenseAmount > balance) {
        alert("Warning: Your expense exceeds your available balance!");
    } else {
        balance -= expenseAmount;
        document.getElementById('balance').innerText = `Balance: $${balance}`;

        const expenseList = document.getElementById('expenseList');
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${expenseName} - $${expenseAmount}`;
        expenseList.appendChild(expenseItem);
        expenseList.appendChild(expenseItem);
        expenseItems.push({ name: expenseName, amount: expenseAmount }); // Store expense details

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => editExpense(expenseItems.length - 1));

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteExpense(expenseItems.length - 1));

        expenseItem.appendChild(editButton);
        expenseItem.appendChild(deleteButton);
        
    }

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';

}

function editExpense(index) {
    const expense = expenseItems[index];
    const newName = prompt("Enter new expense name:", expense.name);
    const newAmount = parseFloat(prompt("Enter new expense amount:", expense.amount));

    if (newName !== null && newAmount !== null && newAmount > 0) {
        expense.name = newName;
        expense.amount = newAmount;
        balance-=newAmount
        updateExpenseList();
    }
    document.getElementById('balance').innerText = `Balance: $${balance}`;
    
    
    
}

function deleteExpense(index) {
    if (confirm("Are you sure you want to delete this expense?")) {
        expenseItems.splice(index, 1);
        updateExpenseList();
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenseItems.forEach((expense, index) => {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${expense.name} - $${expense.amount}`;

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => editExpense(index));

        const deleteButton = document.createElement('button');
        deleteButton.style.marginRight="-300px"
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteExpense(index));

        expenseItem.appendChild(editButton);
        expenseItem.appendChild(deleteButton);
        expenseList.appendChild(expenseItem);
    });
}
