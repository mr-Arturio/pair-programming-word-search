// pair programming with Sean Gray. My version of transpose

const transpose = function (matrix) {
    // declare a variable to store the result
    const result = [];
    // loop over the columns in the matrix
    for (let j = 0; j < matrix[0].length; j++) {
        
        // creating a new array to store the elements of the current column
       const row = [];
        // loop over the rows in the matrix
        for (let i = 0; i < matrix.length; i++) {
            row.push(matrix[i][j]);
                  }
        result.push(row);
    }
    return result;
};

const wordSearch = (letters, word, toTranspose) => {
    if (toTranspose) {
        letters = transpose(letters);
    }

    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.split("").reverse().join("").includes(word)) {
            return true;
        }


    }

    return false;
};

module.exports = wordSearch;