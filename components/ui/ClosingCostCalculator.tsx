"use client";

import { useState, useMemo, useCallback } from "react";

type Mode = "buyer" | "seller";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumberInput(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("en-US");
}

function parseNumberInput(value: string): number {
  return Number(value.replace(/\D/g, "")) || 0;
}

interface CostLineItem {
  label: string;
  amount: number | null;
  note?: string;
}

// 2025 Title Insurance Rate Card:
// $2,150 base for a $200,000 property, +$20 for every $10,000 increase.
function estimateTitleInsurance(salePrice: number): number {
  if (salePrice <= 0) return 0;
  const base = 2150;
  const increments = Math.max(0, (salePrice - 200000) / 10000);
  return Math.round(base + increments * 20);
}

export default function ClosingCostCalculator() {
  const [mode, setMode] = useState<Mode>("buyer");
  const [priceInput, setPriceInput] = useState("350,000");
  const [commissionPercent, setCommissionPercent] = useState("5");
  const [mortgagePayoffInput, setMortgagePayoffInput] = useState("");

  const salePrice = parseNumberInput(priceInput);
  const commission = parseFloat(commissionPercent) || 0;
  const mortgagePayoff = parseNumberInput(mortgagePayoffInput);

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPriceInput(formatNumberInput(e.target.value));
    },
    [],
  );

  const handleMortgagePayoffChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMortgagePayoffInput(formatNumberInput(e.target.value));
    },
    [],
  );

  // Buyer: static list of flat/ranged costs. No totals, no price-driven math.
  const buyerItems: CostLineItem[] = [
    {
      label: "Lender Policy (Title Insurance)",
      amount: 595,
      note: "Billed at $595",
    },
    {
      label: "Attorney Fees",
      amount: null,
      note: "$750 - $1,500",
    },
    {
      label: "Recording Fees",
      amount: null,
      note: "$100 per document",
    },
    {
      label: "Property Tax Proration",
      amount: null,
      note: "105-110% of last year's tax bill",
    },
  ];

  // Seller: calculator with inputs and running total.
  const sellerItems = useMemo((): CostLineItem[] => {
    if (salePrice <= 0) return [];

    const items: CostLineItem[] = [];

    items.push({
      label: "Title Insurance (Owner's Policy)",
      amount: estimateTitleInsurance(salePrice),
      note: "2025 rate card — $2,150 base for $200k, +$20 per $10k",
    });

    items.push({
      label: "Attorney Fees",
      amount: null,
      note: "$750 - $1,500",
    });

    items.push({
      label: "Recording Fees",
      amount: 100,
      note: "Per document",
    });

    items.push({
      label: "Property Tax Proration",
      amount: null,
      note: "105-110% of last year's tax bill",
    });

    if (commission > 0) {
      const commissionAmount = salePrice * (commission / 100);
      items.push({
        label: `Realtor Commission (${commission}%)`,
        amount: commissionAmount,
      });
    }

    if (mortgagePayoff > 0) {
      items.push({
        label: "Mortgage Payoff",
        amount: mortgagePayoff,
      });
    }

    items.push({
      label: "Survey Fee",
      amount: 600,
    });

    return items;
  }, [salePrice, commission, mortgagePayoff]);

  const sellerTotal = useMemo(() => {
    return sellerItems.reduce((sum, item) => {
      if (item.amount !== null) return sum + item.amount;
      if (item.label === "Attorney Fees") return sum + 1125; // midpoint
      return sum;
    }, 0);
  }, [sellerItems]);

  const netProceeds =
    mode === "seller" && salePrice > 0 ? salePrice - sellerTotal : null;

  const inputClasses =
    "w-full rounded-lg border border-border px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-colors duration-200";
  const labelClasses = "block text-sm font-semibold text-primary mb-1.5";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex rounded-lg border border-border overflow-hidden mb-8">
        <button
          onClick={() => setMode("buyer")}
          className={`flex-1 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
            mode === "buyer"
              ? "bg-primary text-white"
              : "bg-white text-text-muted hover:bg-slate-50"
          }`}
        >
          Buyer
        </button>
        <button
          onClick={() => setMode("seller")}
          className={`flex-1 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
            mode === "seller"
              ? "bg-primary text-white"
              : "bg-white text-text-muted hover:bg-slate-50"
          }`}
        >
          Seller
        </button>
      </div>

      {mode === "buyer" ? (
        <div className="bg-light-gold rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-heading font-semibold mb-2">
            Typical Buyer Closing Costs
          </h3>
          <p className="text-sm text-text-muted mb-6">
            A guide to the line items buyers typically see at closing in
            Illinois. Contact our team for an estimate tailored to your
            transaction.
          </p>

          <div className="space-y-3">
            {buyerItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-2 border-b border-secondary/20 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary">
                    {item.label}
                  </p>
                  {item.note && (
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.note}
                    </p>
                  )}
                </div>
                <p className="text-sm font-semibold text-primary whitespace-nowrap">
                  {item.amount !== null
                    ? formatCurrency(item.amount)
                    : item.note || "Varies"}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Seller inputs */}
          <div className="space-y-6 mb-10">
            <div>
              <label className={labelClasses}>Sale Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                  $
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={priceInput}
                  onChange={handlePriceChange}
                  placeholder="350,000"
                  className={`${inputClasses} pl-8`}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Realtor Commission (%)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="10"
                  value={commissionPercent}
                  onChange={(e) => setCommissionPercent(e.target.value)}
                  className={`${inputClasses} pr-8`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Mortgage Payoff</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                  $
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={mortgagePayoffInput}
                  onChange={handleMortgagePayoffChange}
                  placeholder="0"
                  className={`${inputClasses} pl-8`}
                />
              </div>
              <p className="text-xs text-text-muted mt-1.5">
                Enter the payoff amount to see it reflected in your total.
              </p>
            </div>
          </div>

          {salePrice > 0 && sellerItems.length > 0 && (
            <div className="bg-light-gold rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-heading font-semibold mb-6">
                Estimated Seller Closing Costs
              </h3>

              <div className="space-y-3 mb-6">
                {sellerItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 py-2 border-b border-secondary/20 last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-primary">
                        {item.label}
                      </p>
                      {item.note && (
                        <p className="text-xs text-text-muted mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary whitespace-nowrap">
                      {item.amount !== null
                        ? formatCurrency(item.amount)
                        : item.note || "Varies"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-secondary/40 pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <p className="font-heading font-bold text-primary">
                    Total Estimated Costs
                  </p>
                  <p className="text-lg font-bold text-secondary">
                    {formatCurrency(sellerTotal)}
                  </p>
                </div>

                {netProceeds !== null && (
                  <div className="flex justify-between items-center">
                    <p className="font-heading font-bold text-primary">
                      Estimated Net Proceeds
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {formatCurrency(netProceeds)}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-text-muted mt-6 leading-relaxed">
                This calculator provides estimates only. Actual closing costs
                vary based on your specific transaction, lender requirements,
                and negotiated terms. Attorney fees are shown as a typical
                range. Property tax proration depends on your closing date and
                last year&apos;s tax bill. Contact REAL Law Group for a detailed
                estimate tailored to your transaction.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
