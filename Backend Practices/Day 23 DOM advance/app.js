function shake() {
    // Get the html element to shake the entire page
    const html = document.documentElement;
    
    // Store original position to restore later
    const originalPosition = html.style.position;
    const originalTop = html.style.top;
    const originalLeft = document.body.style.left;
    
    document.querySelector("body").style.backgroundColor = "red";


    // Set relative positioning if not already set
    if (getComputedStyle(html).position === 'static') {
        html.style.position = 'relative';
    }
    
    // Shake parameters
    const intensity = 20; // Maximum shake distance in pixels
    const duration = 90 // Shake duration in milliseconds
    const interval = 20; // Time between each shake movement in milliseconds
    const shakes = duration / interval; // Total number of shakes
    
    let currentShake = 0;
    
    // Create the shake animation
    const shakeInterval = setInterval(() => {

        // Random offsets for each shake
        const randomX = (Math.random() - 0.5) * 2 * intensity;
        const randomY = (Math.random() - 0.5) * 2 * intensity;
        
        // Apply the shake
        html.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        currentShake++;
        
        // Stop shaking after duration
        if (currentShake >= shakes) {
            clearInterval(shakeInterval);
            
            // Reset to original position with smooth transition
            html.style.transition = 'transform 0.3s ease';
            html.style.transform = 'translate(0, 0)';
            
            // Clean up after transition
            setTimeout(() => {
                html.style.transition = '';
                html.style.position = originalPosition;
                html.style.top = originalTop;
                html.style.left = originalLeft;
            }, 300);
        }

        document.querySelector("body").style.backgroundColor = "";
    }, interval);
}



console.log(document.querySelector("button").getAttribute("onmouseenter"));

console.log(document.querySelector("button").nextElementSibling.getAttribute("onclick"));





let fan = document.querySelector(".fanToggle");

function fanToggle(){
    if(fan.classList.contains("off")){
        fan.classList.remove("off");
        alert("Turning on the Fan");
        fan.classList.add("on");
    }else{
        fan.classList.remove("on");
        alert("Turning off the Fan");
        fan.style.backgroundColor = "";
        fan.classList.add("off");
    }
}

fan.onclick = fanToggle;



let light = document.querySelector(".lightToggle");

function lightToggle(){
    if(light.classList.contains("lightOff")){
        light.classList.remove("lightOff");
        alert("Turning on the light");
        light.innerText = "🔦💡";
        light.classList.add("lightOn");
    }else{
        light.classList.remove("lightOn");
        alert("Turning off the light");
        light.innerText = "🔦";
        light.style.backgroundColor = "";
        light.classList.add("lightOff");
    }
}

light.onclick = lightToggle;