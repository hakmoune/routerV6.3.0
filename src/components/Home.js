import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>Home</div>
      <div>
        <p>Iphone 14 Pro Max</p>
        <button
          onClick={() => navigate("/order-summary")}
          className="btn btn-success"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
