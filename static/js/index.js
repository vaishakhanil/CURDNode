// Handling on click event when user clicks delete user
const deleteUser = (id) => {
    fetch(`/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                // Redirect to index page to display the user table
                location.replace('/');
            } else {
                // Display Error message
                alert('Error deleting user');
            }
        })
        .catch(err => {
            alert('Error deleting user');
        });
}