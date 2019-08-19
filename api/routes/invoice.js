var express = require("express");
var router = express.Router();
const invoiceModel = require("../models/invoice");

router.get("/", async (req, res, next) => {
  const response = await invoiceModel.getUnapprovedInvoices();
  res.json(response).status(200);
});

router.post("/", async (req, res, next) => {
  const invoice_number = req.body.invoice_number,
    total = req.body.total,
    currency = req.body.currency,
    invoice_date = req.body.invoice_date,
    due_date = req.body.due_date,
    vendor_name = req.body.vendor_name,
    remittance_address = req.body.remittance_address;
  const response = await invoiceModel.postInvoice(
    invoice_number,
    total,
    currency,
    invoice_date,
    due_date,
    vendor_name,
    remittance_address
  );
  res.statusMessage = "invoice submitted succesfully";
  res.status(200).end();
});

router.patch("/:invoice_number", async (req, res, next) => {
  const invoice_number = req.params.invoice_number;
  const response = await invoiceModel.acceptInvoice(invoice_number);
  res.send(200);
});

module.exports = router;
