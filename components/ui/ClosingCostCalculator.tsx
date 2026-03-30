"use client";

import { useState, useMemo, useCallback } from "react";

type Mode = "buyer" | "seller";
type County = "cook" | "dupage" | "will" | "kane" | "lake" | "other";

const COUNTY_OPTIONS: { value: County; label: string }[] = [
  { value: "cook", label: "Cook County" },
  { value: "dupage", label: "DuPage County" },
  { value: "will", label: "Will County" },
  { value: "kane", label: "Kane County" },
  { value: "lake", label: "Lake County" },
  { value: "other", label: "Other" },
];

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

export default function ClosingCostCalculator() {
  const [mode, setMode] = useState<Mode>("buyer");
  const [priceInput, setPriceInput] = useState("350,000");
  const [county, setCounty] = useState<County>("cook");
  const [isChicago, setIsChicago] = useState(false);
  const [commissionPercent, setCommissionPercent] = useState("5");
  const [loanInput, setLoanInput] = useState("280,000");

  const salePrice = parseNumberInput(priceInput);
  const commission = parseFloat(commissionPercent) || 0;

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPriceInput(formatNumberInput(e.target.value));
    },
    [],
  );

  const handleLoanChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoanInput(formatNumberInput(e.target.value));
    },
    [],
  );

  const costs = useMemo((): CostLineItem[] => {
    if (salePrice <= 0) return [];

    const items: CostLineItem[] = [];

    // State Transfer Tax: $0.50 per $500 = 0.1%
    const stateTransferTax = salePrice * 0.001;
    items.push({
      label: "State Transfer Tax",
      amount: stateTransferTax,
      note: "$0.50 per $500",
    });

    // County Transfer Tax: $0.25 per $500 = 0.05%
    const countyTransferTax = salePrice * 0.0005;
    items.push({
      label: "County Transfer Tax",
      amount: countyTransferTax,
      note: "$0.25 per $500",
    });

    // City/Municipal Transfer Tax (Chicago only)
    if (isChicago && county === "cook") {
      if (mode === "seller") {
        const chicagoSellerTax = salePrice * (3.75 / 500);
        items.push({
          label: "Chicago Transfer Tax (Seller)",
          amount: chicagoSellerTax,
          note: "$3.75 per $500",
        });
      } else {
        const chicagoBuyerTax = salePrice * (7.5 / 500);
        items.push({
          label: "Chicago Transfer Tax (Buyer)",
          amount: chicagoBuyerTax,
          note: "$7.50 per $500",
        });
      }
    }

    // Title Insurance
    const titleInsurance = salePrice * 0.0025;
    items.push({
      label: "Title Insurance (Owner's Policy)",
      amount: titleInsurance,
      note: "Estimated ~$2.50 per $1,000",
    });

    // Attorney Fees
    items.push({ label: "Attorney Fees", amount: null, note: "$500 - $1,500" });

    // Recording Fees
    items.push({ label: "Recording Fees", amount: 100 });

    if (mode === "buyer") {
      // Survey
      items.push({ label: "Survey", amount: null, note: "$400 - $600" });

      // Home Inspection
      items.push({
        label: "Home Inspection",
        amount: null,
        note: "$300 - $500",
      });
    }

    if (mode === "seller" && commission > 0) {
      const commissionAmount = salePrice * (commission / 100);
      items.push({
        label: `Realtor Commission (${commission}%)`,
        amount: commissionAmount,
      });
    }

    // Property Tax Proration
    items.push({
      label: "Property Tax Proration",
      amount: null,
      note: "Varies based on closing date and tax bill",
    });

    return items;
  }, [salePrice, county, isChicago, mode, commission]);

  const totalEstimated = useMemo(() => {
    return costs.reduce((sum, item) => {
      if (item.amount !== null) return sum + item.amount;
      // Use midpoint of ranges for estimate
      if (item.label === "Attorney Fees") return sum + 1000;
      if (item.label === "Survey") return sum + 500;
      if (item.label === "Home Inspection") return sum + 400;
      return sum;
    }, 0);
  }, [costs]);

  const netProceeds = mode === "seller" ? salePrice - totalEstimated : null;

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

      {/* Inputs */}
      <div className="space-y-6 mb-10">
        <div>
          <label className={labelClasses}>
            {mode === "buyer" ? "Purchase Price" : "Sale Price"}
          </label>
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

        {mode === "buyer" && (
          <div>
            <label className={labelClasses}>Loan Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={loanInput}
                onChange={handleLoanChange}
                placeholder="280,000"
                className={`${inputClasses} pl-8`}
              />
            </div>
          </div>
        )}

        <div>
          <label className={labelClasses}>County</label>
          <select
            value={county}
            onChange={(e) => {
              setCounty(e.target.value as County);
              if (e.target.value !== "cook") setIsChicago(false);
            }}
            className={inputClasses}
          >
            {COUNTY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {county === "cook" && (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="chicago-toggle"
              checked={isChicago}
              onChange={(e) => setIsChicago(e.target.checked)}
              className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary/50"
            />
            <label
              htmlFor="chicago-toggle"
              className="text-sm text-text-muted cursor-pointer"
            >
              Property is within Chicago city limits
            </label>
          </div>
        )}

        {mode === "seller" && (
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
        )}
      </div>

      {/* Results */}
      {salePrice > 0 && costs.length > 0 && (
        <div className="bg-light-gold rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-heading font-semibold mb-6">
            Estimated {mode === "buyer" ? "Buyer" : "Seller"} Closing Costs
          </h3>

          <div className="space-y-3 mb-6">
            {costs.map((item, i) => (
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
                {formatCurrency(totalEstimated)}
              </p>
            </div>

            {mode === "seller" && netProceeds !== null && (
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
            This calculator provides estimates only. Actual closing costs vary
            based on your specific transaction, lender requirements, and
            negotiated terms. Attorney fees, survey costs, and inspection fees
            are shown as typical ranges. Property tax proration depends on your
            closing date and the most recent tax bill. Contact REAL Law Group
            for a detailed estimate tailored to your transaction.
          </p>
        </div>
      )}
    </div>
  );
}
