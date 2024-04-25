document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.getElementById('circle-container');
    const image = document.createElement('img');
    image.src = 'img/chair.png'; // Replace with the path to your actual image
    image.alt = 'Descriptive text about the image'; // Accessibility first
    circleContainer.appendChild(image);

    const svgs = [
          // Example icon
        '<svg class="icon-svg" viewBox="0 0 65 75"><path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork" d="M16.559,1.928c-7.193,0-13.024,6.8-13.024,15.195,0,7.185,4.275,13.205,10.02,14.788L11.4,67.057a4.043,4.043,0,0,0,4.076,4.333h2.171a4.043,4.043,0,0,0,4.076-4.333L19.564,31.911c5.745-1.583,10.02-7.6,10.02-14.788C29.583,8.731,23.752,1.928,16.559,1.928Zm43.776,0L56.717,23.635H54L52.195,1.928H50.386L48.577,23.635H45.864L42.246,1.928H40.437V30.147a2.171,2.171,0,0,0,2.171,2.171h5.653l-2.131,34.74A4.043,4.043,0,0,0,50.2,71.391h2.171a4.043,4.043,0,0,0,4.076-4.333L54.32,32.318h5.653a2.171,2.171,0,0,0,2.171-2.171V1.928Z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 64.331 50.546"><path id="Path_272" data-name="Path 272" d="M63.45,14.625h-.057a3.138,3.138,0,0,0-3.13,3.13.319.319,0,0,1-.316.316H8.884a.319.319,0,0,1-.316-.316,3.138,3.138,0,0,0-3.13-3.13H5.38a3.138,3.138,0,0,0-3.13,3.13v25.9a3.138,3.138,0,0,0,3.13,3.13h.057a3.138,3.138,0,0,0,3.13-3.13v-.89a.576.576,0,0,1,.574-.574H59.688a.576.576,0,0,1,.574.574v.89a3.138,3.138,0,0,0,3.13,3.13h.057a3.138,3.138,0,0,0,3.13-3.13v-25.9A3.138,3.138,0,0,0,63.45,14.625Z" transform="translate(-2.25 3.755)" fill="#e7e7e7"/><path id="Path_273" data-name="Path 273" d="M6.493,24.867H9.723a.576.576,0,0,0,.574-.574V22.426a2.3,2.3,0,0,1,2.3-2.3h14a2.3,2.3,0,0,1,2.3,2.3v1.867a.576.576,0,0,0,.574.574h3.446a.576.576,0,0,0,.574-.574V22.426a2.3,2.3,0,0,1,2.3-2.3h14a2.3,2.3,0,0,1,2.3,2.3v1.867a.576.576,0,0,0,.574.574h3.231a1.152,1.152,0,0,0,1.149-1.149V10.22a4.609,4.609,0,0,0-4.6-4.6H9.939a4.609,4.609,0,0,0-4.6,4.6v13.5A1.152,1.152,0,0,0,6.493,24.867Z" transform="translate(0.974 -5.625)" fill="#e7e7e7"/></svg>',
        
        '<svg class="icon-svg" viewBox="0 0 60 70"><path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M30.769,3.375C18.13,3.375,7.875,12.9,7.875,24.632c0,16.535,22.894,44.883,22.894,44.883S53.664,41.167,53.664,24.632C53.664,12.9,43.409,3.375,30.769,3.375Zm0,30.351a7.457,7.457,0,1,1,7.457-7.457A7.457,7.457,0,0,1,30.769,33.726Z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 51.994 59.422"><path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,53.851a5.572,5.572,0,0,0,5.571,5.571H46.424a5.572,5.572,0,0,0,5.571-5.571V22.283H0ZM37.139,31.1a1.4,1.4,0,0,1,1.393-1.393h4.642A1.4,1.4,0,0,1,44.567,31.1v4.642a1.4,1.4,0,0,1-1.393,1.393H38.532a1.4,1.4,0,0,1-1.393-1.393Zm0,14.856a1.4,1.4,0,0,1,1.393-1.393h4.642a1.4,1.4,0,0,1,1.393,1.393V50.6a1.4,1.4,0,0,1-1.393,1.393H38.532A1.4,1.4,0,0,1,37.139,50.6ZM22.283,31.1a1.4,1.4,0,0,1,1.393-1.393h4.642A1.4,1.4,0,0,1,29.711,31.1v4.642a1.4,1.4,0,0,1-1.393,1.393H23.676a1.4,1.4,0,0,1-1.393-1.393Zm0,14.856a1.4,1.4,0,0,1,1.393-1.393h4.642a1.4,1.4,0,0,1,1.393,1.393V50.6a1.4,1.4,0,0,1-1.393,1.393H23.676A1.4,1.4,0,0,1,22.283,50.6ZM7.428,31.1A1.4,1.4,0,0,1,8.82,29.711h4.642A1.4,1.4,0,0,1,14.856,31.1v4.642a1.4,1.4,0,0,1-1.393,1.393H8.82a1.4,1.4,0,0,1-1.393-1.393Zm0,14.856A1.4,1.4,0,0,1,8.82,44.567h4.642a1.4,1.4,0,0,1,1.393,1.393V50.6a1.4,1.4,0,0,1-1.393,1.393H8.82A1.4,1.4,0,0,1,7.428,50.6Zm39-38.532H40.853V1.857A1.862,1.862,0,0,0,39,0H35.282a1.862,1.862,0,0,0-1.857,1.857V7.428H18.569V1.857A1.862,1.862,0,0,0,16.713,0H13a1.862,1.862,0,0,0-1.857,1.857V7.428H5.571A5.572,5.572,0,0,0,0,13v5.571H51.994V13A5.572,5.572,0,0,0,46.424,7.428Z"/></svg>',
        '<svg class="icon-svg" viewBox="0 0 54.127 61.859"><path id="Icon_awesome-shopping-bag" data-name="Icon awesome-shopping-bag" d="M42.528,19.331V15.465a15.465,15.465,0,0,0-30.93,0v3.866H0V52.194A9.666,9.666,0,0,0,9.666,61.86h34.8a9.666,9.666,0,0,0,9.666-9.666V19.331Zm-23.2-3.866a7.732,7.732,0,0,1,15.465,0v3.866H19.331Zm19.331,14.5a2.9,2.9,0,1,1,2.9-2.9A2.9,2.9,0,0,1,38.662,29.963Zm-23.2,0a2.9,2.9,0,1,1,2.9-2.9A2.9,2.9,0,0,1,15.465,29.963Z"/></svg>'
    ];

    const texts = ["Dine", "Play", "Stay", "Maps", "Events", "Shop"];

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
        if (i === 1) { // Conditionally apply rotation for the second icon
            const svgElement = whiteCircle.querySelector('.icon-svg');
            svgElement.classList.add('rotated-icon');
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = texts[i];
        textSpan.classList.add('circle-text');
        whiteCircle.appendChild(textSpan);
    }

    adjustTextSize(circleContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    const svgs = document.querySelectorAll('.icon-svg');
    svgs.forEach(svg => {
        const bbox = svg.getBBox();
        const aspectRatio = bbox.width / bbox.height;

        if (aspectRatio < 1) { // More tall than wide
            svg.style.width = `${aspectRatio * 100}%`;
        }
    });
});

function adjustTextSize(container) {
    const spans = container.querySelectorAll('.circle-text');
    let maxSize = 0;
    spans.forEach(span => {
        if (span.offsetWidth > maxSize) {
            maxSize = span.offsetWidth;
        }
    });

    const circleWidth = 115; // circle diameter
    const targetWidth = circleWidth * 0.95; // 95% of circle width
    if (maxSize > 0 && maxSize > targetWidth) {
        const scaleFactor = targetWidth / maxSize;
        const currentFontSize = parseFloat(window.getComputedStyle(spans[0]).fontSize);
        const newFontSize = currentFontSize * scaleFactor;
        spans.forEach(span => {
            span.style.fontSize = `${newFontSize}px`;
        });
    }
}
