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
        <CardTitle>{type}</CardTitle>
        <CardDescription>{step_id}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardContent>{mode}</CardContent>
      <CardContent>{partial}</CardContent>
    </Card>
  );
};

export default TChat;
