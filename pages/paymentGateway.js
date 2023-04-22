import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useStateContext } from "@/hooks/context";
import { useRouter } from "next/router";
const PaymentGateway = () => {
    const [email, setEmail] = useState("");
    const { totalPrice } = useStateContext();

    const route = useRouter();
    const componentProps = {
        email,
        amount: totalPrice * 100,
        publicKey: "pk_test_d6ac81974b42368a4d3845ac89ba4ad84939000e",
        text: "Pay Now",
        onSuccess: () =>
            console.log("Thanks for doing business with us! Come back soon!!"),
        // onClose: () => route.push("/"),
    };
    return (
        <div className="checkout_container">
            <form
                id="paymentForm"
                className="form_container"
                onSubmit={(e) => e.preventDefault}
            >
                {/* <div className="form-group">
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        value={firstName}
                        type="text"
                        id="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div> */}
                {/* <div className="form-group">
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        value={lastName}
                        type="text"
                        id="last-name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        value={email}
                        type="email"
                        id="email-address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="last-name">Phone number:</label>
                    <input
                        value={phone}
                        type="text"
                        id="last-name"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div> */}
                <div className="paystack-btn">
                    <PaystackButton {...componentProps} />
                </div>
            </form>
        </div>
    );
};

export default PaymentGateway;
