@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}

.fondo {
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.contenedor {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  margin: 2rem;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
}

h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #ffe6e6;
}

#contador {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.6;
}

@media (max-width: 500px) {
  .contenedor {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  #contador {
    font-size: 1.2rem;
  }
  }
