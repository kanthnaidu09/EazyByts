// Contact Form Submission
form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
    };
  
    try {
      const response = await fetch("https://your-backend-api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Your message has been sent successfully!");
        form.reset();
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  });
  