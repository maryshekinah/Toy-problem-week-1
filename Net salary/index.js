<!DOCTYPE html>
<html>
<head>
  <title>Net Salary Calculator</title>
</head>
<body>
  <h1>Net Salary Calculator</h1>
  <form id="salaryCalculatorForm">
    <label for="basicSalary">Basic Salary:</label>
    <input type="number" id="basicSalary" name="basicSalary" required><br><br>

    <label for="benefits">Benefits:</label>
    <input type="number" id="benefits" name="benefits" required><br><br>

    <button type="button" onclick="calculateNetSalary()">Calculate Net Sala
