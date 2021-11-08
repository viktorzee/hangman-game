const getPuzzle = async (wordCount) => {
    try {
        const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
        if (response.status === 200) {

         const data = await response.json();
         return data.puzzle;
        } else {
            throw new Error('unable to fetch puzzle');
        }
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

export default getPuzzle;