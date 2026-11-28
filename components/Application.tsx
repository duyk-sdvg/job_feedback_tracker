"use client";

import { useRef } from "react";
import AddDialogWindow from "./AddDialogWindow";
import FilterMenu from "./FilterMenu";
import Header from "./Heading";
import JobGrid from "./JobGrid";
import SearchFilter from "./SearchFilter";
import { ApplicationResponse } from "@/app/types/applications";

export default function ApplicationApp({
  applicationData,
}: {
  applicationData: ApplicationResponse[];
}) {
  const addDialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="relative">
      <Header dialogRef={addDialogRef} />
      <FilterMenu />
      <SearchFilter />
      <JobGrid applicationData={applicationData} />
      <AddDialogWindow dialogRef={addDialogRef} />
    </div>
  );
}
