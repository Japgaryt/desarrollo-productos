// Product Constructor
class Product {
    constructor(code, nombre, precio) {
        this.code = code;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>codigo</strong>: ${product.code} -
                    <strong>nombre</strong>: ${product.nombre} - 
                    <strong>precio</strong>: ${product.precio}-
                    <strong>imagen</strong>: ${product.inputFile1}-
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
        
    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'correctamente');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const code = document.getElementById('code').value,
            nombre = document.getElementById('nombre').value,
            precio = document.getElementById('precio').value;
            inputFile1=document.getElementById('inputFile1').value;

        // Create a new Oject Product
        const product = new Product(code, nombre, precio, inputFile1);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (code === '' || nombre === '' || precio === '' || inputFile1 ==='') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });






