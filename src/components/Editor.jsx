import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export default function App() {
  const editor = useCreateBlockNote();
  return (
    <BlockNoteView className="h-96 overflow-auto rounded-lg" editor={editor} />
  );
}
