int divisorSum(int n) {    
        int sum = 0;
        
        // loop from 1 to n and see if there are divisors
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        
        return sum;
}