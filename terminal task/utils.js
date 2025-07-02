function validateDate(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) {
    console.log("❌ Invalid date format. Use YYYY-MM-DD.");
    return false;
  }
  return true;
}

function validateTitle(title) {
  if (!title || title.trim() === "") {
    console.log("❌ Task title cannot be empty.");
    return false;
  }
  return true;
}

module.exports = { validateDate, validateTitle };
