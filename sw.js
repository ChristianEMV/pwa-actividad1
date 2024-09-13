console.log('SW Hola mundo !!');

self.addEventListener('install',(event)=>{
    //Aqui se almacenan los archivos en cache
    console.log('SW: Instalado');
});

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);
    console.log('Nuevo cambio');

    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: white;
                background-color: #f3f3f3;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }

})