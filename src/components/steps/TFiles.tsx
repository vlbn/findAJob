import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TFiles = (theStep) => {
  const {
    type,
    step_id,
    description,
    mode,
    partial,
    error,
    files,
    processed_files,
    metadata_files,
    reload,
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
        <strong>Files:</strong>
        <ul>
          {files.map((elemento, index) => (
            <li className="mt-3" key={index}>
              {"►"}
              <mark>
                <i>{elemento}</i>
              </mark>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardContent>
        <strong>Processed Files:</strong>
      </CardContent>
      <CardContent>
        <strong>Metadata Files:</strong>
      </CardContent>
      <CardContent>
        <strong>Reload: </strong>
        {reload ? "Yes" : "No"}
      </CardContent>
    </Card>
  );
};

export default TFiles;
