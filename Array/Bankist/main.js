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
const calcDisplayBalance = function(movements) {
    const balance = movements.reduce((acc, move) => acc + move, 0);
    labelBalance.textContent = `${balance} VND`
}
calcDisplayBalance(account1.movements);