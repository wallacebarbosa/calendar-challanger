

export const formatTwoDigits = (num: number | undefined) => {

    if (num === undefined) {
      return '';
    }

    return String(num).padStart(2, '0');
  };


  export const formatDateFromISO = (isoDateString: string | undefined): string => {
    if (isoDateString === undefined) {
      return '';
    }
    const date = new Date(isoDateString);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    return `${day}/${month}/${year}`;
  };