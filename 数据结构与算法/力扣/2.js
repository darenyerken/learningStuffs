// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

//贪心算法版
function maxProfit(arr) {
    const n = arr.length
    let pro = 0
    let buy = 0
    let sell = 0
    while( buy < n-1) {
        sell = buy
        while( arr[sell+1]>=arr[sell]) {
            sell++
        }
        pro += arr[sell] - arr[buy]
        buy = sell + 1
    }
    return pro
}

const arr = [7,6,5,4,3,2,1,2,3,4,5,6,45,756,234,7,62,5,23,5,]
const result = maxProfit(arr)
console.log(result)