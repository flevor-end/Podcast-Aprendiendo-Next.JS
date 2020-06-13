export default class extends React.Component {
    render() {
      return <div>
        <img src="/static/platzi-logo.png" alt="Platzi" />
        <h1>Creado por @FabPedbor</h1>
        <p>Bienvenidos al curso de Next.JS</p>
  
  
        <style jsx>{`
        h1 {
          color: GreenYellow;
        }
        :global(div p) {
          color: white;
        }
        img {
          max-width: 40%;
          display: block;
          margin: 0 auto;
          padding: 50px 0;
          
        }
        `}</style>
        <style jsx global>{`
    body {
      background: hsla(230,11%,19%,1);
      margin: 0 auto;
      width: 100%
      display: block;
      text-align: center;

    }
    `}</style>

      </div>
    }
  }