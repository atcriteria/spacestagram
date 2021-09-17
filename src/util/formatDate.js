// helper function for formatting date

import addLeadingZero from './addLeadingZero';

export default function formatDate(dateObject){

    const date = (dateObject) ? dateObject : new Date()
    const year = date.getFullYear()
    const month = addLeadingZero(date.getMonth() + 1)
    const day = addLeadingZero(date.getDate())
    return `${year}-${month}-${day}`
}