import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import SharedTitle from "../../../Components/SharedTitle";
import CheckOutForm from "./CheckOutForm";


// todo:add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SharedTitle subHeading='Please pay to eat' heading='Payment'></SharedTitle>
            <div>
             <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
             </Elements>
            </div>
        </div>
    );
};

export default Payment;