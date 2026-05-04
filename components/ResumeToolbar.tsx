'use client';
import Link from 'next/link';
import { renderInline } from '@/lib/renderInline';

interface ResumeToolbarProps {
  backHref: string;
  backBtn: string;
  printBtn: string;
  printBtnShort: string;
  toolbarHint: string;
}

export default function ResumeToolbar({
  backHref,
  backBtn,
  printBtn,
  printBtnShort,
  toolbarHint,
}: ResumeToolbarProps) {
  return (
    <div className="r-toolbar">
      <div
        className="r-toolbar-left"
        dangerouslySetInnerHTML={{ __html: renderInline(toolbarHint) }}
      />
      <div className="r-toolbar-actions">
        <Link href={backHref} className="r-tb-btn r-tb-btn-ghost">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>{backBtn}</span>
        </Link>
        <button
          className="r-tb-btn r-tb-btn-primary"
          onClick={() => window.print()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          <span className="btn-long">{printBtn}</span>
          <span className="btn-short">{printBtnShort}</span>
        </button>
      </div>
    </div>
  );
}
