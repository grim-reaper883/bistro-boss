import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

//add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat."/>
      <div>
        <Elements stripe={stripePromise}>

        </Elements>
      </div>
    </div>
  );
};

export default Payment;