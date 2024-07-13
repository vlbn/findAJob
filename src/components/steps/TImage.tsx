import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TImage = (theStep) => {
  const {
    type,
    step_id,
    description,
    mode,
    partial,
    error,
    instruction,
    filename,
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
        <strong>Instruction: </strong>
        {instruction}
      </CardContent>
      <CardContent>
        <strong>File Name: </strong>
        {filename}
      </CardContent>
    </Card>
  );
};

export default TImage;
