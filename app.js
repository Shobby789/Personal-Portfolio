function SendEmail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const service_id = "service_qg1o6qj";
  const template_id = "template_ugiqt9i";

  emailjs
    .send(service_id, template_id, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

