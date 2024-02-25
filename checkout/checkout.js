document.addEventListener('DOMContentLoaded', function () {
    const shippingForm = document.getElementById('shippingForm');

    shippingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(shippingForm);

        // Optionally, you can process form data here before redirecting

        // Redirect to confirmation page
        window.location.href = 'confirmation';
    });
});
