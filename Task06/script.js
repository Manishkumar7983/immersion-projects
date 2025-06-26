document.getElementById('vehicleForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const vehicle = {
    vehicleName: document.getElementById('vehicleName').value,
    price: document.getElementById('price').value,
    image: document.getElementById('image').value,
    desc: document.getElementById('desc').value,
    brand: document.getElementById('brand').value
  };

  document.getElementById('output').innerHTML = `
    <h3>Vehicle Submitted:</h3>
    <p><strong>Name:</strong> ${vehicle.vehicleName}</p>
    <p><strong>Price:</strong> ₹${vehicle.price}</p>
    <p><strong>Image:</strong> <img src="${vehicle.image}" alt="Vehicle Image" width="100"/></p>
    <p><strong>Description:</strong> ${vehicle.desc}</p>
    <p><strong>Brand:</strong> ${vehicle.brand}</p>
  `;
});

document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const user = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value
  };

  document.getElementById('output').innerHTML += `
    <h3>User Submitted:</h3>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Age:</strong> ${user.age}</p>
  `;
});
