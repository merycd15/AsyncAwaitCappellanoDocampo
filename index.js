const cocinarPizza = async(minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('\nBeep! Pizza lista!')
    }, minutos * 1000));
}

const lavarseLasManos = async(minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('\nManos Lavadas!')
    }, minutos * 1000));
}

const amasarPizza = async(minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('\nPizza Amasada!')
    }, minutos * 1000));
}

const cocinarMasa = async(minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('\nMasa Cocinada!')
    }, minutos * 1000));
}

const agregarIngredientes = async(minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('\nIngredientes Agregados!')
    }, minutos * 1000));
}

const pizzaListaComer = async () =>{
    console.log('Prepararse para cocinar...');
    console.log('A lavarse las manos...',await lavarseLasManos(5));
    console.log('Vamos a amasar...',await amasarPizza(10));
    console.log('Vamos a cocinar la masa...',await cocinarMasa(10));
    console.log('Ahora agregamos los ingredientes...',await agregarIngredientes(5));
    console.log('Calentamos la pizza con los ingredientes...',await cocinarPizza(5));
}

pizzaListaComer();