/**
 * DEXPENSE CFO — INTELLIGENT PERSONAL FINANCE & WEALTH ENGINE
 * Senior CA & CFO Grade Financial Planning, Liquidity Forecasting,
 * Double-Entry Accounting, Budget Variance, and Wealth Management.
 */

// ============================================================================
// CLEAN SLATE DEFAULT STATE (Zero Balances & Fresh Ledgers)
// ============================================================================
const CFO_EMPTY_STATE = {
  version: '2.0.0',
  nextPayday: '2026-10-31',
  emergencyBufferTarget: 10000,

  accounts: {
    'Primary Bank': {
      id: 'acc_primary',
      name: 'Primary Salary Account',
      type: 'BANK',
      balance: 0,
      lastVerified: new Date().toISOString().split('T')[0],
      verifiedBy: 'Fresh Account Setup'
    },
    'SBI Account': {
      id: 'acc_sbi',
      name: 'Savings Reserve Account',
      type: 'BANK',
      balance: 0,
      lastVerified: new Date().toISOString().split('T')[0],
      verifiedBy: 'Fresh Account Setup'
    },
    'Cash': {
      id: 'acc_cash',
      name: 'Cash in Hand (Wallet)',
      type: 'CASH',
      balance: 0,
      lastVerified: new Date().toISOString().split('T')[0],
      verifiedBy: 'Physical Count'
    },
    'Credit Card': {
      id: 'acc_cc',
      name: 'Primary Credit Card',
      type: 'LIABILITY',
      limit: 100000,
      outstandingDues: 0,
      dueDate: '2026-10-28',
      lastVerified: new Date().toISOString().split('T')[0],
      verifiedBy: 'Fresh Account Setup'
    }
  },

  obligations: [],

  budgets: {
    'EMI & Rent': { limit: 25000, nature: 'ESSENTIAL', alertThreshold: 100 },
    'Food & Living': { limit: 8000, nature: 'ESSENTIAL', alertThreshold: 90 },
    'Savings & RD': { limit: 10000, nature: 'ESSENTIAL', alertThreshold: 100 },
    'Credit Card': { limit: 5000, nature: 'ESSENTIAL', alertThreshold: 85 },
    'Transfers': { limit: 5000, nature: 'ESSENTIAL', alertThreshold: 90 },
    'Investments': { limit: 5000, nature: 'DISCRETIONARY', alertThreshold: 100 },
    'Vehicles': { limit: 3000, nature: 'ESSENTIAL', alertThreshold: 80 },
    'Bills & Utilities': { limit: 3000, nature: 'ESSENTIAL', alertThreshold: 80 },
    'Miscellaneous': { limit: 4000, nature: 'DISCRETIONARY', alertThreshold: 80 }
  },

  wealthAssets: [],

  transactions: []
};

// ============================================================================
// VERIFIED EXCEL DEMONSTRATION SEED DATA
// ============================================================================
const CFO_DEMO_STATE = {
  version: '2.0.0',
  nextPayday: '2026-10-30',
  emergencyBufferTarget: 12785,

  accounts: {
    'Primary Bank': {
      id: 'acc_primary',
      name: 'Primary Salary Account (HDFC)',
      type: 'BANK',
      balance: 57425,
      lastVerified: '2026-10-23',
      verifiedBy: 'Passbook Reconciliation'
    },
    'SBI Account': {
      id: 'acc_sbi',
      name: 'SBI Reserve Account',
      type: 'BANK',
      balance: 8000,
      lastVerified: '2026-10-23',
      verifiedBy: 'Netbanking Statement'
    },
    'Cash': {
      id: 'acc_cash',
      name: 'Cash in Hand (Wallet)',
      type: 'CASH',
      balance: 2000,
      lastVerified: '2026-10-23',
      verifiedBy: 'Physical Count'
    },
    'Credit Card': {
      id: 'acc_cc',
      name: 'HDFC Regalia Credit Card',
      type: 'LIABILITY',
      limit: 150000,
      outstandingDues: 4800,
      dueDate: '2026-10-28',
      lastVerified: '2026-10-23',
      verifiedBy: 'Monthly e-Statement'
    }
  },

  obligations: [
    { id: 'ob_1', name: 'Home EMI', category: 'EMI & Rent', dayOfMonth: 2, amount: 18500, account: 'Primary Bank', priority: 'MANDATORY', isAutoDebit: true, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_2', name: 'Home Rent', category: 'EMI & Rent', dayOfMonth: 3, amount: 9000, account: 'Primary Bank', priority: 'MANDATORY', isAutoDebit: false, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_3', name: 'Tiffin Payment', category: 'Food & Living', dayOfMonth: 5, amount: 3500, account: 'Primary Bank', priority: 'ESSENTIAL', isAutoDebit: false, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_4', name: 'RD - 5K (Recurring Deposit)', category: 'Savings & RD', dayOfMonth: 7, amount: 5000, account: 'Primary Bank', priority: 'WEALTH', isAutoDebit: true, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_5', name: 'RD - 1K (Recurring Deposit)', category: 'Savings & RD', dayOfMonth: 7, amount: 1000, account: 'Primary Bank', priority: 'WEALTH', isAutoDebit: true, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_6', name: 'LIC EMI', category: 'Savings & RD', dayOfMonth: 10, amount: 2500, account: 'Primary Bank', priority: 'PROTECTION', isAutoDebit: true, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_7', name: 'Credit Card Bill Settlement', category: 'Credit Card', dayOfMonth: 12, amount: 4800, account: 'Primary Bank', priority: 'MANDATORY', isAutoDebit: false, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_8', name: 'Share Market (Monthly SIP)', category: 'Investments', dayOfMonth: 14, amount: 5000, account: 'Primary Bank', priority: 'WEALTH', isAutoDebit: true, nature: 'DISCRETIONARY', status: 'PAID' },
    { id: 'ob_9', name: 'Transfer to SBI Reserve', category: 'Transfers', dayOfMonth: 18, amount: 4000, account: 'Primary Bank', priority: 'LIQUIDITY', isAutoDebit: false, nature: 'ESSENTIAL', status: 'PAID' },
    { id: 'ob_10', name: 'Bike Services & Maintenance', category: 'Vehicles', dayOfMonth: 26, amount: 1450, account: 'Primary Bank', priority: 'VARIABLE', isAutoDebit: false, nature: 'ESSENTIAL', status: 'UPCOMING' },
    { id: 'ob_11', name: 'Utilities & Other Discretionary', category: 'Miscellaneous', dayOfMonth: 28, amount: 1200, account: 'Cash', priority: 'VARIABLE', isAutoDebit: false, nature: 'DISCRETIONARY', status: 'UPCOMING' }
  ],

  budgets: {
    'EMI & Rent': { limit: 27500, nature: 'ESSENTIAL', alertThreshold: 100 },
    'Food & Living': { limit: 4000, nature: 'ESSENTIAL', alertThreshold: 90 },
    'Savings & RD': { limit: 8500, nature: 'ESSENTIAL', alertThreshold: 100 },
    'Credit Card': { limit: 5000, nature: 'ESSENTIAL', alertThreshold: 85 },
    'Transfers': { limit: 5000, nature: 'ESSENTIAL', alertThreshold: 90 },
    'Investments': { limit: 5000, nature: 'DISCRETIONARY', alertThreshold: 100 },
    'Vehicles': { limit: 2000, nature: 'ESSENTIAL', alertThreshold: 80 },
    'Miscellaneous': { limit: 3000, nature: 'DISCRETIONARY', alertThreshold: 80 }
  },

  wealthAssets: [
    { id: 'wa_1', name: 'General Emergency Reserve', category: 'Liquid Cash / Bank', monthlyAllocation: 5000, accumulatedValue: 85000, targetAmount: 200000, returnRate: '6.5% p.a.', icon: 'fa-vault' },
    { id: 'wa_2', name: 'RD - 5K (Recurring Deposit)', category: 'Guaranteed Fixed Deposit', monthlyAllocation: 5000, accumulatedValue: 60000, targetAmount: 120000, returnRate: '7.1% p.a.', icon: 'fa-piggy-bank' },
    { id: 'wa_3', name: 'RD - 1K (Recurring Deposit)', category: 'Guaranteed Fixed Deposit', monthlyAllocation: 1000, accumulatedValue: 12000, targetAmount: 24000, returnRate: '7.1% p.a.', icon: 'fa-piggy-bank' },
    { id: 'wa_4', name: 'LIC Jeevan Labh (Life Insurance)', category: 'Insurance & Protection', monthlyAllocation: 2500, accumulatedValue: 85000, targetAmount: 500000, returnRate: 'Guaranteed Bonus', icon: 'fa-shield-heart' },
    { id: 'wa_5', name: 'Share Market (Nifty 50 Index SIP)', category: 'Equity & Growth', monthlyAllocation: 5000, accumulatedValue: 145000, targetAmount: 1000000, returnRate: '12.8% Hist.', icon: 'fa-chart-line' }
  ],

  transactions: [
    { id: 'tx_salary_oct', date: '2026-10-01', time: '09:00', type: 'INCOME', category: 'Salary & Wages', nature: 'ESSENTIAL', desc: 'Monthly Salary Credit (Excel Oct Baseline)', amount: 67425, account: 'Primary Bank', destAccount: null, mode: 'Netbanking', status: 'CONFIRMED', reconciled: true, remark: 'Confirmed inflow from corporate payroll' },
    { id: 'tx_emi_oct', date: '2026-10-02', time: '11:15', type: 'EXPENSE', category: 'EMI & Rent', nature: 'ESSENTIAL', desc: 'Home EMI', amount: 18500, account: 'Primary Bank', destAccount: null, mode: 'Auto-Debit', status: 'CONFIRMED', reconciled: true, remark: 'HDFC Home Loan repayment installment' },
    { id: 'tx_rent_oct', date: '2026-10-03', time: '14:20', type: 'EXPENSE', category: 'EMI & Rent', nature: 'ESSENTIAL', desc: 'Home Rent', amount: 9000, account: 'Primary Bank', destAccount: null, mode: 'Netbanking', status: 'CONFIRMED', reconciled: true, remark: 'Monthly apartment lease settlement' },
    { id: 'tx_tiffin_oct', date: '2026-10-05', time: '19:40', type: 'EXPENSE', category: 'Food & Living', nature: 'ESSENTIAL', desc: 'Tiffin Payment', amount: 3500, account: 'Primary Bank', destAccount: null, mode: 'UPI', status: 'CONFIRMED', reconciled: true, remark: 'Monthly lunch and dinner tiffin service' },
    { id: 'tx_rd5k_oct', date: '2026-10-07', time: '06:00', type: 'SAVINGS_ALLOCATION', category: 'Savings & RD', nature: 'ESSENTIAL', desc: 'RD - 5K Recurring Deposit', amount: 5000, account: 'Primary Bank', destAccount: 'wa_2', mode: 'Auto-Debit', status: 'CONFIRMED', reconciled: true, remark: 'Fixed wealth capital allocation (Guaranteed 7.1%)' },
    { id: 'tx_rd1k_oct', date: '2026-10-07', time: '06:00', type: 'SAVINGS_ALLOCATION', category: 'Savings & RD', nature: 'ESSENTIAL', desc: 'RD - 1K Recurring Deposit', amount: 1000, account: 'Primary Bank', destAccount: 'wa_3', mode: 'Auto-Debit', status: 'CONFIRMED', reconciled: true, remark: 'Secondary recurring deposit contribution' },
    { id: 'tx_cc_oct', date: '2026-10-10', time: '16:30', type: 'LIABILITY_SETTLEMENT', category: 'Credit Card', nature: 'ESSENTIAL', desc: 'Credit Card Bill Settlement', amount: 4800, account: 'Primary Bank', destAccount: 'Credit Card', mode: 'Netbanking', status: 'CONFIRMED', reconciled: true, remark: 'Full statement dues cleared. Zero finance charges.' },
    { id: 'tx_urmit_oct', date: '2026-10-12', time: '13:00', type: 'TRANSFER', category: 'Transfers', nature: 'ESSENTIAL', desc: 'Transfer to Urmit', amount: 2000, account: 'Primary Bank', destAccount: null, mode: 'UPI', status: 'CONFIRMED', reconciled: true, remark: 'Personal inter-family loan/transfer' },
    { id: 'tx_shares_oct', date: '2026-10-14', time: '10:00', type: 'SAVINGS_ALLOCATION', category: 'Investments', nature: 'DISCRETIONARY', desc: 'Share Market (Nifty 50 SIP)', amount: 5000, account: 'Primary Bank', destAccount: 'wa_5', mode: 'Netbanking', status: 'CONFIRMED', reconciled: true, remark: 'Long-term equity wealth accumulation' },
    { id: 'tx_sbi_oct', date: '2026-10-18', time: '15:20', type: 'TRANSFER', category: 'Transfers', nature: 'ESSENTIAL', desc: 'Transfer to SBI Account (Reserve)', amount: 4000, account: 'Primary Bank', destAccount: 'SBI Account', mode: 'Netbanking', status: 'CONFIRMED', reconciled: true, remark: 'Internal treasury liquidity sweep into secondary buffer' }
  ]
};

// Default is now CLEAN SLATE
const CFO_INITIAL_STATE = CFO_EMPTY_STATE;
const CFO_STORAGE_KEY = 'DEXPENSE_CFO_STATE_V3';

// ============================================================================
// CFO FINANCE ENGINE CLASS
// ============================================================================
class CFOFinanceEngine {
  constructor() {
    this.state = this.loadState();
    this.activeView = 'dashboard-view';
    this.selectedStatement = 'pl';

    this.initDOM();
    this.bindEvents();
    this.renderAll();
  }

  loadState() {
    const raw = localStorage.getItem(CFO_STORAGE_KEY);
    if (!raw) {
      this.saveState(CFO_INITIAL_STATE);
      return JSON.parse(JSON.stringify(CFO_INITIAL_STATE));
    }
    try {
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      console.error('State parse failed, falling back to seed:', e);
      this.saveState(CFO_INITIAL_STATE);
      return JSON.parse(JSON.stringify(CFO_INITIAL_STATE));
    }
  }

  saveState(customState = null) {
    const s = customState || this.state;
    localStorage.setItem(CFO_STORAGE_KEY, JSON.stringify(s));
  }

  // Clear all data to fresh empty slate
  clearAllData() {
    if (confirm('CLEAN ALL DATA: Wipe all accounts, transactions, obligations, and investments to start with a fresh clean slate?')) {
      this.state = JSON.parse(JSON.stringify(CFO_EMPTY_STATE));
      this.saveState();
      this.renderAll();
      this.showToast('All data cleared! Clean slate initialized with ₹0 balances.', 'warning');
    }
  }

  // Restore Excel demo sample data
  loadDemoData() {
    if (confirm('Load verified Excel baseline demo data? This will load the sample October salary, EMIs, and wealth portfolio.')) {
      this.state = JSON.parse(JSON.stringify(CFO_DEMO_STATE));
      this.saveState();
      this.renderAll();
      this.showToast('Restored Excel demo baseline data!', 'success');
    }
  }

  // Format INR Currency (e.g. ₹67,425)
  formatCurrency(num, showDecimals = false) {
    const val = Number(num) || 0;
    return '₹' + val.toLocaleString('en-IN', {
      maximumFractionDigits: showDecimals ? 2 : 0,
      minimumFractionDigits: showDecimals ? 2 : 0
    });
  }

  // DOM Selection
  initDOM() {
    // Nav Items
    this.navItems = document.querySelectorAll('.nav-item');
    this.views = document.querySelectorAll('.app-view');
    this.sidebar = document.getElementById('sidebar');
    this.sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
    this.sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

    // Theme & Actions
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.themeLabel = document.getElementById('themeLabel');
    this.btnExportAllData = document.getElementById('btnExportAllData');
    this.btnClearAllData = document.getElementById('btnClearAllData');
    this.btnResetData = document.getElementById('btnResetData');
    this.btnManageAccounts = document.getElementById('btnManageAccounts');
    this.sidebarAccountsList = document.getElementById('sidebarAccountsList');

    // Modals
    this.transactionModal = document.getElementById('transactionModal');
    this.btnQuickRecord = document.getElementById('btnQuickRecord');
    this.btnLedgerAddExpense = document.getElementById('btnLedgerAddExpense');
    this.btnTxClose = document.getElementById('btnTxClose');
    this.btnTxCancel = document.getElementById('btnTxCancel');
    this.transactionForm = document.getElementById('transactionForm');
    this.txTypeButtons = document.querySelectorAll('.tx-type-btn');

    // Accounts Modal
    this.accountsModal = document.getElementById('accountsModal');
    this.btnAccClose = document.getElementById('btnAccClose');
    this.btnAccCancel = document.getElementById('btnAccCancel');
    this.accountsEditList = document.getElementById('accountsEditList');

    // Budget Modal
    this.budgetModal = document.getElementById('budgetModal');
    this.btnConfigureBudgets = document.getElementById('btnConfigureBudgets');
    this.btnBudgetClose = document.getElementById('btnBudgetClose');
    this.btnBudgetCancel = document.getElementById('btnBudgetCancel');

    // Obligations Modal
    this.obligationModal = document.getElementById('obligationModal');
    this.btnAddObligationModal = document.getElementById('btnAddObligationModal');
    this.btnObligationClose = document.getElementById('btnObligationClose');
    this.btnObligationCancel = document.getElementById('btnObligationCancel');
    this.obligationForm = document.getElementById('obligationForm');

    // Wealth Modal
    this.wealthModal = document.getElementById('wealthModal');
    this.btnAddWealthAsset = document.getElementById('btnAddWealthAsset');
    this.btnWealthClose = document.getElementById('btnWealthClose');
    this.btnWealthCancel = document.getElementById('btnWealthCancel');
    this.wealthForm = document.getElementById('wealthForm');

    // Backup File Import
    this.btnImportData = document.getElementById('btnImportData');
    this.importFileInput = document.getElementById('importFileInput');

    // Statement Tabs
    this.stmtTabs = document.querySelectorAll('.statement-tabs .btn-toggle');
    this.statementSheetContainer = document.getElementById('statementSheetContainer');

    // Set saved theme
    const theme = localStorage.getItem('DEXPENSE_THEME') || 'dark';
    this.setTheme(theme);
  }

  // Event Bindings
  bindEvents() {
    // Navigation
    this.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetView = item.getAttribute('data-view');
        this.switchView(targetView);
        if (window.innerWidth <= 768) this.sidebar.classList.remove('open');
      });
    });

    // Mobile Sidebar
    this.sidebarOpenBtn?.addEventListener('click', () => this.sidebar.classList.add('open'));
    this.sidebarCloseBtn?.addEventListener('click', () => this.sidebar.classList.remove('open'));

    // Theme Toggle
    this.themeToggleBtn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      this.setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Modal Triggers
    this.btnQuickRecord?.addEventListener('click', () => this.openTransactionModal());
    this.btnLedgerAddExpense?.addEventListener('click', () => this.openTransactionModal());
    this.btnTxClose?.addEventListener('click', () => this.closeTransactionModal());
    this.btnTxCancel?.addEventListener('click', () => this.closeTransactionModal());
    this.transactionForm?.addEventListener('submit', (e) => this.handleTransactionSubmit(e));

    // Transaction Type Radio Buttons in Modal
    this.txTypeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.txTypeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const type = btn.getAttribute('data-type');
        this.handleTypeSelectionChange(type);
      });
    });

    // Accounts Modal
    this.btnManageAccounts?.addEventListener('click', () => this.openAccountsModal());
    this.btnAccClose?.addEventListener('click', () => this.closeAccountsModal());
    this.btnAccCancel?.addEventListener('click', () => this.closeAccountsModal());

    // Budget Modal
    this.btnConfigureBudgets?.addEventListener('click', () => this.openBudgetModal());
    this.btnBudgetClose?.addEventListener('click', () => this.closeBudgetModal());
    this.btnBudgetCancel?.addEventListener('click', () => this.closeBudgetModal());

    // Obligations Modal
    this.btnAddObligationModal?.addEventListener('click', () => this.openObligationModal());
    this.btnObligationClose?.addEventListener('click', () => this.closeObligationModal());
    this.btnObligationCancel?.addEventListener('click', () => this.closeObligationModal());
    this.obligationForm?.addEventListener('submit', (e) => this.handleObligationSubmit(e));

    // Wealth Modal
    this.btnAddWealthAsset?.addEventListener('click', () => this.openWealthModal());
    this.btnWealthClose?.addEventListener('click', () => this.closeWealthModal());
    this.btnWealthCancel?.addEventListener('click', () => this.closeWealthModal());
    this.wealthForm?.addEventListener('submit', (e) => this.handleWealthSubmit(e));

    // Import / Restore Backup
    this.btnImportData?.addEventListener('click', () => this.importFileInput?.click());
    this.importFileInput?.addEventListener('change', (e) => this.handleDataImport(e));

    // Statements Switcher
    this.stmtTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.stmtTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.selectedStatement = tab.getAttribute('data-statement');
        this.renderStatementSheet();
      });
    });

    // Payday edit
    document.getElementById('btnEditPayday')?.addEventListener('click', () => {
      const current = this.state.nextPayday;
      const val = prompt('Enter next expected salary date (YYYY-MM-DD):', current);
      if (val && !isNaN(new Date(val).getTime())) {
        this.state.nextPayday = val;
        this.saveState();
        this.renderAll();
        this.showToast(`Updated next salary date to ${val}`, 'success');
      }
    });

    // Export & Reset & Clear
    this.btnExportAllData?.addEventListener('click', () => this.exportFullAccountingJSON());
    this.btnClearAllData?.addEventListener('click', () => this.clearAllData());
    this.btnResetData?.addEventListener('click', () => this.loadDemoData());

    // Ledger Filter inputs
    document.getElementById('ledgerSearchInput')?.addEventListener('input', () => this.renderLedgerTable());
    document.getElementById('filterType')?.addEventListener('change', () => this.renderLedgerTable());
    document.getElementById('filterCategory')?.addEventListener('change', () => this.renderLedgerTable());
    document.getElementById('filterAccount')?.addEventListener('change', () => this.renderLedgerTable());
    document.getElementById('btnExportLedgerCSV')?.addEventListener('click', () => this.exportLedgerCSV());
    document.getElementById('btnViewAllObligations')?.addEventListener('click', () => this.switchView('obligations-view'));

    // Modal background close
    window.addEventListener('click', (e) => {
      if (e.target === this.transactionModal) this.closeTransactionModal();
      if (e.target === this.accountsModal) this.closeAccountsModal();
      if (e.target === this.budgetModal) this.closeBudgetModal();
      if (e.target === this.obligationModal) this.closeObligationModal();
      if (e.target === this.wealthModal) this.closeWealthModal();
    });
  }

  // Set Theme
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('DEXPENSE_THEME', theme);
    if (this.themeLabel) {
      this.themeLabel.textContent = theme === 'dark' ? 'Dark Theme' : 'Light Theme';
    }
  }

  // Switch Views
  switchView(viewId) {
    this.activeView = viewId;
    this.navItems.forEach(n => {
      if (n.getAttribute('data-view') === viewId) n.classList.add('active');
      else n.classList.remove('active');
    });

    this.views.forEach(v => {
      if (v.id === viewId) v.classList.add('active');
      else v.classList.remove('active');
    });

    const headers = {
      'dashboard-view': { title: 'Daily Financial Position', sub: 'Real-time liquidity, daily spending runway, and committed obligations' },
      'ledger-view': { title: 'Transaction Ledger & Audit Trail', sub: 'Strict double-entry compliant ledger with running available balance' },
      'forecast-view': { title: 'Cash-Flow Forecast (30D Horizon)', sub: 'Projected closing cash curve, scheduled debt dates, and liquidity dips' },
      'budget-view': { title: 'Budget & Variance Analysis (FP&A)', sub: 'Favourable (F) vs Unfavourable (U) evaluation with early-warning thresholds' },
      'obligations-view': { title: 'Upcoming Obligations & EMIs', sub: 'Comprehensive schedule of EMIs, rents, insurance, and recurring commitments' },
      'wealth-view': { title: '2026 Wealth & Savings Portfolio', sub: 'Dedicated tracking for RDs, life insurance, equities, and household net worth' },
      'statements-view': { title: 'Certified Financial Statements', sub: 'Accounting-quality Income & Expenditure, Cash Flows, and Balance Sheet' },
      'risk-view': { title: 'Household Risk & Runway Diagnostics', sub: 'Stress testing income interruptions, debt burdens, and emergency resilience' }
    };

    const h = headers[viewId] || headers['dashboard-view'];
    document.getElementById('pageHeading').textContent = h.title;
    document.getElementById('pageSubHeading').textContent = h.sub;

    if (viewId === 'statements-view') this.renderStatementSheet();
    if (viewId === 'forecast-view') this.renderForecastView();
    if (viewId === 'budget-view') this.renderBudgetView();
    if (viewId === 'wealth-view') this.renderWealthView();
    if (viewId === 'obligations-view') this.renderObligationsView();
    if (viewId === 'risk-view') this.renderRiskView();
  }

  // ==========================================================================
  // CORE FINANCIAL CALCULATIONS (CFO LEVEL)
  // ==========================================================================

  // Total Liquid Cash (Excluding credit card lines)
  getLiquidCash() {
    let total = 0;
    Object.values(this.state.accounts).forEach(acc => {
      if (acc.type === 'BANK' || acc.type === 'CASH') {
        total += Number(acc.balance) || 0;
      }
    });
    return total;
  }

  // Total Incurred P&L Operating Expenses (Strictly excluding Transfers & Debt Settles)
  getTotalExpenses() {
    return this.state.transactions
      .filter(tx => tx.type === 'EXPENSE' && tx.status !== 'REVERSED')
      .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);
  }

  // Total Inflow Income
  getTotalIncome() {
    return this.state.transactions
      .filter(tx => tx.type === 'INCOME' && tx.status !== 'REVERSED')
      .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);
  }

  // Days remaining until next payday
  getDaysUntilPayday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const payday = new Date(this.state.nextPayday);
    payday.setHours(0, 0, 0, 0);
    const diffTime = payday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  }

  // Remaining Unpaid Essential Obligations before next payday
  getRemainingCommittedBills() {
    return this.state.obligations
      .filter(ob => ob.status === 'UPCOMING' && ob.nature === 'ESSENTIAL')
      .reduce((sum, ob) => sum + (Number(ob.amount) || 0), 0);
  }

  // Calculate Smart "Safe-to-Spend Today"
  calculateSafeToSpendToday() {
    const liquidCash = this.getLiquidCash();
    const remainingBills = this.getRemainingCommittedBills();
    const emergencyBuffer = Number(this.state.emergencyBufferTarget) || 0;
    const daysLeft = this.getDaysUntilPayday();

    // Formula: (Liquid Funds - Essential Remaining Obligations - Emergency Reserve) / Days Left
    const flexibleBudgetPool = Math.max(0, liquidCash - remainingBills - emergencyBuffer);
    const dailyAllowance = Math.round(flexibleBudgetPool / daysLeft);

    // Calculate how much was already spent today on discretionary expenses
    const todayStr = new Date().toISOString().split('T')[0];
    const spentToday = this.state.transactions
      .filter(tx => tx.date === todayStr && tx.type === 'EXPENSE' && tx.nature === 'DISCRETIONARY' && tx.status !== 'REVERSED')
      .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    const remainingToday = Math.max(0, dailyAllowance - spentToday);

    return {
      dailyAllowance,
      spentToday,
      remainingToday,
      liquidCash,
      remainingBills,
      emergencyBuffer,
      flexibleBudgetPool,
      daysLeft
    };
  }

  // ==========================================================================
  // RENDERING MODULES
  // ==========================================================================
  renderAll() {
    this.renderSidebarAccounts();
    this.renderDashboardHero();
    this.renderKPIs();
    this.renderDashboardObligations();
    this.renderCFOAdvisory();
    this.renderLedgerTable();
    this.renderBudgetView();
    this.renderWealthView();
    this.renderObligationsView();
    this.renderStatementSheet();
    this.renderRiskView();
  }

  // Render Sidebar Accounts
  renderSidebarAccounts() {
    if (!this.sidebarAccountsList) return;
    let html = '';
    Object.values(this.state.accounts).forEach(acc => {
      const isLiability = acc.type === 'LIABILITY';
      const balStr = isLiability ? this.formatCurrency(acc.outstandingDues) : this.formatCurrency(acc.balance);
      const balClass = isLiability ? 'text-danger' : 'text-primary';
      const prefix = isLiability ? 'Due: ' : '';

      html += `
        <div class="account-mini-row" title="Last verified: ${acc.lastVerified} via ${acc.verifiedBy}">
          <span class="account-mini-name">${acc.name.split(' ')[0]} ${acc.name.split(' ')[1] || ''}</span>
          <span class="account-mini-bal mono ${balClass}">${prefix}${balStr}</span>
        </div>
      `;
    });
    this.sidebarAccountsList.innerHTML = html;
  }

  // Render Safe-to-Spend Hero (Daily Financial Position)
  renderDashboardHero() {
    const calc = this.calculateSafeToSpendToday();

    // Header Elements
    const heroVal = document.getElementById('heroSafeToSpendToday');
    if (heroVal) heroVal.textContent = calc.remainingToday.toLocaleString('en-IN');

    // Formula Strip
    const formLiquid = document.getElementById('formLiquidCash');
    const formBills = document.getElementById('formCommittedBills');
    const formBuff = document.getElementById('formEmergencyBuffer');
    const formFlex = document.getElementById('formFlexiblePool');
    const formDays = document.getElementById('formDaysLeft');

    if (formLiquid) formLiquid.textContent = this.formatCurrency(calc.liquidCash);
    if (formBills) formBills.textContent = this.formatCurrency(calc.remainingBills);
    if (formBuff) formBuff.textContent = this.formatCurrency(calc.emergencyBuffer);
    if (formFlex) formFlex.textContent = this.formatCurrency(calc.flexibleBudgetPool);
    if (formDays) formDays.textContent = `${calc.daysLeft} Days`;

    // Spent Today Gauge
    const gaugeSpent = document.getElementById('gaugeTodaySpent');
    const gaugeRemaining = document.getElementById('gaugeTodayRemaining');
    const gaugeFill = document.getElementById('gaugeBarFill');
    const gaugeStatus = document.getElementById('gaugeStatusText');

    if (gaugeSpent) gaugeSpent.textContent = this.formatCurrency(calc.spentToday);
    if (gaugeRemaining) gaugeRemaining.textContent = this.formatCurrency(calc.remainingToday);

    const pctSpent = calc.dailyAllowance > 0 ? Math.min(100, Math.round((calc.spentToday / calc.dailyAllowance) * 100)) : 0;
    if (gaugeFill) gaugeFill.style.width = `${pctSpent}%`;

    if (gaugeStatus) {
      if (pctSpent < 75) {
        gaugeStatus.textContent = 'Well Controlled';
        gaugeStatus.className = 'gauge-status-badge status-good';
      } else if (pctSpent <= 100) {
        gaugeStatus.textContent = 'Near Daily Ceiling';
        gaugeStatus.className = 'gauge-status-badge status-warning';
      } else {
        gaugeStatus.textContent = 'Ceiling Exceeded';
        gaugeStatus.className = 'gauge-status-badge status-danger';
      }
    }

    // Topbar Payday label
    const paydayTxt = document.getElementById('topbarPaydayText');
    if (paydayTxt) {
      const pDate = new Date(this.state.nextPayday);
      const mName = pDate.toLocaleString('default', { month: 'short' });
      paydayTxt.textContent = `${pDate.getDate()} ${mName} (${calc.daysLeft} Days Left)`;
    }
  }

  // Render 4 CFO KPI Cards
  renderKPIs() {
    const liquidCash = this.getLiquidCash();
    const totalIncome = this.getTotalIncome();
    const totalExpenses = this.getTotalExpenses();
    const netSurplus = totalIncome - totalExpenses;
    const reservedBills = this.getRemainingCommittedBills();

    // Savings Allocations
    const totalSavingsInvestments = this.state.transactions
      .filter(tx => tx.type === 'SAVINGS_ALLOCATION' && tx.status !== 'REVERSED')
      .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    const savingsRate = totalIncome > 0 ? ((totalSavingsInvestments / totalIncome) * 100).toFixed(1) : 0;

    // Emergency Runway (Months)
    // Monthly burn rate = Essential obligations sum
    const monthlyBurn = this.state.obligations
      .filter(ob => ob.nature === 'ESSENTIAL')
      .reduce((sum, ob) => sum + (Number(ob.amount) || 0), 0);

    const runwayMonths = monthlyBurn > 0 
      ? (liquidCash / monthlyBurn).toFixed(1) 
      : (liquidCash > 0 ? '99+' : '0.0');

    // Update Elements
    const kpiLiquid = document.getElementById('kpiLiquidBalance');
    if (kpiLiquid) kpiLiquid.textContent = this.formatCurrency(liquidCash);

    const kpiReserved = document.getElementById('kpiReservedBills');
    if (kpiReserved) kpiReserved.textContent = this.formatCurrency(reservedBills);

    // Mini breakdown for upcoming bills
    const emiRentSum = this.state.obligations
      .filter(ob => ob.category === 'EMI & Rent' && ob.status === 'UPCOMING')
      .reduce((sum, ob) => sum + ob.amount, 0);
    const rdsLicSum = this.state.obligations
      .filter(ob => ob.category === 'Savings & RD' && ob.status === 'UPCOMING')
      .reduce((sum, ob) => sum + ob.amount, 0);
    const otherSum = Math.max(0, reservedBills - emiRentSum - rdsLicSum);

    const elEmiRent = document.getElementById('kpiEmiRentVal');
    const elRdsLic = document.getElementById('kpiRdsLicVal');
    const elOther = document.getElementById('kpiCardsLivingVal');

    if (elEmiRent) elEmiRent.textContent = this.formatCurrency(emiRentSum);
    if (elRdsLic) elRdsLic.textContent = this.formatCurrency(rdsLicSum);
    if (elOther) elOther.textContent = this.formatCurrency(otherSum);

    const kpiSurplus = document.getElementById('kpiNetSurplus');
    if (kpiSurplus) {
      kpiSurplus.textContent = this.formatCurrency(netSurplus);
      kpiSurplus.className = `kpi-cfo-val mono ${netSurplus >= 0 ? 'text-primary' : 'text-danger'}`;
    }

    const kpiInflow = document.getElementById('kpiInflowVal');
    if (kpiInflow) kpiInflow.textContent = this.formatCurrency(totalIncome);

    const kpiOutflow = document.getElementById('kpiOutflowVal');
    if (kpiOutflow) kpiOutflow.textContent = this.formatCurrency(totalExpenses);

    const kpiRate = document.getElementById('kpiSavingsRateVal');
    if (kpiRate) kpiRate.textContent = `${savingsRate}%`;

    const kpiRunway = document.getElementById('kpiRunwayMonths');
    if (kpiRunway) kpiRunway.textContent = `${runwayMonths} Months`;

    const kpiBurn = document.getElementById('kpiMonthlyBurnVal');
    if (kpiBurn) kpiBurn.textContent = `${this.formatCurrency(monthlyBurn)}/mo`;

    // Primary, SBI, Cash Mini breakdown
    const pBank = this.state.accounts['Primary Bank']?.balance || 0;
    const sbi = this.state.accounts['SBI Account']?.balance || 0;
    const csh = this.state.accounts['Cash']?.balance || 0;

    const elP = document.getElementById('kpiPrimaryBankVal');
    const elS = document.getElementById('kpiSbiVal');
    const elC = document.getElementById('kpiCashVal');

    if (elP) elP.textContent = this.formatCurrency(pBank);
    if (elS) elS.textContent = this.formatCurrency(sbi);
    if (elC) elC.textContent = this.formatCurrency(csh);

    // Dynamic CFO Health Score
    const elHealthScore = document.getElementById('sidebarHealthScore');
    const elHealthBar = document.getElementById('sidebarHealthBar');
    const elHealthStatus = document.getElementById('sidebarHealthStatus');
    if (elHealthScore && elHealthBar && elHealthStatus) {
      if (totalIncome === 0 && liquidCash === 0) {
        elHealthScore.textContent = '100/100';
        elHealthBar.style.width = '100%';
        elHealthStatus.textContent = 'Clean Slate Ready';
      } else {
        let score = 50;
        if (savingsRate >= 20) score += 20;
        else if (savingsRate >= 10) score += 10;
        if (Number(runwayMonths) >= 3.0) score += 20;
        else if (Number(runwayMonths) >= 1.5) score += 10;
        if (netSurplus >= 0) score += 10;
        score = Math.min(100, Math.max(20, score));

        elHealthScore.textContent = `${score}/100`;
        elHealthBar.style.width = `${score}%`;
        elHealthStatus.textContent = score >= 80 ? 'Strong Liquidity Buffer' : (score >= 60 ? 'Moderate Health' : 'Liquidity Attention Needed');
      }
    }
  }

  // Render Upcoming Obligations on Dashboard
  renderDashboardObligations() {
    const tbody = document.getElementById('dashObligationsTableBody');
    if (!tbody) return;

    const list = this.state.obligations.slice(0, 6);
    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center" style="padding: 32px 16px; color: var(--text-muted);">
            <i class="fa-regular fa-calendar-check" style="font-size: 1.8rem; margin-bottom: 8px; display: block; opacity: 0.45; color: var(--color-primary);"></i>
            <span>No upcoming commitments scheduled. Click <strong>"View Schedule"</strong> to add rent or EMIs.</span>
          </td>
        </tr>
      `;
      return;
    }

    let html = '';

    list.forEach(ob => {
      const isPaid = ob.status === 'PAID';
      const statusPill = isPaid
        ? '<span class="status-pill status-verified"><i class="fa-solid fa-check"></i> Paid</span>'
        : '<span class="status-pill" style="background: var(--color-warning-light); color: var(--color-warning);"><i class="fa-regular fa-clock"></i> Scheduled</span>';

      html += `
        <tr>
          <td class="mono">${ob.dayOfMonth}th of month</td>
          <td class="text-bold">${ob.name}</td>
          <td><span class="nature-pill nature-${ob.nature.toLowerCase()}">${ob.nature}</span></td>
          <td class="text-right mono text-bold ${isPaid ? 'text-muted' : 'text-warning'}">${this.formatCurrency(ob.amount)}</td>
          <td><small class="text-muted">${ob.account}</small></td>
          <td class="text-center">${statusPill}</td>
          <td class="text-center">
            ${isPaid 
              ? '<span class="text-muted" style="font-size: 0.75rem;">Reconciled</span>'
              : `<button class="btn btn-outline-sm" onclick="window.cfoApp.markObligationPaid('${ob.id}')"><i class="fa-solid fa-check"></i> Pay</button>`
            }
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  // Senior CA / CFO Insights & Advisory Feed
  renderCFOAdvisory() {
    const feed = document.getElementById('cfoAdvisoryFeed');
    if (!feed) return;

    const liquid = this.getLiquidCash();
    const reserved = this.getRemainingCommittedBills();
    const days = this.getDaysUntilPayday();
    const safeCalc = this.calculateSafeToSpendToday();

    let insights = [];
    if (this.state.transactions.length === 0) {
      insights = [
        {
          type: 'info',
          icon: 'fa-wand-magic-sparkles',
          title: 'Clean Financial Slate Initialized',
          desc: 'Your workspace is 100% clean and ready for real records. Click "Verify Balance" (gear icon in sidebar) to set your initial bank passbook balance.'
        },
        {
          type: 'safe',
          icon: 'fa-circle-plus',
          title: 'Record First Income or Expense',
          desc: 'Click "+ Record Transaction" to log salary credits, payments, or expenditures. Real-time double-entry accounting updates your ledger immediately.'
        },
        {
          type: 'info',
          icon: 'fa-calendar-check',
          title: 'Schedule Your Recurring Obligations',
          desc: 'Head to "Upcoming Obligations & EMIs" to schedule recurring bills (Rent, Home Loan, Insurance, Subscriptions) to enable real-time Safe-to-Spend calculations.'
        }
      ];
    } else {
      insights = [
        {
          type: 'safe',
          icon: 'fa-shield-halved',
          title: 'Working Capital & Liquidity Buffer Healthy',
          desc: `You hold ${this.formatCurrency(liquid)} across confirmed accounts against only ${this.formatCurrency(reserved)} in remaining commitments before your ${this.state.nextPayday} salary. Zero risk of short-term overdraft.`
        },
        {
          type: 'info',
          icon: 'fa-lightbulb',
          title: `Daily Spending Guideline: ₹${safeCalc.dailyAllowance}/day`,
          desc: `With ${days} days remaining in the cycle, allocating up to ₹${safeCalc.dailyAllowance} daily will keep your ${this.formatCurrency(this.state.emergencyBufferTarget)} emergency cushion fully intact.`
        },
        {
          type: 'safe',
          icon: 'fa-chart-pie',
          title: 'Capital Formation Integrity',
          desc: 'Your monthly RD commitments and Share Market SIPs are booked as capital allocations rather than consumption expenses, preserving true Balance Sheet net worth.'
        }
      ];
    }

    let html = '';
    insights.forEach(ins => {
      html += `
        <div class="advisory-item advisory-${ins.type}">
          <div class="advisory-icon"><i class="fa-solid ${ins.icon}"></i></div>
          <div class="advisory-content">
            <h4>${ins.title}</h4>
            <p>${ins.desc}</p>
          </div>
        </div>
      `;
    });

    feed.innerHTML = html;
  }

  // ==========================================================================
  // TRANSACTION LEDGER & DOUBLE ENTRY AUDIT
  // ==========================================================================
  renderLedgerTable() {
    const tbody = document.getElementById('mainLedgerTableBody');
    if (!tbody) return;

    const q = (document.getElementById('ledgerSearchInput')?.value || '').toLowerCase().trim();
    const fType = document.getElementById('filterType')?.value || 'ALL';
    const fCat = document.getElementById('filterCategory')?.value || 'ALL';
    const fAcc = document.getElementById('filterAccount')?.value || 'ALL';

    let txs = [...this.state.transactions];

    // Filter
    if (fType !== 'ALL') txs = txs.filter(t => t.type === fType);
    if (fCat !== 'ALL') txs = txs.filter(t => t.category === fCat);
    if (fAcc !== 'ALL') txs = txs.filter(t => t.account === fAcc || t.destAccount === fAcc);
    if (q) {
      txs = txs.filter(t => 
        t.desc.toLowerCase().includes(q) ||
        (t.remark && t.remark.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q)
      );
    }

    // Sort chronological
    txs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    let runningBalance = 0;
    let html = '';
    let totalDebit = 0;
    let totalCredit = 0;

    txs.forEach((tx, idx) => {
      const isReversed = tx.status === 'REVERSED';
      const isCredit = tx.type === 'INCOME';
      const amt = Number(tx.amount) || 0;

      if (!isReversed) {
        if (isCredit) {
          runningBalance += amt;
          totalCredit += amt;
        } else if (tx.type === 'EXPENSE' || tx.type === 'SAVINGS_ALLOCATION') {
          runningBalance -= amt;
          totalDebit += amt;
        } else if (tx.type === 'TRANSFER' || tx.type === 'LIABILITY_SETTLEMENT') {
          // Internal movement: decreases source, but doesn't count as standard consumption
          totalDebit += amt;
          runningBalance -= amt;
        }
      }

      const typePillClass = this.getTypePillClass(tx.type);
      const debitStr = !isCredit ? this.formatCurrency(amt) : '—';
      const creditStr = isCredit ? this.formatCurrency(amt) : '—';
      const statusClass = tx.reconciled ? 'status-verified' : 'status-warning';

      html += `
        <tr class="${isReversed ? 'text-muted' : ''}" style="${isReversed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">
          <td class="text-center mono text-muted">${idx + 1}</td>
          <td class="mono" style="font-size: 0.78rem;">${tx.date}<br><small class="text-muted">${tx.time || '12:00'}</small></td>
          <td><span class="type-pill ${typePillClass}">${tx.type.replace('_', ' ')}</span></td>
          <td class="text-bold">${this.escapeHtml(tx.desc)}</td>
          <td><span class="nature-pill nature-${(tx.nature || 'essential').toLowerCase()}">${tx.category}</span></td>
          <td><small class="text-muted">${tx.account}${tx.destAccount ? ` &rarr; ${tx.destAccount}` : ''}</small></td>
          <td class="text-right mono text-bold text-danger">${debitStr}</td>
          <td class="text-right mono text-bold text-success">${creditStr}</td>
          <td class="text-right mono text-bold text-primary">${this.formatCurrency(runningBalance)}</td>
          <td class="text-center"><span class="status-pill ${statusClass}">${tx.reconciled ? 'Verified' : 'Pending'}</span></td>
          <td class="text-center" style="white-space: nowrap;">
            ${!isReversed 
              ? `<button class="btn-micro" title="Edit Transaction" onclick="window.cfoApp.editTransaction('${tx.id}')" style="margin-right: 4px;"><i class="fa-solid fa-pen-to-square text-primary"></i></button><button class="btn-micro" title="Soft Reverse Transaction" onclick="window.cfoApp.reverseTransaction('${tx.id}')"><i class="fa-solid fa-rotate-left text-danger"></i></button>`
              : '<span class="text-danger" style="font-size: 0.72rem;">Reversed</span>'
            }
          </td>
        </tr>
      `;
    });

    if (txs.length === 0) {
      html = `
        <tr>
          <td colspan="11" class="text-center" style="padding: 48px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-receipt" style="font-size: 2.2rem; margin-bottom: 12px; display: block; opacity: 0.45; color: var(--color-primary);"></i>
            <strong style="font-size: 1.05rem; color: var(--text-primary); display: block;">No Transactions Recorded</strong>
            <p style="font-size: 0.85rem; margin-top: 6px; max-width: 440px; margin-left: auto; margin-right: auto;">
              Your audit trail is completely clean. Click <strong>"+ New Entry"</strong> or <strong>"Record Transaction"</strong> to log your first income, expense, or transfer.
            </p>
          </td>
        </tr>
      `;
    }

    tbody.innerHTML = html;

    const elInflow = document.getElementById('ledgerTotalInflow');
    const elExpense = document.getElementById('ledgerTotalExpense');
    const elTransfers = document.getElementById('ledgerTotalTransfers');

    const totalTransfers = this.state.transactions
      .filter(tx => (tx.type === 'TRANSFER' || tx.type === 'LIABILITY_SETTLEMENT') && tx.status !== 'REVERSED')
      .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    if (elInflow) elInflow.textContent = this.formatCurrency(totalCredit);
    if (elExpense) elExpense.textContent = this.formatCurrency(this.getTotalExpenses());
    if (elTransfers) elTransfers.textContent = this.formatCurrency(totalTransfers);
  }

  getTypePillClass(type) {
    switch (type) {
      case 'INCOME': return 'type-income';
      case 'EXPENSE': return 'type-expense';
      case 'TRANSFER': return 'type-transfer';
      case 'LIABILITY_SETTLEMENT': return 'type-settlement';
      case 'SAVINGS_ALLOCATION': return 'type-savings';
      default: return 'type-expense';
    }
  }

  // ==========================================================================
  // TRANSACTION REVERSAL & ROLLBACK (CFO AUDIT INTEGRITY)
  // ==========================================================================
  reverseTransaction(id) {
    const tx = this.state.transactions.find(t => t.id === id);
    if (!tx || tx.status === 'REVERSED') return;

    if (confirm(`CFO AUDIT CONTROL: Are you sure you want to reverse transaction "${tx.desc}" for ${this.formatCurrency(tx.amount)}? The funds will be rolled back to their respective accounts and an auditable reversal record will be preserved.`)) {
      tx.status = 'REVERSED';
      tx.reversedAt = new Date().toISOString();

      // Reverse account balance effects accurately
      const amt = Number(tx.amount) || 0;
      if (tx.type === 'INCOME') {
        if (this.state.accounts[tx.account]) this.state.accounts[tx.account].balance -= amt;
      } else if (tx.type === 'EXPENSE' || tx.type === 'SAVINGS_ALLOCATION') {
        if (this.state.accounts[tx.account]) this.state.accounts[tx.account].balance += amt;
      } else if (tx.type === 'TRANSFER') {
        if (this.state.accounts[tx.account]) this.state.accounts[tx.account].balance += amt;
        if (tx.destAccount && this.state.accounts[tx.destAccount]) this.state.accounts[tx.destAccount].balance -= amt;
      } else if (tx.type === 'LIABILITY_SETTLEMENT') {
        if (this.state.accounts[tx.account]) this.state.accounts[tx.account].balance += amt;
        if (this.state.accounts['Credit Card']) this.state.accounts['Credit Card'].outstandingDues += amt;
      }

      this.saveState();
      this.renderAll();
      this.showToast(`Reversed "${tx.desc}". Balances restored to accounts.`, 'warning');
    }
  }

  // Edit Transaction (Audit-safe editing)
  editTransaction(id) {
    const tx = this.state.transactions.find(t => t.id === id);
    if (!tx || tx.status === 'REVERSED') return;

    this.openTransactionModal();
    document.getElementById('transactionModalTitle').textContent = 'Edit Transaction (Audit Re-entry)';
    document.getElementById('txEditId').value = tx.id;
    document.getElementById('txAmount').value = tx.amount;
    document.getElementById('txDesc').value = tx.desc;
    document.getElementById('txCategory').value = tx.category || 'Miscellaneous';
    document.getElementById('txNature').value = tx.nature || 'ESSENTIAL';
    document.getElementById('txSourceAccount').value = tx.account || 'Primary Bank';
    document.getElementById('txDate').value = tx.date;
    document.getElementById('txMode').value = tx.mode || 'Auto-Debit';
    document.getElementById('txRemark').value = tx.remark || '';

    // Set type
    this.txTypeButtons.forEach(btn => {
      if (btn.getAttribute('data-type') === tx.type) {
        btn.classList.add('active');
        btn.querySelector('input').checked = true;
      } else {
        btn.classList.remove('active');
      }
    });

    this.handleTypeSelectionChange(tx.type);
    if (tx.destAccount && document.getElementById('txDestAccount')) {
      document.getElementById('txDestAccount').value = tx.destAccount;
    }
  }

  markObligationPaid(id) {
    const ob = this.state.obligations.find(o => o.id === id);
    if (!ob) return;

    ob.status = 'PAID';
    // Automatically record corresponding transaction
    const newTx = {
      id: 'tx_ob_' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      type: ob.category === 'Credit Card' ? 'LIABILITY_SETTLEMENT' : (ob.category === 'Savings & RD' ? 'SAVINGS_ALLOCATION' : 'EXPENSE'),
      category: ob.category,
      nature: ob.nature,
      desc: ob.name,
      amount: ob.amount,
      account: ob.account,
      destAccount: ob.category === 'Credit Card' ? 'Credit Card' : null,
      mode: ob.isAutoDebit ? 'Auto-Debit' : 'Netbanking',
      status: 'CONFIRMED',
      reconciled: true,
      remark: `Settled scheduled commitment: ${ob.name}`
    };

    // Deduct from account
    if (this.state.accounts[ob.account]) {
      this.state.accounts[ob.account].balance -= ob.amount;
    }
    if (ob.category === 'Credit Card' && this.state.accounts['Credit Card']) {
      this.state.accounts['Credit Card'].outstandingDues = Math.max(0, this.state.accounts['Credit Card'].outstandingDues - ob.amount);
    }

    this.state.transactions.push(newTx);
    this.saveState();
    this.renderAll();
    this.showToast(`Obligation "${ob.name}" marked as PAID and booked to ledger!`, 'success');
  }

  // ==========================================================================
  // TRANSACTION MODAL & CREATION
  // ==========================================================================
  openTransactionModal() {
    this.transactionForm.reset();
    document.getElementById('txEditId').value = '';
    document.getElementById('transactionModalTitle').textContent = 'Record Transaction';
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
    this.handleTypeSelectionChange('EXPENSE');
    this.txTypeButtons.forEach(b => {
      if (b.getAttribute('data-type') === 'EXPENSE') b.classList.add('active');
      else b.classList.remove('active');
    });
    this.transactionModal.classList.remove('hidden');
    document.getElementById('txAmount').focus();
  }

  closeTransactionModal() {
    this.transactionModal.classList.add('hidden');
  }

  handleTypeSelectionChange(type) {
    const groupDest = document.getElementById('groupDestAccount');
    const hint = document.getElementById('txAmountHint');

    if (type === 'TRANSFER') {
      groupDest.classList.remove('hidden');
      hint.textContent = 'Inter-account movement: Does NOT inflate expenses or alter Net Worth.';
    } else if (type === 'LIABILITY_SETTLEMENT') {
      groupDest.classList.remove('hidden');
      hint.textContent = 'Settling credit card balance: Liability reduction, no duplicate expense.';
    } else if (type === 'SAVINGS_ALLOCATION') {
      groupDest.classList.add('hidden');
      hint.textContent = 'Capital allocation into RD / Shares: Moves cash into investment assets.';
    } else {
      groupDest.classList.add('hidden');
      hint.textContent = 'Enter the exact debited or credited Rupee value.';
    }
  }

  handleTransactionSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('txEditId').value;
    const type = document.querySelector('input[name="txType"]:checked')?.value || 'EXPENSE';
    const amount = parseFloat(document.getElementById('txAmount').value);
    const desc = document.getElementById('txDesc').value.trim();
    const category = document.getElementById('txCategory').value;
    const nature = document.getElementById('txNature').value;
    const account = document.getElementById('txSourceAccount').value;
    const destAccount = type === 'TRANSFER' || type === 'LIABILITY_SETTLEMENT' ? document.getElementById('txDestAccount').value : null;
    const date = document.getElementById('txDate').value;
    const mode = document.getElementById('txMode').value;
    const remark = document.getElementById('txRemark').value.trim();

    if (!desc || isNaN(amount) || amount <= 0) {
      this.showToast('Please provide a valid description and positive amount.', 'danger');
      return;
    }

    // If editing existing transaction, roll back previous effect first
    if (editId) {
      const oldTx = this.state.transactions.find(t => t.id === editId);
      if (oldTx && oldTx.status !== 'REVERSED') {
        const oldAmt = Number(oldTx.amount) || 0;
        if (oldTx.type === 'INCOME') {
          if (this.state.accounts[oldTx.account]) this.state.accounts[oldTx.account].balance -= oldAmt;
        } else if (oldTx.type === 'EXPENSE' || oldTx.type === 'SAVINGS_ALLOCATION') {
          if (this.state.accounts[oldTx.account]) this.state.accounts[oldTx.account].balance += oldAmt;
        } else if (oldTx.type === 'TRANSFER') {
          if (this.state.accounts[oldTx.account]) this.state.accounts[oldTx.account].balance += oldAmt;
          if (oldTx.destAccount && this.state.accounts[oldTx.destAccount]) this.state.accounts[oldTx.destAccount].balance -= oldAmt;
        } else if (oldTx.type === 'LIABILITY_SETTLEMENT') {
          if (this.state.accounts[oldTx.account]) this.state.accounts[oldTx.account].balance += oldAmt;
          if (this.state.accounts['Credit Card']) this.state.accounts['Credit Card'].outstandingDues += oldAmt;
        }
      }
    } else {
      // Duplicate detection check within 24h
      const isDuplicate = this.state.transactions.some(t => 
        t.date === date && t.amount === amount && t.desc.toLowerCase() === desc.toLowerCase() && t.status !== 'REVERSED'
      );

      if (isDuplicate) {
        if (!confirm(`CFO FRAUD & DUPLICATE WARNING: A transaction with identical description "${desc}" and amount ₹${amount} already exists on ${date}. Are you sure you want to proceed?`)) {
          return;
        }
      }
    }

    const txPayload = {
      id: editId || ('tx_' + Date.now()),
      date,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      type,
      category,
      nature,
      desc,
      amount,
      account,
      destAccount,
      mode,
      status: 'CONFIRMED',
      reconciled: true,
      remark: remark || `Manual entry via Dexpense CFO`
    };

    // Apply new transaction balance effect
    if (type === 'INCOME') {
      if (this.state.accounts[account]) this.state.accounts[account].balance += amount;
    } else if (type === 'EXPENSE' || type === 'SAVINGS_ALLOCATION') {
      if (this.state.accounts[account]) this.state.accounts[account].balance -= amount;
    } else if (type === 'TRANSFER') {
      if (this.state.accounts[account]) this.state.accounts[account].balance -= amount;
      if (destAccount && this.state.accounts[destAccount]) this.state.accounts[destAccount].balance += amount;
    } else if (type === 'LIABILITY_SETTLEMENT') {
      if (this.state.accounts[account]) this.state.accounts[account].balance -= amount;
      if (this.state.accounts['Credit Card']) this.state.accounts['Credit Card'].outstandingDues = Math.max(0, this.state.accounts['Credit Card'].outstandingDues - amount);
    }

    if (editId) {
      const idx = this.state.transactions.findIndex(t => t.id === editId);
      if (idx !== -1) this.state.transactions[idx] = txPayload;
      this.showToast(`Updated transaction "${desc}" successfully!`, 'success');
    } else {
      this.state.transactions.push(txPayload);
      this.showToast(`Committed transaction "${desc}" for ${this.formatCurrency(amount)}`, 'success');
    }

    this.saveState();
    this.closeTransactionModal();
    this.renderAll();
  }

  // ==========================================================================
  // CASH-FLOW FORECASTING (30-DAY ROLLING HORIZON)
  // ==========================================================================
  renderForecastView() {
    const track = document.getElementById('forecastBarsTrack');
    const tbody = document.getElementById('forecastTableBody');
    if (!track || !tbody) return;

    const openingCash = this.getLiquidCash();
    const actualSalary = this.state.transactions.find(t => t.type === 'INCOME')?.amount || 0;
    let currentCash = openingCash;
    const daysToSimulate = 30;
    const today = new Date();

    let trackHtml = '';
    let tableHtml = '';
    let lowestDip = openingCash;
    let lowestDipDate = 'None';

    const safeToSpend = this.calculateSafeToSpendToday().dailyAllowance;

    for (let i = 0; i < daysToSimulate; i++) {
      const simDate = new Date(today);
      simDate.setDate(today.getDate() + i);
      const dayNum = simDate.getDate();
      const dateStr = simDate.toISOString().split('T')[0];

      // Check for scheduled inflows (Payday)
      let expectedInflow = 0;
      let eventDesc = [];

      if ((dateStr === this.state.nextPayday || dayNum === 30) && actualSalary > 0) {
        expectedInflow += actualSalary;
        eventDesc.push('Salary Credit (Payroll)');
      }

      // Check scheduled obligations on this day of month
      let expectedOutflow = 0;
      this.state.obligations.forEach(ob => {
        if (ob.dayOfMonth === dayNum && ob.status === 'UPCOMING') {
          expectedOutflow += ob.amount;
          eventDesc.push(`${ob.name} (${this.formatCurrency(ob.amount)})`);
        }
      });

      // Add baseline flexible daily spend
      expectedOutflow += safeToSpend;

      currentCash = currentCash + expectedInflow - expectedOutflow;

      if (currentCash < lowestDip) {
        lowestDip = currentCash;
        lowestDipDate = `${dayNum} ${simDate.toLocaleString('default', { month: 'short' })}`;
      }

      const isDip = currentCash < this.state.emergencyBufferTarget;
      const maxDenominator = Math.max(1, openingCash + (actualSalary || 10000));
      const heightPct = Math.min(100, Math.max(10, Math.round((Math.max(0, currentCash) / maxDenominator) * 100)));

      trackHtml += `
        <div class="forecast-col" title="${dateStr}: Projected ₹${Math.round(currentCash).toLocaleString('en-IN')}">
          <div class="forecast-bar ${isDip ? 'dip' : ''}" style="height: ${heightPct}%;"></div>
          <span class="forecast-col-date">${dayNum}</span>
        </div>
      `;

      if (i < 14) { // First 14 days in detailed table
        tableHtml += `
          <tr>
            <td class="mono">${dateStr}</td>
            <td>${eventDesc.length > 0 ? eventDesc.join(', ') : 'Daily flexible spending allowance'}</td>
            <td><small class="text-muted">${expectedInflow > 0 ? 'Confirmed Schedule' : 'High Confidence'}</small></td>
            <td class="text-right mono text-success">${expectedInflow > 0 ? this.formatCurrency(expectedInflow) : '—'}</td>
            <td class="text-right mono text-danger">${this.formatCurrency(expectedOutflow)}</td>
            <td class="text-right mono text-bold ${currentCash >= this.state.emergencyBufferTarget ? 'text-primary' : 'text-warning'}">${this.formatCurrency(Math.round(currentCash))}</td>
            <td class="text-center"><span class="status-pill ${currentCash >= this.state.emergencyBufferTarget ? 'status-good' : 'status-warning'}">${currentCash >= this.state.emergencyBufferTarget ? 'Safe' : 'Buffer Alert'}</span></td>
          </tr>
        `;
      }
    }

    track.innerHTML = trackHtml;
    tbody.innerHTML = tableHtml;

    const elCurrent = document.getElementById('fcCurrentCash');
    const elOutflows = document.getElementById('fcScheduledOutflows');
    const elLowest = document.getElementById('fcLowestDip');
    const elInflow = document.getElementById('fcNextInflow');

    if (elCurrent) elCurrent.textContent = this.formatCurrency(openingCash);
    if (elOutflows) {
      const scheduledTotal = this.state.obligations
        .filter(o => o.status === 'UPCOMING')
        .reduce((sum, o) => sum + o.amount, 0);
      elOutflows.textContent = this.formatCurrency(scheduledTotal);
    }
    if (elLowest) elLowest.textContent = `${this.formatCurrency(Math.round(lowestDip))} (on ${lowestDipDate})`;
    if (elInflow) {
      elInflow.textContent = actualSalary > 0 
        ? `+${this.formatCurrency(actualSalary)} (on ${this.state.nextPayday})`
        : '₹0 (Set Salary Inflow)';
    }
  }

  // ==========================================================================
  // FP&A BUDGET & VARIANCE ENGINE
  // ==========================================================================
  renderBudgetView() {
    const tbody = document.getElementById('budgetVarianceTableBody');
    if (!tbody) return;

    let plannedTotal = 0;
    let actualTotal = 0;
    let html = '';

    // Calculate actuals by category
    const catActuals = {};
    this.state.transactions.forEach(t => {
      if (t.type === 'EXPENSE' && t.status !== 'REVERSED') {
        catActuals[t.category] = (catActuals[t.category] || 0) + Number(t.amount);
      }
    });

    Object.entries(this.state.budgets).forEach(([cat, b]) => {
      const actual = catActuals[cat] || 0;
      const variance = b.limit - actual;
      const variancePct = b.limit > 0 ? Math.round((Math.abs(variance) / b.limit) * 100) : 0;
      const isFav = variance >= 0;

      plannedTotal += b.limit;
      actualTotal += actual;

      let assessment = '';
      if (cat === 'EMI & Rent' && isFav && actual > 0) {
        assessment = 'Standard fixed repayment maintained on schedule.';
      } else if (cat === 'Food & Living' && isFav) {
        assessment = 'Controlled meal expenses within planned tolerance.';
      } else if (!isFav) {
        assessment = 'Overspend detected. Recommend curtailing discretionary outflow.';
      } else {
        assessment = 'Within executive threshold.';
      }

      html += `
        <tr>
          <td class="text-bold">${cat}</td>
          <td><span class="nature-pill nature-${b.nature.toLowerCase()}">${b.nature}</span></td>
          <td class="text-right mono">${this.formatCurrency(b.limit)}</td>
          <td class="text-right mono text-bold text-danger">${this.formatCurrency(actual)}</td>
          <td class="text-right mono text-bold ${isFav ? 'text-success' : 'text-danger'}">${isFav ? '+' : '−'}${this.formatCurrency(Math.abs(variance))}</td>
          <td class="text-right mono">${variancePct}%</td>
          <td class="text-center"><span class="eval-badge ${isFav ? 'eval-fav' : 'eval-unfav'}">${isFav ? 'Favourable (F)' : 'Unfavourable (U)'}</span></td>
          <td><small class="text-secondary">${assessment}</small></td>
        </tr>
      `;
    });

    tbody.innerHTML = html;

    const elPlanned = document.getElementById('budgetPlannedTotal');
    const elActual = document.getElementById('budgetActualTotal');
    const elVar = document.getElementById('budgetNetVariance');

    if (elPlanned) elPlanned.textContent = this.formatCurrency(plannedTotal);
    if (elActual) elActual.textContent = this.formatCurrency(actualTotal);
    if (elVar) {
      const net = plannedTotal - actualTotal;
      elVar.textContent = `${net >= 0 ? '+' : '−'}${this.formatCurrency(Math.abs(net))} (${net >= 0 ? 'Favourable' : 'Unfavourable'})`;
      elVar.className = `b-val mono ${net >= 0 ? 'text-success' : 'text-danger'}`;
    }
  }

  // Budget Adjustment Modal
  openBudgetModal() {
    const list = document.getElementById('budgetEditList');
    if (!list) return;

    let html = '';
    Object.entries(this.state.budgets).forEach(([cat, b]) => {
      html += `
        <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <strong style="font-size: 0.9rem;">${cat}</strong>
            <span class="nature-pill nature-${b.nature.toLowerCase()}">${b.nature}</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <div class="input-prefix-wrapper" style="flex: 1;">
              <span class="input-prefix">₹</span>
              <input type="number" id="budget_input_${cat.replace(/[^a-zA-Z0-9]/g, '_')}" value="${b.limit}" style="width: 100%;">
            </div>
            <button class="btn btn-outline-sm" onclick="window.cfoApp.saveSingleBudget('${cat}')">Save Limit</button>
          </div>
        </div>
      `;
    });

    list.innerHTML = html;
    document.getElementById('budgetModal')?.classList.remove('hidden');
  }

  closeBudgetModal() {
    document.getElementById('budgetModal')?.classList.add('hidden');
  }

  saveSingleBudget(cat) {
    const safeKey = cat.replace(/[^a-zA-Z0-9]/g, '_');
    const input = document.getElementById(`budget_input_${safeKey}`);
    if (!input) return;

    const val = parseFloat(input.value) || 0;
    if (this.state.budgets[cat]) {
      this.state.budgets[cat].limit = val;
      this.saveState();
      this.renderAll();
      this.showToast(`Updated budget limit for "${cat}" to ${this.formatCurrency(val)}`, 'success');
    }
  }

  // ==========================================================================
  // RECURRING OBLIGATION MODAL & REGISTRATION
  // ==========================================================================
  openObligationModal() {
    document.getElementById('obligationForm')?.reset();
    document.getElementById('obligationModal')?.classList.remove('hidden');
    document.getElementById('obName')?.focus();
  }

  closeObligationModal() {
    document.getElementById('obligationModal')?.classList.add('hidden');
  }

  handleObligationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('obName')?.value.trim();
    const amount = parseFloat(document.getElementById('obAmount')?.value) || 0;
    const dayOfMonth = parseInt(document.getElementById('obDay')?.value, 10) || 1;
    const category = document.getElementById('obCategory')?.value;
    const account = document.getElementById('obAccount')?.value;
    const priority = document.getElementById('obPriority')?.value;
    const isAutoDebit = document.getElementById('obAutoDebit')?.value === 'true';

    if (!name || amount <= 0) {
      this.showToast('Please provide a valid name and amount.', 'danger');
      return;
    }

    const newOb = {
      id: 'ob_' + Date.now(),
      name,
      category,
      dayOfMonth,
      amount,
      account,
      priority,
      isAutoDebit,
      nature: priority === 'VARIABLE' ? 'DISCRETIONARY' : 'ESSENTIAL',
      status: 'UPCOMING'
    };

    this.state.obligations.push(newOb);
    this.saveState();
    this.closeObligationModal();
    this.renderAll();
    this.showToast(`Scheduled obligation "${name}" for ₹${amount.toLocaleString('en-IN')}/mo`, 'success');
  }

  // ==========================================================================
  // WEALTH ASSET MODAL & REGISTRATION
  // ==========================================================================
  openWealthModal() {
    document.getElementById('wealthForm')?.reset();
    document.getElementById('wealthModal')?.classList.remove('hidden');
    document.getElementById('waName')?.focus();
  }

  closeWealthModal() {
    document.getElementById('wealthModal')?.classList.add('hidden');
  }

  handleWealthSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('waName')?.value.trim();
    const category = document.getElementById('waCategory')?.value;
    const returnRate = document.getElementById('waReturnRate')?.value.trim() || '7% p.a.';
    const monthlyAllocation = parseFloat(document.getElementById('waMonthlyAlloc')?.value) || 0;
    const accumulatedValue = parseFloat(document.getElementById('waAccumulated')?.value) || 0;
    const targetAmount = parseFloat(document.getElementById('waTarget')?.value) || 100000;

    if (!name) {
      this.showToast('Please provide an asset name.', 'danger');
      return;
    }

    const newAsset = {
      id: 'wa_' + Date.now(),
      name,
      category,
      monthlyAllocation,
      accumulatedValue,
      targetAmount,
      returnRate,
      icon: category.includes('Equity') ? 'fa-chart-line' : (category.includes('Gold') ? 'fa-coins' : 'fa-piggy-bank')
    };

    this.state.wealthAssets.push(newAsset);
    this.saveState();
    this.closeWealthModal();
    this.renderAll();
    this.showToast(`Added investment asset "${name}" to wealth portfolio!`, 'success');
  }

  // ==========================================================================
  // 2026 WEALTH & SAVINGS PORTFOLIO
  // ==========================================================================
  renderWealthView() {
    const list = document.getElementById('wealthCardsList');
    if (!list) return;

    let html = '';
    let totalInvested = 0;

    if (this.state.wealthAssets.length === 0) {
      list.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg); color: var(--text-muted);">
          <i class="fa-solid fa-vault" style="font-size: 2.2rem; margin-bottom: 12px; display: block; opacity: 0.5;"></i>
          <strong style="font-size: 1.05rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">Wealth Portfolio Clean & Ready</strong>
          <span style="font-size: 0.88rem; display: block; margin-bottom: 14px;">Track your Recurring Deposits, Equities, Mutual Funds, and LIC policies in real-time.</span>
          <button class="btn btn-primary-sm" onclick="window.cfoApp.openWealthModal()"><i class="fa-solid fa-plus"></i> Add First Investment Asset</button>
        </div>
      `;
    } else {
      this.state.wealthAssets.forEach(wa => {
        totalInvested += Number(wa.accumulatedValue) || 0;
        const pct = Math.min(100, Math.round((wa.accumulatedValue / (wa.targetAmount || 100000)) * 100));

        html += `
          <div class="wealth-item-card">
            <div class="wealth-left">
              <div class="wealth-icon"><i class="fa-solid ${wa.icon}"></i></div>
              <div>
                <div class="wealth-name">${wa.name}</div>
                <div class="wealth-cat">${wa.category} • <span class="text-success">${wa.returnRate}</span></div>
              </div>
            </div>
            <div class="wealth-right">
              <div class="wealth-val mono">${this.formatCurrency(wa.accumulatedValue)}</div>
              <div class="wealth-meta">${this.formatCurrency(wa.monthlyAllocation)}/mo • ${pct}% of Goal</div>
            </div>
          </div>
        `;
      });
      list.innerHTML = html;
    }

    // Balance Sheet Net Worth
    const liquid = this.getLiquidCash();
    const liabilities = this.state.accounts['Credit Card']?.outstandingDues || 0;
    const netWorth = liquid + totalInvested - liabilities;

    // Dynamic breakdown of assets
    let rdSum = 0;
    let stockSum = 0;
    let licSum = 0;
    this.state.wealthAssets.forEach(wa => {
      const val = Number(wa.accumulatedValue) || 0;
      const lower = (wa.name + ' ' + wa.category).toLowerCase();
      if (lower.includes('rd') || lower.includes('deposit')) {
        rdSum += val;
      } else if (lower.includes('share') || lower.includes('stock') || lower.includes('equity') || lower.includes('nifty') || lower.includes('sip')) {
        stockSum += val;
      } else if (lower.includes('lic') || lower.includes('insurance')) {
        licSum += val;
      }
    });

    const elNW = document.getElementById('heroNetWorth');
    const elLiq = document.getElementById('nwLiquidVal');
    const elRD = document.getElementById('nwRDVal');
    const elStock = document.getElementById('nwStockVal');
    const elLic = document.getElementById('nwLicVal');
    const elLiab = document.getElementById('nwLiabilitiesVal');

    if (elNW) elNW.textContent = this.formatCurrency(netWorth);
    if (elLiq) elLiq.textContent = this.formatCurrency(liquid);
    if (elRD) elRD.textContent = this.formatCurrency(rdSum);
    if (elStock) elStock.textContent = this.formatCurrency(stockSum);
    if (elLic) elLic.textContent = this.formatCurrency(licSum);
    if (elLiab) elLiab.textContent = `−${this.formatCurrency(liabilities)}`;
  }

  // ==========================================================================
  // RECURRING OBLIGATIONS MASTER REGISTER
  // ==========================================================================
  renderObligationsView() {
    const tbody = document.getElementById('masterObligationsTableBody');
    if (!tbody) return;

    if (this.state.obligations.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center" style="padding: 40px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-calendar-check" style="font-size: 2rem; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
            <strong style="font-size: 1rem; color: var(--text-secondary); display: block;">No Fixed Obligations Scheduled</strong>
            <span>Add rent, EMIs, SIPs, and utilities using the "Schedule New Obligation" button above.</span>
          </td>
        </tr>
      `;
      return;
    }

    let html = '';
    this.state.obligations.forEach(ob => {
      const isPaid = ob.status === 'PAID';
      html += `
        <tr>
          <td class="text-bold">${ob.name}</td>
          <td><span class="nature-pill nature-${ob.nature.toLowerCase()}">${ob.category}</span></td>
          <td class="mono">${ob.dayOfMonth}th of month</td>
          <td class="text-right mono text-bold text-danger">${this.formatCurrency(ob.amount)}</td>
          <td><small class="text-muted">${ob.account}</small></td>
          <td><span class="status-pill status-verified">${ob.priority}</span></td>
          <td class="text-center">${ob.isAutoDebit ? '<i class="fa-solid fa-circle-check text-success"></i> Mandated NACH' : '<span class="text-muted">Manual</span>'}</td>
          <td class="text-center">
            ${isPaid
              ? '<span class="status-pill status-good"><i class="fa-solid fa-check"></i> Paid</span>'
              : `<button class="btn btn-outline-sm" onclick="window.cfoApp.markObligationPaid('${ob.id}')"><i class="fa-solid fa-check"></i> Pay Now</button>`
            }
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  // ==========================================================================
  // CERTIFIED ACCOUNTING STATEMENTS (DYNAMIC P&L, CASH FLOW, BALANCE SHEET)
  // ==========================================================================
  renderStatementSheet() {
    const container = document.getElementById('statementSheetContainer');
    if (!container) return;

    const totalIncome = this.getTotalIncome();
    const totalExpenses = this.getTotalExpenses();
    const liquid = this.getLiquidCash();

    // Group actual expenses by category
    const expByCategory = {};
    this.state.transactions.forEach(t => {
      if (t.type === 'EXPENSE' && t.status !== 'REVERSED') {
        expByCategory[t.category] = (expByCategory[t.category] || 0) + Number(t.amount);
      }
    });

    // Group savings / investing allocations
    const investingTotal = this.state.transactions
      .filter(t => t.type === 'SAVINGS_ALLOCATION' && t.status !== 'REVERSED')
      .reduce((sum, t) => sum + Number(t.amount), 0);

    // Group liability settlements
    const financingTotal = this.state.transactions
      .filter(t => t.type === 'LIABILITY_SETTLEMENT' && t.status !== 'REVERSED')
      .reduce((sum, t) => sum + Number(t.amount), 0);

    if (this.selectedStatement === 'pl') {
      let expRows = '';
      Object.entries(expByCategory).forEach(([cat, val]) => {
        expRows += `<tr><td>${cat}</td><td class="text-right mono text-danger">${this.formatCurrency(val)}</td></tr>`;
      });
      if (!expRows) {
        expRows = `<tr><td class="text-muted">No operating expenses incurred</td><td class="text-right mono">₹0</td></tr>`;
      }

      container.innerHTML = `
        <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800;">Statement of Income & Expenditure (P&L)</h3>
            <p class="text-muted" style="font-size: 0.8rem;">Prepared under CFO Accounting Standards • Dynamic Transaction Audit</p>
          </div>
          <button class="btn btn-outline-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Statement</button>
        </div>
        <table class="stmt-table">
          <tr class="stmt-section-header"><td colspan="2">I. Operating Inflows (Income Earned & Realized)</td></tr>
          <tr><td>Monthly Corporate Salary & Inflows</td><td class="text-right mono text-success">${this.formatCurrency(totalIncome)}</td></tr>
          <tr class="stmt-subtotal"><td>Gross Operating Income</td><td class="text-right mono text-success">${this.formatCurrency(totalIncome)}</td></tr>

          <tr class="stmt-section-header" style="padding-top: 16px;"><td colspan="2">II. Operating Consumption Outflows (P&L Expenses)</td></tr>
          ${expRows}
          <tr class="stmt-subtotal"><td>Total Operating Expenditure</td><td class="text-right mono text-danger">${this.formatCurrency(totalExpenses)}</td></tr>

          <tr class="stmt-subtotal" style="background: var(--color-success-light);">
            <td class="text-bold" style="font-size: 1rem;">NET OPERATING SURPLUS BEFORE CAPITAL FORMATION</td>
            <td class="text-right mono text-bold text-success" style="font-size: 1.1rem;">${this.formatCurrency(totalIncome - totalExpenses)}</td>
          </tr>
        </table>
      `;
    } else if (this.selectedStatement === 'cf') {
      container.innerHTML = `
        <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800;">Statement of Cash Flows (Direct Method)</h3>
            <p class="text-muted" style="font-size: 0.8rem;">Reconciliation of Operating, Wealth Formation, and Debt Cash Movements</p>
          </div>
          <button class="btn btn-outline-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Statement</button>
        </div>
        <table class="stmt-table">
          <tr class="stmt-section-header"><td colspan="2">A. Cash Flows from Operating Activities</td></tr>
          <tr><td>Cash Receipts from Inflows</td><td class="text-right mono text-success">+${this.formatCurrency(totalIncome)}</td></tr>
          <tr><td>Cash Payments for Living & Consumption Outflows</td><td class="text-right mono text-danger">−${this.formatCurrency(totalExpenses)}</td></tr>
          <tr class="stmt-subtotal"><td>Net Cash Generated from Operations</td><td class="text-right mono text-success">+${this.formatCurrency(totalIncome - totalExpenses)}</td></tr>

          <tr class="stmt-section-header"><td colspan="2">B. Cash Flows from Wealth & Investment Activities</td></tr>
          <tr><td>Allocation to Recurring Deposits & Share Market SIPs</td><td class="text-right mono text-warning">−${this.formatCurrency(investingTotal)}</td></tr>
          <tr class="stmt-subtotal"><td>Net Cash Used in Wealth Formation</td><td class="text-right mono text-warning">−${this.formatCurrency(investingTotal)}</td></tr>

          <tr class="stmt-section-header"><td colspan="2">C. Cash Flows from Financing & Debt Settlement</td></tr>
          <tr><td>Settlement of Credit Card Liabilities</td><td class="text-right mono text-warning">−${this.formatCurrency(financingTotal)}</td></tr>
          <tr class="stmt-subtotal"><td>Net Cash Used in Debt Servicing</td><td class="text-right mono text-warning">−${this.formatCurrency(financingTotal)}</td></tr>

          <tr class="stmt-section-header"><td colspan="2">D. Reconciliation of Liquid Cash</td></tr>
          <tr><td>Internal Transfers (Primary to SBI Sweep)</td><td class="text-right mono text-muted">₹0 (Contra Net)</td></tr>
          <tr class="stmt-subtotal" style="background: var(--color-primary-light);">
            <td class="text-bold">CLOSING VERIFIED LIQUID CASH (Passbook Reconciled)</td>
            <td class="text-right mono text-bold text-primary" style="font-size: 1.1rem;">${this.formatCurrency(liquid)}</td>
          </tr>
        </table>
      `;
    } else {
      // Balance Sheet
      let totalWealthAssets = 0;
      let assetRows = `<tr><td>Liquid Cash & Bank Balances (HDFC + SBI + Cash)</td><td class="text-right mono">${this.formatCurrency(liquid)}</td></tr>`;
      totalWealthAssets += liquid;

      this.state.wealthAssets.forEach(wa => {
        const val = Number(wa.accumulatedValue) || 0;
        totalWealthAssets += val;
        assetRows += `<tr><td>${wa.name} (${wa.category})</td><td class="text-right mono">${this.formatCurrency(val)}</td></tr>`;
      });

      const cardLiab = this.state.accounts['Credit Card']?.outstandingDues || 0;

      container.innerHTML = `
        <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800;">Household Balance Sheet & Net Worth</h3>
            <p class="text-muted" style="font-size: 0.8rem;">Dynamic Statement of Assets and Liabilities Reconciled to Date</p>
          </div>
          <button class="btn btn-outline-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Statement</button>
        </div>
        <table class="stmt-table">
          <tr class="stmt-section-header"><td colspan="2">I. ASSETS</td></tr>
          ${assetRows}
          <tr class="stmt-subtotal"><td>TOTAL ASSETS</td><td class="text-right mono text-bold text-success">${this.formatCurrency(totalWealthAssets)}</td></tr>

          <tr class="stmt-section-header"><td colspan="2">II. LIABILITIES</td></tr>
          <tr><td>Credit Card Unbilled & Outstanding Dues</td><td class="text-right mono text-danger">${this.formatCurrency(cardLiab)}</td></tr>
          <tr class="stmt-subtotal"><td>TOTAL LIABILITIES</td><td class="text-right mono text-bold text-danger">${this.formatCurrency(cardLiab)}</td></tr>

          <tr class="stmt-subtotal" style="background: var(--color-primary-light);">
            <td class="text-bold" style="font-size: 1.05rem;">TOTAL HOUSEHOLD NET WORTH (Assets − Liabilities)</td>
            <td class="text-right mono text-bold text-primary" style="font-size: 1.2rem;">${this.formatCurrency(totalWealthAssets - cardLiab)}</td>
          </tr>
        </table>
      `;
    }
  }

  // ==========================================================================
  // RISK & SENSITIVITY DIAGNOSTICS
  // ==========================================================================
  renderRiskView() {
    const income = this.getTotalIncome();
    const fixedBills = this.state.obligations
      .filter(ob => ob.nature === 'ESSENTIAL')
      .reduce((sum, ob) => sum + ob.amount, 0);

    const foir = income > 0 ? ((fixedBills / income) * 100).toFixed(1) : '0.0';

    const elFoirBadge = document.getElementById('riskFoirBadge');
    const elFoirBar = document.getElementById('riskFoirBar');
    const elFoirCur = document.getElementById('riskFoirCurrent');
    const elFoirLim = document.getElementById('riskFoirLimit');

    if (elFoirBadge) {
      elFoirBadge.textContent = income > 0 ? `${foir}% (${foir <= 50 ? 'Safe' : 'High Obligation'})` : '0.0% (Clean Setup)';
      elFoirBadge.className = `risk-badge ${Number(foir) <= 50 ? 'status-good' : 'status-warning'}`;
    }
    if (elFoirBar) {
      elFoirBar.style.width = `${Math.min(100, Number(foir))}%`;
    }
    if (elFoirCur) elFoirCur.textContent = `Current: ${this.formatCurrency(fixedBills)}`;
    if (elFoirLim) elFoirLim.textContent = `Max Safe Limit: ${this.formatCurrency(income * 0.5)} (50%)`;

    // Metric 2: Liquidity Buffer Days
    const liquidCash = this.getLiquidCash();
    const monthlyBurn = fixedBills || (this.getTotalExpenses() || 0);
    const dailyBurn = monthlyBurn / 30;
    const bufferDays = dailyBurn > 0 ? Math.round(liquidCash / dailyBurn) : (liquidCash > 0 ? 90 : 0);

    const elBufBadge = document.getElementById('riskBufferBadge');
    const elBufBar = document.getElementById('riskBufferBar');
    const elBufCur = document.getElementById('riskBufferMetaCurrent');

    if (elBufBadge) {
      elBufBadge.textContent = `${bufferDays} Days`;
      elBufBadge.className = `risk-badge ${bufferDays >= 60 ? 'status-good' : (bufferDays >= 30 ? 'status-warning' : 'status-danger')}`;
    }
    if (elBufBar) {
      elBufBar.style.width = `${Math.min(100, Math.round((bufferDays / 90) * 100))}%`;
    }
    if (elBufCur) elBufCur.textContent = `Current: ${bufferDays} Days`;

    // Metric 3: Savings to Debt Service Ratio
    const monthlySavings = this.state.wealthAssets.reduce((sum, wa) => sum + (Number(wa.monthlyAllocation) || 0), 0);
    const debtEmi = this.state.obligations.find(ob => ob.name.toLowerCase().includes('emi'))?.amount || 0;
    const ratio = debtEmi > 0 ? (monthlySavings / debtEmi).toFixed(2) : (monthlySavings > 0 ? '—' : '1.00');
    const isRatioGood = debtEmi === 0 || Number(ratio) >= 0.8;

    const elRatioBadge = document.getElementById('riskSavingsDebtBadge');
    const elRatioBar = document.getElementById('riskSavingsDebtBar');
    const elRatioSav = document.getElementById('riskSavingsDebtMetaSavings');
    const elRatioEmi = document.getElementById('riskSavingsDebtMetaEmi');

    if (elRatioBadge) {
      elRatioBadge.textContent = debtEmi > 0 ? `${ratio}x (${isRatioGood ? 'Positive' : 'Low Savings'})` : (monthlySavings > 0 ? 'Debt Free' : '1.00x (Setup)');
      elRatioBadge.className = `risk-badge status-good`;
    }
    if (elRatioBar) {
      elRatioBar.style.width = debtEmi > 0 ? `${Math.min(100, Math.round(Number(ratio) * 60))}%` : '0%';
    }
    if (elRatioSav) elRatioSav.textContent = `Monthly Savings: ${this.formatCurrency(monthlySavings)}`;
    if (elRatioEmi) elRatioEmi.textContent = `Debt EMI: ${this.formatCurrency(debtEmi)}`;
  }

  // ==========================================================================
  // ACCOUNTS MODAL & VERIFICATION
  // ==========================================================================
  openAccountsModal() {
    const list = this.accountsEditList;
    if (!list) return;

    let html = '';
    Object.entries(this.state.accounts).forEach(([name, acc]) => {
      const isLiab = acc.type === 'LIABILITY';
      html += `
        <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <strong style="font-size: 0.9rem;">${acc.name}</strong>
            <span class="status-pill status-verified">${acc.type}</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <div class="input-prefix-wrapper" style="flex: 1;">
              <span class="input-prefix">₹</span>
              <input type="number" id="acc_input_${acc.id}" value="${isLiab ? acc.outstandingDues : acc.balance}" style="width: 100%;">
            </div>
            <button class="btn btn-outline-sm" onclick="window.cfoApp.saveSingleAccount('${name}')">Verify Balance</button>
          </div>
          <small class="text-muted" style="display: block; margin-top: 4px;">Last reconciled: ${acc.lastVerified} (${acc.verifiedBy})</small>
        </div>
      `;
    });

    list.innerHTML = html;
    this.accountsModal.classList.remove('hidden');
  }

  closeAccountsModal() {
    this.accountsModal.classList.add('hidden');
  }

  saveSingleAccount(accName) {
    const acc = this.state.accounts[accName];
    if (!acc) return;
    const input = document.getElementById(`acc_input_${acc.id}`);
    if (!input) return;

    const val = parseFloat(input.value) || 0;
    if (acc.type === 'LIABILITY') {
      acc.outstandingDues = val;
    } else {
      acc.balance = val;
    }
    acc.lastVerified = new Date().toISOString().split('T')[0];
    acc.verifiedBy = 'Manual Reconciled Entry';

    this.saveState();
    this.renderAll();
    this.showToast(`Verified and saved balance for ${acc.name}!`, 'success');
  }

  // ==========================================================================
  // DATA IMPORT & EXPORT
  // ==========================================================================
  exportLedgerCSV() {
    let csv = "Dexpense CFO — Certified Transaction Ledger\n";
    csv += "Generated: " + new Date().toISOString() + "\n\n";
    csv += "Sr,Date,Time,Type,Description,Category,Nature,Source Account,Destination Account,Debit,Credit,Reconciled,Remark\n";

    this.state.transactions.forEach((tx, idx) => {
      const isCredit = tx.type === 'INCOME';
      const debit = !isCredit ? tx.amount : 0;
      const credit = isCredit ? tx.amount : 0;
      csv += `${idx + 1},${tx.date},${tx.time || ''},"${tx.type}","${tx.desc.replace(/"/g, '""')}","${tx.category}","${tx.nature || ''}","${tx.account}","${tx.destAccount || ''}",${debit},${credit},${tx.reconciled},"${(tx.remark || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Dexpense_Ledger_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    this.showToast('Exported transaction audit ledger to CSV', 'success');
  }

  exportFullAccountingJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `Dexpense_CFO_Backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchor.click();
    this.showToast('Exported full accounting data package to JSON backup', 'success');
  }

  handleDataImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.accounts && imported.transactions) {
          this.state = imported;
          this.saveState();
          this.renderAll();
          this.showToast('Restored accounting backup successfully!', 'success');
        } else {
          this.showToast('Invalid backup file format.', 'danger');
        }
      } catch (err) {
        this.showToast('Failed to parse backup JSON file.', 'danger');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'danger' ? 'fa-circle-exclamation' : 'fa-triangle-exclamation');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${this.escapeHtml(message)}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.cfoApp = new CFOFinanceEngine();
});

