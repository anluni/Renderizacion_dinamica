import CardPizza from './CardPizza'
import Header from './Header';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center pt-4 pb-4">
            <div className="mx-3">
                  <CardPizza
                      nombre="Napolitana"
                      precio={5950}
                      ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                  />
            </div>
            <div className="mx-3">
                  <CardPizza
                      nombre="Española"
                      precio={7250}
                      ingredientes={["mozzarella", "tomates", "jamón", "choricillo"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                  />
            </div>
            <div className="mx-3">
                  <CardPizza
                      nombre="Saláme"
                      precio={5990}
                      ingredientes={["mozzarella", "tomates", "salame", "orégano"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                  />
            </div>
            <div className="mx-3">
                  <CardPizza
                      nombre="Cuatro Estaciones"
                      precio={9590}
                      ingredientes={["mozzarella", "salame", "aceitunas", "champiñones"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be"
                  />
            </div>
            <div className="mx-3">
                  <CardPizza
                      nombre="Bacon"
                      precio={6450}
                      ingredientes={["mozzarella", "tomates cherry", "bacon", "orégano"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2"
                  />
            </div>
            <div className="mx-3">
                  <CardPizza
                      nombre="Pollo Picante"
                      precio={8500}
                      ingredientes={["mozzarella", "pimientos", "pollo grillé", "orégano"]}
                      imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be"
                  />
            </div>
        </div>
    </div>
  )
}

export default Home;