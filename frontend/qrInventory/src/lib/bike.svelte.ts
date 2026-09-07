// currently this drives the fields in the "add bicycle" page
// trying to keep this simple for now, but if needed, we could add
// type data for input validation
export const bike = $state({
    name: "",
    style: "",
    condition: "",
    year: ""
});