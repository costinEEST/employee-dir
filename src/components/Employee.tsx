import { useParams } from "react-router-dom";

export default function Employee() {
  const { employeeId } = useParams();
  console.log({ employeeId });

  return (
    <header>
      <h1>
        <em>Song River </em>
        Employee Directory
      </h1>
    </header>
  );
}
