export default function getDateString(): string[] {
    const now = new Date()
    const today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
    const pastYear = `${now.getFullYear() - 1}-${now.getMonth()+1}-${now.getDate()}`
    return [today, pastYear]
}