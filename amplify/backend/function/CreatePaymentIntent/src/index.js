const stripe = require("stripe")("sk_test_51Ir35MB5UGGGVx6uk2qLPfZv2QEU3093l4PRcffmE2j4Bfz73rzb3SQ8rKxkJijoQfs997bbKKnl1yKHzC4lzydq00eC9GVltT")

exports.handler = async (event) => {

    const {typeName, arguments} = event;

    if(typeName !== 'Mutation'){
        throw new Error("Request is not a mutation")
    }

    if(!arguments?.amount){
        throw new Error("Ammount argument is required")
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd',
      });

    return {
        clientSecret: paymentIntent.client_secret,

    }

};
