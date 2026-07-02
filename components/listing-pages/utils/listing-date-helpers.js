const INVALID_DATE = new Date(0);

export const dateTextToDate = (dateString) => {
  try {
    const trimmedDateText = dateString.trim();
    const parsedDate = new Date(trimmedDateText);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate;
    }

    const dateParts = trimmedDateText.split(" ");
    if (dateParts.length === 3) {
      const [dayPart, monthPart, yearPart] = dateParts;
      return new Date(`${monthPart} ${dayPart}, ${yearPart}`);
    }

    return INVALID_DATE;
  } catch {
    return INVALID_DATE;
  }
};

export const normalizeDateText = (dateString) => {
  const parsedDate = dateTextToDate(dateString);

  if (Number.isNaN(parsedDate.getTime()) || parsedDate.getTime() === 0) {
    return dateString.trim();
  }

  const dayNumber = parsedDate.getDate();
  const monthName = parsedDate.toLocaleString("en-US", { month: "long" });
  const yearNumber = parsedDate.getFullYear();

  return `${dayNumber} ${monthName} ${yearNumber}`;
};

export const compareListingItemsNewestFirst = (firstItem, secondItem) => {
  const firstItemDate = dateTextToDate(firstItem.date);
  const secondItemDate = dateTextToDate(secondItem.date);

  const secondItemIsNewer =
    secondItemDate.getTime() - firstItemDate.getTime();

  if (secondItemIsNewer !== 0) {
    return secondItemIsNewer;
  }

  const firstItemId = firstItem.id;
  const secondItemId = secondItem.id;
  return firstItemId - secondItemId;
};
