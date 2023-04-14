import { useNavigate } from "react-router-dom";

export function OrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>Order Confirmed! Thank you</div>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Go Back
      </button>
    </div>
  );
}
