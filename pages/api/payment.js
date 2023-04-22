import PaystackPop from "@paystack/inline-js";

const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const generateRef = () => {
    let Ref = "";
    for (let i = 0; i < 6; i++) {
        Ref += alpha.at(Math.random() * alpha.length);
    }
    Ref += Math.floor(Math.random() * 1000000000 + 1);
    console.log(Ref);
    return Ref;
};
export const payWithPaystack = (totalCost, email) => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: process.env.PAYSTACK_PUBLIC_KEY, // Replace with your public key
        email: email,
        amount: totalCost * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        currency: "USD", // Use GHS for Ghana Cedis or USD for US Dollars
        ref: generateRef(), // Replace with a reference you generated
        onSuccess: (transaction) => {
            const reference = transaction.reference;
            alert("Payment complete! Reference: " + reference);
        },
        onCancel: () => {
            alert("Transaction was not completed, window closed.");
        },
    });
};
