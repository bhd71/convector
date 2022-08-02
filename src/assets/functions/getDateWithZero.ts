export default function getDateWithZero(str: string): string {
    return str.split('-').map((element) => {
        if (element.length === 1) return '0' + element
        return element
    }).join('-')
}