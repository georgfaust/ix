import { r as registerInstance, h, H as Host, g as getElement } from './index-f7e13ba2.js';
import { G as Grid } from './ag-grid-community.auto.esm-db7de02b.js';

const IxAgGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.initializeGrid();
  }
  initializeGrid() {
    if (!this.gridOptions) {
      return;
    }
    if (!this.grid) {
      const gridDiv = this.host.querySelector('div.ag-theme-ix');
      this.grid = new Grid(gridDiv, this.gridOptions);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.grid) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null, h("div", { style: {
        height: '100%',
        width: '100%',
      }, class: "ag-theme-alpine-dark ag-theme-ix" })));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "gridOptions": ["initializeGrid"]
  }; }
};

const myComponentCss = ".sc-my-component-h{display:block}";

const columnDefs = [
  { field: 'make', resizable: true, checkboxSelection: true },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true },
];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
  { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
  { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
];
const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      rowSelection: 'multiple',
      suppressCellFocus: true,
    };
  }
  render() {
    return (h(Host, { style: {
        height: '100%',
        width: '100%',
      } }, h("ix-ag-grid", { gridOptions: this.gridOptions })));
  }
};
MyComponent.style = myComponentCss;

export { IxAgGrid as ix_ag_grid, MyComponent as my_component };
