document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.getElementById('circle-container');
    const image = document.createElement('img');
    image.src = 'img/chair.png'; // Replace with the path to your actual image
    image.alt = 'Descriptive text about the image'; // Accessibility first
    circleContainer.appendChild(image);

    const svgs = [
        '<svg class="icon-svg" viewBox="0 0 64.331 50.546"><path id="Path_272" data-name="Path 272" d="M63.45,14.625h-.057a3.138,3.138,0,0,0-3.13,3.13.319.319,0,0,1-.316.316H8.884a.319.319,0,0,1-.316-.316,3.138,3.138,0,0,0-3.13-3.13H5.38a3.138,3.138,0,0,0-3.13,3.13v25.9a3.138,3.138,0,0,0,3.13,3.13h.057a3.138,3.138,0,0,0,3.13-3.13v-.89a.576.576,0,0,1,.574-.574H59.688a.576.576,0,0,1,.574.574v.89a3.138,3.138,0,0,0,3.13,3.13h.057a3.138,3.138,0,0,0,3.13-3.13v-25.9A3.138,3.138,0,0,0,63.45,14.625Z" transform="translate(-2.25 3.755)" fill="#e7e7e7"/><path id="Path_273" data-name="Path 273" d="M6.493,24.867H9.723a.576.576,0,0,0,.574-.574V22.426a2.3,2.3,0,0,1,2.3-2.3h14a2.3,2.3,0,0,1,2.3,2.3v1.867a.576.576,0,0,0,.574.574h3.446a.576.576,0,0,0,.574-.574V22.426a2.3,2.3,0,0,1,2.3-2.3h14a2.3,2.3,0,0,1,2.3,2.3v1.867a.576.576,0,0,0,.574.574h3.231a1.152,1.152,0,0,0,1.149-1.149V10.22a4.609,4.609,0,0,0-4.6-4.6H9.939a4.609,4.609,0,0,0-4.6,4.6v13.5A1.152,1.152,0,0,0,6.493,24.867Z" transform="translate(0.974 -5.625)" fill="#e7e7e7"/></svg>',  // Example icon
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>'
    ];

    const texts = ["Play", "Dine", "Shop", "Events", "Maps", "Stay"];

    // Function to position the white circles
    function positionCircle(element, angle, distance) {
        const radian = (angle * Math.PI) / 180;
        const offsetLeft = distance * Math.cos(radian);
        const offsetTop = distance * Math.sin(radian);
        element.style.left = `calc(50% + ${offsetLeft}px - 60px)`; // 100px is radius of the circle
        element.style.top = `calc(50% - ${offsetTop}px - 60px)`; // Invert the top value to account for the y-axis in CSS being opposite
    }

    // Create and position the white circles
    const distanceFromCenter = 125; // Distance from center to the white circle's center
    for (let i = 0; i < 6; i++) {
        const angle = (i * 60); // 360 degrees divided by 6 circles
        const whiteCircle = document.createElement('div');
        whiteCircle.classList.add('white-circle');
        positionCircle(whiteCircle, angle, distanceFromCenter);
        circleContainer.appendChild(whiteCircle);

        whiteCircle.innerHTML = svgs[i];

        const textSpan = document.createElement('span');
        textSpan.textContent = texts[i];
        textSpan.classList.add('circle-text');
        whiteCircle.appendChild(textSpan);
    }
});
