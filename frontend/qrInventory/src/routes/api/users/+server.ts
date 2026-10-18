export function GET() {
    // TODO request last 10 entered entries for user type from mssql server

    const DonorColumns = [
        { headerName: 'Type', field: 'type' },
        { headerName: 'First Name', field: 'firstname' },
        { headerName: 'Last Name', field: 'lastname' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Phone', field: 'phone' },
        { headerName: 'Address', field: 'address' },
        // Maybe this should be last donation time?
        { headerName: 'Donation DateTime??', field: 'datetime' }
    ];

	const DonorRows = [
        {
            type: 'individual',
            firstname: 'John',
            lastname: 'Doe',
            email: 'john@gmail.com',
            phone: '123-456-7890',
            address: 'Baltimore',
            datetime: '1-2-23 00:00:00'
        },
        {
            type: 'Organization',
            firstname: 'Jane',
            lastname: 'Business',
            email: 'jane@business.com',
            phone: '098-765-4321',
            address: 'Boston',
            datetime: '10-20-30 00:00:00'
        }
    ];

    const UsersColumns = [
        { headerName: 'User Name', field: 'username' },
        { headerName: 'User Password', field: 'password' },
        { headerName: 'Role', field: 'role' },
    ];

	const UsersRows = [
        {
            username: 'StarsAndSteel',
            password: 'hehehe',
            role: 'Admin',
        },
        {
            username: 'Agatha',
            password: 'ahtaga',
            role: 'Member',
        },
        {
            username: 'John Doe',
            password: 'JohnDoesBikeShare',
            role: 'Owner',
        }
    ];

    return Response.json({
        donorColumns: DonorColumns, donorRows: DonorRows,
        usersColumns: UsersColumns, usersRows: UsersRows
    })
}