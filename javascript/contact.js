const scriptURL = 'https://script.google.com/macros/s/AKfycbyrrfeW_tU65aDA1NVdQ0CjVcg0p4XpCvYqGe3PgoXupLnL3Uk/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(response => console.log('Success!', response)).catch(error => console.error('Error!', error.message))
  swal({
    icon: "success",
    text: "Form Submitted Successfully!"
  });
  document.querySelector(".inkit-form").reset();
});
