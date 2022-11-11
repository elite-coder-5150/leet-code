/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different
 day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

simple use the min and max to find the max profit
 * @param {*} prices 
 * @returns 
 */
const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}

// best solution
const _maxProfit = (prices) => {
    let profile = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > profile) {
            profile = prices[i] - minPrice;
        }
    }
}