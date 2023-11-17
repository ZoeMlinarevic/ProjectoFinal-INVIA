import { MercadoPagoConfig, Payment } from 'mercadopago'; 

export const createOrder = async (req, res) => {
    const client = new MercadoPagoConfig ({ 
        accessToken: "TEST-292848219591476-111516-c288e12c88983ec499c96f34ef11e11c-1549608617" 
    }
);
    const payment = new Payment(client);

    await payment.create ({ 
        body: { 
            token: "CARD_TOKEN",
            transaction_amount: 12.34,
            description: 'Aprovecha esta increíble oferta!!',
            payment_method_id: 'visa',
            payer: {
                email: 'andres@gmail.com'
            },
        } 
    }).then(console.log).catch(console.log);

    res.send("create order")
}

