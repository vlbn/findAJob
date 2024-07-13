import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TObject = (theStep) => {
  const {
    type,
    step_id,
    description,
    mode,
    partial,
    error,
    json_schema,
    json_object,
  } = theStep.theStep;
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
        <strong>JSON Schema: </strong>
        <pre>{JSON.stringify(json_schema, null, 2)}</pre>
      </CardContent>
      <CardContent>
        <strong>JSON Object: </strong>
        <pre>{JSON.stringify(json_object, null, 2)}</pre>
      </CardContent>
    </Card>
  );
};

export default TObject;
