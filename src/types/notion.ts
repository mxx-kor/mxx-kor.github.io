import {
  Heading1BlockObjectResponse,
  ParagraphBlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  QuoteBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  TemplateBlockObjectResponse,
  SyncedBlockBlockObjectResponse,
  ChildPageBlockObjectResponse,
  ChildDatabaseBlockObjectResponse,
  EquationBlockObjectResponse,
  CodeBlockObjectResponse,
  CalloutBlockObjectResponse,
  DividerBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
  EmbedBlockObjectResponse,
  BookmarkBlockObjectResponse,
  ImageBlockObjectResponse,
  VideoBlockObjectResponse,
  PdfBlockObjectResponse,
  FileBlockObjectResponse,
  AudioBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  UnsupportedBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type ChildrenBlockObjectResponse = {
  children?: CustomBlockObjectResponse[];
};

type ChildrenTableBlockObjectResponse = {
  children?: TableRowBlockObjectResponse[];
};

export type CustomBlockObjectResponse =
  | ParagraphBlockObjectResponse
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse
  | (BulletedListItemBlockObjectResponse & ChildrenBlockObjectResponse)
  | (NumberedListItemBlockObjectResponse & ChildrenBlockObjectResponse)
  | QuoteBlockObjectResponse
  | ToDoBlockObjectResponse
  | (ToggleBlockObjectResponse & ChildrenBlockObjectResponse)
  | TemplateBlockObjectResponse
  | SyncedBlockBlockObjectResponse
  | (ChildPageBlockObjectResponse & ChildrenBlockObjectResponse)
  | ChildDatabaseBlockObjectResponse
  | EquationBlockObjectResponse
  | CodeBlockObjectResponse
  | CalloutBlockObjectResponse
  | DividerBlockObjectResponse
  | BreadcrumbBlockObjectResponse
  | TableOfContentsBlockObjectResponse
  | (ColumnListBlockObjectResponse & ChildrenBlockObjectResponse)
  | (ColumnBlockObjectResponse & ChildrenBlockObjectResponse)
  | LinkToPageBlockObjectResponse
  | (TableBlockObjectResponse & ChildrenTableBlockObjectResponse)
  | TableRowBlockObjectResponse
  | EmbedBlockObjectResponse
  | BookmarkBlockObjectResponse
  | ImageBlockObjectResponse
  | VideoBlockObjectResponse
  | PdfBlockObjectResponse
  | FileBlockObjectResponse
  | AudioBlockObjectResponse
  | LinkPreviewBlockObjectResponse
  | UnsupportedBlockObjectResponse;
