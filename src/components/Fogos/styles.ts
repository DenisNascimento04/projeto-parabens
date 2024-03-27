import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    @keyframes firework {
        0% { 
            transform: translate(var(--x), var(--initialY)); 
            width: var(--initialSize); 
            opacity: 1; 
        }
        50% { 
            width: 1vmin; 
            opacity: 1; 
        }
        100% { 
            width: var(--finalSize); 
            opacity: 0; 
        }
    }

    /* @keyframes fireworkPseudo {
    0% { transform: translate(-50%, -50%); width: var(--initialSize); opacity: 1; }
    50% { width: 0.5vmin; opacity: 1; }
    100% { width: var(--finalSize); opacity: 0; }
    }
    */
    .firework,
    .firework::before,
    .firework::after
    {
        --initialSize: 3vmin;
        --finalSize: 70vmin;
        --particleSize: 1.5vmin;
        --color1: yellow;
        --color2: khaki;
        --color3: white;
        --color4: lime;
        --color5: gold;
        --color6: mediumseagreen;
        --y: -30vmin;
        --x: -50%;
        --initialY: 40vmin;
        content: "";
        animation: firework 2s infinite;
        position: absolute;
        top: 30%;
        left: 30%;
        transform: translate(-50%, var(--y));
        width: var(--initialSize);
        aspect-ratio: 1;
        background: 
            /*
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 0%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 0%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 100%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 100%,
            */
            
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 50% 0%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 50%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 50% 100%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 0% 50%,
            
            /* bottom right */
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 80% 90%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 95% 90%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 90% 70%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 60%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 55% 80%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 70% 77%,
            
            /* bottom left */
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 22% 90%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 45% 90%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 70%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 10% 60%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 31% 80%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 28% 77%,
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 13% 72%,
            
            /* top left */
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 80% 10%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 95% 14%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 90% 23%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 100% 43%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 85% 27%,
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 77% 37%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 60% 7%,
            
            /* top right */
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 22% 14%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 45% 20%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 34%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 10% 29%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 31% 37%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 28% 7%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 13% 42%
            ;
        background-size: var(--initialSize) var(--initialSize);
        background-repeat: no-repeat;
    }

    .firework::before {
        --x: -50%;
        --y: -50%;
        --initialY: -50%;
        /*   transform: translate(-20vmin, -2vmin) rotate(40deg) scale(1.3) rotateY(40deg); */
        transform: translate(-50%, -50%) rotate(40deg) scale(1.3) rotateY(40deg);
        /*   animation: fireworkPseudo 2s infinite; */
    }

    .firework::after {
        --x: -50%;
        --y: -50%;
        --initialY: -50%;
        /*   transform: translate(44vmin, -50%) rotate(170deg) scale(1.15) rotateY(-30deg); */
        transform: translate(-50%, -50%) rotate(170deg) scale(1.15) rotateY(-30deg);
        /*   animation: fireworkPseudo 2s infinite; */
    }

    .firework:nth-child(2) {
        --x: 30vmin;
    }

    .firework:nth-child(2),
    .firework:nth-child(2)::before,
    .firework:nth-child(2)::after {
        --color1: pink;
        --color2: violet;
        --color3: fuchsia;
        --color4: orchid;
        --color5: plum;
        --color6: lavender;  
        --finalSize: 40vmin;
        left: 10%;
        top: 70%;
        animation-delay: 0.25s;
        /* background-color: blue; */
    }

    .firework:nth-child(3) {
        --x: -30vmin;
        --y: -50vmin;
    }

    .firework:nth-child(3),
    .firework:nth-child(3)::before,
    .firework:nth-child(3)::after {
        --color1: cyan;
        --color2: lightcyan;
        --color3: lightblue;
        --color4: PaleTurquoise;
        --color5: SkyBlue;
        --color6: lavender;
        --finalSize: 60vmin;
        left: 75%;
        top: 50%;
        animation-delay: 0.4s;
        /* background-color: red; */
    }
    .firework:nth-child(4),
    .firework:nth-child(4)::before,
    .firework:nth-child(4)::after {
        --color1: #F70025;
        --color2: #380008;
        --color3: #780012;
        --color4: #B8001C;
        --color5: #F70025;
        --color6: red;
        --finalSize: 30vmin;
        left: 60%;
        top: 95%;
        animation-delay: 0.5s;
        /* background-color: green; */
    }
    .firework:nth-child(5),
    .firework:nth-child(5)::before,
    .firework:nth-child(5)::after {
        --color1: #A574D9;
        --color2: #6B4B8D;
        --color3: #C7B5D9;
        --color4: #44305A;
        --color5: #9285A0;
        --color6: lavender;
        --finalSize: 50vmin;
        left: 90%;
        top: 80%;
        animation-delay: 0.8s;
        /* background-color: green; */
    }
`;
