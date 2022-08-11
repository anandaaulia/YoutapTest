class Solution {
    solve(s: string): boolean {
        const validInput = ["(", ")", ""];
        const constraints = 100000;
        let count = 0;

        for (let i=0; i<s.length; i++){
            if (validInput.includes(s[i]) && s.length <= constraints){
                if (s[i] === validInput[0]){
                    count +=1;
                };
                if (s[i] === validInput[1]){
                    count -=1;
                };
                if (count === -1){
                    return false;
                };
            }
            else {
                return false;
            }
        };
        if (count !== 0){
            return false;
        }
        return true;
    };
};

const word = "((()))()"
let solution = new Solution();
console.log(solution.solve(word));
