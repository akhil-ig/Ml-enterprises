/** BASE_URL ke saath path join karta hai taaki repo subpath aur custom domain dono par kaam kare. */
export function url(path: string): string {
  return `${import.meta.env.BASE_URL}/${path}`.replace(/\/{2,}/g, '/');
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

export function whatsappHref(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
