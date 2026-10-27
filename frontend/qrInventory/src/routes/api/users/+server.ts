import sql from 'mssql'

const allowedUserTypes: Array<string> = ["users", "donor"] as const

// GET /api/users
// - userType: type of user data to return 
export async function GET({url}) {
    // get request time
    const time = new Date().toISOString()

    // validate input
    const userTypeFromUrl = url.searchParams.get('userType') || ""
    const userType = allowedUserTypes.find(t => t === userTypeFromUrl)

    if (!userType) {
        let errStr = `invalid user type: ${userType}`
        console.log(`${time} ${errStr}`)
        return Response.json({error: errStr}, {status: 400})
    }

    // return data
    try {
        await sql.connect('Server=localhost,1433;Database=Velocipe_Info;User Id=sa;Password=easyP@ssword;Encrypt=true;TrustServerCertificate=true')
        const queryResult = await sql.query(`select * from ${userType}`)// where id = ${value}`
        return Response.json(queryResult.recordset);
    } catch (err) {
        // ... error checks
        console.log(` ${time} mssql error: ${err}`)
        return Response.json({ error: 'Database query failed' }, { status: 500 });
    }
}