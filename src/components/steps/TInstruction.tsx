import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TInstruction = (theStep) => {
  const {
    type,
    step_id,
    description,
    mode,
    partial,
    error,
    instruction,
    markdown,
    mute,
    pinned,
    feedback,
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
        <strong>Instruction: </strong> {instruction}
      </CardContent>
      <CardContent>
        <strong>Markdown: </strong> {markdown == null ? "Null" : markdown}
      </CardContent>
      <CardContent>
        <strong>Mute: </strong>
        {mute ? "Yes" : "No"}
      </CardContent>
      <CardContent>
        <strong>Pinned: </strong>
        {pinned ? "Yes" : "No"}
      </CardContent>
      <CardContent>
        <strong>Feedback: </strong>
        {feedback}
      </CardContent>
    </Card>
  );
};

export default TInstruction;
