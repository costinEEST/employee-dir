import { useParams } from "react-router-dom";
import { useEmployee } from "../hooks/useEmployee";

export default function Employee() {
  const { employeeId } = useParams();

  const { data, error, isLoading } = useEmployee(
    "http://localhost:3030/employees",
    employeeId
  );

  if (error) return <p>The GET failed</p>;

  if (isLoading) return <p>Loading...</p>;

  console.log("employee data: ", data);

  return null;
}
