import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TQuery = (theStep) => {
  const { type, step_id, description, mode, partial, error, query, result } =
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
        <strong>Query: </strong>
        {query}
      </CardContent>
      <CardContent>
        <strong>Result: </strong>
        {result == null ? "Null" : result}
      </CardContent>
    </Card>
  );
};

export default TQuery;
