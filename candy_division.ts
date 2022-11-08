function divide_candy(candies: number) {
    let possibleResults: Array<number> = [];
    for (let index = 2; index <= candies; index++) {
        if (candies % index === 0) {
            possibleResults = [index, ...possibleResults]
        }
    }

    return possibleResults;
}
