// Takes a date in string format ("yyyy-mm-dd")
// and a boolean (True/False) and saves it to
// Local Storage

export default function saveToStorage(date, bool){
    let data = JSON.parse(localStorage.getItem("data"))
    data[date] = bool
    localStorage.setItem("data", JSON.stringify(data))
    return;
}