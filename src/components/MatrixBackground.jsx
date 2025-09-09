import { useEffect } from "react";

export default function MatrixBackground() {
  useEffect(() => {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix" className="fixed inset-0 -z-10"></canvas>;
}
