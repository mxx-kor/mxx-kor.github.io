import { TableOfContentsEntry } from "@/libs/notion";

export type PostInfo = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Main: {
      checkbox: boolean;
      id: string;
      type: "checkbox";
    };
    Slug: { id: string; type: "title"; title: { plain_text: string }[] };
    Title: {
      id: string;
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
    Tags: TagType;
    Summary: {
      id: string;
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
  };
  cover: ExternalType | FileType | null;
};

type TagType = {
  id: string;
  type: "multi_select";
  multi_select: MultiSelectType[];
};

export type MultiSelectType = { id: string; name: string; color: string };

type ExternalType = {
  external: {
    url: string;
  };
  type: "external";
};

type FileType = {
  file: {
    expiry_time: string;
    url: string;
  };
  type: "file";
};

export type BlockType =
  | "page"
  | "text"
  | "bookmark"
  | "bulleted_list"
  | "numbered_list"
  | "header"
  | "sub_header"
  | "sub_sub_header"
  | "quote"
  | "equation"
  | "to_do"
  | "table_of_contents"
  | "divider"
  | "column_list"
  | "column"
  | "callout"
  | "toggle"
  | "image"
  | "embed"
  | "gist"
  | "video"
  | "figma"
  | "typeform"
  | "codepen"
  | "excalidraw"
  | "tweet"
  | "maps"
  | "pdf"
  | "audio"
  | "drive"
  | "file"
  | "code"
  | "collection_view"
  | "collection_view_page"
  | "transclusion_container"
  | "transclusion_reference"
  | "alias"
  | "table"
  | "table_row"
  | "external_object_instance"
  | "breadcrumb"
  | "miro"
  | string;

export type TocProps = {
  slug: string;
  tableOfContents: Array<TableOfContentsEntry>;
};
