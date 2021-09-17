// A Helper function for adding leading
// zeroes to a passed number

// Pass: an integer
// Return: a string with a leading zero

export default function addLeadingZero(number){
    let stringifyNumber = number.toString()

    if(stringifyNumber.length === 1){
        return "0"+ stringifyNumber
    } else {
        return stringifyNumber
    }
}