import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function PdfViewer() {
  const doc = [
    {
      uri: "https://drive.google.com/file/d/1rVMITYUY_BI-YvL9pZYMKGcFkQ39vDCr/preview",
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
