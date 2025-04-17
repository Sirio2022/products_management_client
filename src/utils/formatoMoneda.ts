
export function formatoMoneda(cantidad: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cantidad);
}