export type PostInfo = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Slug: { id: string; type: "title"; title: { plain_text: string }[] };
    Title: {
      id: string;
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
    Tags: {
      id: string;
      type: "multi_select";
      multi_select: { id: string; name: string; color: string }[];
    };
    Summary: {
      id: string;
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
  };
  cover: ExternalType | FileType;
};

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
