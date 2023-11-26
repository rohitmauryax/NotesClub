import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function PdfViewer() {
  const doc = [
    {
      uri: "https://drive.google.com/uc?id=10WUgCD6ClqW_br8DJ5xZNZbAXcW82yOQ&export=media",
      fileType: "pdf",
      fileName: "new",
    },
  ];
  return (
    <div>
      <DocViewer documents={doc} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
