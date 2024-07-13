import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TWebpage = (theStep) => {
  const {
    type,
    step_id,
    description,
    mode,
    partial,
    error,
    urls,
    metadata_webpages,
    processed_webpages,
    reload,
  } = theStep.theStep;
  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>
          <strong>Type: </strong> {type}
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
        <strong>URLs: </strong>
        <ul>
          {urls.map((elemento, index) => (
            <li className="mt-3" key={index}>
              {" "}
              <mark>
                <i>{elemento}</i>
              </mark>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardContent>
        <strong>Metadata: </strong>
      </CardContent>
      <CardContent>
        <strong>Processed Webpages: </strong>
      </CardContent>
      <CardContent>
        <strong>Reload: </strong>
        {reload ? "Yes" : "No"}
      </CardContent>
    </Card>
  );
};

export default TWebpage;
