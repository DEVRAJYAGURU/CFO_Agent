# Dexpense CFO — Intelligent Personal Finance & Wealth Platform

A CFO-grade personal financial planning, cash-flow forecasting, liquidity control, budgeting, and wealth management platform tailored for everyday Indian households.

---

## 🏛️ Financial Architecture & Core Principles

Dexpense CFO transforms basic expense tracking into an audited, double-entry compliant personal financial management system.

### 1. Strict Accounting Classifications
The platform enforces strict separation between:
- **Income**: Earned & realized inflow (increases P&L and liquid assets).
- **Expense**: True consumption outflows (reduces P&L and liquid assets).
- **Internal Transfers**: Cash sweeps between verified accounts (e.g. Primary Bank &rarr; SBI Reserve or Cash withdrawal). **Zero impact on P&L and Net Worth**.
- **Liability Settlements**: Paying credit card statements reduces outstanding liabilities. **No duplicate expense recorded**.
- **Savings & Capital Allocations**: Moving cash to Recurring Deposits (RD 5K, RD 1K) or Share Market SIPs increases Balance Sheet investment assets.

### 2. Smart "Safe-to-Spend Today" Engine
Calculates a conservative daily spending ceiling:
$$\text{Safe-to-Spend Today} = \frac{\text{Liquid Cash} - \text{Remaining Essential Bills} - \text{Emergency Buffer}}{\text{Days Remaining until Next Payday}}$$

### 3. Rolling 30-Day Cash-Flow Forecasting
Simulates daily closing cash trajectories, maps scheduled EMI due dates, detects potential balance shortfalls, and gives actionable CFO recommendations before any liquidity crisis occurs.

### 4. FP&A Budget & Variance Analysis
Zero-based budgeting with:
- Line-item monthly budget limits.
- **Favourable (F) vs Unfavourable (U)** variance analysis.
- Early warning alerts at 80% and 100% utilization.

### 5. Certified Accounting Statements
- **Income & Expenditure Statement (P&L)**: Operating income, living expenses, and net surplus.
- **Statement of Cash Flows (Direct Method)**: Cash from operations, wealth formation, and debt settlement.
- **Balance Sheet & Household Net Worth**: Verified liquid accounts + RD holdings + Equities + LIC cash value minus liabilities.

---

---

## 🛠️ Production Testing & Automated Verification

A comprehensive automated test suite validates all 10 accounting calculation groups and state transitions:

```bash
npm test
```

### Test Coverage Highlights (29/29 Automated Tests Passed):
1. **Baseline Liquidity Integrity**: Matches Excel baseline (`₹67,425` total liquid cash).
2. **Safe-to-Spend Daily Formula**: Dynamic flexible budget calculation with positive runway.
3. **Transaction Life-Cycle & Balance Rollback**: Expense booking, audit-safe edit re-entry, and soft reversal refunds.
4. **Inter-Account Movement Reversals**: Reversal of bank transfers and credit card liability settlements restores original source and destination balances.
5. **Scheduled Obligations Scheduler**: Auto-booking of paid commitments to ledger.
6. **Wealth Portfolio & Net Worth**: Dynamic aggregation of guaranteed RDs, equity SIPs, and life insurance.
7. **FP&A Budget & Variance**: Favourable (F) vs Unfavourable (U) evaluation with threshold indicators.
8. **Certified Financial Statements**: Dynamic generation of Income & Expenditure (P&L), Cash Flows (Direct Method), and Balance Sheet.
9. **Risk & Runway Diagnostics**: Dynamic computation of FOIR, Liquidity Buffer Days, and Savings-to-Debt Ratio.
10. **JSON Backup & Restore**: Full JSON package export and validation on import.

---

## 🚀 Running Locally

```bash
cd Dexpense
npm start
```
Open in browser: **`http://localhost:5050`**

Or run the test suite:
```bash
npm test
```
