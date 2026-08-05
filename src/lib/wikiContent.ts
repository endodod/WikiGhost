export interface WikiSection {
  heading: string;
  /** May contain **bold** / *italic* spans, rendered inline. */
  body?: string;
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
    /** 0-indexed rows that count as confirmed evidence — rendered with a highlight + a "Counts as Evidence?" column. */
    highlightRows?: number[];
    /** Per-row example media (image or audio clip), aligned by row index. Adds an "Example" column when present. */
    media?: ({ type: "image"; src: string } | { type: "audio"; src: string } | null)[];
  };
  /** Renders as a flagged callout instead of plain body text — for gaps/unconfirmed info worth calling out. */
  warning?: string;
}

export interface WikiDoc {
  title: string;
  summary: string;
  sections: WikiSection[];
}
