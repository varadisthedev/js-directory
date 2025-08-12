const fibonacci = (num) => {
    let fibSeries = [0, 1];
    for(let i = 2; i < num; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries;
};

const seriesLength = 10;
console.log(fibonacci(seriesLength).join(', '));
