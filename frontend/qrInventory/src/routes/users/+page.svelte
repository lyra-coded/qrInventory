<script>
import Grid from '$lib/components/Grid.svelte';
import Card from '$lib/components/Card.svelte';

// TODO: fetch user data from backend
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

    const UserColumns = [
        { headerName: 'User Name', field: 'username' },
        { headerName: 'User Password', field: 'password' },
        { headerName: 'Role', field: 'role' },
    ];

	const UserRows = [
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

</script>

<h1>Users</h1>

<Card title="Donors">
    {#snippet content()}
    <Grid rowData={DonorRows} columnDefs={DonorColumns} />
    {/snippet}
</Card>

<br />

<Card title="Users">
    {#snippet content()}
    <Grid rowData={UserRows} columnDefs={UserColumns} />
    {/snippet}
</Card>