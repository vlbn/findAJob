export enum ModeEnum {
  EDITING = "editing",
  EXPECTS = "expects",
  PROCESSING = "processing",
  OUTPUT = "output",
  IMPROVE = "improve",
}

export enum TypeEnum {
  INSTRUCTION = "instruction",
  MARKDOWN = "markdown",
  IMAGE = "image",
  CHAT = "chat",
  NOTE = "note",
  WEBPAGE = "webpage",
  FILES = "files",
  OBJECT = "object",
  QUERY = "query",
}

// Base Step interface
export interface Step {
  step_id: string;
  description?: string;
  type: TypeEnum;
  mode: ModeEnum;
  partial: boolean;
  error?: string;
}

// Specific Step types extending base Step
export interface MarkdownStep extends Step {
  markdown: string;
}

export interface InstructionStep extends Step {
  instruction: string;
  markdown?: string;
  mute: boolean;
  pinned: boolean;
  feedback?: string;
}

export interface WebpageStep extends Step {
  urls: string[];
  metadata_webpages?: { [key: string]: any };
  processed_webpages?: { [key: string]: string };
  reload?: boolean;
}

export interface FilesStep extends Step {
  files: string[];
  processed_files?: { [key: string]: string };
  metadata_files?: { [key: string]: any };
  reload?: boolean;
}

export interface NoteStep extends Step {
  markdown: string;
}

export interface ImageStep extends Step {
  instruction: string;
  filename?: string;
}

export interface JObjectStep extends Step {
  json_schema: { [key: string]: any };
  json_object?: { [key: string]: any };
}

export interface ChatStep extends Step {
  messages: { [key: string]: any }[];
}

export interface SearchStep extends Step {
  query: string;
  result?: { [key: string]: any };
}
