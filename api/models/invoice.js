const db = require("./conn.js");

class Invoice {
  static postInvoice(
    invoice_number,
    total,
    currency,
    invoice_date,
    due_date,
    vendor_name,
    remittance_address
  ) {
    try {
      const response = db.one(
        `insert into invoices (invoice_number, total, currency, invoice_date, due_date, vendor_name, remittance_address, status) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          invoice_number,
          total,
          currency,
          invoice_date,
          due_date,
          vendor_name,
          remittance_address,
          "Pending"
        ]
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getUnapprovedInvoices() {
    try {
      const response = await db.any(
        `select * from invoices where status = 'Pending'`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async acceptInvoice(invoice_number) {
    try {
      const response = await db.one(
        `update invoices set status = 'Approved' where invoice_number = $1`,
        invoice_number
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Invoice;
