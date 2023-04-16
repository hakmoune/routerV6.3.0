import { useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();
  return (
    <div className="container">
      Details User: <strong>{id}</strong>
    </div>
  );
}
