export default function initializeSuffix(inputId: string, suffixId: string) {
    const inputElement = document.getElementById(inputId) as HTMLInputElement | null;
    const suffixElement = document.getElementById(suffixId) as HTMLSpanElement | null;
  
    if (inputElement && suffixElement) {
      inputElement.addEventListener('input', updateSuffix);
      updateSuffix();
    }
  
    function updateSuffix(): void {
      if (inputElement && suffixElement) {
        const width = getTextWidth(inputElement.value, '1.2rem Work Sans');
        suffixElement.style.left = `${width}px`;
      }
    }
  
    function getTextWidth(text: string, font: string): number {
      const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
      const context = canvas.getContext("2d");
      if (context) {
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
      }
      return 0;
    }
  
    getTextWidth.canvas = document.createElement("canvas");
  }