/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    
        let revPal = x.toString().split("");
        j = 0;
        i = revPal.length - 1;
        while (i > j) {
            [revPal[j], revPal[i]] = [revPal[i], revPal[j]];
            i--;
            j++;
        }
        revPal = parseInt(revPal.join(""));
        return x === revPal;
   
};