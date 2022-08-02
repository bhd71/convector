export default function getPastMonth() {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const now = new Date().getMonth()

    return [...month.slice(now, month.length), ...month.slice(0, now)]
}