<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import TitleRow from "$lib/components/TitleRow.svelte";
	import Grid from '$lib/components/Grid.svelte';
    import { onMount } from "svelte"


	// TODO: fetch columns and rows from database
	const columns = [
        { headerName: 'Course', field: 'course' },
        { headerName: 'Instructor', field: 'instructor' },
        { headerName: 'Duration', field: 'duration' },
        { headerName: 'Location', field: 'location' },
        { headerName: 'Rating', field: 'rating' }
    ];

	const rows = [
        {
            course: 'JavaScript Basics',
            instructor: 'John Doe',
            duration: '5 hours',
            location: 'Delhi',
            rating: '3'
        },
        {
            course: 'Svelte Fundamentals',
            instructor: 'Jane Smith',
            duration: '3 hours',
            location: 'Delhi',
            rating: '2'
        },
        {
            course: 'Advanced React',
            instructor: 'Jake White',
            duration: '6 hours',
            location: 'Delhi',
            rating: '5'
        }
    ];
</script>

<TitleRow title="Inventory Management" />

<Grid rowData={rows} columnDefs={columns} />

