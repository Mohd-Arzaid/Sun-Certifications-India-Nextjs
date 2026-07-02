export const dateTextToDate = (dateString) => {
  try {
    const cleanDate = dateString.trim();
    const date = new Date(cleanDate);

    if (!Number.isNaN(date.getTime())) {
      return date;
    }

    const parts = cleanDate.split(" ");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return new Date(`${month} ${day}, ${year}`);
    }

    return new Date(0);
  } catch {
    return new Date(0);
  }
};

export const normalizeDateText = (dateString) => {
  const date = dateTextToDate(dateString);

  if (Number.isNaN(date.getTime()) || date.getTime() === 0) {
    return dateString.trim();
  }

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const compareByNewestDate = (a, b) => {
  const diff = dateTextToDate(b.date).getTime() - dateTextToDate(a.date).getTime();
  return diff !== 0 ? diff : a.id - b.id;
};
