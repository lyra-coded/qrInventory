export type GridData = { cols: { headerName: string; field: string }[]; rows: any[];};

export async function mssqlToAgGrid(sqlResponse) {
    let colsHeaderNames: Array<string> = Object.keys(sqlResponse[0])
    let rows: any = sqlResponse
    // replace underscores with spaces
    colsHeaderNames = colsHeaderNames.map(element => element.replaceAll('_', ' '))
    // turn capitalize first letter of each word
    colsHeaderNames = colsHeaderNames.map(element => element.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' '))

    // console.log(colsHeaderNames)

    // let colsHeaderFields = colsHeaderNames.map(element => element.replaceAll(' ', ''));
    let colsHeaderFields = Object.keys(sqlResponse[0])

    let cols = colsHeaderNames.map((k, i) => ({
        headerName: k, field: colsHeaderFields[i]
    }));

    // console.log(cols)

    return {cols, rows}
}