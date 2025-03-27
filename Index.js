document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let users = JSON.parse(localStorage.getItem("users")) || [];

            let user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                contact: document.getElementById("contact").value,
                address: document.getElementById("address").value
            };

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                    </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});