// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
]

const superbowlWin = (record) => {

    const result = record.find((l) => {
        if(l.result === "W") {
            return true
        } 
        else { 
            return false 
        }
    })

    if(result) { 
        return result.year 
    } else {
         return undefined 
        }

}