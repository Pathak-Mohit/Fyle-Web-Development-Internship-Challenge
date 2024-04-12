
document.addEventListener('DOMContentLoaded', function () {
  const taxForm = document.getElementById('taxForm');
  taxForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const grossIncome = parseFloat(document.getElementById('grossIncome').value);
      const extraIncome = parseFloat(document.getElementById('extraIncome').value);
      const deductions = parseFloat(document.getElementById('deductions').value);
      const ageGroup = document.getElementById('ageGroup').value;
      let taxRate;

      // Calculate the tax based on age group and income
      if (ageGroup === 'under40') {
          taxRate = 0.30;
      } else if (ageGroup === 'between40and60') {
          taxRate = 0.40;
      } else if (ageGroup === 'over60') {
          taxRate = 0.10;
      }

      const taxableIncome = grossIncome + extraIncome - deductions;
      let tax = 0;
      if (taxableIncome > 800000) {
          tax = (taxableIncome - 800000) * taxRate;
      }

      // Display the result in the modal
      $('#resultModal').find('.modal-body').text(`The calculated tax is ₹${tax.toLocaleString()}`);
      $('#resultModal').modal('show');
  });
});
