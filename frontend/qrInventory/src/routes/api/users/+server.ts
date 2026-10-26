import sql from 'mssql'
import { mssqlToAgGrid } from '$lib/server/mssqlToAgGrid';

export async function GET() {
    // TODO request last 10 entered entries for user type from mssql server
    
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=localhost,1433;Database=Velocipe_Info;User Id=sa;Password=easyP@ssword;Encrypt=true;TrustServerCertificate=true')
        const queryResult = await sql.query`select * from donor`// where id = ${value}`
        // console.log(queryResult)
        return Response.json(mssqlToAgGrid(queryResult.recordset));
    } catch (err) {
        // ... error checks
        const time = new Date().toISOString()
        console.log(` ${time} mssql error: ${err}`)
        return Response.json({ error: 'Database query failed' }, { status: 500 });
    }

    // return Response.json({
    //     donorColumns: DonorColumns, donorRows: DonorRows,
    //     usersColumns: UsersColumns, usersRows: UsersRows
    // })
}