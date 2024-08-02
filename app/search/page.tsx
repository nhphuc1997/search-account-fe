"use client";
import FormSearch from "@/components/FormSearch";
import TableAccount from "@/components/TableAccounts";

export default function SearchIndexPage() {
  return (
    <div>
      <div className="p-6 border rounded-lg">
        <FormSearch />
      </div>

      <div className="py-3">
        <TableAccount />
      </div>
    </div>
  );
}
