// const movements = [200, 1, -400, 23, 54, -73, -89, 90, 233];
const account1 = {
    'id': 112,
    'owner': 'Tran Duy Khanh',
    'movements': [200, 1, -400, 23, 54, -73, -89, 90, 233],
}
const account2 = {
    'id': 334,
    'owner': 'Do Thi My Hanh'
}
//Lấy nhưng chữ cái đầu của tên để làm username
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map((word) => word[0])
            .join('');
    });
}
const accounts = [account1, account2];
createUsernames(accounts)
console.log(accounts);

//Tính tổng thu chi
const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, move) => acc + move, 0);
    labelBalance.textContent = `${balance} VND`
}
calcDisplayBalance(account1.movements);
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
            }`;
        containerApp.style.opacity = 100;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        // Update UI
        updateUI(currentAccount);
    }
    });
    btnTransfer.addEventListener('click', function (e) {
        e.preventDefault();
        const amount = Number(inputTransferAmount.value);
        const receiverAcc = accounts.find(
            acc => acc.username === inputTransferTo.value
        );
        inputTransferAmount.value = inputTransferTo.value = '';
        if (
            amount > 0 &&
            receiverAcc &&
            currentAccount.balance >= amount &&
            receiverAcc?.username !== currentAccount.username
        ) {
            // Doing the transfer
            currentAccount.movements.push(-amount);
            receiverAcc.movements.push(amount);
            // Update UI
            updateUI(currentAccount);
        }
    });
    const bankDepositSum = accounts
        .flatMap(acc => acc.movements)
        .filter(mov => mov > 0)
        .reduce((sum, cur) => sum + cur, 0);
    console.log(bankDepositSum);
    // 2.
    // const numDeposits1000 = accounts
    // .flatMap(acc => acc.movements)
    // .filter(mov => mov >= 1000).length;
    const numDeposits1000 = accounts
        .flatMap(acc => acc.movements)
        .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
    console.log(numDeposits1000);
    // Prefixed ++ oeprator
    let a = 10;
    console.log(++a);
    console.log(a);
    // 3.
    const { deposits, withdrawals } = accounts
        .flatMap(acc => acc.movements)
        .reduce(
            (sums, cur) => {
                // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
                sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
                return sums;
            },
            { deposits: 0, withdrawals: 0 }
        );
    console.log(deposits, withdrawals);
    // 4.
    // this is a nice title -> This Is a Nice Title
    const convertTitleCase = function (title) {
        const capitzalize = str => str[0].toUpperCase() + str.slice(1);
        const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in',
            'with'];
        const titleCase = title
            .toLowerCase()
            .split(' ')
            .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
            .join(' ');
        return capitzalize(titleCase);
    };
    console.log(convertTitleCase('this is a nice title'));
    console.log(convertTitleCase('this is a LONG title but not too long'));
    console.log(convertTitleCase('and here is another title with an EXAMPLE'));