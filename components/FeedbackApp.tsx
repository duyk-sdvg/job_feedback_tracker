"use client";

import { useRef } from "react";
import AddDialogWindow from "./AddDialogWindow";
import FilterMenu from "./FilterMenu";
import Header from "./Heading";
import JobGrid from "./JobGrid";
import SearchFilter from "./SearchFilter";

export default function FeedbackApp() {
  const addDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="relative">
      <Header dialogRef={addDialogRef} />
      <FilterMenu />
      <SearchFilter />
      <JobGrid />
      <AddDialogWindow dialogRef={addDialogRef} />
    </div>
  );
}
