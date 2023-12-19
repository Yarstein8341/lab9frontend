class CustomTable {
    constructor() {
        this.table = document.getElementById('myTable');
        this.rowCount = this.table.rows.length;
        this.colCount = this.table.rows[0] ? this.table.rows[0].cells.length : 0;
    }

    addRow() {
        const newRow = this.table.insertRow();
        this.rowCount++;

        for (let i = 0; i < this.colCount; i++) {
            const newCell = newRow.insertCell();
            newCell.innerHTML = `Row ${this.rowCount}, Col ${i + 1}`;
        }
    }

    addColumn() {
        for (let i = 0; i < this.rowCount; i++) {
            const newCell = this.table.rows[i].insertCell();
            this.colCount++;
            newCell.innerHTML = `Row ${i + 1}, Col ${this.colCount}`;
        }
    }
}

const myTable = new CustomTable();