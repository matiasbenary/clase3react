import Card from './Componets/Card/Card.jsx';
import Title from './Componets/Title';

const App = () => {
  const productos = [
    {
      title: 'TV 40 pulgadas',
      price: 300,
      isOffer: false,
      btnText: 'Comprar',
    },
    {
      title: 'Celular',
      price: 200,
      isOffer: true,
      btnText: 'reservar',
    },
    {
      title: 'Radio',
      price: 150,
      isOffer: false,
      btnText: 'Comprar',
    },
    {
      title: 'Notebook',
      price: 500,
      isOffer: true,
      btnText: 'Ir a retirar',
    },
  ];

  console.log(
    productos.map((producto) => {
      return (
        <Card
          title={producto.title}
          isOffer={producto.isOffer}
          price={producto.price}
          btnText={producto.btnText}
        ></Card>
      );
    })
  );
  return (
    <>
      <Title></Title>
      {productos.map((producto) => {
        return (
          <Card
            title={producto.title}
            isOffer={producto.isOffer}
            price={producto.price}
            btnText={producto.btnText}
          ></Card>
        );
      })}
      <Card
        title={productos[0].title}
        isOffer={productos[0].isOffer}
        price={productos[0].price}
        btnText={productos[0].btnText}
      ></Card>
      <Card
        title={productos[1].title}
        isOffer={productos[1].isOffer}
        price={productos[1].price}
        btnText={productos[1].btnText}
      ></Card>
    </>
  );
};

export default App;
