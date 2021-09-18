class Calculator {
    power(n, p) {
        return ((n < 0 || p < 0) ? "n and p should be non-negative" :  Math.pow(n, p))
    }
}