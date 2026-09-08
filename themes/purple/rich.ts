export function rich(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<span class="accent">$1</span>')
}
