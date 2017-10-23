module.exports = function findRotationPoint(words) {
    let left = 0,
        right = words.length - 1,
        middle = (right + left) / 2 | 0;
    while(right - left > 1) {
        if(words[left] > words[middle]) {
            right = middle;
        } else if(words[right] < words[middle]) {
            left = middle;
        } else {
            return left;
        }
        middle = (right + left) / 2 | 0;
    }
    return right;
};
