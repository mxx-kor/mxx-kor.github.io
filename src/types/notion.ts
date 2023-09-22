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
  cover: ExternalType | FileType;
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
