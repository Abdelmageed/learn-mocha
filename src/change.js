module.exports.getChange = function (total, paid){
    var coins = [5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 2, 1];
    var remainder = paid - total;
    var change = [], i = 0;
    while(remainder){
        while(remainder >= coins[i]){
            remainder -= coins[i];
            change.push(coins[i]);
        }
        i++;
    }
    return change;
}