import { useDateFormat } from "@vueuse/core";

export function formatDate(date: number | string | Date, format = "YYYY-MM-DD") {
  // 检查是否为字符串
  if (typeof date === "number") {
    const dateTime = new Date(date * 1000);
    return formatDate(dateTime, format);
  }

  const formatted = useDateFormat(date, format);
  return formatted.value;
}

export function formatDateTime(date: number | string | Date, format = "YYYY-MM-DD HH:mm:ss") {
  return formatDate(date, format);
}
