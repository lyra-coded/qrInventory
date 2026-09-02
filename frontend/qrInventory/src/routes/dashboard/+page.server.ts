import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    // const { location } = event.params;

    // poor practice, use env later
    const response = await fetch(
        "http://localhost:8000/home/"
    );
    const responseBody = await response.json();

    console.log(responseBody)

    return {location: responseBody};
};