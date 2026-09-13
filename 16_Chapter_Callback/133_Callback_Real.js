loginUser("geeta@example.com", "password123", (err, user) => {

    if (err) {
        return console.log("Login failed:", err);
    }

    fetchUserProfile(user.userId, (err, profile) => {

        if (err) {
            return console.log("Profile fetch failed:", err);
        }

        fetchAddress(profile.addressId, (err, address) => {

            if (err) {
                return console.log("Address fetch failed:", err);
            }

            fetchOrders(user.userId, (err, orders) => {

                if (err) {
                    return console.log("Orders fetch failed:", err);
                }

                fetchProduct(orders[0].productId, (err, product) => {

                    if (err) {
                        return console.log("Product fetch failed:", err);
                    }

                    checkStock(product.productId, (err, available) => {

                        if (err) {
                            return console.log("Stock check failed:", err);
                        }

                        if (!available) {
                            return console.log("Product is out of stock");
                        }

                        processPayment(product.price, (err, payment) => {

                            if (err) {
                                return console.log("Payment failed:", err);
                            }

                            sendEmail(
                                "geeta@example.com",
                                `Payment successful: ${payment.transactionId}`,
                                (err, message) => {

                                    if (err) {
                                        return console.log(
                                            "Email failed:",
                                            err
                                        );
                                    }

                                    console.log(
                                        "Order completed successfully!"
                                    );
                                }
                            );
                        });
                    });
                });
            });
        });
    });
});