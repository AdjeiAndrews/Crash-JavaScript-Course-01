const output = document.getElementById("css-code");
const blob = document.querySelector(".blob");
const sliders = document.querySelectorAll("input[type='range']");
const inputs = document.querySelectorAll("input[type='number']");

sliders.forEach((slider) => slider.addEventListener("input", createBlob));
inputs.forEach((input) => input.addEventListener("input", createBlob));

function createBlob() {
    const [topLeft, topRight, bottomLeft, bottomRight] = Array.from(sliders, (slider) => Number(slider.value));
    const [height, width] = Array.from(inputs, (input) => Math.max(1, Number(input.value) || 1));

    const borderRadius = `${topLeft}% ${100 - topLeft}% ${100 - bottomLeft}% ${bottomLeft}% / ${bottomRight}% ${topRight}% ${100 - topRight}% ${100 - bottomRight}%`;
    const blobStyle = `border-radius: ${borderRadius}; height: ${height}px; width: ${width}px;`;

    blob.style.cssText = blobStyle;
    output.value = blobStyle;
}

createBlob();

document.getElementById("copy").addEventListener("click", async () => {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(output.value);
        } else {
            output.select();
            if (!document.execCommand("copy")) throw new Error("Copy command failed");
            output.setSelectionRange(0, 0);
        }
        alert("CSS copied to clipboard.");
    } catch (error) {
        console.error("Could not copy CSS:", error);
    }
});
