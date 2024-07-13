import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TChat = (theStep) => {
  const { type, step_id, description, mode, partial, error, messages } =
    theStep.theStep;
  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>
          <strong>Type: </strong>
          {type}
        </CardTitle>
        <CardDescription>{step_id}</CardDescription>
      </CardHeader>
      <CardContent>
        <strong>Description: </strong>
        {description}
      </CardContent>
      <CardContent>
        <strong>Mode: </strong>
        {mode}
      </CardContent>
      <CardContent>
        <strong>Partial: </strong>
        {partial ? "Yes" : "No"}
      </CardContent>
      <CardContent>
        <strong>Error: </strong> {error == null ? "Null" : error}
      </CardContent>
      <CardContent>
        <strong>Messages:</strong>
        <ul>
          {messages.map((elemento, index) => (
            <li className="mt-3" key={index}>
              {elemento.role}{" "}
              <mark>
                <i>{elemento.content}</i>
              </mark>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TChat;
