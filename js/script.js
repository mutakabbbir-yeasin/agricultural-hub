function updateDateTime() {
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        document.getElementById('date-time').textContent = currentDateTime;
      }
      updateDateTime();
      setInterval(updateDateTime, 1000);