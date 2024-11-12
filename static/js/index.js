const deleteUser = (id) => {
    fetch(`/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                alert('User deleted successfully');
                sessionStorage.removeItem('id')
                // window.location.reload(); // Reload page after delete
            } else {
                alert('Error deleting user');
            }
        })
        .catch(err => {
            alert('Error deleting user');
            console.error(err);
        });
}