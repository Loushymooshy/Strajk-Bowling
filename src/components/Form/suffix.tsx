

// This function will initialize the suffix element and update its position based on the width of the input field.
export default function initializeSuffix(inputId: string, suffixId: string) {
    const inputElement = document.getElementById(inputId) as HTMLInputElement | null;
    const suffixElement = document.getElementById(suffixId) as HTMLSpanElement | null;
  
    if (inputElement && suffixElement) {
      inputElement.addEventListener('input', updateSuffix);
      updateSuffix();
    }
  
    function updateSuffix(): void { //This function will update the position of the suffix element based on the width of the input field.
      if (inputElement && suffixElement) {
        const width = getTextWidth(inputElement.value, '1.2rem Work Sans');
        suffixElement.style.left = `${width}px`;
      }
    }
  
    function getTextWidth(text: string, font: string): number { //This function will calculate the width of the text based on the font size.
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