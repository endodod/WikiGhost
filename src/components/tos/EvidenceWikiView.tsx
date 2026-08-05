"use client";

import { WikiDocView } from "@/components/shared/WikiDocView";
import { tosEvidenceWiki } from "@/data/tos/evidenceWiki";

export function EvidenceWikiView() {
  return <WikiDocView doc={tosEvidenceWiki} chapterParam="tevidChapter" idPrefix="tos-evidence-wiki" />;
}
