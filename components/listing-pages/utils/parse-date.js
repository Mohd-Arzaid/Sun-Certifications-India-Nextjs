// Ministry updates ko newest pehle dikhane ke liye — "04 June 2026" jaisi strings parse karta hai
export const parseDate = (dateString) => {
  try {
    const cleanDate = dateString.trim();
    const date = new Date(cleanDate);

    if (isNaN(date.getTime())) {
      const parts = cleanDate.split(" ");
      if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        const reformattedDate = `${month} ${day}, ${year}`;
        return new Date(reformattedDate);
      }
    }

    return date;
  } catch {
    return new Date(0);
  }
};

export const ministryDateSort = (a, b) =>
  parseDate(b.date).getTime() - parseDate(a.date).getTime();
