const mercadopago = require('mercadopago'); // fallo en el createOrder

const createOrder = async (req, res) => {
    mercadopago.MercadoPagoConfig ({
        access_token: "TEST-292848219591476-111516-c288e12c88983ec499c96f34ef11e11c-1549608617",
    });

    const result = await mercadopago.Payment ({
        items: [
            {
                title: 'Mi producto',
                unit_price: 100,
                currency_id: "ARS",
                quantity: 1,
            }
        ]
    });

    console.log(result)
    res.send("create order")
}

module.exports = {
    createOrder: createOrder,
}