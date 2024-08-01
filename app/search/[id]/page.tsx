"use client";
import AbsNormalTransactions from "@/components/AbsNormalTransactions";
import BasicInfor from "@/components/BasicInfor";
import WarningClient from "@/components/WarningClient";

export default function SearchDetailPage() {
  return (
    <div>
      <BasicInfor />
      <WarningClient />
      <AbsNormalTransactions />
    </div>
  );
}
